---
layout: post
title: Running shell commands from PhpStorm
tags:
- phpstorm
- shell
status: publish
type: post
---
To run some shell commands through PhpStorm, you must start PhpStorm from the shell.

I generally like running commands from the terminal, but recently I've been using
PhpStorm so much that it doesn't feel convenient to constantly
switch windows. Fortunately PhpStorm is able to run shell commands (`Tools > Run Command`).
Unfortunately if you start PhpStorm in the usual way the user for those commands will
not be the same user you have in the terminal. This means that programs only available
for your login user will not work. In other words, local NPMs are not available, so - for example -
`grunt` will not be found.

The simple solution is to start PhpStorm itself from the terminal. This can be done
conveniently by creating a Command-line launcher (`Tools > Create Command-line Launcher...`).
After this if you start PhpStorm by typing `pstorm`, you'll be able to start up your
`grunt` watch and build tasks using PhpStorm's `Run Command`. Openning PhpStorm from the
command line can also be done less conveniently, on a Mac, by running `open -a PhpStorm`.
