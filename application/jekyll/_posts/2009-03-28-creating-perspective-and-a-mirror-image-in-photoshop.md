---
layout: post
title: Creating perspective and a mirror image in Photoshop
tags:
- design
- perspective
- Photoshop
- reflection
- tutorial
status: publish
type: post
---
In this tutorial I'll show you how to create the look of perspective and reflection in your images.

![Perspective impage](http://img.netlumination.com/scitechy-site.jpg)

Let me give you an overview of what we're going to do. First we will create a series of guidelines that will show us how
to modify our image to make it look like it is in perspective. Then we will take our flat image, duplicate it and flip
it vertically. This will give us a flat image with a flat reflection. We will use the free transform tool to distort the
image and reflection at the same time. It is important that both are distorted together for the effect to work. This
means that our workflow must first create the reflection and then the perspective. We'll finish up by adding some visual
effects to make the whole thing look slightly more believable.

The first step is to create an empty Photoshop document. The document should be much larger than the image you're
working with. This is necessary to accommodate both the guidelines and the reflection. Start by making your document
four times wider and four times taller than the image you will be working with. If you run out of space, just make the
canvas bigger by clicking on "Image &gt; Canvas Size," and make your canvas bigger. Start off by making two layers. One
layer is for your image and one layer will be for the guidelines to help create the illusion of perspective.

![Layers](http://netlumination.com/wp-content/uploads/2009/04/layers.jpg)

To create the guidelines to help with perspective, click on the Guides layer, so that it you will be drawing on it. Now
draw a vertical line on the left side of the canvas. The line tool is found if you click on the rectangle tool. Make
sure that you have "Fill Pixels" selected for the drawing mode. You can pick a weight that you feel is appropriate.

![Line tool](http://netlumination.com/wp-content/uploads/2009/04/line-tool.jpg)

Now draw a second line from the bottom of your vertical one out to the right. This second line will go from the bottom
left corner of your image to the horizon. The angle at which you draw it will determine whether it will appear that you
are looking up, down, or directly at your image. For this example you can basically eyeball things, but if you want to
learn how to calculate where to put the vanishing point, horizon, etc. more precisely, take a look at
[Kevin Hulsey's drawing perspective tutorials](http://www.khulsey.com/student.html). Here's how I drew mine:

![Guide lines](http://netlumination.com/wp-content/uploads/2009/04/gude-lines.jpg)

We'll add in the image now. If you copy and paste your image into your photoshop document a new layer will be created
for your image, which is exactly what we want. Now we have to move the image so that it's bottom left corner is where
our two guidelines are. We can use the Free Transform tool to do this (Ctr+T or "Edit &gt; Free Transform"). When you
are in free transform mode, you can use your mouse to move your image where you want it. You can fine tune the position
of the image with the arrow keys. If you want, experiment with turning Snap on and off ("View &gt; Snap").

Once you have your image positioned, click on the Guides layer and draw a line from the top left corner of the image to
the right hand vanishing point. The guidelines extending from the bottom and top left of your image should intersect.
Like this:

![Vanishing point](http://netlumination.com/wp-content/uploads/2009/04/vanishing-point.jpg)

If the vanishing point is above the top of the image, it'll look like you are viewing things from above. If it's below,
it'll look like you are viewing from below. If it's directly to the right of the image, it'll look like you are at the
same level as the image.

Finally, we have create a second vertical guide, for the right hand side of the perspective image. This line should be
to the left of the edge of the image, since perspective will cause the image to appear narrower. You can figure out
precisely where to put this line, but for a simple situation like this, it's easier just to eyeball things. Just imagine
taking your image and swiveling it in to perspective and draw the second vertical line where the right hand side of the
image would end up:

![Final guide line](http://netlumination.com/wp-content/uploads/2009/04/final-guide-line.jpg)

It's important that we create the mirror image now, since we want to distort the main and mirror image simultaneously,
so that the reflection matches the perspective of the main image. To create the reflection, first duplicate the main
image. Do this by clicking on the layer with the image and dragging it over the "Create a New Layer" icon, that is at
the bottom right of the layers panel.

![Duplicate image](http://netlumination.com/wp-content/uploads/2009/04/duplicate-image.jpg)

Name this layer as the mirror image. I usually drag this layer below the main image, since it helps me keep track of
things better.

![Rename reflection](http://netlumination.com/wp-content/uploads/2009/04/rename-reflection.jpg)

Click on the reflection layer in the layers panel and use the free transform tool to position it directly below the main
image. Holding down the shift key while moving the image will constrain it to move in only several directions, so you
can be sure you are moving it directly down and that you're not moving slightly off of vertical. If you want it to
appear the the image is sitting directly on a reflective surface, leave no gap between the main image and reflection. I
chose to introduce a small gap between the main image and reflection. This makes it appear that the main image is
floating slightly.

Before you finalize the free transform, right click directly on the reflection and pick "Flip Vertical" from the fly out
menu that appears. Now we have a true reflection.

![Vertical flip](http://netlumination.com/wp-content/uploads/2009/04/vertical-flip.jpg)

and voila:

![True reflection](http://netlumination.com/wp-content/uploads/2009/04/true-reflection.jpg)

This is the point at which you may notice that you are running out of space. Increase the size of your canvas to add
more space at the bottom if necessary.

To create the effect of perspective, we have to work with the main image and reflection at the same time. To do this
click in the layers panel on the layer of the main image. Now shift + click on the layer of the reflection. Both layers
should be highlighted:

![Select both layers](http://netlumination.com/wp-content/uploads/2009/04/select-both-layers.jpg)

If you now use the free transform tool (Ctr+T), both images should be selected. Look at how the bounding boxes goes
around both images:

![Bounding box](http://netlumination.com/wp-content/uploads/2009/04/bounding-box.jpg)

Ctr + Click on the top right corner and drag it the top right corner of your perspective guidelines. You want to distort
the image and not just resize them; that's why you have to Ctr + Click for this operation and not just click.

![Top right corner](http://netlumination.com/wp-content/uploads/2009/04/top-right-corner.jpg)

This next step is probably the trickiest one of this tutorial. You have to control click on the bottom right corner of
the bounding box... that's is the bottom right corner of the reflection. By dragging this corner you have to get the
bottom right corner of the main image to lie over the bottom right corner of the guiding lines. So you're ctr + dragging
the bottom right of the bounding box but looking at the center right of it.

![Perspective](http://netlumination.com/wp-content/uploads/2009/04/perspective.jpg)

We'll begin to add finishing touches. First let's change the background to pure black, or any color of your choosing.
To do this click on the guides layer and then on the "Create a New Layer" icon at the bottom right of the layers panel.
This will create a new panel directly below the image and reflection layers. To fill with a solid color click
`Alt + Backspace` to fill it with the foreground color or Ctr + Backspace to fill it with the back ground color. You can
also go to Edit &gt; Fill.

![Black background](http://netlumination.com/wp-content/uploads/2009/04/black-background.jpg)

To make the reflection fade out from top to bottom we'll use a layer mask. A layer mask interacts with a layer to show
only certain parts of that layer. Think of it as a black piece of paper that you can cut to any shape you want and lay
it over the layer you're working with. In the areas where a layer mask is black, the layer becomes invisible. In areas
where the layer mask is white, the layer is unchanged. If the layer mask is a shade of gray, then the layer is partially
visible.

To add our layer mask, first click on the layer with the reflection to select it in the layer panel. Now click on the
"Create Layer Mask" icon. This is toward the bottom left of the layers panel. It looks like a square with a circle
inside

![New layer mask icon](http://netlumination.com/wp-content/uploads/2009/04/new-layer-mask-icon.jpg)"

This will give you a layer mask associated with the reflection.

![Layer mask](http://netlumination.com/wp-content/uploads/2009/04/layer-mask.jpg)

Click on the white square that is the layer mask, so that you can edit it directly. We will add a gradient to it. Make
sure your foreground color is white and your background color is black. If they are not, just click on the small black
and white boxes up and to the left of the foreground and background colors. To select the gradient tool hit Ctr+G or
select it from the tool menu on the left. Things should look like this:

![Gradient tool](http://netlumination.com/wp-content/uploads/2009/04/gradient-tool.jpg)

The look we want to achieve is for the reflection to fade away from top to bottom. Remember that the areas where the
layer mask is black will make the reflection disappear, so we want to click on the image and draw the gradient line from
the bottom right to the top left. This will make the layer mask blacker toward the bottom right and whiter toward the
top left. Try making your gradient. If you are not satisfied with the results hit Ctr+Z to undo it and try it again. The
results should look something like this:

![Fade out of reflection](http://netlumination.com/wp-content/uploads/2009/04/fade-out-of-reflection.jpg)

Even if the background of your image is another color, you will use a black to white gradient for your layer mask. This
is because a layer mask makes the layer it is associated with visible with white and invisible with black. So even if
the background of your image is red, your reflection will be visible over the red background if your layer mask is white
and invisible if your layer mask is black.

After adding the gradient, your layer mask will look something like this:

![Gradient layer maske](http://netlumination.com/wp-content/uploads/2009/04/gradient-layer-mask.jpg)

To make the reflection a little more convincing, decrease the Opacity of the reflection layer. Make sure that the
reflection layer is selected in they Layers panel. Now use the slider bar at the top right of the panel to change the
opacity of the reflection layer. I've found 50% to look nice.

To finish the image, turn off the background color and guides layer. Select "Image &gt; Trim..." and click Based on
Transparent Pixels and Top, Right, Left, and Bottom. This will trim away all the excess canvas. To add back a slight
border use "Image &gt; Canvas Size..." and select Relative. With Relative selected you only have to type in the twice
the thickness of the border you want width and height wise.

![Adding the border back](http://netlumination.com/wp-content/uploads/2009/04/adding-border-back.jpg)

Once done with resizing turn the background color layer back on by clicking on the eyeball icon to the left of it, and
you're done!

![Finished image](http://netlumination.com/wp-content/uploads/2009/04/finished-image.jpg)
