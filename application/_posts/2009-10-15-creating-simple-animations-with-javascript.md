---
layout: post
title: Creating Simple Animations With Javascript
tags:
- animation
- css
- functions
- html
- javascript
- loop
- programming
- timer
- tutorial
---

This is a basic JavaScript tutorial. I will describe how to move an element around the page using a simple animation
script. The element you move around the page can be anything from an image to a paragraph.

Below is a working example:

<script type="text/javascript">
    var distanceBall=0;
    var directionBall=1;
    var timerToggle=null;

    function animateBall() {
        document.getElementById("basketball").style.top=distanceBall + "px";
        distanceBall+=directionBall;
        if (distanceBall>200) { directionBall=-1; }
        if (0>distanceBall) { directionBall=1; }
        timerToggle=setTimeout(function() { animateBall(); },10);
    }
    function checkButton() {
      if (document.getElementById("ballButton").value=="Animate Basketball") {
        document.getElementById("ballButton").value="Stop Basketball";
        animateBall();
      } else {
        document.getElementById("ballButton").value="Animate Basketball";
        clearTimeout(timerToggle);
      }
    }
</script>

<form>
    <input id="ballButton" onclick="checkButton()" type="button" value="Animate Basketball" />
</form>
<div id="basketball" style="position: relative;">
    <img src="http://img.netlumination.com/Basketball_64x64-1.png" alt="Basketball" />
</div>

---

