---
layout: post
title: Three Steps for Using JQuery in Your Wordpress Theme
tags:
- cms
- javascript
- jquery
- theme
- wordpress
- tutorial
status: publish
type: post
---
This is a quick post on using Javascript and the JQuery framework in particular within your Wordpress theme. It's quick
and pretty painless. This is just for regular themes, not admin themes, plugins, or posts.

<strong>Step 1:</strong>

Load JQuery and your custom JS onto your page with wp_enqueue_script(). It's better to use wp_enqueue_script than hard
coding it into your page. This is because Wordpress comes with JQuery, so you won't have to worry about updating JQuery
as new versions come out. Wordpress will do the work for you.  Make sure wp_enqueue script is before wp_head(), or it
won't work.

Here's a snippet from my template file (let's say index.php). I've created my custom JQuery functions in my themes
"scripts" directory with the file name "custom-js.js". You also have to make up a handle or name for your collection of
custom JQuery functions. I called mine custom:

``` php
<?php
    wp_enqueue_script('jquery');
    wp_enqueue_script('custom', get_bloginfo('stylesheet_directory') . '/scripts/custom-js.js');
    wp_head(); // WP API Hook
```

`get_bloginfo` is your friend. If you hard code your themes directory into your code anywhere, you won't be able to
share it with others, and you'll break everything if you ever move hosts or just directories.

Here's another example. Let's say you want to use
<a href="http://code.google.com/apis/maps/documentation/javascript/examples/index.html">Google Maps</a> on your page.
Here is the line of WP code that makes that possible:

``` php
<?php
    wp_enqueue_script('googleMaps', 'http://maps.google.com/maps/api/js?sensor=false');  
```

Finally, if you just want plain JS with no JQuery, you can simply leave out the line that calls JQuery but leave in the
line that enqueues your custom functions. Wordpress comes with a lot of other JS goodies besides JQuery. Scroll down to
<a href="http://codex.wordpress.org/Function_Reference/wp_enqueue_script"> the bottom of this page</a> to look at all
the other stuff included with Wordpress.

<strong>Step 2:</strong>

Write your JQuery. The only thing you have to look out for is that wp_enqueue_script() calls JQuery in no conflict mode. This means that $ will not work as a shortcut for JQuery functions. There are two simple solutions.

* Define another shortcut for JQuery functions.
* Use a wrapper around your JQuery code.

Here is how to define a new shortcut for JQuery functions, $j in this case. The script shown is a very effective test to
see if you've got JQuery working in your theme. It's a little blunt, but it's effects are hard to miss.

``` javascript
var $j = jQuery.noConflict();
$j(document).ready(function() {
 $j("body").html("Your page is belong to us... just kidding, but you can use JQuery now.");
});
```

Here is how to use a wrapper in order to use the default JQuery shortcut:

``` javascript
jQuery(document).ready(function($) {
    $("body").html("Your page is belong to us... just kidding, but you can use JQuery now.");
});
```

Make sure you pay attention to all the curly brackets and parentheses. If the long and multiple parenthetical
expressions annoy you, go check out <a href="http://www.cs.cmu.edu/afs/cs/project/theo-11/www/decision-trees.lisp">Lisp</a>.

Anyway, the second method is nice, since it let's you use previously written code easily.

<strong>Step 3:</strong>

Enjoy!
