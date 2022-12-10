```meta-title: Host Your Site on Google AppEngine in 7 Easy Steps```
```meta-date: 2011-06-22 16:51:00```
```meta-updated: 2011-06-23 13:35:11```
```meta-comments: 0```
```meta-tags: PaaS website python google project gae-flat-web appengine```

> was originally posted at deprecated blog [http://.blogspot.com]()


<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">Project/
<b>Example
</b> Site:
<a href="http://gae-flat-web.appspot.com/">http://gae-flat-web.appspot.com
</a>



Host Your Site on Google AppEngine in 7 Easy Steps:

<ol style="text-align: left;">
<li>&nbsp;Register any
<b>$App
</b> at
<a href="http://appengine.google.com/">
<b>Google ApEngine
</b>
</a>
<i>
</i>using your
<i>
<b>Gmail
</b>
</i>Account
<i>
{as if $App is you Application Name giving you url like $App.appspot.com}
</i>

</li>
<li>&nbsp;
<b>Download
</b> the Python Script
<b>'
<a href="http://flat.py/">flat.py
</a>'
</b>provided on this
<a href="http://gae-flat-web.appspot.com/">site
</a> or from
<a href="https://github.com/abhishekkr/gae-flat-web">repo
</a>

</li>
<li>&nbsp;Execute
<b>#python flat.py $App
</b>

</li>
<li>&nbsp;It will
<b>created
</b> required structure in a
<b> dir $App
</b>

</li>
<li>&nbsp;
<b>Copy
</b> all your static site to
<b>$App/flat_web/*
</b>

</li>
<li>&nbsp;
<b>Download
</b> "
<a href="http://www.blogger.com/">Google AppEngine
<b> Python SDK
</b>
</a>"

</li>
<li>&nbsp;Update this $App using Google AppEngine SDK as

<b>&nbsp;&nbsp;&nbsp; #python appcfg.py update $Path_to_App
</b>
</li>
</ol>
<div style="text-align: left;">
[[ Your own Static Content Website served by Google AppEngine ]]
</div>
&nbsp;It's
<b>GitHub Repository
</b>:
<a href="https://github.com/abhishekkr/gae-flat-web">https://github.com/abhishekkr/gae-flat-web
</a>
</div>


</div>
