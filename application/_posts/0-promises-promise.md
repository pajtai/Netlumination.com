---
layout: post
title: "Promises Promise"
tags:
- javascript
- jQuery
- callbacks
- Deferred
- promises
published: false
type: post
---

Callbacks are references to functions to be executed after a certain task is done or event is fired.

```javascript
$("#buy").click(function() {
    checkUserBallance(function(ballane) {
        if (ballance>=cost) {
            buy(item, function(success){
                if (success) {
                    alert("now you own it);
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
    checkUserBallanceApiCall(tryToMakePurchase)
}

function tryToMakePurchase(ballance) {
         if (ballance>=cost) {
            buy(item, showConfirmation);
	}
}

function showConfirmation(success) {
                if (success) {
                    alert("now you own it);
                }
}
```

Now each method can be tested and reused to an extent. The problem now is that the code is difficult to read, and the
chaining of the methods is hard coded into the methods. This reduces both reusability and readability.

To make the code more modular and readable, we can use promises. Promises are essentially a way to manage callbacks and
pathways that include multiple callbacks. They work with both synchronous and asynchronous callbacks. Promises is a
general concept and jQuery has an impementation.

```javascript
purchasePathway = $.when(checkUserBallance())
	.done(tryToMakePurchase)
	.done(showConfirmation);

$("#buy").click(purchasePathway);
```

Like this our intent of triggering a purchase pathway on click is clear, and the way the methods in the purchase pathway
are chained is obvious.

There is a cost to using promises. They have to be implemented in each of our asynch methods. So the entirety of the
code would look like this:
