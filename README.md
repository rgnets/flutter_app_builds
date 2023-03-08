# Flutter App Builds
A repo to hold builds for flutter apps for generalized testing.

## Structure
Each app should have its own branch, named for itself and the build target, eg `flutter_sandbox_web`. The 'main' should remain empty except for this file and any other documentations or generic helper scripts.

Since this is mainly for testing, ideally you should also include a `git_state` file in the root with the output of `git log  --oneline -n 1` from the repo in which the build was made, along with the output of `git status --porcelain` or `clean` indicating if you built with a dirty git state. This will help expedite "well it works on my system" situations.

An example command that would provide this file:

```git log  --oneline -n 1 > git_state && git status --porcelain >> git_state```
