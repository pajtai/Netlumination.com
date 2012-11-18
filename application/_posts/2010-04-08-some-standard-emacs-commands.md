---
layout: post
title: Some Standard Emacs Commands / Keystrokes
tags:
- commands
- Emacs
- keyboard shortcuts
- keystrokes
- reference
---

`C-` is your CTRL key. `M-` is your Meta key, usually `ALT` or `ESC`.

* [Buffers](http://www.gnu.org/software/emacs/manual/html_node/emacs/Buffers.html) (they're like Tabs)
    * Close (kill) buffer ==&gt; `C-x k`
	* List buffers ==&gt; `C-x C-b`
	* Switch to next buffer ==&gt; `C-x RIGHT`
	* Switch to other buffer ==&gt; `C-x b`
	* Switch to previous buffer ==&gt; `C-x LEFT`
* Coding
	* **You have to be in outline-minor-mode for many of these. To get there type ==&gt; `M-x` outline-minor-mode**
	* **The keystroke shortcuts for these functions have changed quite a bit recently. To check yours, type `C-h b` and
	look for the command.**
	* Collapse all functions  ==&gt;  `M-x hide-other`
	* Evaluate the Lisp S-expression before the cursor and print result in mini-buffer ==&gt; `C-x C-e`
	* Hide body of one function ==&gt; `M-x hide-subtree`
	* Show all functions ==&gt; `M-x show-all`
	* Show body of one collapsed function ==&gt; `M-x show-subtree`
* <a href="http://www.gnu.org/software/emacs/manual/html_node/emacs/Starting-GUD.html#Starting-GUD">Debugging</a>
	* **After all of the following commands type `ENTER` and the name of the file you want to debug and `ENTER`.**
	* Run DBX (cli) ==&gt; `M-x dbx`
	* Run GDB (graphic like IDE interface) ==&gt; `M-x gdb`
	* Run Java debugger ==&gt; `M-x jdb`
	* Run Perl interpreter in debug mode ==&gt; `M-x perldb`
	* Run Python debugger ==&gt; `M-x pdb`
	* Run SDB (cli) ==&gt; `M-x sdb`
	* Run XDB (cli) ==&gt; `M-x xdb`
* Editing
	* Copy region (after you marked 'beginning' w `C-SPACE`) ==&gt; `M-W`
	* Cut (after you marked 'beginning' w `C-SPACE`) ==&gt; `C-W`
	* Kill (delete) rest of line ==&gt; `C-k`
	* Kill (delete) rest of sentence ==&gt; `M-k`
	* Kill (delete) rest of word ==&gt; `M-d`
	* Paste marked region (yank) ==&gt; `C-y`
	* Set mark begin here (for copy, paste, etc.) ==&gt; `C-SPACE`
	* Set mark and highlight marked area ==&gt; `C-SPACE C-SPACE`
	* Spell check entire file (buffer) ==&gt; `M-x spell-buffer`
	* Spell check word ==&gt; `M-$`
* [Files](http://www.gnu.org/software/emacs/manual/html_node/emacs/Files.html)
	* Compare differences between two files ==&gt; `M-x ediff`
	* Insert file into buffer ==&gt; `C-x i`
	* Open a file ==&gt; `C-x C-f`
	* Quit and Save ==&gt; `C-x C-c`
	* Refresh buffer after file has been edited elsewhere ==&gt; `M-x revert-buffer`
	* Replace this with other file ==&gt; `C-x C-v`
	* Save all ==&gt; `C-x s`
	* Save file ==&gt; `C-x C-s`
	* Show directory explorer (dired) ==&gt; `C-x d`
	* Show number of lines in file ==&gt; `C-x l` (letter "el")
	* Suspend and exit to shell (type `%emacs` in shell to resume) ==&gt; `C-z`
* Fonts
    * [Interactively change fonts](http://www.delorie.com/gnu/docs/emacs/emacs_482.html) ==&gt; `M-x customize-face`
* Formatting
	* Indent line appropriately (according to mode) ==&gt; `TAB`
	* Indent marked (see Editing) region ==&gt; `C- M- \`
	* Tabbing (to next Tab stop) ==&gt; `M-i`
* [Help](http://www.gnu.org/software/emacs/manual/html_node/emacs/Help.html)
	* Describe function run by keystrokes in a window (more info) ==&gt; `C-h k [COMMAND]`
	* **RUN TUTORIAL** ==&gt; `C-h t`
	* Show all keyboard shortcuts  (key bindings) in effect ==&gt; `C-h b`
	* Show commands containing a word you type (apropos) ==&gt; `C-h a`
	* Show function run by keystrokes in echo area (quick info) ==&gt; `C-h c [COMMAND]`
	* Show manual section for function run by kestrokes ==&gt; `C-h K [COMMAND]`
* Modes (using Emacs for different stuff)
	* Debugging (gdb) mode ==&gt; `M- x gdb`
	* Shell mode ==&gt; `M- x shell`
* Movement
	* Beginning of file ==&gt; `C-x [`
	* Beginning of line ==&gt; `C-a`
	* Beginning of sentence ==&gt; `M-a`
	* Center cursor vertically ==&gt; `C-l` (letter "el")
	* End of file ==&gt; `C-x ]`
	* End of line ==&gt; `C-e`
	* End of sentence ==&gt; `M-e`
	* Go to line ==&gt; `M- x goto-line`
	* Next word ==&gt; `M- f` or `M-RIGHT`
	* Previous word ==&gt; `M- b` or `M-LEFT`
	* Next screen (scroll down) ==&gt; `C-v`
	* Previous screen (scroll up) ==&gt; `M-v`
	* Scroll down OTHER window ==&gt; `C- M- v`
* <a href="http://www.gnu.org/software/emacs/manual/html_node/emacs/Search.html">Search / Search and Replace</a>
	* Interactive / Incremental Search (highlight as you type) ==&gt; `C-s`
	* Keep going with current search after editing ==&gt; `C-s C-s`
	* Next highlighted item ==&gt; `C-s`
	* Previous highlighted item ==&gt; `C-r`
	* Search and replace (from cursor to end of file). Type `?` for help in replacing. ==&gt; `M-%`
	* [Search using a regular expression](http://www.gnu.org/software/emacs/manual/html_node/emacs/Regexp-Search.html) ==&gt; `M-C-s`
	* Select next search string (while in incremental search mode) ==&gt; `M-n`
	* Select previous search string (while in incremental search mode) ==&gt; `M-p`
* Undo
	* **Undo is very good in Emacs, you should [look into it in detail](http://www.gnu.org/software/emacs/manual/html_node/emacs/Undo.html)**
	* Abort command ==&gt; `C-g`
	* Undo a change ==&gt; `C-x u or C-_`
* [Windows](http://www.gnu.org/software/emacs/manual/html_node/emacs/Windows.html)
	* Close all other windows ==&gt; `C-x 1`
	* Close this window ("zero") ==&gt; `C-x 0`
	* Make window narrower ==&gt; `C-x {`
	* Make window wider ==&gt; `C-x }`
    * Make window taller ==&gt; `C-x ^`
    * Make window shorter ==&gt; `M-x shrink-window`
	* Move cursor to other window (letter "oh") ==&gt; `C-x o`
	* Split this window with a horizontal line ==&gt; `C-x 2`
	* Split this window with a vertical line ==&gt; `C-x 3`
* Some of my own keystroke definitions
	* <strong>To make these definitions work, you would have to define them yourself. I include them as a seed for ideas.</strong>
	* Go to line * ==&gt; `C-c g`
	* Move down five lines ==&gt; `C-n`
	* Move up five lines ==&gt; `C-p`
	* Outline-minor-mode hide-other ==&gt; `C-c c`
	* Outline-minor-mode hide-subtree ==&gt; `C-c h`
	* Outline-minor-mode show-all ==&gt; `C-c a`
	* Outline-minor-mode show-subtree ==&gt; `C-c s`
	* Trigger word auto completion ==&gt; `TAB`
	* Twittering mode (for an Emacs Twitter client) ==&gt; `C-c t`
	* Woman (in color manual pages) ==&gt; `C-c w`

Above you hopefully found the typical keystroke / command combinations for Emacs. Emacs has a lot of commands. You fire
these commands, or functions, with keystrokes. Which keystroke goes with which function is ultimately up to you. This
should not be confusing to anyone who works with Photoshop, Illustrator or any of the Adobe Creative Suite. Emacs uses
keyboard shortcuts..... very extensively.

I'm using the abbreviations that you'll see in most text discussing Emacs. In other words `M-` stands for pressing your
"Meta" key. This is usually the `Alt` key. `C-` stands for pressing your `Control` key. So, `C-x C-s` means hit
`Control + x` then `Control + c`.

### Extended Commands

By hitting M-x you can type in different commands. As you start typing in a command, you'll be able to hit the `TAB` key
to see possible ways to complete your command (hints). For example `M-x gomoku` let's you play gomoku. `M-x` fires the
`execute-extended-command` function, which lets you type in the name of a command.... can the name be,
`execute-extended-command`?

###Documentation

You should know that Emacs has a ton of self description and a ton of online reference. In fact 
[this is the Emacs manual](http://www.gnu.org/software/emacs/manual/emacs.html). I find the
[HTML one page per node version](http://www.gnu.org/software/emacs/manual/html_node/emacs/index.html) the
most useful online and the PDF version the best for leisurely fireside thumbing.

Oh, and you can go look at
[the key index in the Emacs manual](http://www.gnu.org/software/emacs/manual/html_node/emacs/Key-Index.html#Key-Index).
Additionally the interweb pipes are filled with Emacs Cheat Sheets and Reference Cards. This is a
[PDF Reference Sheet by CAL CS](http://inst.eecs.berkeley.edu/~cs3/sp07/emacsreference.pdf) that's pretty good.

###What does this keystroke do?
Ok, this is in the keystroke / commands list, but it's important enough to repeat: To find out what a keystroke
combination does in Emacs, type `C-h c [THE KEYSTROKES]` or `C-h k [THE KEYSTROKES]`. `C-h c` is the short info version.
It is displayed in the echo area at the bottom of the screen. `C-h k` is the long info version, and it displays in a
window. (`C-h K [THE KEYSTROKES]` will show the manual area for that command.).

So, if you want to find out what `C-z` does, you would type `C-h k C-z`.

### Defining your own keystrokes

There may be some keytrokes you wish were defined. For example, `M-x goto-line` seems very long, so if you want to
define `C-c g` to jump you to the line you enter, then you could add the following line to your init.el file, which is
usually in your .emacs.d directory:

``` cl
(global-set-key "\C-cg" 'goto-line)
```

These days (since Emacs 22) these sort of customizations (the Lisp commands that are automatically executed when Emacs
is started) are placed in the ".emacs.d" directory within the init.el file. They used to be put simply in a ".emacs"
file. [In fact when Emacs starts it
tries three locations:  ~/.emacs, ~/.emacs.el, or ~/.emacs.d/init.el.](http://www.gnu.org/software/emacs/manual/html_node/emacs/Init-File.html). Here "~" is your home directory.

### Modes

The same keystroke can have different effects depending on the
<a href="http://www.gnu.org/software/emacs/manual/html_node/emacs/Major-Modes.html#Major-Modes">mode</a> your in. A mode
is simply an environment to handle a particular type of text. You can usually see what mode your in by looking at the
bar at the bottom of your window. You can pick one major mode and several
<a href="http://www.gnu.org/software/emacs/manual/html_node/emacs/Minor-Modes.html">minor modes</a>. I've tried to only
include keyboard shortcuts for the global mode.

### A note on terminology

I try to use terminology that'll make sense to people who use things like Word. This terminology isn't always the most
accurate. Things like "Copy" and "Paste" don't work exactly the same in Emacs as they do in Word. But I use these
terminology short cuts to make things more accessible. Additionally, while most of the keystrokes should work, your
sysadmin may have changed some of them (and you can change them back). But finally, I just wanted to provide a quick and
easy guide to the typical keystrokes in Emacs. You owe it to yourself to look deeper into Emacs if you anticipate using
it often or want to play gomoku.

### Final note: Fonts

There are many ways to change fonts. Do yourself a favor and explore "M-x customize-face". It's interactive, and you can
choose, "save for future use". If you do this, Emacs will save some Lisp commands to your init.el file, and you'll get a
chance to look at them. Additionally, it's not always Emacs fault! For example, if you're using PuTTY to SSH in to a
session, then PuTTY will control some aspects of your fonts. For example, PuTTY will controls you
<strong>FONT SIZE</strong> and <strong>FONT TYPE</strong>! ( Window &gt;&gt; Appearance ). Emacs will still control the
colors.

Hopes this collapsible interface helps organize things a little. Let me know if you have any suggestions for keystrokes
to add!
