---
layout: post
title: Bite Sized Emacs
tags:
- Emacs
- reference
- tips
---

Emacs is a big complicated beast. You can spend lots of time  looking through the documentation, but sometimes it's nice
to enjoy a quick bite of Emacs goodness.

### Table of Contents

1. [Custom Keystrokes](#keystrokes)
1. [Indenting only as far as you feel comfortable](#indentation1)
1. [Indentation on steroids](#indentation2)
1. [Colorful shells](#color)
1. [Colorful men](#woman)
1. [No more beeping, only flashing](#beep)
1. [Turn off annoying menu bar](#menu)
1. [Customizing font appearance](#font)
1. [Line wrapping on horizontally split windows](#wraps1)
1. [Normal looking line wraps](#wraps2)
1. [Auto backup a little smarter](#backup)
1. [Autocomplete](#complete)
1. [Jumping the line](#jump)
1. [Moving from one window to the other easilly](#move)
1. [Delete the entire word](#delete)
1. [Enabling the Num Pad](#num)
1. [Making and storing macros](#macros)
1. [Word Count](#count)

### <a name="keystrokes">Morsel 1 - Custom keystrokes</a>

<a href="http://netlumination.com/blog/three-steps-to-making-a-custom-keystroke-shortcut-in-emacs">Make your own custom
keystrokes.</a>

### <a name="indentation1">Morsel 2 - Indenting only as far as you feel comfortable</a>

Change the indentation rules in cc-mode to as many spaces as you want (I use 4, which looks like normal tabs on other
editors, some people use 8, or 2, or whatever).

Edit your .emacs.d/init.el ([depending it could be ~/.emacs, ~/.emacs.el, or ~/.emacs.d/init.el](http://www.gnu.org/software/emacs/manual/html_node/emacs/Init-File.html)) like this (substitute the number you want where I write
4):

{% highlight cl %}
;; define indents as 4 spaces in cc-mode
(setq c-basic-offset 4
      tab-width 4
      indent-tabs-mode t)
{% endhighlight %}

The first line (setting c-basic-offset) does most of the work usually. The other two lines deal with how big tabs show.

You can change the c indentation style using <span style="font-family: Consolas, Monaco, 'Courier New', Courier,
monospace; line-height: 18px; font-size: 12px; white-space: pre;">(setq c-default-style "[style name here]")</span>.
These styles include bsd,stroustrup, etc. Look at the <a href="http://www.emacswiki.org/emacs/IndentingC">Emacs wiki
about indentation in C style</a>.

### <a name="indentation2">Morsel 3 - Indentation on steroids</a>

Indent an entire block of code according to applicable rules by selecting the code and then typing "C-M-\".
For example, let's say you just changed c-basic-offset to 4 from 8. Or you changed the c-default-style. If you now start typing a new program, then the new rules will be in effect. But, when you open a program you've been working on, the parts already written will look unchanged. Here's the step by step as to what you type (remember C = Control key and M = Meta key... usually the Alt key):

    C-x [
    C-SPACE
    C-x ]
    M-w
    C-M-\

And now your entire code is indented according to the new rules! Translation of steps

1. `C-x [` is beginning of file.
2. `C-SPACE` is set mark for region.
3. `C-x ]` is end of file.
4. `M-w` is copy or mark regin.
5. `C-M-\` is indent entire marked region according to applicable rules.

### <a name="color">Morsel 4 - Colorful shells</a>

Show the colors properly in shell mode.

{% highlight cl %}
;; Deal with colors in shell mode correctly
(add-hook 'shell-mode-hook 'ansi-color-for-comint-mode-on)
{% endhighlight %}

You know you need this if you got to shell mode in Emacs (M-x shell) and you see something like `^[[1;37m091`.

### <a name="woman">Morsel 5 - Colorful men</a>

To read the Unix / Linux man pages in Emacs just type:

    M-x man

Then the name of the command of interest. If you want to look at the manual pages in color, type (I mentioned this in
my [Completely Random Guide to Emacs](http://netlumination.com/blog/a-completely-random-guide-to-emacs))

    M-x woman

If you want the F1 key to bring up the woman pages, that is, manual pages in color, then add this to your
`.emacs.d/init.el`

{% highlight cl %}
(global-set-key [f1] ‘woman)</pre>
{% endhighlight %}

### <a name="beep">Morsel 6 - No more beeping, only flashing</a>

Turn off the audible Emacs warning, but have your screen flash when it would have sounded:

{% highlight cl %}
;; Turn off bell, but make it visible
(setq visible-bell t)
{% endhighlight %}

### <a name="menu">Morsel 7 - Turn off annoying menu bar</a>

Turn off the menu bar at the top of the screen:

{% highlight cl %}
;; Turn off menu bar at top of screen
(menu-bar-mode -1)
{% endhighlight %}

You can also do the same thing with the tool bar if you have that:

{% highlight cl %}
(tool-bar-mode -1)
{% endhighlight %}

You can toggle these back on or off by typing `M-x menu-bar-mode` or `M-x tool-bar-mode`


### <a name="font">Morsel 8 - Customizing font appearance</a>

Change font appearance (this will often be useful using a major mode for a programming language or text type):

    M-x customize-face

If you hit enter and enter again to pick the default, you'll be able to change the default appearance of the face that
is used to show the word type you we're on (comment, string, keyword, etc.). Your changes will automatically be saved to
`.emacs.d/init.el`, so you'll be able to see how the changes were done.

### <a name="wraps1">Morsel 9 - Line wrapping on horizontally split windows</a>

Usually line wrapping is on by default. You can see it is when a line comes to the edge of the screen, the '\' is shown
and the line continues one below. If the line is truncated on the other hand, you won't be able to see the rest of the
line, you'll only be able to see a '$'. You can use
[truncate lines](http://www.emacswiki.org/emacs/TruncateLines) to toggle back and forth between the wrap and
truncate states by typing (this will be local to that buffer):

    M-x toggle-truncate-lines

The tricky thing is that horizontally split windows (windows split by a vertical line) will still truncate. One line in
your .emacs.d/init.el will let you wrap lines for horizontally split windows:

{% highlight cl %}
(setq truncate-partial-width-windows nil)
{% endhighlight %}

### <a name="wraps2">Morsel 10 - Normal looking line wraps</a>

    M-x longlines-mode

or if you have it (Emacs 23+)

    M-x global-visual-line-mode

Will toggle normal looking line wraps on and off.  If you want to get fancy, you can set up some default in your
.emacs.d/init.el

{% highlight cl %}
;; Wrap lines visually
(add-hook 'text-mode-hook 'longlines-mode)
(setq longlines-wrap-follows-window-size 1)
{% endhighlight %}

### <a name="backup">Morsel 11 - Auto backup a little smarter</a>

You'll soon notice Emacs scattering funny looking ~FILE and #FILE# backups across your directories. I like throwing all
the auto backups into one directory and putting some sort of version number on them. This code is straight from the
[Emacs wiki](http://www.emacswiki.org/emacs/BackupDirectory), it goes into you .emacs.d/init.el:

{% highlight cl %}
(setq
     backup-by-copying t      ; don't clobber symlinks
     backup-directory-alist
     '(("." . "~/.saves"))    ; don't litter my fs tree
     delete-old-versions t
     kept-new-versions 6
     kept-old-versions 2
     version-control t)       ; use versioned backups
{% endhighlight %}

### <a name="complete">Morsel 12 - Autocomplete</a>

This is quite useful, but you do have to install it. The installation instructions in the manual are clear. Take a look
at [autocompletion for Emacs](http://www.emacswiki.org/emacs/AutoComplete).

### <a name="jump">Morsel 13 - Jumping the line</a>

`C-n` and `C-p` move your pointer up and down one line, but I can do this with my up and down arrow keys, so a redefined
`C-n` and `C-p` to move up and down 5 lines at a time:

{% highlight cl %}
;; Move up and down five lines at a time
(global-set-key "\C-n"
    (lambda () (interactive) (next-line 5)))
(global-set-key "\C-p"
    (lambda () (interactive) (next-line -5)))
{% endhighlight %}

### <a name="move">Morsel 14 - Moving from one window to the other easilly</a>

You split your window using `C-x 2` and `C-x 3` into as many pieces as you want. The default for moving to the next window
is `C-x O`, but if you have 10 windows, this might take a while.

Here's how to use the arrow keys on your Num Pad to simply move up, down, left, or  right (up up down down left right...... nevermind) among your windows:

{% highlight cl %}
;; move to window to the left
(global-set-key (kbd "<kp-4>") 'windmove-left)
;; move to window to the right
(global-set-key (kbd "<kp-6>") 'windmove-right)
;; move to window below
(global-set-key (kbd "<kp-8>") 'windmove-up)
;; move to window above
(global-set-key (kbd "<kp-2>") 'windmove-down)
{% endhighlight %}

### <a name="delete">Morsel 15 - Delete the entire word</a>

This one's from a StackOverflow post that I cannot find right now. The kill-word function will delete a word from where
your cursor is forward. What if you want to delete the entire word, including the part before your pointer?

{% highlight cl %}
;; kill entire word
(defun my-kill-word ()
  (interactive)
  (backward-word)
  (kill-word 1))
(global-set-key (kbd "M-d") 'my-kill-word)
{% endhighlight %}

### <a name="num">Morsel 16 - Enabling the Num Pad</a>

Depending how you're using Emacs. The keys for the num pad may not work the way you want. You can enable them to work
like this:

{% highlight cl %}
;; Num pad enable
;; The arithmetic operators already have keybindings,
;; so you may not want to use those
(global-set-key (kbd "<kp-1>") "1")
(global-set-key (kbd "<kp-2>") "2")
(global-set-key (kbd "<kp-3>") "3")
(global-set-key (kbd "<kp-4>") "4")
(global-set-key (kbd "<kp-5>") "5")
(global-set-key (kbd "<kp-6>") "6")
(global-set-key (kbd "<kp-7>") "7")
(global-set-key (kbd "<kp-8>") "8")
(global-set-key (kbd "<kp-9>") "9")
(global-set-key (kbd "<kp-0>") "0")
(global-set-key (kbd "M-O n") ".")
(global-set-key (kbd "<kp-enter>") 'newline)

;; Optional arithmetic operators
;; These will change the regular F key defs too
;; and you'll overide some macro and other settings
(global-set-key (kbd "<f2>") "/")
(global-set-key (kbd "<f3>") "*")
(global-set-key (kbd "<f4>") "-")
(global-set-key (kbd "<kp-separator>") "+")
{% endhighlight %}

Of course, you have to make some choices sometimes. If you have the num pad enabled to show numbers and symbols, then
you can't use it to move from one buffer to another. This is when a defining your own minor mode might come in handy.

### <a name="macros">Morsel 17 - Making and storing macros</a>

Define the macro. To start recording the macro:

    C-x (

Now type the keys, commands, etc you want done. This is just like in Excel.
Stop the macro recording with:

    C-x )

Now to save this macro we have to save it and insert it into our .emacs or init.el file.
Name the macro:

    M-x name-last-kbd-macro

Ok, now open up your .emacs or init.el file, and move your pointer (cursor) to where you want the code for your macro
definition to go and type:

    M-x insert-kbd-macro

Now type in your
[custom keybinding](http://netlumination.com/blog/three-steps-to-making-a-custom-keystroke-shortcut-in-emacs),
something like:

{% highlight cl %}
(global-set-key (kbd "C-c n") 'my-macro)</pre>
{% endhighlight %}

Of course, the keybinding (`C-c n`) and name (`my-macro`) will be your own.

### <a name="count">Morsel 18 - Word Count</a>

Emacs doesn't have a built in word count function. You can Lisp through a function, or you can avoid reinventing the
wheel by calling the Unix word count function, "wc". Just remember that the "-w" option shows the actual word count.
These lines of code in your .emacs or init.el file will define the function, "word-count" to count the words in the
current file. I also set `C-c c` as the shortcut for this function:


{% highlight cl %}
;; Word count
(defun word-count nil "Count words in buffer" (interactive)
(shell-command-on-region (point-min) (point-max) "wc -w"))

;; Shortcut for Word count
(global-set-key (kbd "C-c c") 'word-count)
{% endhighlight %}

Thanks to [Karsten Wade and the discussion on this page](http://iquaid.org/2008/02/08/counting-words-in-emacs/).
There are many [word count alternatives in the Emacs Wiki](http://www.emacswiki.org/emacs/WordCount), and
there's also a word-count-mode that you can download. I just like the code above for its simplicity if you're on a Unix
like system anyway.

Have fun chewing on these eMACS!
