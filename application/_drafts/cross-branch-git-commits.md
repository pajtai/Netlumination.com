---
layout: post
title: Cross branch git commits
tags:
- git
- branching
- github
type: post
---
## Intro

It is useful to know how to commit a group of files in one git branch to an orphan git
branch. This can be done with a series of shell commands. These commands are available as
an [NPM Grunt task](https://npmjs.org/package/grunt-build-gh-pages).

There are many deploy options for your project including Jenkins, Travis, and Capistrano.
For certain situations git can be a much lighter option, or git commits can be combined
with webhooks to kick off a deploy script.

Often merging into `master` is used to kick off a deploy script, but sometimes you might want
 to have a build script that stores builds on an orphan branch. In the case of `github-pages`
 committing to the orphan branch will automatically update your site, and with custom
 options, committing to the orphan branch could kick off a deploy or notification.

## The Code

When I first started using github-pages for my site, I had two clones of my website repo.
One clone had `master` checked out, and the other clone had `gh-pages`. After I built
my site with Jekyll on `master`, I would `cp` the build directory into the `gh-pages`
repo, `cd` into the repo, and commit & push. Since I was running the same commands over and
over again, it seemed time to automate. Additionally, having two cloned copies of the same
repo seemed clumsy.

When you switch branches, changes to untracked and ignored files will be preserved. Committing
from one branch to another without mergin relies on this.

Here are the separate steps to do the cross branch commit:

### 1: Create a build on the master branch and put it into an ignored directory (the build directory)

```bash
grunt build
```

### 2: Get the name of the current branch

This is so we know which branch to return to after finishing our commit.

```bash
# get the name of the current branch
git rev-parse --abbrev-ref HEAD
```

### 3: Checkout the build branch, and make sure it is up to date:

At this point, we will have the build in the build branch. The build directory should be
ignored in the build branch as well in order to avoid conflicts.

```bash
# checkout the build branch and make sure it is up to date
# we rebase, so we don't have to worry about creating a commit message for a merge
git checkout buildBranch && git pull --rebase origin buildBranch
```

### 4: Delete the current files excluding several directories we want to preserve

Now we have our new work in the orphan branch. We achieved this by putting our build into
an ignored or untracked directory and then swithcing branches. The next step is to
delete the existing files and


