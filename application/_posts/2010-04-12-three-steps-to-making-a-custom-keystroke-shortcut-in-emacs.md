---
layout: post
title: Three Steps to Making a Custom Keystroke Shortcut in Emacs
tags:
- Emacs
- keystrokes
- tips
---

This one's short (ish?) and sweet. It describes how to make your own global key bindings for functions of your choice in
Emacs.

1. Type `C-h b` in Emacs. This will bring up a list of all the current keybindings.
2. Type `C-s [KEYBINDING YOU WANT WRITTEN OUT]` to double check that the shortcut isn't taken using search. For example
    to check that `C-c t` isn't taken type `C-s C-c t`.
3. Modify your .emacs.d/init.el file like this
{% highlight cl %}
;; [USEFUL COMMENTS]
(global-set-key (kbd "[KEYSTROKES WRITTEN OUT]") '[FUNCTION NAME])
{% endhighlight %}

For example to set C-c g to trigger goto-line:

{% highlight cl %}
;; Define C-c g as a shortcut for goto-line.
(global-set-key (kbd "C-c g") 'goto-line)
{% endhighlight %}

That's all there is to it. A little bit more about
<a href="http://www.gnu.org/software/emacs/manual/html_node/emacs/Rebinding.html">setting key binding in the GNU Emacs
Manual</a>.

If you want to use a key that you don't know the code of simply press,
`C-c h [KEY OF INTEREST]`. For example `C-c h [F5]` shows: " is undefined", so I would use `(kbd "<f5>")`


Ok, that's it, you don't have to read the rest. The rest is just the usual quagmire  associated with most things in
Emacs.

A side note is that there are multiple ways of refering to keybindings in emacs. In this example, I make use of the kbd
macro. The <a href="http://www.gnu.org/software/emacs/manual/html_node/emacs/Init-Rebinding.html">kbd macro converts
keystrokes written out using M-, C-, etc. into a form that can be passed as an argument to global-set-key.</a> Instead
of using kbd, you can also write out your keystroke combinations using a Lisp string. This will only work , "for ASCII
characters and Meta-modified ASCII characters."

{% highlight cl %}
;; Alternate definition of C-c g as a shortcut for goto-line using Lisp strings.
(global-set-key "\C-cg" 'goto-line)
{% endhighlight %}


Finally, you can use a Lisp vector. Vectors are written in square brackets, and characters in vectors are written with a
question mark and slash in front of them.

{% highlight cl %}
;; Alternate definition of C-c g as a shortcut for goto-line using Lisp vectors.
(global-set-key [?\C-c ?\g] 'goto-line)
{% endhighlight %}

I usually try the kbd method first, since it will usually work. You can use array to make use of strange keytrokes.
Simply type C-q and the keystroke you're interested in to insert the code for it.

For example, if we type C-q C-c we get ^C, and C-q g gives simply g, so the example above can also be written like:

{% highlight cl %}
;; Another alternate definition of C-c g as a shortcut for goto-line using Lisp vectors.
(global-set-key [?^C ?g] 'goto-line)
{% endhighlight %}

I have to say, that there are some keystrokes whose codes I have trouble getting emacs to understand this way, but using
`C-c h` and kbd will usually do the trick. There's certain keys you won't be able to use. For example if you're on a
Windows system and you hit the Windows key while using Emacs in a terminal, you'll get the Start menu on Windows instead
of a keystroke sent to Emacs.
