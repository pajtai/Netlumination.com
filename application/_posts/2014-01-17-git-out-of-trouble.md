---
layout: post
title: "git out of trouble"
tags:
- git
- tutorial
type: post
---

Various ways to git out of trouble:

Make sure you create a commit message:

```
git merge --no-ff branch
```

Cleanup the commits you haven't pushed to the origin yet

```
git rebase -i
```

Pull in changes you've fetched from the origin without getting more (or with no internet connectivity)

```
git merge --ff-only origin/[branch]
```

See the changes made on the origin without applying them

```
git fetch --all
```

Test if an old / other version of a file fixes things:

```
git checkout [sha-ref] -- path/to/file
```

It does, commit it:

```
git cherry-pick [sha-ref] -- path/to/file
```

Something horrible happened and there was a force push to the origin, when you try to pull you get conflicts, but you
just want to quickly get to the newly updated HEAD.

```
# back out of the pull with the conflicts
git reset --hard HEAD
# this should already have happend, but let's double check
git fetch --all
# now jump to the newest change
git reset --hard origin/[master]
```

The project has submodules

```
git submodule init
git submodule update
```

Delete all untracked files:

```
git clean -fd
```

Uh, maybe we should see what that's going to delete:

```
git clean -nfd
```

Show all local and remote branches:

```
git branch -a
```

Find the commit that broke something using binary search:

```
git bisect start [bad sha-ref] [good sha-ref]
```

Get the sha-ref of the commit five commits before this one:

```
git rev-parse HEAD~5
```

Push a new branch and set up remote tracking for it (so you can pull, git rebase -i, etc):

```
git push -u origin newBranch
```

Oneline logs

```
git log --oneline
```
