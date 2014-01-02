---
layout: post
title: "JavaScript Functions: use and reference"
tags:
- javascript
- tutorial
- function reference
type: post
---

## Functions

Functions are important in JavaScript. They are first class objects. This means they can be treated as entities of
their own... lambdas. They can be passed around and referred to as things in and of themselves.

`alert` is a function. To invoke a function use parentheses:

```javascript
alert('Hello world!');
```
<button onclick="window.alert('Hello world!');">Try it out</button>

Since `alert` is a function (in the global scope - we'll get to scope in a minute), we called alert by passing it an argument.
JavaScript doesn't care about method signatures or types, so you can call methods with as many arguments of as many types as
you want... what'll happen is another matter.

```javascript
alert(1, 'a', function() {});
```
<button onclick="window.alert(1, 'a', function() {});">Try it out</button>

The way to refer to a function is by name. Without parentheses it will not be invoked:

```javascript
alert
```

_One thing to be aware of is that [getters and setters](../javascript-getters-and-setters) can look like references, but
they call functions._

```javascript
alert(alert);
```
<button onclick="window.alert(alert);">Try it out</button>

In the example above we alerted the function reference for alert. This is native code implemented by the browser.

Before we get into creating new functions, let's see how JavaScript found the `alert` method eventhough we didn't define
it.

This depends on [scope](../javascript-scope-introduction)