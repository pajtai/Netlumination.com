---
layout: post
title: Do not stop not thinking negatively
tags:
- logic
- style
published: false
type: post
---
If a bug can only be explained by an impossible event, then - almost always - your assumptions
of what happened are wrong, and once in a blue moon, your understanding of the possible is
incomplete.

I was working on a section of code where I passed a method three arguments, but the method only
admitted to receiving to argument. The code looked something like this:

```javascript
var checkPurchase(item, price, budget) {
    ...
}

...
checkPurchase(item, price, budget);
```


