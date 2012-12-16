---
layout: post
title: How to SEO header meta keywords and descriptions with Wordpress
tags:
- seo
- wordpress
type: post
---
The default Wordpress installation does not produce either a description or keywords meta tag in the header. There are
plugins you can use to solve this problem, but why use a plugin when you can solve the problem with a few lines of code?
Writing the code yourself with teach you about Wordpress, PHP, and XHTML. This will enable you to solve  future web site
problems easier. Additionally, you'll have one less plugin to keep track of, giving you a leaner, meaner, Wordpress
installation.

After a brief introduction, I'll delve right into the code, and show you how to add these meta tags to your pages by
modifying the header.php file of your theme.

While the description and keyword meta tags are not as important for search engine optimization (SEO) as they used to
be, they are still important. The description is often used verbatim as the wording under a link to your site by many
search engines. Keywords may be less important, since search engine now often rely on the content of your pages, but it
can be nice to include them for that extra little boost in SEO and as a reminder to yourself of what words you are  
trying to optimize a particular page to.

This solution will write out custom keywords and description for all you Wordpress pages and individual blog posts. We
will make use of the "Custom Fields" area for your posts and pages in the Wordpress administration panel. This will
allow us to customize each post and page, and the meta information will be readilly visible in the administration panel
when we look at a post or page.


The first step is to create two new custom fields, one for the keywords and one for the description. Open your Worpress
administration panel and click to edit an existing post or page. Under the Custom Fields area choose "Enter New" and
create a field for keywords and a field for the description:

![New custom field](http://img.netlumination.com/new-custom-field.jpg)

I called mine "seo-description" and "seo-keywords":  

![The custom fields](http://img.netlumination.com/the-custom-fields.jpg)

Now, you can go ahead and fill out the meta information for each post and page. I'd suggest only filling out the
description and keywords for one post. You can use this one as a test post. Once you see that everything is working
correctly, you can go back and fill out the information for all the other pages and posts.  Okay, now we're going to
start to add in the code that will make everything display correctly. We're going to be working witht he "header.php"
file of you current theme. So, go ahead and open up the file.... You can check what them you are using in your admin
panel. Just click on Appearance &gt;&gt; Themes. Under "Current Theme" there'll be a line that says, all of this theme's
files are located in, "themes/blah-blah." Go to that directory and fetch header.php through FTP or just use the built in
editor in the admin panel. This is found at Appearance&gt;&gt;Editor. Under "Theme Files" click on "Heder (header.php)."
We want our meta information to appear in the header, usually right below the title. The end result we are looking for
is something like this:

``` html
<title>Your Blogs Title</title>
<meta name="description" content="[your custom description for this page]" />
<meta name="keywords" content="[your custom keywords for this page]" />
```

Let's start with the description. First we'll check whether the page or post has a custom description. If it does, we'll
display that. If it doesn't we'll just display your blogs tagline. The trick here is that in Wordpress there is a
[get_post_meta function](http://codex.wordpress.org/Function_Reference/get_post_meta) that you can use to
retrieve the custom keyword and description info you put in. If you on your site somewhere where you are showing only a
single blog post or a single page this function will work.  Let's try:

``` php
<?php $seodescription = get_post_meta($post->ID, "seo-description", true); ?>
```

This will get our meta description, “seo-description” for the post we are displaying and assign it to the variable
`$seodescription` (it’s not good to use variables with hyphens in PHP ). Now we can simply use

``` php
<?php echo $seodescription; ?>
```

This will print out the custom description. So far our solution is:

``` php
<meta name="description" content="<?php
    $seodescription = get_post_meta($post->ID, "seo-description", true);
    echo $seodescription;
  ?>" />
```

This is one of the things that is so nice about PHP. You can insert it directly into XHTML wherever you want.  The only
problem is that we may have a page or post that we haven't gotten around to adding custom keyword and description meta
tags to. The about code will not create an error in this case. It will just print empty quotation marks. This is because
the PHP variable $seodescription will be zero if get_post_meta finds nothing. We can make use of this with an if
statement. In php an if statement will execute if the condition is not zero, and the if statement will not execute if
the condition is zero.  In other words

``` php
<?php
if ( $mynumber = 0 ) {
    echo "hi!";
} else {
    echo "bye...";
}
```

Will print "bye..." because the if statement is 0. 0 means false to PHP. So, of course

``` php
<?php
if ( $mynumber = 8.5 ) {
    echo "hi!";
} else {
    echo "bye...";
}
```

Will print "hi!" since the if statement is not 0.  Let's apply this to meta tags. If there is custome meta description,
we will display it, and if there is none, we will nothing. It's not a good idea to put a default description or keywords
on pages, since this will make multiple pages have the same description and keywords. This is confusing for search
engines, since how can two pages have the same descriptin but different content? We will check if there is a custom
description with an if statement. The only tricky part here is that PHP actually goes ahead and assigns a value to the
variable inside the if statement. This is because we used "=" which means set equal to. So, here goes:

``` php
<?php
if ($seodescription = get_post_meta($post->ID, "seo-description", true)) {
    ?>
    <meta name="description" content="<?php echo $seodescription; ?>" />
    <?php
} ?>
```

Now we just do the same for the keywords. So for keywords, using the same idea as above we have:

``` php
<?php
if ($seokeywords = get_post_meta($post->ID, "seo-keywords", true)) {
    ?>
    <meta name="keywords" content="<?php echo $seokeywords; ?>" />
    <?php
} ?>
```

There is one final thing to take care of. If we use this code as is, then on pages that dispaly multiple posts, we're
going to display the description and keywords for just the first post. To get around this we'll use the Wordpress
function <a href="http://codex.wordpress.org/Function_Reference/is_singular">is_singular()</a> . This function returns
true if only one page or post is being displayed and false if not. You can use an else statement to display defualt meta
data. This default meta date will only go on pages that show more than one post.  Ok, so here we have the whole
enchilada starting with the title tag:

``` php
<title>CODE-TO-DISPLAY-MY-BLOG-NAME</title>
<?php
if ( is_singular() ) {

    if ($seodescription = get_post_meta($post->ID, "seo-description", true)) {
        ?>
        <meta name="description" content="<?php echo $seodescription; ?>" />
        <?php
    }

    if ($seokeywords = get_post_meta($post->ID, "seo-keywords", true)) {
        ?>
        <meta name="keywords" content="<?php echo $seokeywords; ?>" />
        <?php
    }

}
?>
```


Take a look at this page. Here is what my admin panel looked like for this post (before I migrated to Jekyll).

![This post](http://img.netlumination.com/this-post.jpg)

And here you can see that the meta tags are really displayed in the source page (or you can check in your own browser):

![Source code](http://img.netlumination.com/source-code.jpg)

And there we have it, custom keyword and description meta tags for your Wordpress theme using no plugins.
