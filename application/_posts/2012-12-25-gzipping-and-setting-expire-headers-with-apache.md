---
layout: post
title: Gzipping and setting expire headers with Apache
tags:
- htaccess
status: publish
type: post
---
I was running the [YSLOW add-on](https://addons.mozilla.org/en-us/firefox/addon/yslow/) for my site, and the only two
suggestions it had was Gzipping content and adding expire dates.

Below is how to do both in your `.htaccess` file:

```apache
AddOutputFilterByType DEFLATE text/html text/plain application/javascript text/css
                                                                                                                                  
<FilesMatch "\.(js|css|png|jpg|jpeg|gif|ico)$">
  ExpiresActive on
  ExpiresDefault "access plus 1 month"
</FilesMatch>
```

Depending on your server configs, you might have to use [`mod_gzip`](http://wiki.dreamhost.com/Htaccess_tricks#Faster_Page_Load_Times_.2F_Bandwidth_Saver)
 instead of [`AddOutpuFilterByType`](http://httpd.apache.org/docs/2.2/mod/mod_deflate.html).

The [ExpiresDefault](http://httpd.apache.org/docs/2.2/mod/mod_expires.html) syntax is surprisingly readable.