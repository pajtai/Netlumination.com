---
layout: post
title: Deploying Android with Gradle
tags:
- gradle
- android
- android studio
- automation
type: post
---
Below is a simple method of deploying with Gradle while leaving sensitive config files out of VCS.

Deployment keys are sensitive, and it is a good practice to not commit them into your main git repo. This will allow
easier sharing of and collaboration on the project, and it will make your keys more secure.

Gradle supplies an multiple ways to use keys that are not checked into a project. I read about several of them, but some
required user input, while others seemed too complicated.

This is a simple and straight forward method for deploying with Gradle (optionally through Android Studio).

First add your key configs file to `.gitignore`. Let's say we'll use `release.config`. This file should be in your main
module.

Now create `release.config` and read it in from your `build.gradle`

### release.config

```
android {
    signingConfigs {
        release {
            storeFile file('my.keystore')
            storePassword 'mySuperSecretPa$$w0rd'
            keyAlias 'release'
            keyPassword 'mySuperSecretKeyPa$$w0rd'
        }
    }
}
```

You can put the keystore in the same directory, and `.gitignore` it if you choose to.

Reading this from your `build.gradle` will look like:

```
android {

    apply from: file('release.configs')

    buildTypes {
        release {
            signingConfig signingConfigs.release
```

You can put the above inside `android`.

The downside of this method is that even if you do not plan to deploy, you will have to create an empty `release.config`
file. The upside it that it is simple.

## References

* [`file`](http://www.gradle.org/docs/current/userguide/working_with_files.html)
* [`apply`](http://www.gradle.org/docs/current/dsl/org.gradle.api.Project.html#org.gradle.api.Project:apply(java.util.Map\))

