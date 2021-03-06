```meta-title: User Authentication &amp; Authorization [AT] Google AppEngine```
```meta-date: 2011-06-30 16:19:00```
```meta-updated: 2011-06-30 16:19:06```
```meta-comments: 1```
```meta-tags: google appengine cloud paas authorization authentication security```

> was originally posted at deprecated blog [http://.blogspot.com]()


<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">
<div>
<b>AppEngine
</b>, a
<b>PaaS
</b> provided with a '
<b>limited free
</b>' version to all GMail users (
<i>Google Account Owners
</i>). So, you can host your WebContent their making use of Python, Java or Go.

AppEngine enables you to use existing Google A/c of your Web-App users to be used for their authentication &amp; authorization at your AppEngine-hosted Web-App also.

So, there are two main ways to acieve that:

<ol style="text-align: left;">
<li>to import google.appengine.api.
<a href="http://code.google.com/appengine/docs/python/users/">
<b>users
</b>
</a>
this
<a href="http://code.google.com/appengine/docs/python/users/">USERS module
</a> from AppEngine APIs enables your Web-App to identify the users on the basis of their Google A/c ID (GMail ID) and then make the decision of routing the user to secured Resource or forbidden resource error message.
[
<a href="http://code.google.com/appengine/docs/python/users/loginurls.html">An Example on Usage
</a> ]

</li>
<li>to specify '
<a href="http://code.google.com/appengine/docs/python/config/appconfig.html#Requiring_Login_or_Administrator_Status">
<b>login
</b>
</a>' under '
<a href="http://code.google.com/appengine/docs/python/config/appconfig.html">
<b>app.yaml
</b>
</a>'
so the major basic configuration about your Web-App and routing configuration reside in 'app.yaml' file which has default location of Web-App root location.
So, you can specify at secured '
<b>url
</b>' specifications to enforce user for a Google A/c (GMail) login.
[
<a href="http://code.google.com/appengine/docs/python/config/appconfig.html#Requiring_Login_or_Administrator_Status">An Example Of Usage
</a> ]
</li>
</ol>
</div>In, both of these implementations whenever a user tries to visit a 'secured url' on your Web-App, they are automatically redirected to Google A/c Log-In page further redirecting them back to your Web-App on succesful log-in.

<blockquote>


<div style="font-family: Verdana,sans-serif;">
<span style="font-size: large;">
<b>The
<i>Curious Case
</i> of
</b>
<b>
<a href="http://www.blogger.com/post-edit.g?blogID=2442688623759178220&amp;postID=495052797323712903">static_dir
</a>
</b>
</span>
</div>
Initially while working for my newly initiated opensource project 'py-gae-legs',
<b> I added entire 'secure URL' logic by method#1
</b> i.e. using 'users' api.
It was all working fine &amp; secured until I added some
<a href="http://code.google.com/appengine/docs/python/gettingstarted/staticfiles.html">static-content using static_dir
</a> and tried securing it's url using the same tactic.

But, there was a thing about '
<a href="http://code.google.com/appengine/docs/python/gettingstarted/staticfiles.html">static_dir
</a>' which I investigated after my
<b>supposed-to-be secure
</b> static_dir's content
<b>was all publicly availabl
</b>e if someone could enumerate/know the complete url.

<i>
<span style="font-family: Georgia,&quot;Times New Roman&quot;,serif;">{I'm in the category of people who keep their learning pace up along with working over it... and anyway I wasn't gonna read the entire #^(
</span>
</i>

The thing about it was... the
<b>directories marked to be 'static_dir'
</b> in 'app.yaml' are
<b>no more located
</b> on the AppEngine Server
<b>in the same location after you update your Web-App
</b>.
So, the entire directory structure would remain same... it's just that the
<b>'static_dir' marked locations
</b> would somehow
<b>vanish from
</b> it on your
<b>Web-App's location at AppEngine
</b>and
<b>served from some other provision
</b> made by Google which maps back to the location.


<b>So, to secure
</b> the 'static_dir' located urls... the only way ( that I know of ) is to implement it at the very core of Web-App configurations i.e. in 'app.yaml'
<b>using the Method#2
</b>.

So, you can enforce Google Login to be mandatory by setting 'login:required' for that 'url' setting. If you want only a selected Users to see that, then you'll have to add all those Google A/c (GMail) IDs by doing following

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">[a.]
<b>goto Dashboard of your GoogleAppEngine Web-App
</b>,
</span>

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">the URL-Box link would look like:
</span>

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">
<span style="color: yellow;">https://appengine.google.com/permissions?app_id=s%7E$GAE_APPLICATION_NAME
</span>
</span>

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">[b.]
<b>click the link 'Permission'
</b> from Right-Menu-Column,
</span>

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">[c.] now,
<b>invite all those user's by providing their e-mail ID
</b>and changing their role to 'Viewer'
</span>and at app.yaml provide '
<b>login:admin
</b>' instead of '
<b>login:required
</b>'.
</blockquote>


<div>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Lately, I've been involved at starting an
<b>OpenSource
</b> project '
<b>
<a href="https://github.com/abhishekkr/py-gae-legs" title="created a basic architecture, wokring on automated generation part">py-gae-legs
</a>
</b>'.

It's a very
<i>
<b>basic subset
</b>
</i> of
<i>
<b>WebApp-Framework
</b>
</i>
<b>for the lovers of
<a href="http://rubyonrails.org/" title="Ruby On Rails">RoR
</a>
</b> (have been working on it for past few months, love the ease it gives but hate the convention being the soul) style of web-app creation.

This project just aims web-development
<b>specifically aimed to be hosted over AppEngine
</b> (
<i>currently
</i>).
Almost done with
<b>it's basic starters
</b> to look at:
[]
<b>
<a href="https://github.com/abhishekkr/gae-flat-web">gae-flat-web
</a>
</b> : to create an architecture hosting your already created static website,
<a href="http://gae-flat-web.appspot.com/">http://gae-flat-web.appspot.com
</a>
[]
<b>
<a href="https://github.com/abhishekkr/gae-private-web">gae-private-web
</a>
</b> : [
<b>W.I.P.
</b>] to host all your private content hosted securely (by Google) in an by-invite only website
</div>
</div>


</div>


<div class="css-full-comments-content js-full-comments-content">


<div class="css-full-comment js-full-comment">


<div class="css-comment-user-link js-comment-user-link">


<a href="http://www.blogger.com/profile/14178155909391788234">


<div class="css-comment-name js-comment-name">

    Sudhir DBAKings


</div>


</a>


<div class="css-comment-date js-comment-date">

    2013-07-04T06:14:53.106Z


</div>


</div>


<div class="css-comment-content js-comment-content">

    Nice post very helpful


<a href="http://dbakings.com/ASP/ASPAuthenticationAuthorization.aspx" rel="nofollow">dbakings
</a>


</div>


<br/>



</div>


</div>

