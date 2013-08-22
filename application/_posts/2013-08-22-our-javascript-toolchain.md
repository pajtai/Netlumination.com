---
layout: post
title: Our JavaScript Tool Chain
tags:
- javascript
- jquery
- backbone
- underscore
- requirejs
- sass
- jade
- mocha
- grunt
status: publish
type: post
---

## Intro

For a long time, JavaScript had a negative association with the term, "scripting language."
To this day, some people have the impression that JavaScript is not suited for large
complex apps. Whether the language is well suited to such a purpose remains a question, but
there are examples of maintainable, testable, large scale JavaScript apps. Since JavaScript
is such a flexible language there are many possible tool chains to use.

At [Solid](http://www.thinksolid.com) we've found a tool chain that works across multiple projects to manage our JavaScript
apps. Recently a colleague and I went to the jQuery conference in Portland, and it looks
like many teams are using variants of this same tool chain. The tool chain involves a combination
of a set of given concept implementations. The concepts are: MV* (MVC, MVP, MVPP
MVWTF...), PubSub, dependency management, DOM Management, Promises, CSS compilation, templating, testing, and automated builds.
The implementation we use for the previous are: Backbone, RequireJS, jQuery, SASS, underscore and Jade,
Mocha/Chai/Sinon, and Grunt.

## Our JavaScript Tool Chain

* MV* & PubSub
    * Backbone
* Dependency management
    * RequireJS
* DOM manipulation & Promises (Async Management)
    * jQuery
* CSS management
    * SASS / Compass
* Templating
    * Underscore - client
    * Jade - server
* Testing
    * Mocha / Chai / Sinon
* Build manager
    * Grunt

In addition to the basic tools above, we make the dev environment nicer in several other ways.
For example we make use of livereload for SASS and JavaScript for the app and tests. We also
generate documentation for projects, but have not yet found a preferred method to do so.

The purpose of all of these tools is to help organize thoughts and code.

## MV*

Using an MV* framework forces you to separate the different concerns of your app to
some minimum level. In the past few years, many options for doing this have been written for
JavaScript. I like Backbone for its simplicity, it's readable source, and that it depends
on other libraries (jQuery and underscore) that we use in projects even without
Backbone. The important thing about picking an MV* framework is not which one you pick,
but that you're trying to separate UI, data, and user interaction.

## PubSub

The publish / subscribe design pattern is a way of decoupling your code. You can create event
channels and listen to events transmitted on these channels. You can also listen to changes
on objects, such as models, and respond to these changes. As with all decoupling solutions
the price you pay is complexity. Decoupled code is generally slightly more difficult to
read and sometimes even harder to debug than tightly couple code, but decoupled code is much
more reusable and is easier to maintain in the long run due to the possibilities for reuse
and isolated testing.

Events can be triggered arbitrarily, unrelated to any model changes. A common way to
 do this is either by having a global event bus or through the use of more targeted channels.
 Backbone allows extending arbitrary objects with Events. In fact Backbone itself can be
 used as a global event bus. We use channels to broadcast events. For example if views can
 trigger or subscribe to the `channels.visible`. This would be a channel that views that are
 visible trigger events on. This allows the dropping of direct reference from other views.
 This can be especially helpful with modals and child or nested views.

Backbone has a good Events implementation. Backbone models come with
change events built in, and it is easy to extend arbitrary object with these Events, so
while Backbone itself can be use as an Event bus, it is simple to create dedicated event
chanels:

```javascript
// Create some empty objects that will become channels
var channels = {
    thisChannel: {},
    thatChannel: {};
};

// Turn the objects into channels
_.forEach(channels, function(oneChannel) {
    _.extend(oneChannel, Backbone.Events);
});
```

The use of changing and listening to changes in models
allows the decoupling of views in Backbone. Views can be injected with the models that they
 are interested in. This allows the coordination of multiple views based on important data.
 It allows views to not need to know of the existence of other views. Instead view can just
 respond to data and changes in data, which is much more modular and flexible. This lines
 up nicely with the old MVC concept that a View should just the the visual presentation of
 a filtered model.

## Dependency Management

Asynchronous Module Definitions (AMD) is a more recent concept for JavaScript. Most other
languages have a means to create dependency hierarchies by defining and pulling
dependencies into files. AMD is the idea that solves this problem for JavaScript, and
Requirejs is a good and useful implentation of AMD. AMD is not perfect, but it is certainly
an improvement over tracking tens of script includes and what order they should be added.
Just like script includes (and build blocks), Requirejs can be optimized into one file.
There are other AMD implementations like CommonJS. CommonJS is what Node uses.
Modules not only help in dependency management and ease of testing, they also allow you to
conceptually isolate logical pieces of the code, so that you don't have to keep the entire
app in your head at all times.

## DOM Manipulation

We use jQuery for interacting with the DOM. While it is sometimes fun to try and reach into
the DOM yourself, the moment you realize how work intensive supporting multiple browsers and
browser version in any sort of sain and sustainable way is, you'll go back to using a library
like jQuery. Looking at some of the original DOM element selection snippets is fun. For example
the one written by Dean Edward:

TODO: find code snippet and reference to both code snippets

## Promises

A relatively recent addition to jQuery as an implementation to PromisesA.

## CSS Management

For me, one of the most important recent changes in Web Development was CSS precompilers.
Working with CSS files that stretch to thousands of lines is painful. Not only is it almost
impossible to not not not repeat yourself, but where to add new CSS is often ambigous. Forcing
structure on to a large CSS file is possible, but it comes with the price of bloating your
total number of selectors, which will break IE. Definitely not finally, a big annoyance is that due
to a lack of variables, updating things like colors requires an error prone search and
replace tactic. Functions are also lacking in CSS.

SASS let's you organize your CSS into files. It allows the use of reusable methods (mixins)
and variables as well as nesting. Additionally SASS supports source maps, so that you know the corresponding
SASS lines to your CSS lines.

## Templating

Templating is one of those things you don't realize you really need until after you start
using it. Just like doing things without MV*, it is possible to create apps without templating,
but once you start using templates, you won't want to stop.

Templates separate variable
data from constants, and let you splice them together elegantly. They allow you to organize
your code
more, and they make it easier to split up work in a team, since one person can create
the templates and CSS that will be placed into the DOM, while another person can create the
code that
injects the data into the templates. The ability to develop portions of your app piecemeal
like this is also one of the big advantages of using MV*. As long as the team can agree
on the interfaces ahead of time, they can work on individual components at their own pace.

## Testing

Testing apps is important in order to prevent bugs and to provide, in essence, and always
current documentation (as long as your tests are passing). We've used Jasmine before, and
it works well, but recently we switched over to Mocha due to `Mocha.should`, the ease of
creating test runners for both HTML and Node, and its flexibility.

Setting up watch and liverload tasks around the tests makes it much more enjoyable to write
them.

## Build Management

Optimizing and sometimes deploying scripts with a build engine is also a common pattern.
Over the past year Grunt gained greatly in popularity. Grunt runs on Node. One of the many
nice things about Grunt is that it is
very flexible. You can
execute arbitrary system commands or even kick off other build processes with it. So, you
could both optimize the JavaScript in an Android project, as well do a full Maven or Ant
build for the Java. So, while the home site of Grunt says it is for use with JavaScript,
that is not necessarily so, and it can be used to build projects in theoretically any
language. We use Grunt for several PHP projects. Grunt can also be used to deploy projects.
It is a great Swiss Army knife for developers who are most comfortable with JavaScript.

In addition to helping you manage an ongoing project, Grunt helps you setup projects quickly.
You can setup project templates for initial scaffolding, and apply these templates based
on a set of questions Grunt initially asks on setting up a project.
