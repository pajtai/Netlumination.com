---
layout: post
title: Visibility Toggling with jQuery
tags:
- javascript
- jquery
- toggling
- visibility
status: publish
---
User interface design often makes use of showing and hiding blocks of content. It focuses one's attention to the right 
thing, and it's fun to do with <a href="http://jquery.com/">jQuery</a>.

I'll show you how to toggle the visibility on a group of selected elements. I'll build up from a simple case to the more
complicated ultimate goal.

First, whenever you're working with jQuery and Javascript, you should probably get your references ready. For online 
references there's the<a href="http://docs.jquery.com/Main_Page"> jQuery documentation</a> (which is easier to search 
with Google than with the site search, I find) and the <a href="https://developer.mozilla.org/en/javascript">Mozilla 
    Development Center Javascript reference</a> among others. A very nice site to test, store, and share your jQuery 
snippets is <a href="http://jsfiddle.net/">jsFiddle</a>.

Ok, let's get started. First let's toggle the visibility of an element with jQuery
using <a href="http://api.jquery.com/toggle/">.toggle()</a>. Since we're talking about user interfaces, we'll probably
trigger the toggle with an action, let's say a <a href="http://api.jquery.com/click/">.click()</a>:

```javascript
$(document).ready(function(){
    // Toggle the visibility of all divs when one is clicked.
    $("input").click(function() {
        $("div").toggle();
    });
});
```

<a href="http://jsfiddle.net/QXZ7p/">jsFiddle example</a>

The code above will toggle the visibility of all the divs on a page if an input button is pressed.  The way this works
is that after the document is ready, an event handler is bound to all the &lt;input&gt; elements. The handler waits for
the user to click it. If clicked jQuery selects all the divs on the page and reverses their visibility. If they were
invisible they become visible and vica versa.

Well, this was just to give you a tast of .toggle(), since the above example is pretty crude. Usually you want more
control over which divs appear and disappear. In fact, an often trick part of visibility toggling in jQuery is to make
sure each toggling button is linked uniquely to one block of content. You also want to ensure that when a block of
content appears, all the other similar blocks of content disappears.

I'll show you two methods of making sure that each time only one block of content appears, while all the other blocks
of content disappears. The first method will only work if all the content blocks are siblings in the DOM. This will
often be the case, since we'll usually be dealing with semantically related chunks of content. The second way will be a
little trickier but more flexible.

But before we start discussing siblings, let's make sure we can toggle one specific div with one particular button.
There's many ways of doing this. I'll show you how to use individual but related ids for the buttons and the content
divs. Each button will have a name like, "block-x" where "x" is a number, and it'll have a corresponding content block
with the id "block-x-content". Now if we have 3 content blocks, we could write one functions to control each block, for
a total of 3 functions, but it's more convenient and maintainable to generalize. We're going to use input buttons with
class ".toggler" to toggle the divs. You, of course, don't have to use buttons, you can use other divs, or images, or
whatever your little heart desires. So, so far we have:

``` javascript
$(document).ready(function(){
      // Toggle the visibility of all divs when one is clicked.
    $("input.toggler").click(function() {
        $( "#" + $(this).attr("id") + "-content" ).toggle();
    });
});
```

<a href="http://jsfiddle.net/N4PDK/">jsFiddle example</a>

The most complex part is the line with the toggle. The previous line simply binds an click event handler to all input 
elements with a "toggler" class. The function that is triggered in case of a click is an anonymous function that toggles 
one div. To see witch div gets toggled we'll look more closely at "$("#" + $(this).attr("id") + "-content" )" . The part 
inside the parentheses is simply a jQuery selector string. The string starts with a literal "#", so we know that an 
element with a certain ID is getting toggled. The "#" is followed by the "ID" attribute of the element that was clicked. 
So far we have something like $("#block-x"). This by itself would make the buttons disappear. But we know that each 
button has a corresponding content block. This block is selected by concatenating "-content" to the previous to give us 
a toggling of $("#block-x-content"). Where is the number in the ID attribute of the INPUT button we clicked. Notice how 
the visibility of each DIV is kept track of separately. .toggle() is doing all the hard work for us.

Well, we're approaching what we want. The previous example is okay, in that it let's us toggle things, but it doesn't 
really feel like we're concentrating the attention of the user to one pertinent block of information. To achieve that 
end, we must make all the other divs invisible when we make one div visible.

We only have to change one line to achieve this. We'll go from:

``` javascript
$( "#" + $(this).attr("id") + "-content" ).toggle();
```

to:

``` javascript
$( "#" + $(this).attr("id") + "-content" ).toggle().siblings().hide();
```

Notice how I chained the methods .siblings() and .hide() onto the previous line. This means that after toggling our 
content block, we'll select the DOM siblings of that block and make them invisible. This means you have to make sure 
you've thought through your HTML. The easy way to do this is to nest all the content divs into a parent div, or if it 
makes sense, maybe to have content LIs in a parent UL or OL.

One final change is that you may not want the content to disappear if a button is pressed twice, so we'll switch out 
.toggle() with .show() to give:<span class="Apple-style-span" style="font-family: Consolas, Monaco, monospace; font-size: 12px; line-height: 18px; white-space: pre;">​</span>

``` javascript
$(document).ready(function(){
      // Toggle the visibility of all divs when one is clicked.
    $("input.toggler").click(function() {
        $( "#" + $(this).attr("id") + "-content" ).show().siblings().hide();
    });
});
```

<a href="http://jsfiddle.net/NeVDs/">jsFiddle example</a>

But what if our content DIVs aren't siblings? They usually should be, just because of the way information is structured on an HTML page, but we really don't want to count on that. We want the flexibility to toggle any set of elements we want.

To toggle any set of elements we want, all we have to do is create jQuery set of the elements and use .not() in combination with that. I'll show you how.

First, let's say that we have 3 content divs. Let's select all of them with jQuery:

``` javascript
var theDivs = $("#block-1-content, #block-2-content, #block-3-content);
```

So, now theDivs is a jQuery selection of out content DIVs, let's use that in combination with our click handler and .not() to toggle the appropriate content divs. Except, now I'm going to use an unordered list, so our content will be in LIs. If we're dealing with unordered lists, we could easy have a situation where all the individual content LIs are not siblings of each other.

To show the corresponding content LI of a button, we'll still use:

``` javascript
$( "#" + $(this).attr("id") + "-content" ).show();
```

But now we can't simply make the siblings disappear. Instead we'll make everything from our jQuery slection "theDivs" that isn't the corresponding content LI vanish. Like this:

``` javascript
theDivs.not( $( "#" + $(this).attr("id") + "-content" ) ).hide();
```

And that's it! You can of course replace the .show() and .hide() methods with fancier animations like .slideDown() and .slideUp(), but overall we have a relatively simple to implement, generalizable way of toggling the visibility of a group of content divs. The full code will look something like this:

``` javascript
$(document).ready(function(){
      // Create a selection of the content divs of interest
    var theDivs = $("#block-1-content, #block-2-content, #block-3-content");
      // Toggle the visibility of all divs when one is clicked.
    $("input.toggler").click(function() {
        $( "#" + $(this).attr("id") + "-content" ).show();
        theDivs.not( $( "#" + $(this).attr("id") + "-content" ) ).hide();
    });
});​
```

<a href="http://jsfiddle.net/NNLzj/">jsFiddle example</a>