1. [Introduction](#Introduction)
2. [Starting and stopping the animation using checkButton()](#Starting)
3. [Moving the ball image using animateBall()](#Moving)
4. [References](#References)
5. [Conclusion](#Conclusion)

## <a id="Introduction">Introduction</a>

Here is the code that makes the ball move. For the rest of this post, I'll go over the basic ideas required to put the
code together and how the specific code works:

``` javascript
<script type="text/javascript">
    var distanceBall=0;
    var directionBall=1;
    var timerToggle=null;

    function animateBall() {
        document.getElementById("basketball").style.top=distanceBall + "px";
        distanceBall += directionBall;
        if (distanceBall>200) {
            directionBall=-1;
        }
        if (0>distanceBall) {
            directionBall=1;
         }
        timerToggle=setTimeout(function() {
            animateBall();
        },10);
    }

    function checkButton() {
        if (document.getElementById("ballButton").value=="Animate Basketball") {
            document.getElementById("ballButton").value="Stop Basketball";
            animateBall();
        } else {
            document.getElementById("ballButton").value="Animate Basketball";
            clearTimeout(timerToggle);
        }
    }
</script>

<input id="ballButton" onclick="checkButton()" type="button" value="Animate Basketball" />
<div id="basketball" style="position: relative;">
    <img src="http://img.netlumination.com/Basketball_64x64-1.png" alt="Basketball" />
</div>
```

#### [Here's a jsFiddle for you to play with](http://jsfiddle.net/pajtai/QmGyf/)

There are two functions in this script, `animateBall()` and `checkButton()`. `animateBall()` is what makes the
basketball image move. `checkButton()` starts and stops the ball. Let's start by going over `checkButton()`, since that
is the function that is called if the viewer presses the "Animate Basketball" button.

## <a id="Starting">Starting and stopping the animation using `checkButton()`</a>

Whenever you create an animation, or any sort of constantly running JavaScript, it's considerate to allow the viewer to
stop the script somehow. This is done using the checkButton function. The checkButton function also starts the script
running, so it serves a dual purpose.

``` javascript
function checkButton() {
    if (document.getElementById("ballButton").value == "Animate Basketball") {
        document.getElementById("ballButton").value = "Stop Basketball";
        animateBall();
    } else {
        document.getElementById("ballButton").value = "Animate Basketball";
        clearTimeout(timerToggle);
    }
}
```

The checkButton function checks what the input button says and does  one of two things based upon what the button reads.
Looking at the HTML of the `INPUT` button, you can see that the `INPUT` button has the `id` of "ballButton." So, we can
use `document.getElementById("ballButton")`.value to access the words on the button. Accessing  HTML elements, their
attributes, and inline CSS styles on a web page with Javascript can be done using the Document Object Model (DOM).
[Here](http://www.javascriptkit.com/domref/) and [here](http://www.w3schools.com/jsref/default.asp) are two easy to use
references for the DOM.

`checkButton()` first replaces the words in the button. If the button reads, "Animate Basketball" it writes in
"Stop Basketball" instead. We know the button can only read one of two things, so we use the
[ELSE statement](http://www.w3schools.com/js/js_if_else.asp) to set the INPUT BUTTON to "Animate Basketball"
if it doesn't already say that. So one of the things the IF, ELSE statement does is toggle the INPUT BUTTON between
"Animate Basketball" and "Stop Basketball"

There is a second line after the writing on the button is changed. If the button read "Animate Basketball" then the
function animateBall is called. This gets the ball moving.

If the button read "Stop Basketball," the ELSE statement, then the ball is stopped using clearTimeout. I'll go over how
`clearTimeout` works later. For now it's just important to understand that checkButton simply functions as a toggle that
does two things whenever it's called. First, it changes the writing on the INPUT button. Second, it either starts or
stops the basketball image moving.

Let's look at how the basketball image is moved when checkButton() calls the animateBall function.

## <a is="Moving">Moving the ball image using animateBall()</a>

This is the heart of the animation, and what's startling is how few lines it takes to animate something with JavaScript.

Essentially what we want to do is move the DIV containing the basketball image small steps at a time. This requires two
things: physical movement of the DIV and a time increment in which this movement will be done.

``` javascript
var distanceBall=0;
var directionBall=1;
var timerToggle=null;

function animateBall() {
    document.getElementById("basketball").style.top=distanceBall + "px";
    distanceBall+=directionBall;
    if (distanceBall&gt;200) {
        directionBall=-1;
    }
    if (0&gt;distanceBall) {
        directionBall=1;
    }
    timerToggle=setTimeout(function() {
        animateBall();
    },10);
}
```

If you look at the HTML, you'll see that the basketball image is in a div with the ID "basketball" and the it's CSS
style of postion is set to RELATIVE. It's important to set the position to RELATIVE, since that means that we can use
the TOP or LEFT CSS styles to change the position of the DIV relative to where you see it when the image loads.

``` html
<div id="basketball" style="position: relative;">
    <img src="http://img.netlumination.com/Basketball_64x64-1.png" alt="Basketball" />
</div>
```

There are three variables that the animateBall function uses. The first is distanceBall. distanceBall is how many pixels
the TOP CSS property of the DIV with the basketball image in it is set to. So distanceBall will control where the image
is displayed. directionBall will control whether the image is moving up or down. We need this so that the image doesn't
wander too far away. Finally the timerToggle variable will allow us to stop the ball from moving. This is done as a
courtesy to the viewer.

The first line of the animateBall function adds directionBall to distanceBall. Initially directionBall is 1, so this
simply adds 1 to distanceBall.

Next we display the DIV containing the basketball image at this new location. We use the HTML DOM objects to reference
the DIV. We know the DIV has an ID of "basketball". This makes it easy to pick out from all the other elements on the
page by writing document.getElementById("basketball"). Now to specifically target the CSS TOP style we'll use
`document.getElementById("basketball").style.top`. The top property can be read from the browser or it can be written
to. In other words we can change it. It's almost as simple as setting it equal to distanceBall. The only trick part is
that TOP has units. We'll use pixels, so me must concatenate "px" to the end of the number. We do this using the
`+` [concatenation operator](http://jennifermadden.com/javascript/concatenation.html).

So with just two lines of code we've moved the DIV one pixel. The next two lines, the two if statements, check if the
DIV is at a TOP greater than 200 or less than 0. If it is, it reverses the direction of movement, so that the ball ends
up bouncing up and down 200 pixels. Here is an alternative way to write those two lines as one line (to understand the
codes look at this page on [JavaScript comparison and logical operators](http://www.w3schools.com/JS/js_comparisons.asp)
):

``` javascript
if (distanceBall > 200 || distanceBall < 0) {
    directionBall *= -1;
}
```

Anyway, this all looks great so far, but we've only moved the ball one pixel. We have to repeat this movement every few
moments. This would be very easy if there was a function to pause a JavaScript program, but there isn't, and trying to
make a custom function to do this can end up with very messy results. There is, however, a way to tell JavaScript to do
an action in a set amount of time. It's like setting an alarm clock. It's called setTimeout() and here is how it works:

``` javascript
setTimeout( [What to do] , [How long to wait] );
```

It's important to realize that when you use `setTimeout()`, Javascript will keep evaluating the lines below `setTimeout`
 immediately. It does not pause. It's like setting an alarm and keeping right on going, now with the alarm timer ticking
 in the background.

The way to use setTimeout in our animation function is to use it as the last line, and have it call our animation
function itself. Like this:

``` javascript
function animateBall() {
    [ move ball one increment and show it at its new location ]
    setTimeout( function() { animateBall(); } , 10 );
}
```

This will perform the animateBall() function once every 10 milliseconds, since setTimeout measures time in milliseconds.
It's important that animateBall is not a for, while, or do loop, since setTimeout does not pause the execution of the
script. Also, note the use of the anonymous - `function ( function () { ... } )` in `setTimeout`. This is better than
putting `animateBall()` in quotes and using `eval()`.

Now that we have the ball going, how can we make it stop? The way to stop the animation and the ball is to somehow get
`setTimeout()` to stop firing.

You'll notice that the variable `timerToggle` is set equal to `setTimeout()` in the `animateBall` funciton. This may
look confusing, since it's not immediately apparent what sort of variable `timerToggle` is. Well, timerToggle simply
allows us to keep track of the specific timer we used for the animation, so that we can stop it by using
`clearTimeout()`.

To stop a timer we'll use `clearTimeout()`. The only thing we have to do is tell the browser which timer we want to
stop. Luckily this is what the timerToggle variable is for, so clearTimeout(timerToggle) will stop the ball from moving.

`clearTimeout()` is not in the `animateBall` function, it is in the `checkButton` function. This is because
`clearTimeout` is called if the viewer presses the button while the ball is moving.

## <a id="Conclusion">Conclusion</a>

Ok, so that's it. You can animate a DIV on your page using one simple function, and you can stop and start the animation
using a second function.

Remember that we are moving the DIV with the image inside. This means we could also put other things in the DIV like a
paragraph, form, list, etc.

You should always consider the pros and cons of using animations on your page. As anyone who has sat through a few Power
Point presentation knows, it is easy to go overboard with animations (and sound effects, but that's another matter).

However, if you can link the animation to the content of your page, it may be well worth using it. For example, if you
have a site about food, you could style the logo of your page to slide onto the page like a platter of food being
served. Again, this can be done elegantly or it can be easily overdone. Additionally animation and interactivity (like
the ability to start and stop the animation) is the seed of video games and interactive art.

Finally, you should consider how this simple function can be improved. You might have noticed that I used global
variables. This limits the names of other variables that can be used on the same page, which can be especially
problematic or confusing in large projects. So, removing the global variables would be ideal. This leads me to a second
possible change. Instead of using an inline call to a javascript function in an HTML DIV, I could create an event
handler for that DIV. This would allow me to get rid of the global variables too.

Exactly how to do that might be the subject for a later post.

## <a id="References">References</a>

* [Tutorial on JavaScript animation](http://www.chipchapin.com/WebTools/JavaScript/exampleA01.html)
* [Javascript operators](http://www.w3schools.com/jS/js_operators.asp)
* [Javascript methods](http://www.java2s.com/Code/JavaScriptReference/Javascript-Methods/CatalogJavascript-Methods.htm)
* [Javascript DOM reference](http://www.javascriptkit.com/domref/index.shtml)
* [Javascript DOM reference](http://www.w3schools.com/jsref/default.asp)
* [Basketball Image](http://www.iconspedia.com/icon/basketball-ball-438-.html)
