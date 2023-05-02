#!/usr/bin/env python3
import os
import pathlib
import sys

import yaml

import argparse
import subprocess


def run_and_read(cmd: list[str], check=True):
    return subprocess.run(cmd, stdout=subprocess.PIPE, check=check).stdout.decode('utf-8')


def run(cmd: list[str], check=True):
    return subprocess.run(cmd, check=check)


def prebuild_tasks():
    os.system("flutter pub get")
    # Check for build_runner package first
    os.system("flutter packages pub run build_runner build --delete-conflicting-outputs")


def build_web(web_path: str, extra_args: str):
    prebuild_tasks()
    os.system(f"flutter build web {extra_args} --base-href '/{web_path}/'")


def prepare_builds_repo(builds_path, project_name, target, prefix):
    os.chdir(builds_path)

    # Sanity....
    os.system('git config push.autoSetupRemote true')

    # Update repo
    run(['git', 'fetch', '--all'])
    run(['git', 'checkout', '-f', 'main'])
    run(['git', 'pull'])

    # Check if our branch exists remote. If so, switch, if not, create.
    # os.system('')
    remote_branches = run_and_read(['git', 'branch', '-r']).split('\n')
    remote_branches = [a.strip() for a in remote_branches if 'HEAD' not in a and a.strip() != '']
    branch_name = f"{prefix}{project_name}_{target}"

    os.system("git clean -fxd")
    os.system("git reset --hard HEAD")
    if f"origin/{branch_name}" in remote_branches:
        print(f"Found remote branch origin/{branch_name}")
        run(['git','switch', branch_name], check=True)
    else:
        print(f"Remote branch origin/{branch_name} doesn't exist, creating...")
        run(['git','checkout', '-B', branch_name], check=True)
    os.system('git pull')

def build_flutter_app(app_path, project_name, extra_args:str):
    os.chdir(app_path)
    build_web(project_name, extra_args)


def copy_to_builds(app_path, builds_path, target):
    os.system(f'rsync -aP --delete {app_path}/build/{target}/ {builds_path} --exclude=/.git --exclude=/.gitignore --exclude=/README.md --exclude=/tools')


def main():
    script_path = os.path.realpath(__file__)
    starting_path = os.getcwd()

    parser = argparse.ArgumentParser(description='Prepare a flutter app build')
    parser.add_argument('--dist', dest='dist', default=False, action='store_true',
                        help="Build for distribution, making it visible in 'get_flutter_build' by default.")
    parser.add_argument('--include-source', dest='include_source', default=False, action='store_true',
                        help="Include source maps in web builds to assist with debugging.")
    parser.add_argument('-p', '--project-path', dest='project_path', type=pathlib.Path, required=True, action='store', nargs=1,
                        help="The path to the root of the Flutter project to build")
    parser.add_argument('-b', '--app-builds-path', dest='app_builds_path', type=pathlib.Path, required=True, action='store',
                        nargs=1, help="The path to the flutter_app_builds repo")

    args = parser.parse_args()
    target = 'web'

    print(f"Current working directory: {starting_path}")
    print(f"Script directory: {script_path}")

    # Check if pubspec exists where we expect:
    app_path = args.project_path[0].absolute()
    pubspec_path = os.path.join(app_path, 'pubspec.yaml')
    if not os.path.isfile(pubspec_path):
        print(f"Pubspec not found in {app_path}. Please check your paths.")
        return 1

    # Check that build repo exists
    builds_path = args.app_builds_path[0].absolute()
    if not os.path.isdir(os.path.join(builds_path, '.git')):
        print(f"Git repo not found at {builds_path}. Please check your paths.")
        return 1

    # Get project name
    pubspec_data = None
    with open(pubspec_path) as pubspec_stream:
        try:
            pubspec_data = yaml.safe_load(pubspec_stream)
        except yaml.YAMLError as exc:
            print(f"Error reading pubspec: {exc}")
            return 1
    # Check for needed data
    assert pubspec_data['name']

    # Build the app
    extra_args = ''
    if args.include_source:
        extra_args += ' --source-maps'
    build_flutter_app(app_path, pubspec_data['name'], extra_args)

    # Prepare build repo
    prepare_builds_repo(builds_path, pubspec_data['name'], target, 'dist_' if args.dist else '')

    # Copy to builds repo
    copy_to_builds(app_path, builds_path, target)

    print("Done")


if __name__ == '__main__':
    res = main()
    sys.exit(res)
