---
layout: post
title: One page app optimization
tags:
- javascript
- grunt
- optimization
type: post
---

When it came time to deploy our one page app, I found surprisingly few sample projects that included optimization. Since
we use a pretty typical stack (requirejs for AMDs and grunt to build) this was surprising. So here is how we solved it.

The end goal is to produce compact and cache busted assets. For example, for JavaScript files, this would include
concatenating and minifying all sources into a file that includes a hash of the contents in the name. This optimization
also has to be done for css files. Each step of the optimization process has grunt tasks available as NPM, but tying
all the steps together was tricky.

The first step was done before the deploy task was even started. It was create a server task. We use SASS and
several templates to produce JavaScript files with customizable configurations. This means that we develop in an, "app"
directory, and build to a distrubtion directory we call, "build." So the files we want to optimize are in the "build"
directory.

Requirejs has a powerful optimization tool. With all the available choices [link to sample rjs file], it feels
daunting to configure it. In our case it was important to produce a sincle js file that could be loaded with a simple
script tag that did not include the, "data-main" attribute. This is because the grunt-usemin, the tool chose for
cache busting, does not support reuqirejs anymore. We did this with the following:

```javascript
grunt.config('requirejs', {
    dist: {
        options: {
            baseUrl: '<%= tempDirectory %>',
            mainConfigFile: '<%= tempDirectory %>/main.js',
            name: 'main',
            out: '<%= buildDirectory%>/main.js',
            optimize: 'uglify',
            preserveLicenseComments: false,
            include: ['vendor/almond/almond.js']
        }
    }
});
```

Almond is a minimal version of requirejs. It is very small in size, but still have the minimal needed functionality for
requirejs.