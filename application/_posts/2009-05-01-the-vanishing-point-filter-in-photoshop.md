---
layout: post
title: The Vanishing Point Filter in Photoshop
tags:
- photoshop
- tutorial
---
In this Photoshop tutuorial I'll discuss the many uses of the vanishing point filter. You can use this tool to place
labels on bottles and jars, to add or remove windows and doors from buildings, and in general, to transform the
perspective of an object to fit into your photo.

As an example I'll show you how to end up with a photo like this:

![Vanishing point pic](http://img.netlumination.com/vanishing-point1.jpg)

Starting with this:

![Flat labels](http://img.netlumination.com/flat-labels.jpg)

### Table of contents:

1. [Preparing to use the filter](#Prepare-Vanishing)
2. [Using the vanishing point filter - setting up the perspective plane](#Setting-Filter)
3. [Using the vanishing point filter - extending the original plane](#Extending-Plane)
4. [Adding content to the perspective plane](#Add-Content)
5. [Finishing touches with the Burn and Dodge tools](#End-Vanishing)


I'll go through the steps of how to add the middle label to the jar.

## <a id="Prepare-Vanishing">Preparing to use the filter</a>

The first thing we have to do is make sure we have each of our labels in a separate individual layer or file. Before
starting to use the vanishing point filter, you should copy the label you want to use into the clip board. To do this
Ctr + Click on the thumbnail of the label layer you want to use. This will ensure that only the label is selected. Now
hit Ctr + C to copy the label into your clip board. We have to do this, so we later can paste the label in the vanishing
point tool.

![Click labe;](http://img.netlumination.com/click-label1.jpg)

The vanishing point filter will create a grid that represents the three dimensional shape of an object in the photo. We
should put this grid on a new layer. Create a new empty layer directly above your photo. In my case, I clicked on the
layer of the photo of my jars and hit Shift + Ctr + N. Hit Ctr+D to clear any selections. This will not clear your
clipboard from your ability to paste, but it will ensure that you do not accidentally use the Vanishing Point Filter on
just a limited area of your photo.

Now make all the layers except your main photo layer invisible. You can do this by Alt + clickinig on the eyeball in
your main photo layer. This will show only that layer. It is easier to use the vanishing point filter without things
obscuring your view.

![New layer](http://img.netlumination.com/new-layer.jpg)

## <a id="Setting-Filter">Using the vanishing point filter - setting up the perspective plane</a>

Now, while we have the new layer active, we'll begin using the vanishing point filter by clicking
Filter » Vanishing Point... (Alt + Ctr + V). This will bring up a new window that is used for the vanishing point
filter.  Our aim is to draw a rectangle that is in the same perspective plane that the jars are in. Then we will work
from this simple rectangle to define the more complicated shape of a jar.   To begin make sure the create plane tool is
selected, and simply click on the four points that define the corners of your rectangle. You can move the rectangle
later, but you'll run into problems if you have to scoot your rectangle too far left or right. While it is difficult to
judge perspective on the jars, you can make use of the mosquito netting and window sill in the back ground. Once done
you should have a rectangle in perspective. Remember to use the zoom tool (it's easier to use the keyboard shortcut of
Space + Ctr and Space + Alt to zoom in and zoom out and Space to scoot the photo around) while working.  Using existing
straight lines in your photo will guarantee that you get the perspective exactly right. The bigger you make your
rectangle, the more you reduce errors. Ideally you want your rectangle to touch the surface you are going to be putting
your label on. In this case I'm working with the center jar, so I used its right edge, the window sill and frame, and
the lines on the mosquito screen to create my perspective plane:

![New plane](http://img.netlumination.com/new-grid1.jpg) 

Notice how the gird is blue. If the math for creating the perspective rendering would not work out the grid would be
red, if the math is marginal, it'll be yellow. You should create grids that end up blue if at all possible. You can
change the grid size using the dialog box in the top left. The grid size doesn't actually change anything, but a smaller
grid size (more squares) will make it easier to create a curved shave in smaller increments, rendering a smoother end
result.

## <a id="Extending-Plane">Using the vanishing point filter - extending the original plane</a>

This next step is probably the hardest one. We have to extend our perspective plane to wrap around the jar. To do this
we'll Ctr + Click on the middle left bounding box of the perspective plane. Pull out about one grid square's worth. This
will extend the plane perpendicular to its current position.

![Pull out grid](http://img.netlumination.com/pull-out1.jpg)

Now we want to adjust the angle of the new portion to match the jar. Use the angle pull down box for this. I've found
the easiest method is to click on the angle pull down, then use my left and right arrows keys to adjust the angle. I
found using my mouse to be more difficult.  Each time you Ctr + Click and create a new segment of the plane, you want to
create the same amount. This is where the size of the grid you pick matters. The smaller the widths of the newly created
segments, the smoother the end result will be. At certain angels, you'll have a hard time telling how much of the grid
you created. You can always pull out an amount, rotate it for better view, and then adjust its lenght properly. This can
sometimes cause some weird glitches, but if you keep at it, you should end up with something like this:

![Jar plan wrapped](http://img.netlumination.com/jar-plan-wrapped.jpg)

## <a id="Add-Content">Adding content to the perspective plane</a>

Now comes the fun part. Paste, Ctr + V your label into the Vanishing Point filter in Photoshop. Now just pull the label
onto the blue plane to change it's perspective to fit that of the photo. If the label is too big or too small, click the
Transform Tool ( T ), the 6th tool from the top on the left, to resize your label on the fly.   

![Moving label](http://img.netlumination.com/moving-label.jpg)

![Label in place](http://img.netlumination.com/label-in-place.jpg)

Once you get the hang of how to use the tool, it is very powerfull. From putting labels on jars, text on book pages, and
windows on walls, its uses are limitless.  Getting back to our example. You'll notice several problems with the
raspberry jam label. First it's covering the orange, second it's color is off, third the edges look artifically sharp.
To dull the colors we can make use of the layer blend modes. By clicking on the curved raspberry jam label's layer, we
can change the blend mode using the drop down dialog box on the top left of the Layers panel. In this case multiply
works nicely. We can also add a little noise to the label to make it look like a photograph.
`Filter » Noise » Add Noise`... A very small amout, like 1% of the Gaussian or even less will generally work nicely.
Make sure you have monochromatic checked, so that the noise matches the color of the label.
 
## <a id="End-Vanishing">Finishing touches with the Burn and Dodge tools</a>

After all of this, the edges probably still look too crisp. Additionally labels often darken or wear around the edges. A
quick fix for this is the burn tool. We have to be carefull with the burn tool though, since it alters the pixels of the
label. It's a good idea to make a copy of the label layer before we begin working with the burn tool ( Ctr + J or drag
the layer to the Create New Layer icon toward the bottom right of the layers panel)... just to be safe.

For the burn tool, use a relatively large brush at 0% hardness to run of the corners and edges of the label. You can
decrease the opacity option for the burn tool if it looks like you're over doing it. You can also use the dodge tool to
make a line of lighter color on the label where you can see that the flash went off on the jar.

![Where dodge burn](http://img.netlumination.com/dodge-burn1.jpg)

Of course there's multiple ways to make the label look more believable. The burn and dodge tools are just one example.
You can also use gradients or different types of filters. What I like about the dodge and burn tools is that they are
quick and easy. Additionally they are tools that are often used while retouching photos, so it's good to get familiar
with them.

Now, on to the orange. The way I solved the problem was that I made two separate selections. One for the orange and one
for it's shadow, and I placed these selections in two separate layers, both above the jam label layer. I lowered the
opacity of the shadow layer, and I kept the opacity of the orange layer at 100:

![Orange shadow](http://img.netlumination.com/orange-shadow.jpg)

Here's a close up of the end result. I lightened the image a little, so you can see (well, sort of) that both the label
and the shadow of the orange are present. 

Since the focus of this tutorial was the vanishing point filter, I only outlined the steps for putting the orange in
front of the label.

Here is a photo with both the flat labels and the labels after the use of the vanishing point filter. You can see how
much adjusting the blend modes and using the dodge and burn tools polished their appearance. For two of the labels, I
trimed and edge off of them before using the vanishing point filter, so thtat it would appear that the wrapped around
the jar or bottle. Staying creative with little touches like that can make your end photo much more believable:

![Final image](http://img.netlumination.com/final.jpg)
