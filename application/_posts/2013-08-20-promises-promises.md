---
layout: post
title: "Promises Promises"
tags:
- javascript
- jquery
- callbacks
- deferred
- promises
type: post
---

Promises are a powerful tool for managing mutliple asynchronous tasks. Promises are essentially
callback wrappers, and promises are a widely available solution for breaking out of
callback hell.

Callbacks are references to functions to be executed after a certain task is done or event is fired.

```javascript
$("#buy").click(function() {
    var $this = $(this),
        cost = $this.data("cost"),
        item = $this.data("item");

    checkUserBallance(function(ballance) {
        if (ballance>=cost) {
            buy(item, function(success){
                if (success) {
                    alert("now you own it");
                }
            });
        }
    });
});
```

Nested callbacks like this are a common site in much JavaScript code. They make things difficult on multiple levels.

First, anonymous functions are often used for callbacks. This makes both code reuse and testing difficult. How could I
reuse or unit test the buy callback? There's no way to get to it.

Using named references will improve our code.

```javascript
$("#buy").click(checkUserBallance);

function checkUserBallance() {
    var $this = $(this),
        cost = $this.data("cost"),
        item = $this.data("item");
    checkUserBallanceApiCall(tryToMakePurchase, cost, item)
}

function tryToMakePurchase(ballance, cost, item) {
         if (ballance>=cost) {
            buy(item, showConfirmation);
	}
}

function showConfirmation(success) {
                if (success) {
                    alert("now you own it");
                }
}
```

Now each method can be tested and reused to an extent. The scoping is nicer, in that the
 methods get their variables passed in instead of relying on the outer scope. The problem
 now is that the code is difficult to read, and the
chaining of the methods is hard coded into the methods. The code is difficult to read, since
the business logic of the purchase path is not immediately apparent. All the methods have
to be read to see how they chain together. Calling one method directly from another reduces
reusability, since the order of the methods are hard coded.

To make the code more modular and readable, we can use promises. Promises are essentially a way to manage callbacks and
pathways that include multiple callbacks. They work with both synchronous and asynchronous callbacks. Promises is a
general concept and jQuery has an impementation.

```javascript
$("#buy").click(purchasePathway);

function purchasePathway() {
    checkUserBallance()
	    .done(tryToMakePurchase)
	    .done(showConfirmation);
}
```

Like this our intent of triggering a purchase pathway on click is clear, and the way the
methods in the purchase pathway are chained is obvious. Additionally, the order the methods
in the purchase pathway are used can be easilly altered. This greatly increase reusability.

There is a cost to using promises. The complexity of each method is slightly increase, since
 each method has to implement a deferred.
 So the entirety of the
code would look like this:


```javascript
$("#buy").click(purchasePathway);

function purchasePathway() {
    checkUserBallance()
        .done(tryToMakePurchase)
        .done(showConfirmation);
}

function checkUserBallance() {
    var $deferred = new $.Deferred(),
        $this = $(this),
        cost = $this.data("cost"),
        item = $this.data("item");

    checkUserBallanceApiCall($deferred, cost, item);
    return $deferred.promise();
}

function tryToMakePurchase(ballance, cost, item) {
    var $deferred = new $.Deferred();
    if (ballance>=cost) {
        $deferred.resolve();
	} else {
	    $deferred.reject();
	}
	return $deferred.promise();
}

function showConfirmation(success) {
    alert("now you own it");
}
```

`$.Deferred` breaks the managing of promises in two. The original deferred object created with
`new $.Deferred()` gives you a reference that you can use to eventually `.resolve()` or `.fail()`
your async task. Both of the previous methods accept arguments. Additionally a deferred
object can be used to create and return a `.promise()`. A jQuery `promise` can only listen to the fate
of an async task. It cannot resolve or fail it.

The above code has no error handling or retries. Error handling can be easily implemented
with deferreds using either `.fail()` or `.then(doneCallback, failCallback)`. For example:

```javascript
function purchasePathway() {
    checkUserBallance()
        .then(tryToMakePurchase, showBallanceTooSmallWarning)
        .then(showConfirmation, showPurchaseErrorWarning);
}
```

To implement the above is already a little tricky due to the chaining. Chaining is not well
supported in `$.Deferred`, but it can be implemented.

Additionally, the fail methods could retry the `purchasePathway` after some user input. This
is where deferreds get tricky, since they weren't really designed for chaining / retries.

To look at a working example of jQuery deferreds with chaining, error handling, and retries take a
look at [this working deferred example](http://pajtai.github.io/deferred-example/).

To see the methods available on deferreds and promises, see the jQuery documentation and
these [exploratory jQuery tests](http://pajtia.github.io/exploratory-javascript-tests/index-jquery.html)

There are other promise implementations than `$.Deferred` and there are other solutions for
managing async tasks, like the node `async` library (which also works in the browser); however,
`$.Deferred` is a very convenient solution, since it is available in any app that depends on
jQuery.
