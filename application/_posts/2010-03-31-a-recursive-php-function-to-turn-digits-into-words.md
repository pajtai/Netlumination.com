---
layout: post
title: A recursive PHP function to turn digits into words
tags:
- PHP
- recursion
---
Warning: This is a big spoiler for Project Euler Problem 17, so if you're still working on it, don't keep reading!

I quickly mentioned recursion in [my previous post](http://netlumination.com/quick-note-on-recursion). Turning digits
into letters is clearly another example for which recursion is useful. Think about a number like 524. If you know that
`4 = "four"`, `5 = "five"`,  and that `20 = "twenty"` then all you have to do, to turn 524 into words,  is run your script on
5, add "hundred," run your script on 20, and run your script on 4, and if you write your script well, then you can do
this using recursion.

Take a look at a working example of [the function I wrote](http://peter-ajtai.com/examples/numbers.php) to do just this
with PHP.

Take a look at [my solution to Project Euler Problem 17](http://peter-ajtai.com/euler/problems/Problem-017.php)
 [SPOILER ALERT]
