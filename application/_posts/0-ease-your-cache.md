---
layout: post
title: Ease your cache
tags:
- logic
- style
published: false
type: post
---
Easing functions can get pretty complicated. They often include notoriously slow methods like sine or cosine. This
means that you should cache your easing results.

The problem is that if your easing equeations are not normalized to one unit of time and one unit of completion, then
this caching will not be useful.

In other words, pass in only a normalized `t`, so that you have the maximum chance of hitting a cached `y`.

Below is an example for easing in and out with a sine function:

```javascript
      easing = {
        easeInOutSine: (function () {

          // Our cache in a closure
          var cache = {};

          // The actual easing function returned to the user
          return function(t) {

            // If the value is not in the cache, put it in the cache
            if (! cache[t]) {                      
               cache[t] = -1/2 * (Math.cos(Math.PI*t) - 1)
            }

            // We return from the cache, knowing our value is there
            return cache[t];
          };
        }())       
      }
```

[jsFiddle using the above](http://jsfiddle.net/pajtai/VX5xK/show/) - ([code](http://jsfiddle.net/pajtai/VX5xK/))

This complicates your animation equation, since you have to normalize your time intervale and change interval, but the
payoff is a smoother animation.


