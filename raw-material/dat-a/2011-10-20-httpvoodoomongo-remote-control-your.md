```meta-title: http_voodoo_mongo ~ remote control your MongoDB over HTTP```
```meta-date: 2011-10-20 16:23:00```
```meta-updated: 2011-10-20 16:24:43```
```meta-comments: 1```
```meta-tags: REST github mongo mongodb project http ruby API linux voodoo http_voodoo_mongo database opensource```

> was originally posted at deprecated blog [http://.blogspot.com]()


<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">@github:&nbsp;
<a href="https://github.com/abhishekkr/http_voodoo_mongo">
<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">https://github.com/abhishekkr/http_voodoo_mongo
</span>
</a>

<div class="separator" style="clear: both;">
<a href="http://2.bp.blogspot.com/-4LzEfIXCMi4/TqBGA3vnClI/AAAAAAAAAwc/3jfBTOD8MMw/s1600/http_voodoo_mongodb.jpg" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;">
<img border="0" height="200" src="http://2.bp.blogspot.com/-4LzEfIXCMi4/TqBGA3vnClI/AAAAAAAAAwc/3jfBTOD8MMw/s200/http_voodoo_mongodb.jpg" width="150" />

</a>
</div>
<div style="text-align: left;">

</div>
<div style="text-align: left;">project name:&nbsp;
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">http_voodoo_mongo
</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">platform:
</span>
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">&nbsp; &nbsp; &nbsp;linux
</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">requirement:
</span>
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">&nbsp; ruby
</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">

</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">usage:
</span>
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;"> it's a remote controller for your local/remote MongoDB instances working over an HTTP mocking service
</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">

</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">What it consists of?
</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">

</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">[] a rakefile 'Rakefile' allowing you to auto install and start 'http_voodoo_mongo' as a system service using "rake http_mongo:install" task.
</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">

</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">[] a ruby script 'mongo_voodoo.rb' which mocks HTTP Server and allows you control MongoDB using HTTP Requests.
</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">

</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">[] a system service script 'mongo_voodoo' which enables you to start||stop||status||restart the Ruby Script as a System Service
</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">

</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">
<b>*currently I've just added "mongodump" task to it (with &amp; without authorization detail), will slowly add more..... it's all opensource, even you can update if you want
</b>
</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">

</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">

</span>
</div>
<div style="text-align: left;">
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">
<span class="Apple-style-span" style="font-family: 'Times New Roman';">======================================================
</span>
</span>
</div>a REST API for Remote Controlling MongoDB Server over HTTP using the same 'authentication' as of MongoDB Server

<div>

</div>
<div>[] need to access the service at HTTP_URL =&gt; http://[MongoDB_IP]:30303/
</div>
<div>

</div>
<div>[] Optional GET Request Parameters [name] the username permitted access [pass] the password linked to username [port] the port at which MongoDB Server is running
</div>
<div>

</div>
<div>&nbsp;::MongoDB Database Backup&nbsp;
</div>
<div>&nbsp; http://[MongoDB_IP]:30303/[db_name]?action=dump&amp;dir=[dir]&amp;more_switch=[more_switch]&amp;userniame=[username]&amp;password=[password]&amp;port=[port]&nbsp;
</div>
<div>

</div>
<div>[] GET Parameters [dir] the directory to take in backup using mongodump [more_switch] any options you wanna add to mongodump command&nbsp;
</div>======================================================
</div>


</div>


<div class="css-full-comments-content js-full-comments-content">


<div class="css-full-comment js-full-comment">


<div class="css-comment-user-link js-comment-user-link">


<a href="http://thedilettantista.com/">


<div class="css-comment-name js-comment-name">

    thedilettantista.com


</div>


</a>


<div class="css-comment-date js-comment-date">

    2011-11-04T14:58:29.835Z


</div>


</div>


<div class="css-comment-content js-comment-content">

    Hi there! My name is Lindsay, and I’m the Community Manager at DZone.com, a website that offers content and links to the development and software community. I’d like to tell you about our Most Valuable Bloggers program, a free program that brings content from excellent blogs such as yours to our audience. If you are interested please e-mail me at lgordon@dzone.com. I hope to hear from you!

(The Wordpress login I used is for my personal blog, which is 100% unrelated to my roles at DZone.  Your commenting system wouldn&#39;t let me log in any other way.  Feel free to read my blog if you&#39;d like, but it is pretty development/software free as that is an area in which I have minimal knowledge. However there is plenty of nerdy goodness!)


</div>


<br/>



</div>


</div>
