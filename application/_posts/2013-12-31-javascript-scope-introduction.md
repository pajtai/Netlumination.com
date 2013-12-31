---
layout: post
title: "JavaScript Scope: an introduction"
tags:
- javascript
- tutorial
- function reference
type: post
---

## Scope

JavaScript has function scope, and it is lexically scoped.

Function scope means that local variables are good within the function they are defined in. Lexically scoped means that
the variables a function scope has access to depend on where the function is physically written into the code. This
creates the opportunity to make closures.

When a variable is referenced, the variable is looked for first in the local scope. Then the next scope up, and so on
until the global scope is hit after traversing all the way up the scope chain. The global scope is the `window` in the
browser. So in our previous examples `alert` worked because `window.alert` is a function.

The above explanation is dense and has many implications, so let's look at a few examples.

Let's create some local variables:

```javascript
(function() {
    var x = window.alert;
    x('Hello again!');
}());
```
<button onclick="(function(d) {var x = window.alert;x('Hello again!');}());">Try it out</button>

So, to create an anonymous function, we can write, `function() {}`. This is just a function reference, so it will not be
invoked. JavaScript differentiates between function declarations and function expressions. Function declarations must
be named, and function expressions are created inside blocks, so we can use the grouping operator (parentheses) to
create an anonymous function expression:

```javascript
(function() {
    var x = window.alert;
    x('Hello again!');
})
```
<button onclick="(function() {var x = window.alert;x('Hello again!');})">Try it out (nothing will happen)</button>

_Leaving out the parentheses around the function above would lead to a syntax error, since no parentheses around the
anonymous function would create an anonymous function declaration, and function declarations must be named._

Firing the anonymous function would mean that `x` is set equal to `alert`, and that `x` is called. To do this, we simply
call the anonymous function, like any other function, with parentheses.

```javascript
(function() {
    var x = window.alert;
    x('Hello again!');
}());
```

If the anonymous function is like any other function we can also call it with arguments:

```javascript
(function(date) {
    var x = window.alert;
    x('It is: ' + date);
}(new Date()));
```
<button onclick="(function(date) {var x = window.alert;x('It is: ' + date);}(new Date()));">Try it out</button>

So, `x` is not available outside the scope of the anonymous function. Trying to access it is a `ReferenceError`.

`x` is available inside the function it is declared in, and all functions inside that one. Inside means written inside.
This is where lexically scoping is important.

```javascript
var scopeExample;

(function() {
    var x = new Date();

    scopeExample = function() {
        alert('x was created at: ' + x);
    }
}());
```
<script>
var scopeExample;

(function() {
    var x = new Date();

    scopeExample = function() {
        alert('x was created at: ' + x);
    }
}());
</script>
<button onclick="scopeExample()">Try out running 'scopeExample()`</button>
