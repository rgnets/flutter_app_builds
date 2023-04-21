# Flutter App Builds
A repo to hold builds for flutter apps for generalized testing.

## Structure
Each app should have its own branch, named for itself and the build target, eg `flutter_sandbox_web`. The 'main' should remain empty except for this file and any other documentations or generic helper scripts.

Since this is mainly for testing, ideally you should also include a `git_state` file in the root with the output of `git log  --oneline -n 1` from the repo in which the build was made, along with the output of `git status --porcelain` or `clean` indicating if you built with a dirty git state. This will help expedite "well it works on my system" situations.

An example command that would provide this file:

```git log  --oneline -n 1 > git_state && git status --porcelain >> git_state```

## Adding builds
An example for how you would add a web build:

1. Clone the `main` branch of this repo.
2. Create and switch to a new branch (or switch to existing, if you've done this before) with the project name and build type, eg `flutter_sandbox_web`
3. Copy the build artifacts from the flutter `build/web/*` to repo root, clearing anything existing except the README. NOTE: Be sure the Flutter web build was done with the base-href option, eg `flutter build web --base-href "/flutter_sandbox/"`
4. add a git_state file as produced by `git log  --oneline -n 1 > git_state && git status --porcelain >> git_state`.
5. commit.

## Adding builds with script

1. You should be able to run the script from where it is, but if not, try copying the `tools` folder outside the repo and using it.
2. Install the contents of `requirements.txt` by your preferred method. I use Pipenv, and included those files.
3. The script is location agnostic, just give it your app source and builds repo paths: `./flutter_app_build.py -p rxg_lightui/ -b ./flutter_app_builds `
4. When the script completes, review the changes to your builds repo and commit/push manually.

## Consumption

### Git
The latest build on a branch could be cloned with only git with a command like:
```sh
git clone -b rxg_vep_frontend_web --single-branch --depth 1 https://github.com/rgnets/flutter_app_builds.git /space/rxg/console/public/flutter
```

### rXg
If you're on the latest rXg version, the command `get_flutter_build` is available, the `--help` of which is provided here:
```sh
[root@dr130 ~]# get_flutter_build --help
Usage: get_flutter_build <BUILD_PROJECT> [options]
    -r, --repository=REPOSITORY      Git repository to use (Default: https://github.com/rgnets/flutter_app_builds.git)
    -o, --outdir=OUTDIR              Output directory to clone to (Default: /space/rxg/console/public/BUILD_PROJECT)
    -h, --help                       Prints this help

```

In example,
```sh
get_flutter_build flutter_sandbox
```
would shallow clone the latest contents of `flutter_sandbox` to `/space/rxg/console/public/flutter_sandbox`, whereas 
```sh
get_flutter_build rxg_vep_frontend -o/space/rxg/console/public/flutter
```
would explicitly clone the latest contents of `rxg_vep_frontend` to `/space/rxg/console/public/flutter`
