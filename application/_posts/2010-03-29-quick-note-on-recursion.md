---
layout: post
title: Quick Note on Recursion
tags:
- php
- recursion
---
[Recursion](http://en.wikipedia.org/wiki/Recursion_%28computer_science%29)

Example in PHP using the factorial:

``` php
<?php
// $n must be a positive integer or 0 - function returns 1 for 0 and all errors
function factorial($n)
{

  if ($n > 0 && is_int($n))
  {

    // factorial of positive integer

    return $n * factorial($n - 1);

  } else
  {

    // factorial of 0

    return 1;

  }

}
```

There are many other blog posts that cover this topic well. Some include:

[Recursion in PHP (and iteration)](http://devzone.zend.com/article/1235)

[Recursive patterns in Regex from the PHP manual](http://php.net/manual/en/regexp.reference.recursive.php)

Here is a little snippet of a C++ function that will ask for user input and make sure it is a float. If it's not a
float, the functions recurses (is that a word?)... calls itself. The end effect is that the user is asked to enter a
float until they do. You must include both iostream and limits.

``` c++
float collectFloat()
{

  float user_input(0.0);

  try
  {

    // Could also use cin.fail() to check for success

    if (cin >> user_input) cinIgnoreRest();
    else

      throw (string("\nNot a float entered.\n Please enter a number.\n"));
  }

  catch (string error)
  {

    cout << error << "==> ";

    cin.clear();

    cinIgnoreRest();

    // This will keep repeating until user enters a float

    user_input = collectFloat();
  }

    return user_input;

}
```
