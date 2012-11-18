---
layout: post
title: ! 'Pimp My Web Page: Simple to Complex'
tags:
- optimization
- Website Advice
status: publish
type: post
---
Let's start with the simplest web page:

``` html
<h1>Hello World!</h1>
```

Well, that's nice, but there's <a href="http://www.w3.org/TR/html401/struct/global.html">certain information missing</a>. 
We should add a doctype to let the browser know what flavor of HTML, XHTML, etc we're using. This declares the document 
type definition (DTD) in use for the document.

We should also add things like the HTML elements, a HEAD element for specifying more information about the page, a BODY 
for the contents.

We should also let the browser know our character encoding with a meta tag.

So now we have:

``` html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/\\xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
        <title>Greetings World</title>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
</html>
```

What about the look of the page? Let's add some CSS:

``` html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/\\xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
        <title>Greetings World</title>
        <style type="text/css">
            body {
                background-color:#BDC4D4;
            }
        </style>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
</html>
```

Of course we should throw that into an external style sheet:

``` html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- sample.html -->
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
        <title>Greetings World</title>
        <link rel="stylesheet" href="styles.css" type="text/css" media="screen" />
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
</html>
```

and:

``` css
/* styles.css */
body {
    background-color:#BDC4D4;
}
```

Let's add two images:

``` html
<p>
    An Image ==>
    <img src="images/one.png" alt="image 1" />
</p>
<p>
    Another Image ==>
    <img src="images/two.png" alt="image 2" />
</p>
```

Hmmm... but we're making two requests to the server for these two images. We can pass the same amount of information to 
the user with only one request to the server using 
<a href="http://www.smashingmagazine.com/2009/04/27/the-mystery-of-css-sprites-techniques-tools-and-tutorials/">sprites</a>.

Sprites are often used in divs or other elements as background images. We'll use sprites as background images, but 
they'll be the background to an IMG element. "null.png" is simply a transparent pixel:

The HTML:

``` html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- sample.html -->
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
        <title>Greetings World</title>
        <link rel="stylesheet" href="styles.css" type="text/css" media="screen" />
    </head>
    <body>
        <h1>Hello World!</h1>
        <p>
            An Image ==>
            <img src="images/null.png" class="sprite image1" alt="image 1" />
        </p>
        <p>
            Another Image ==>
            <img src="images/null.png" class="sprite image2" alt="image 2" />
        </p>
    </body>
</html>
```

The CSS:

``` css
/* styles.css */
body {
    background-color:#BDC4D4;
}
.sprite {
    width:80px;
    height:80px;
    background:url('images/sprite.png')
}
.image2 {
    background-position:-80px;
}
```

Well, ok, but our sight isn't going to change much over time, so once a visitor see our site, they should cache it in 
their browser for future use. This'll make the page load faster for everyone, since it reduces server load, and it 
speeds up the loading of pages by repeat visitors.

We can accomplich this using HTTP headers. This is not the HTML HEADER tag. HTTP headers are lines that the server 
sends to the browser before the contents of the page... this means we can't put the HTTP headers into the HTML file. 
We'll have to use something server side for this. PHP has a header() function, which makes things really easy:

``` php
<?php
// Expires one year from now
$expires = mktime(0, 0, 0, date("m"),   date("d"),   date("Y")+1);
// Format date
$date =  date('D, d M Y H:i:s', $expires);
// Send HTTP header
header("Expires: $date GMT");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- sample.html -->
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
        <title>Greetings World</title>
        <link rel="stylesheet" href="styles.css" type="text/css" media="screen" />
    </head>
    <body>
        <h1>Hello World!</h1>
        <p>
            An Image ==>
            <img src="images/null.png" class="sprite image1" alt="image 1" />
        </p>
        <p>
            Another Image ==>
            <img src="images/null.png" class="sprite image2" alt="image 2" />
        </p>
    </body>
</html>
```

We could have done the above with Apache or whatever server itself we're using. PHP is nice for illustration, since we 
can keep all the code in the HTML file. Since the HTTP header comes before the HTML content, you cannot put any HTML 
before the PHP header() function.

Ok, now we're getting somewhere, but we've still got all this text and stuff on our web page.... ok we don't, but we 
could have all this stuff, if we had a big web page, or it may look like a lot of stuff to someone with a limping dial 
up in East Timor. Well, why don't we compress all our stuff. Let's GZIP it.

``` html
<?php
// Expires one year from now
$expires = mktime(0, 0, 0, date("m"),   date("d"),   date("Y")+1);
// Format date
$date =  date('D, d M Y H:i:s', $expires);
// Send HTTP header
header("Expires: $date GMT");
if (substr_count($_SERVER['HTTP_ACCEPT_ENCODING'], 'gzip'))
    ob_start("ob_gzhandler");
else
    ob_start();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- sample.html -->
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
        <title>Greetings World</title>
        <link rel="stylesheet" href="styles.css" type="text/css" media="screen" />
    </head>
    <body>
        <h1>Hello World!</h1>
        <p>
            An Image ==>
            <img src="images/null.png" class="sprite image1" alt="image 1" />
        </p>
        <p>
            Another Image ==>
            <img src="images/null.png" class="sprite image2" alt="image 2" />
        </p>
    </body>
</html>
```

You can <a href="http://www.gidnetwork.com/tools/gzip-test.php">confirm that you're properly GZIPPED</a>.

Ok. With PHP we can also <a href="http://php.net/manual/en/function.flush.php">flush</a> the buffer early:

``` php
</head>
    <?php flush(); ?>
<body>
```

It's great that our CSS is in its own file, but it still has a bunch of whitespace. Why don't we minify it.

I used the <a href="http://developer.yahoo.com/yui/compressor/">YUI compressor</a> with this command:

``` bash
java -jar yuicompressor-2.4.2.jar styles.css -o styles.min.css --type css
```

To get this CSS file:

``` css
body{background-color:#BDC4D4;}.sprite{width:80px;height:80px;background:url('images/sprite.png');}.image2{background-position:-80px;}
```

We can do the same minification with our Javascript if we have any, and remember to include your Javascript as far to 
the bottom of the page as you can.

Take a look at the <a href="http://peter-ajtai.com/examples/html/sample.php">final page</a>.
