---
layout: post
title: A Completely Random Guide to Emacs
tags:
- emacs
- tutorial
---
[Emacs](http://www.gnu.org/software/emacs/) is more than a text editor. It's a beast that runs on everything from Unix
to Windows.

There are already many Emacs tutorials and FAQs, so I'll just highlight the things that I found interesting.

Emacs has a ton of commands you can use. These commands are generally accessed by typing `Ctr + some letter` or
`M + some letter`. The `M` here stands not for the letter, but for the `Meta` key... often `Esc`.

This is where Emacs begins to get interesting. But before I proceed:

    M-x tetris

Yup, if you're typing something really boring, you can switch over to another screen, or buffer as they call it, and
play some Tetris.

This ability of Emacs to do other things besides edit text is tremendous. You can essentially get Emacs to do anything
you can imagine... if you can program Lisp... but there's already a lot of these extensions written. Take a look at
[this quick tour of Emacs](http://www.gnu.org/software/emacs/tour/).

In other words, Emacs can do text, be an IDE, compare files, manage your files, RSS feeds, emails,
[Tweets](http://www.emacswiki.org/emacs/Twitter) (I'm currently trying out twittering-mode), employees
(maybe?), and even be your UNIX shell.

Yes, [Emacs can do anything](http://xkcd.com/378/).

<h3>Some Specifics</h3>

    M-x woman

`M-x woman` will let you see man pages in color. After all it takes a woman to show man pages in color!  Not those type
of man pages. The type of man pages that are manual pages for linux or unix commands.

    C-z

This will suspend your session and kick you to the shell. This is great if you know how to restart your existing emacs
sessions. Well, that's accomplished not with the command "emacs," but with the command:

    %emacs

### Other Resources

Here are a few Emacs pages I enjoyed:

* [Emacs Beginner's HOWTO](http://jeremy.zawodny.com/emacs/emacs.html)
* [A Tutorial Introduction to GNU Emacs](http://www2.lib.uchicago.edu/keith/tcl-course/emacs-tutorial.html)
* [How to Use Emacs](http://zoo.cs.yale.edu/classes/cs210/help/emacs.html)
* [Emacs Basics](http://blog.interlinked.org/tutorials/emacs.html)
* [Being Productive With Emacs](http://web.psung.name/emacs/) (links to some good slides)
* [Great Emacs Features](http://c2.com/cgi/wiki?GreatEmacsFeatures)
* [GNU Emacs manual](http://www.gnu.org/software/emacs/manual/)
* [Installing Emacs on Cygwin](http://www.wisdomandwonder.com/article/910/gnu-emacs-on-cygwin)
* [Tips on Long Term Emacs Productivity](http://xahlee.org/emacs/effective_emacs.html)
* [Fun With Emacs](http://xahlee.org/emacs/emacs_fun.html)

... and in closing:

if Tetris isn't enough, play Pong against yourself with all 4 arrow keys:

    M-x pong

Watch life unfold

    M-x life

And finally, one of my favorite games of all time.... amoeba aka gomoku

    M-x gomoku
