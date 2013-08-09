---
layout: post
title: PluGeSHin
tags:
- wordpress
- plugins
status: publish
---
<h2>A Wordpress Plugin for GeSHi</h2>
<h3><a name="description"></a>Description</h3>

&nbsp;<a href="http://netlumination.com/blog/plugeshin">PluGeSHin</a> is a <a href="http://wordpress.org/">Wordpress</a> 
plugin by Peter Ajtai that lets you use the syntax highlighting of  <a href="http://qbnz.com/highlighter/">GeSHi</a> 
through Wordpress <a href="http://codex.wordpress.org/Shortcode_API">shortcodes</a>.

You can <a href="http://wordpress.org/extend/plugins/plugeshin/">download PluGeSHin and read about it over at Wordpress.org</a>.

This page has samples of PluGeSHin in action.

<strong>Highlighting with the default language (JS in my case) and default setting for line numbers showing:</strong>

    [geshi]CODE[/geshi]

![Example1](http://img.netlumination.com/plugeshin1.png)

<strong>Highlighting PHP without line numbers:</strong>

    [geshi lang="php" nums="0"]CODE[/geshi]

![Example2](http://img.netlumination.com/plugeshin2.png)

<strong>Highlighting C++ with line numbers, starting at line 37 and drawing attention to the fourth and 13th lines:</strong>

    [geshi lang="cpp" start="37" nums="1" highlight="4,13"]CODE[/geshi]

![Example3](http://img.netlumination.com/plugeshin3.png)

Opening documentation links in a new tab:

    [geshi lang="php" target="_blank"]CODE[/geshi]

![Example4](http://img.netlumination.com/plugeshin4.png)
