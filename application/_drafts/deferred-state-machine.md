---
layout: post
title: Deferred State Machine
tags:
- jquery
- finite state machine
- deferred
type: post
---
# Deferred State Machine

## Summary
We open sourced an implementation of a tool we use a lot at Solid. The Deferred State Machine is a JavaScript finite
state machine that leverages the power of jQuery's Deferred. We use finite state machines across multiple projects and
multiple languages.

The deferred state machine can be downloaded from Bower (`deferred-state-machine`) or github to include in your project,
and the machine has a test suite that runs on Mocha. The tests can be run using `npm install && grunt testServer`.
The state machine is currently implemented for AMD using requirejs and depends on jQuery and underscore / lodash. The
dependencies on requirejs and underscore / lodash should be removed shortly. Pull requests and suggestions are welcomed.

## Description and Example
A finite state machine is a way to track whether your code is allowed to do something. If you have check multiple boolean
flags at the top of each methods to see what should be done, then a finite state machine will probably help you. The
finite state machine is a concept that comes form electronic engineering. It helps keep your code organized and clean.

Below is a simple example to illustrate how the Deferred State Machine can be used. Our library includes a factory method
that will transform any objects and a description of the states you want to use into a finite state machine. This means
that you can combine this tool with objects created by many other libraries or your code. Only the methods referenced
in the states config are affected.

Let's say you created an image slider,
and it works well except if you click the next slide button too quickly. You can use the Deferred State Machine to
conveniently keep track of whether the slider is in a state to handle another slide request:

```javascript
var slider = {
        beginSlideLeft : function() { ... },
        beginSlideRight : function() { ... },
        queueSlideAction : function() { ... },
    },
    states = {
        idle : {
            allowedMethods : [
                'beginSlideLeft', 'beginSlideRight'
            ],
            allowedTransitions : [
                'sliding'
            ]
        },
        sliding : {
            allowedMethods : [
                'queueSlideAction'
            ],
            allowedTransitions : [
                'idle'
            ]
        }
    };

slider = deferredStateMachineFactory(slider, states);
```

The methods in slider would only manipulate the DOM. `slideLeft` and `slideRight` would just trigger CSS3 transformations
to move the slider this way and that. `queueSlideAction` could optionally queue up on or two slide requests that happen
while the slider is busy. These methods don't have to implement jQuery Deferred or worry about whether the slider is in
a certain state. The deferredStateMachineFactory creates an object that manages these methods and either calls them or
fails them depending on the state of the slider. For example:

```javascript
$('#slideLeft').click(function() {

    slider
        .beginSlideLeft()
        .done(function() {
            slider.transition('sliding');
        })
        .fail(function() {
            slider.queueSlideAction('slideLeft');
        });
});

$sliderEl = $('#slider');

$sliderEl.children().eq(0).on('transitonend webkitTransitionEnd MSTransitionEnd', function() {
    slider
        .transition('idle');
});
```

If the user clicks the button to slide left, when the slider is idle, it will begin sliding. If the slider is sliding,
then the action will be queued.

It may seem like the above is just as easy to handle with one or two booleans, and for such a simple case you could make
that argument; however, a finite state machine really begins to help in more complicate cases.

For example at Solid we've done several media player implementation in both JavaScript (an html5 audio player) and Java
(an Android video player). Both these cases required using multiple api calls that have an unknown return time, so it
was very important to correctly track the state of the player allowing for the async interaction with the api and audio /
video stream buffering.

We initially implemented the audio player using booleans to track its state, and as specs and api calls were updated, the
interactions became increasingly harder and more error prone to track. Adding a finite state machine made the user
experience and dev cycle much smoother.
