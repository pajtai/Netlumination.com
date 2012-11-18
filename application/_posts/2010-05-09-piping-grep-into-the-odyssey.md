---
layout: post
title: Piping grep into the Odyssey
tags:
- curl
- grep
- Linux
- pipe
- regex
- regular expression
- search
---

[Grep](http://www.gnu.org/software/grep/manual/grep.html) and piping ( `|` ) are two powerful tools in Linux.
Grep allows you to search lines of text for certain patterns using regular expressions. Piping allows you to take the
output of one command and make it the input of another.

So, lets say you want to look through the Odyssey and find all mentions of Sirens. That would be:

``` bash
grep -in siren odyssey.txt
```

But let's say you don't have the Odyssey on your hard drive, you could just get it from MIT and pipe it over to grep

``` bash
curl http://classics.mit.edu/Homer/odyssey.mb.txt | grep -in siren
```

In both cases, I used case insensitive search, `grep -i`, and I list what line number the instances are found on with
`-n`.

So far this has all been pretty straight forward, but I know that the Odyssey is divided into books, and I want to know
which books contain the lines about sirens. This is where piping becomes very handy.

``` bash
curl http://classics.mit.edu/Homer/odyssey.mb.txt | grep -in "siren\|^book" | grep -iB1 "siren"
```

Let's look at this line from left to right in order to understand it. "curl ..." simply goes and gets whatever
characters are at the referenced url. We pipe these lines of text into: `grep -in "siren\|^book"`.  This is another case
insensitive search, but it is looking for each line that matches any one of two possible patterns. In regular
expressions the pipe, `|`, means OR. When using Linux, you have to escape the pipe, and write \| to mean OR in a regular
expression. So we are looking for  an appearance of the word siren OR a line that begins with the word "book." (^ is the
beginning of a line). It is important that we only use -n in the first instance of grep, since this first instance will
return the line number in the original text file. If you use -n in the second grep, you won't get the line numbers of
the original file, you'll get the line numbers from the first grep output, which is probably meaningless to you.

At this point we have all the lines which reference sirens and we have all the lines that say, "BOOK ..." from BOOK I to
BOOK XXIV, whether these books contain siren references or not. To clean all of this up, we take these lines, the book
lines and the siren lines, and pipe them over to:  grep -iB1 "sirens"

This will take our list and display the lines one previous to a siren reference and the siren reference line. This will
show us the siren references and which of the 24 books in the Odyssey reference sirens. So, if you want to read about
sirens, look for Books XII and XXIII in the Odyssey.

Here is the output (edited a little for shorter lines), without the curl status output... notice that none of the lines
are repeated, and that the blocks of text are separated by 2 dashes... grep at work:

    4936:BOOK XII
    4972:you will come to the Sirens
    4974:of the Sirens, his wife and
    4978:these Sirens by, and stop
    4986:past these Sirens, I cannot
    5074:the Sirens, who sit and sing
    5083:two Sirens, for the wind had
    5094:good rate, the Sirens saw
    5109:Sirens' voices. Then my men
    --
    9638:BOOK XXIII
    9921:wondrous singing of the Sirens

And of course, this is just the tip of the iceberg, or should I say, just the beginning of the Siren's song?

To learn more about grep type, `man grep` in Linux or, `M-x woman ENTER grep` in Emacs.
