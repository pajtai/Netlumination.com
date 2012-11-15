---
layout: post
title: PluGeSHin
tags:
- Wordpress
status: publish
---
<h2>A Wordpress Plugin for GeSHi</h2>
<h3><a name="description"></a>Description</h3>

** Note: syntax highlighting on this page is no longer done by PluGeSHin.... line number, etc are not added yet **
** This blog is no longer Wordpress **
** PluGeSHin is still a working plugin for Wordpress **

&nbsp;<a href="http://netlumination.com/blog/plugeshin">PluGeSHin</a> is a <a href="http://wordpress.org/">Wordpress</a> 
plugin by Peter Ajtai that lets you use the syntax highlighting of  <a href="http://qbnz.com/highlighter/">GeSHi</a> 
through Wordpress <a href="http://codex.wordpress.org/Shortcode_API">shortcodes</a>.

You can <a href="http://wordpress.org/extend/plugins/plugeshin/">download PluGeSHin and read about it over at Wordpress.org</a>.

This page has samples of PluGeSHin in action.

<strong>Highlighting with the default language (JS in my case) and default setting for line numbers showing:</strong>

    [geshi]CODE[/geshi]

{% highlight javascript %}
var toggle = function(theId) {
    var ellie = document.getElementById(theId);
    (ellie.style.display   !== 'none' ?
         ellie.style.display = 'none' :
         ellie.style.display = 'block'  );
{% endhighlight %}

<strong>Highlighting PHP without line numbers:</strong>

    [geshi lang="php" nums="0"]CODE[/geshi]

{% highlight php %}
<?php
class SumOfPower {
    function __construct () {
        // Start Timer
        $Timer1 = new CalcTimer;
        $Timer1 -> StartTimer();
        $number = sprintf( number_format(pow(2,1000), 0));
        for ($count=0; $count < strlen($number); $count++) {
            $digit+=$number[$count];
        }
        echo "The sum is $digit.<br/>";
        // Stop Timer
        $Timer1 -> StopTimer();
    }
}
?>
{% endhighlight %}

<strong>Highlighting C++ with line numbers, starting at line 37 and drawing attention to the fourth and 13th lines:</strong>

    [geshi lang="cpp" start="37" nums="1" highlight="4,13"]CODE[/geshi]

{% highlight cpp %}
    #include <iostream>
    #include <string>
    #include <sstream>
    #include <algorithm>
    #include <iterator>
     
    int main() {
    using namespace std;
    string sentence = "où chante une rivière";
    istringstream iss(sentence);
    copy(istream_iterator<string>(iss),
    istream_iterator<string>(),
    ostream_iterator<string>(cout, "\n"));
    }
{% endhighlight %}

Opening documentation links in a new tab:

    [geshi lang="php" target="_blank"]CODE[/geshi]

{% highlight php %}
<?php
    $string = 
        "July 1, 2000 is on a " . 
        date("l", mktime(0, 0, 0, 7, 1, 2000));
?>
{% endhighlight %}
