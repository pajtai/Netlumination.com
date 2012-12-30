---
layout: post
title: Making a 2D JavaScript game engine
tags:
- javascript
- game engine
- animation
status: publish
type: post
---
My first gaming experience was Hunt The Wumpus on a Texas Instruments 99. But what I really sunk a lot of time into was
the original Nintendo. My favorite was Metroid, then Kid Icarus. I never had any of the later Nintendos, but I did play
quite a bit of The Lost Vikings on NesTicle. Platform games always fascinated me... the huge map (seeing the full
Metroid map with the secret worlds was somehow mesmerizing), the slowly scrolling gameplay, the cumulative experience,
slowly working toward one far off goal through a labyrinthine guantlet.

So, out of some vague sense of nostalgia, but mostly as a technical exercies, I decided to make a game engine. I've been
using a lot of JavaScript, and I thought picking JavaScript as the engine language would make it maximally accessible.
Due to my recent reminiscing on Metroid et al. it will be a 2D enginge specifically targeted at platform games.

There are already some [great](http://www.melonjs.org/) [choices](http://jawsjs.com/) if you want to use a 2D JavaScript
platform [game engine](https://github.com/bebraw/jswiki/wiki/Game-Engines), and as I look at them, I have many
questions. Hopefully creating my own engine will answer some of theses questions.

One of the questions I had is what performance gain - if any - is there in JavaScript by using linked lists instead of
arrays. In many languages, the size of an array cannot be modified once created, so the use of linked lists is
necessary for storing unknown amounts of objects. In JavaScript items can easilly be added dynamically to an array.
[This jsperf test](http://jsperf.com/usage-of-linked-list-vs-array/2) seems to indicate that - at least for a simple
linked list implementation - there is performance HIT in using a linked list vs an array. I noticed that [gamecore.js](https://github.com/playcraft/gamecore.js)
uses a [linked list](https://github.com/playcraft/gamecore.js/blob/master/src/linkedlist.js). If I get around to it,
I'll try to compare their linked list performance to an array's performance.

Another question I had came immediately when I started writing [platformista](https://github.com/pajtai/platformista). I
decided to start with the core of the game, the engine itself. The code that redraws the screen every few moments to
give the viewer the illusion of motion on the canvas. The idea is that one has an ideal frames per second (fps) to
achieve, but not all machines will achieve this fps. For example (using Jaws), you can see that on an iPhone / iPad /
 iPod / my 10 year old laptop, [this game](http://pajtai.github.com/Noun-Space/) only achieves about half the target 60
 fps. Well, what if you have a game that tries to depict a falling object? A naive implementation of fps would cause
 objects to fall slower on slower machines. In other words each tick of the user interface has to be separate from the
 ticks of the game code itself, or there must be some other mechanism of allowing the game to keep try of some sort of
 "real" time that is not dependent on the fps. I'm keeping things separte by having [separate ui ticks and game ticks](https://github.com/pajtai/platformista/blob/master/application/Workers/Engine.js).
 This type of separation would also be essential in multi player games where things have to be synched among multiple
 machines.

 I found [these](http://nokarma.org/2011/02/02/javascript-game-development-the-game-loop/index.html) [two](http://paulirish.com/2011/requestanimationframe-for-smart-animating/)
 articles to be really helpful theoretical and technical overviews of game loops.

 So, I've begun, and I'm already surprised at the number of large decisions I've had to make regarding the architecture
 of the entire project just by trying to write the game engine. I've decided to try and keep things event and data
  driven using [Backbone](http://backbonejs.org/). So, I'm trying to plan things by using how I [structure my data](http://programmers.stackexchange.com/questions/163185/torvalds-quote-about-good-programmer)
   in models (we've yet to see if I'll have to use any data structure fancier than a JavaScript Array and Object). Using
   Backbone means I  also have access to jQuery and Underscore / Lodash. Since I'm using jQuery, I'm giving qUnit a go
   instead of my usual Jasmine.

You can check on the state of my game engine project [here (codename: platformista)](https://github.com/pajtai/platformista).