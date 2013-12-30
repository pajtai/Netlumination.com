---
layout: post
title: Using Multiple Loops in Wordpress with query_posts() and get_categories()
tags:
- category
- foreach
- get_categories
- query_posts
- template
- the loop
- wordpress
- tutorial
---

This is a tutorial to demonstrate how to show entire posts from multiple categories in Wordpress. This would be
especially useful for blogs that contain very short posts like a photo with a short description. This is a very simple
problem and solution, but I didn't find many posts describing how to do it, so I thought it may help a few people out.

In some blogs, it can be useful to show entire posts from multiple categories on one page. For instance for a recipe
blog you may want to list the name of each of your recipe categories and the recipes in each of those categories.
This would look something like:


    Breakfast Recipes
        [Eggs Benedicts Recipe Post]
        [Pancakes Recipe Post]
    Lunch Recipes
        [Grilled Cheese Sandwish Recipe Post]
    Dinner Recipes
        [Fettucini Alfredo Recipe Post]
        [Lasagna Recipe Post]

Wordpress uses [The Loop](http://codex.wordpress.org/The_Loop) to display posts. In this case we want to first retrieve
all the categories from the database, then we want to cycle through each category and use The Loop to display all the
posts in that category.

For most pages on your Wordpress site, the url of the page will contain a query string which will dictate which posts
are shown with The Loop. We can overide any existing query string using the
[query_posts()](http://codex.wordpress.org/Template_Tags/query_posts) function to display the specific posts we want.
The nice thing is that we can use the [query_posts()](http://codex.wordpress.org/Template_Tags/query_posts) function
multiple times in order to run The Loop multiple times on the same page.

There are several ways of using [multiple Loops](http://codex.wordpress.org/The_Loop#Multiple_Loops) in Wordpress. With
using multiple query_posts, the only trick is that you should save and reset the original query for the page. This is so
that later down the page (like in the Sidebar) you can use all the functions that apply to the page you're on and not
on the last query_post you performed. The query is stored in `$wp_query`, so we can use 

``` php
<?php
$temp_query = $wp_query;
```

before the Loops to save the query, and we can use 

``` php
<?php
$wp_query = $temp_query;
```

at the end of the Loops to retrieve it. This is like in Multiple Loops Example 2 from
[The Loops Wordpress page](http://codex.wordpress.org/The_Loop#Multiple_Loops).

There are basically two important parts of this loop. First we must create an array that lists all the categories. Then
we cycle through that array and retrieve all the posts from each category, one category at a time. To create an array of
all the categories we'll use [get_categories()](http://codex.wordpress.org/Function_Reference/get_categories). This
simply returns an array with all the categories. Now, this array has a lot of information associated with it. To get an
idea of what it looks like you can always print the array out in readable form with

``` php
<?php
print_r( get_categories() );
```

There's information like the name and category ID for each category. We'll make use of those.


To show the posts in a category we have to use query_posts and an identifying characteristic of the category we want.
The name of the category isn't always the best solution. For example if you have a category called, "Breakfast &amp;
Juices," the ampersand will trip the PHP up, so we'll just use the ID number of the category. If we make our category
array like this: 

``` php
<?php
$categories=get_categories();
```

Then we can retrieve the category ID from the created array with `$category->cat_ID`, and We can retrieve
the name of the category with `$category->name`.

Finally, putting everything together we get:

``` php
<?php $temp_query = $wp_query; ?>
  <?php $categories=get_categories();
  foreach($categories as $category)
  { ?>

    <h2><?php echo($category->name); ?></h2>
    <?php query_posts("cat=$category->cat_ID"); ?>
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

      [ YOUR POST DISPLAYING CODE GOES HERE ]

    <?php endwhile; endif; ?>
  } ?>

<?php $wp_query = $temp_query; ?>
```

If you want to see what happens if you don't reassign the original query just remove the last line. It will probably
make your sidebar say something odd... though the particulars will depend on the theme you're using.

This solution will work if you do not have child categories. If you do have child categories (an example would be Ice
Cream category in the Deserts parent category), then you will get repetition of posts, since this will display all the
posts from all parent categories then the posts for child categories. There are several ways to resolve this. The
simplest way is to only display parent categories and not child categories. To do this we must check if a category is a
child before we display it's posts. To do this we'll use <code>$category-&gt;parent</code>. This returns the parent of
the category. If it returns nothing, or false, we know that the category is not a child but a parent. We'll put an if
statement that only proceeds if there is no parent of the category inside the foreach loop. Here we go:

``` php
<?php $temp_query = $wp_query; ?>

<?php $categories=get_categories();

foreach($categories as $category)
{

    if(!$category->parent)
    {

        ?>
        <h2><?php echo($category->name); ?></h2>

        <?php query_posts("cat=$category->cat_ID"); ?>

        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            [ YOUR POST DISPLAYING CODE GOES HERE ]
        <?php endwhile; endif; ?>
    }
}

$wp_query = $temp_query; ?>
```

