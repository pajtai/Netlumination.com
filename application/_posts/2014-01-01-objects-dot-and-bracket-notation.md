---
layout: post
title: "JavaScript Objects: Dot and Bracket Notation"
tags:
- javascript
- tutorial
- function reference
type: post
---

To access fields on objects, we can use dot notation.

For example we can first create an object using an object literal, and then access its fields:

```javascript
var fruits = {
    apple : 'green',
    banana : 'yellow'
};
alert(fruits.banana);
```
<script>
var fruits = {
    apple : 'green',
    banana : 'yellow'
};
</script>
<button onclick="alert(fruits.banana)">Try it out</button>

If we want to access a field dynamically, we can use bracket notation:

```javascript
function theFruit() {
    return Math.random() < 0.5 ? 'apple' : 'banana';
}
alert(fruits[theFruit()]);
```
<script>
function theFruit() {
    return Math.random() < 0.5 ? 'apple' : 'banana';
}
</script>
<button onclick="alert(fruits[theFruit()])">Try it out</button>

Another reason to use bracket notation to access a field, is if the field name is not a valid variable name. In this
case the field name must be enclose in quotation marks.

```javascript
var obj2 = {
    'this field has : unusual characters ;*' : 42
}
alert(obj2['this field has : unusual characters ;*']);
```
<script>
var obj2 = {
    'this field has : unusual characters;*' : 42
};
</script>
<button onclick="alert(obj2['this field has : unusual characters;*']);">Try it out</button>
