---
layout: post
title: Creating your first Wordpress theme - Part 1
tags:
- cms
- wordpress
- tutorial
---
Content Management Systems and <a href="http://wordpress.org/">Wordpress</a> is so powerful because it allows site
owners to update their sites efficiently and to customize their sites and their CMS experience.
<a href="http://codex.wordpress.org/Theme_Development">Wordpress themes</a> control both the look of a site and the
options a site owner has in terms of customizing this look.

That sounds pretty good and rather vague. It's hard to describe what you can do with Wordpress themes, since they can do
a lot. It's like trying to describe all the things you can do with a nail. It all depends on how you use it.

In light of this, it seems like the best thing to do would be to go through an example of building a Wordpress theme.
I'll go through a theme as I develop it, and I'll try to build it starting at the simplest level and working to
progressively more complicated iterations.

Before we begin, there's a few things that I'm going to assume:

1. You've got Wordpress installed on your site. [It's usually pretty easy to install Wordpress](http://codex.wordpress.org/Installing_WordPress).
2. You can access the files in your Wordpress install.
3. You can access your Wordpress admin panel.

You can usually access your files through FTP, SSH, or even your web host's control panel. On Windows I usually use
<a href="http://www.chiark.greenend.org.uk/~sgtatham/putty/">PuTTY</a> for SSH. I've heard good things about
<a href="http://filezilla-project.org/">FileZilla</a> for FTP, but I've personally never tried it. You can edit your
files with anything from Notepad (ugh) to <a href="http://notepad-plus.sourceforge.net/uk/site.htm">Notepad++</a>
(yay!) to <a href="http://www.adobe.com/products/dreamweaver/">Dreamweaver</a> (for all the flack Dreamweaver gets, it
sure can speed up a lot of things), <a href="http://www.gnu.org/software/emacs/tour/">Emacs</a> (hang on, let me grow a
beard and put on my glasses)...

Actually, in spite of the beard and glasses joke, if your host offers a Unix or Linux shell, then working on your pages
with Emacs can be a great pleasure. I mean you have access to not just your files, but also to your files through one of
the most powerful "word processors" in the world. No more worrying about whether your files are on your desktop, laptop,
smartphone, or smartbrain. Anyway, Emacs is fun and free (free as in hair, and yanking it out in frustration while you
pound your head against the keyboard trying to understand what a
<a href="http://www.gnu.org/software/emacs/emacs-lisp-intro/elisp/Lambda-Expressions.html#Lambda-Expressions">Lambda expression</a>
is). No, but seriously, using Emacs through SSH courtesy of your web host is fantastic stuff, and lets them work a
little for the money you give them. I will shamelessly mention that I use
<a href="http://www.dreamhost.com/r.cgi?132190">Dreamhost</a>, and so can you by clicking on that link that will earn me
money when you sign up.

Ok, you've got Wordpress installed, and you can access the files on your server. Let's start building a theme.

The way Wordpress works is that it runs a bunch of PHP create the HTML for your web pages. These PHP pages will often
look into an associated MySQL database for info. The PHP will also look (ok, I'm definitely anthropomorphizing) in
specific directories for certain things.

One of these special directories contain all the themes that you have installed. Each theme is in its own folder, and
you can pick the theme to use through the Wordpress admin panel.

You can find the theme choices on the left side of the adminn panel under "Appearance":

![Wordpress themes](http://netlumination.com/wp-content/uploads/2010/05/wp-011.jpg)

The directory that the themes you can pick from are in is:

    /wp-content/themes/

Each directory in themes is a theme you can use. Understanding how Wordpress knows that the contents of these
directories are themes will help us create our first theme.

Wordpress looks at the main stylesheet in each directory, and from this style sheet it reads the information about the
theme. You have to know that convention that for Wordpress the main style sheet is a file called, "style.css". So the
 simplest theme is just a style sheet in a directory. Let's see how to make one of these themes...

Let's look at this in practice. Here's is what the themes page looks like when /wp-content/themes only has the Classic
theme in it. In other words /wp-content/themes only has a directory named "classic" in it, and the index.php file:

![Classic theme](http://netlumination.com/wp-content/uploads/2010/05/wp-021.jpg)

As you can see currently Classic is the only available theme.

If we create a directory with only a style sheet called "style.css" in it, we can use that style sheet to:

1. Tell Wordpress that the directory the style sheet is in contains a Wordpress theme.
2. Tell Wordpress that theme is just like another theme with a few modifications (in other words the theme is a [child theme](http://codex.wordpress.org/Child_Themes)).

Ok, let's step through this and then discuss it. First create a directory called, "mytheme" in wp-content/themes . Now
reload the Manage Themes page in the admin panel to see what happened:

<img class="alignnone size-full wp-image-1057" title="Mytheme" src="http://netlumination.com/wp-content/uploads/2010/05/wp-031.jpg" alt="Broken theme" width="440" height="291" />

This shows you that I was telling the truth about WP looking in the wp-content/themes directory for the available themes. It looked in your empty directory called mythemes, and since it the information about each theme is supposed to be in the main style sheet, and there is no style sheet in mythemes, we have a broken theme.

Let's add a stylesheet over at wp-content/themes/mytheme/style.css. This style sheet will contain all the necessary information to create a Wordpress theme. Here are all of the contents:

``` php
<?php
/*
Theme Name:     My Theme
Theme URI:      http: //netlumination.com/
Description:    Child theme spawned by the Classic theme
Author:         Peter Ajtai
Author URI:     http: //peter-ajtai.com/
Template:       classic
Version:        1.0
*/
```

Yup, that's all it takes, and yeah replace my info with your info, but make sure that line 7 stays untouched. The file contains only CSS comments. Wordpress, reads these comments, and when it sees line 7, that says "Template: default", it understands that mytheme is a child theme of the theme that is in the directory called, "classic". Let's reload the Themes admin panel and activate this new theme.

<img class="alignnone size-full wp-image-1058" title="Our style" src="http://netlumination.com/wp-content/uploads/2010/05/wp-041.jpg" alt="Our style" width="440" height="521" />

You can see how Wordpress used the information in the CSS file to fill in the information about our new theme. You'll notice that there is no screen shot for My Theme. We'll do this soon. Anyway, click on "activate" to.... uh..... activate the theme. Since MyTheme is a child of Classic, this means that MyTheme inherits all the characteristics of Classic. We can add to or modify these characteristics, but we haven't done that yet, so right now our theme should look identical to Classic. Visit your site's homepage to check on this......

Whoops!

Our page looks like it has no styles! I guess I lied. MyTheme inherits everything from Classic 
<strong><em>except</em></strong> the style sheet. That's a little odd right? Especially if you're used to dealing with
inheritance in things like children and object oriented programming, but no matter, it's easier to fix than your....
well, than, many things. So, let's grab the style sheet from the classic theme using the line:

``` css
@import url("../classic/style.css");
```

So now our entire `wp-content/themes/mytheme/style.css` file looks like:

``` css
<?php
/*
Theme Name:     My Theme
Theme URI:      http: //netlumination.com/
Description:    Child theme spawned by the Classic theme
Author:         Peter Ajtai
Author URI:     http: //peter-ajtai.com/
Template:       classic
Version:        1.0
*/
@import url("../classic/style.css");
```

Ok, now go and check on how your home page looks.... Just like classic, huh? Well, that's not very interesting, let's make things a very tiny bit more interesting by adding one more line to prove that we have a theme that uses default but has some of it's own rules:

``` css
/*
Theme Name:     My Theme
Theme URI:      http: //netlumination.com/
Description:    Child theme spawned by the Classic theme
Author:         Peter Ajtai
Author URI:     http: //peter-ajtai.com/
Template:       classic
Version:        1.0
*/
@import url("../classic/style.css");
body {
    background-color:blue;
}
```

Ok, that was 3 lines, but I could have made it one line. Does it work? Yup. Does it work with all themes...... uh, no.
For example, if you try the same thing with the Default theme, you'll notice that some of the background images that are
used in the Default theme will not be used in your child theme. This is because the CSS for these background images are
created by PHP that looks for them in the wrong directory. It's easy to fix, but it illustrates why I'm using so many
words to explain this one simple thing of how to make a child theme. If you know how all of this works, you can probably
track down these problems. If you don't know how it works, you're lost. But these details aren't important right now,
since we want to create our own theme, not look for weird little leaks in the inheritance abstraction for Wordpress
themes.

You've just created your own WP theme! Don't worry it gets better. We'll do stuff that's more useful. We'll push pixels
around around like they're not our boss. We'll meld code to our mind's desire, but you'll have to wait for the next part
of this series for that... until then we'll..... well, we'll see you later.
