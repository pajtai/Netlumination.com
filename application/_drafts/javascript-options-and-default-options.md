---
layout: post
title: JavaScript Options and Default Options
tags:
- javascript
- options
- defaults
type: post
---
Many programming languages have a built in mechanism to handle the creation of default arguments. JavaScript does not,
so we have to create our own. Fortunately JavaScript is flexible, so the end product is arguably more useful than
the built in mechanisms from other languages.

PHP:

```php
<?php
function run($speedMph = DEFAULT_SPEED_MPH) {
```

Java:

```java
function void run() {
    run(DEFAULT_SPEED_MPH);
}

function void run(int speedMph) {
```

JavaScript has no such built in mechanism, but there is a JavaScript pattern that allows the use of combined options
objects.

The pattern combines a default options object with one or more current options objects to create the final options, or
configuration, object. For example if we are building options for a car:

```javascript
defaultCarOptions: {
    diesel: false,
    fast: true,
    fuelEfficiencyMpg: 40,
    color: "red"
}

myCarOptions: {
    convertible: true,
    color: "green"
}

endConfigForMyCar: {
    diesel: false,
    fast: true,
    fuelEfiiciencyMpg: 40,
    color: "green"
    convertible: red
}
```

The options do not have to be limited to 2. There can be as many options as desired and the can be combined one after
the other resulting in one single end config. This


```javascript
defaultCarOptions: {
    diesel: false,
    fast: true,
    fuelEfficiencyMpg: 40,
    color: "red"
}

myFamilyCarOptions: {
    diesel: true,
    fast: false
}

myCarOptions: {
    diesel: false,
    convertible: true,
    color: "green"
}

endConfigForMyCar: {
    diesel: false,
    fast: false,
    fuelEfiiciencyMpg: 40,
    color: "green"
    convertible: red
}
```

A common way to implement this patter is with underscore. Grunt does the following:

```javascript
this.options = function() {
  var args = [{}].concat(grunt.util.toArray(arguments)).concat([
    grunt.config([name, 'options'])
  ]);
  return grunt.util._.extend.apply(null, args);
};
```

The above is used to combine default options with the actual options for a task. The way it is used is that the options
is called with the default options. So args is an array of an empty object, the default options, and the actual options.
The underscore `extend` methods adds values onto an object. Clobbering any previously existing values with the next argument.
This way the actual arguments take precendence over the default arguments, and any value not defined by the actual options
will have the default options.

So in our case with the car options we would use:

```javascript
var endConfigForMyCar = {};
_.extend(endConfigForMyCar, defaultCarOptions, myFamilyCarOptions, myCarOptions);
```

In our case, the context is not important, so we can call `extend` directly instead of using `apply`.
