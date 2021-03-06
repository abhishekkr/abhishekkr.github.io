```meta-title: how to host your Public YUM (or any) Repo```
```meta-date: 2012-07-17 20:16:00```
```meta-updated: 2012-07-17 20:16:47```
```meta-comments: 0```
```meta-tags: rpm gae-yum-my PaaS yum-my createrepo repository yum google gae-flat-web gae appengine```



<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">almost an year ago came up the simple idea of getting a really simple static-content (html,css,js,...) website on public portal hosted by Google AppEngine for free upto a daily revived usage scheme:&nbsp;
<a href="http://gae-flat-web.appspot.com/">http://gae-flat-web.appspot.com/
</a>
<div>

</div>
<div>few days back I was just playing around custom yum repos and thought why not get up one of my own for public usage with RPMs served for either my projects or other non-available rpms, and what I came up with is:&nbsp;
<a href="http://yum-my.appspot.com/flat_web/index.htm">http://yum-my.appspot.com/flat_web/index.htm
</a>
</div>
<div>

</div>
<div>it's nothing fascinating but just a re-mixed usage of project created from
<b>
<i>
<a href="http://gae-flat-web.appspot.com/" target="_blank">gae-flat-web
</a>
</i>
</b>.
</div>
<div>

</div>
<div>you can access base skeleton of this re-mixed gae-yum-my (the easy way to host your yum repo online) at&nbsp;
<a href="https://github.com/abhishekkr/gae-yum-my">https://github.com/abhishekkr/gae-yum-my
</a>&nbsp;which also has rpm served for gae-flat-web.
</div>
<div>

</div>
<div>now to see how you could get one too~

First Task, register a new portal on
<a href="http://appengine.google.com/" target="_blank">Google AppEngine
</a> (it's free for reasonable limited usage)using your Google Account. Say, your appengine portal is name MY-YUM-MY.
</div>
<div>

</div>
<div>Now the fun begins.

cloned the starter kit

<blockquote class="tr_bq">
<b>$ git
</b> clone
</blockquote>
</div>
<div>enter the cloned repo
</div>
<blockquote class="tr_bq">
<b>$ cd
</b> gae-yum-my
</blockquote>
<div>to actually change your application name in app.yaml
</div>
<blockquote class="tr_bq">
<b>$ sed
</b> -i 's/yum-my/
<span style="background-color: white;">MY-YUM-MY/g' app.yaml
</span>
</blockquote>
<div>create the required linux distro, release branch
</div>
<blockquote class="tr_bq">
<b>$ mkdir
</b> yummy/&lt;distro&gt;&lt;releasever&gt;/&lt;basearch
<span style="background-color: white;">&gt;
</span>
</blockquote>
<div>copy all required RPMs in that distro, release branch
</div>
<blockquote class="tr_bq">
<b>$ cp
</b>&nbsp;&lt;ALL_MY_RPMS_of__DISTRO_ReleaseVer_BaseArch&gt;&nbsp;yummy/&lt;distro&gt;&lt;releasever&gt;/&lt;basearch&gt;/
</blockquote>
<div>prepare yum-repo-listing using createrepo command
</div>
<blockquote class="tr_bq">
<b>$ createrepo
</b> yummy/&lt;distro&gt;&lt;releasever&gt;/&lt;basearch&gt;/&nbsp;
</blockquote>
<div>now, place a file 'flat_web/yum-my-el6&lt;or-whichever&gt;.repo' with content&nbsp;
</div>
<blockquote class="tr_bq">
<span style="background-color: white;">[yum-my-
</span>&lt;
<span style="background-color: white;">distro
</span>&gt;&lt;
<span style="background-color: white;">releasever
</span>&gt;
<span style="background-color: white;">-
</span>&lt;
<span style="background-color: white;">basearch
</span>&gt;
<span style="background-color: white;">]
</span>
<span style="background-color: white;">&nbsp;
</span>
</blockquote>
<blockquote class="tr_bq">name=MY-YUM-MY
<span style="background-color: white;">&nbsp;
</span>
</blockquote>
<blockquote class="tr_bq">baseurl=
<a href="http://youryummy.appspot.com/yummy/%3Cdistro%3E$releasever/$basearch">http://MY-YUM-MY.appspot.com/yummy/
<span style="color: black;">&lt;
</span>distro
<span style="color: black;">&gt;
</span>$releasever/$basearch
</a>
<span style="background-color: white;">&nbsp;
</span>
</blockquote>
<blockquote class="tr_bq">
<a href="http://youryummy.appspot.com/yummy/%3Cdistro%3E$releasever/$basearch">
</a>enabled=1
<span style="background-color: white;">&nbsp;
</span>
</blockquote>
<blockquote class="tr_bq">gpgcheck=0
</blockquote>
<div>

</div>
<div>and can link this file on your 'flat_web/index.htm' homepage&nbsp;
</div>
<div>

</div>
<div>&nbsp;to host:&nbsp;
</div>
<blockquote class="tr_bq">$&nbsp;&lt;google_appengine_path&gt;/
<b>appcfg.py
</b> update&nbsp;&lt;MY-YUM-MY_path&gt;
</blockquote>
<div>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</div>
<div>

</div>
<div>now you yum repo has a homepage at http://MY-YUM-MY.appspot.com
</div>
<div>

</div>
<div>and placing tthe *.repo file above with hinted content will get the RPMs added to you repo accessible.
</div>
</div>


</div>
