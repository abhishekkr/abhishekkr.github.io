```meta-title: ci-go-nfo v0.0.1 : console util for ThoughtWorks' Go CI Server```
```meta-date: 2012-09-19 18:07:00```
```meta-updated: 2012-09-19 18:11:04```
```meta-comments: 0```
```meta-tags: server agile ci rubygem go continuous delivery continuous integration utility ci-go-nfo ruby thoughtworks gem console```



<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">

<div class="separator" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em; text-align: center;">
<a href="http://abhishekkr.github.com/ci-go-nfo" target="_blank">
<img border="0" src="http://4.bp.blogspot.com/-XBit_cihSts/UFoCEAy97FI/AAAAAAAAB0U/es4_QYDyS04/s1600/cigonfo.jpg" />

</a>
</div>

<a href="http://abhishekkr.github.com/ci-go-nfo" target="_blank">
<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">ci-go-nfo
</span>
</a> v0.0.1



Just a rubygem console utility to get focussed INFO about your Go Continuous Integration pipeline easily, no more switching again to browsers.

@
<a href="https://rubygems.org/gems/ci-go-nfo" target="_blank">RubyGems
</a>:
<a href="https://rubygems.org/gems/ci-go-nfo">https://rubygems.org/gems/ci-go-nfo
</a>

@
<a href="https://github.com/abhishekkr/ci-go-nfo" target="_blank">GitHub
</a>:&nbsp;
<a href="https://github.com/abhishekkr/ci-go-nfo">https://github.com/abhishekkr/ci-go-nfo
</a>



<i>
<b>
<span style="font-size: large;">Installation
</span>&nbsp;
</b>
</i>


<b>$
</b> gem install ci-go-nfo




<span style="font-size: large;">
<i>
<b>Usage   Ci-Go-Nfo ver.0.0.1
</b>
</i>&nbsp;
</span>

to set-up credential config for your go-ci
$
<b>ci-go-nfo setup
</b>
it asks for
(a.) the location where you want to store your configuration file
(b.) the URL for your Go Server like http://my.go.server:8153
(c.) then username and password (create a read-only a/c for it)



to show go-ci info of all runs
$
<b>ci-go-nfo
</b>

to show go-ci info of failed runs
$
<b>ci-go-nfo fail
</b>

to show go-ci info of passed runs
$
<b>ci-go-nfo pass
</b>

_____

.....more to come



<span style="font-size: large;">output example:
</span>

&nbsp;$
<b>ci-go-nfo setup
</b>

<div style="background-color: black;">
<span style="color: #999999;">&nbsp;
</span>
<span style="color: red;">
<span style="color: #999999;">Store sensitive Go Configs in file {current file: /home/myuser/.go.abril}:
</span>
<br style="color: #999999;" />

<br style="color: #999999;" />

<span style="color: #999999;">&nbsp;Enter Base URL of Go Server {like http://
<ip>:8153}:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span style="color: #cccccc;">http://my.go.server:8153
</span>
</ip>
</span>
<br style="color: #999999;" />

<br style="color: #999999;" />

<span style="color: #999999;">&nbsp;This is better to be ReadOnly account details...
</span>
<br style="color: #999999;" />

<br style="color: #999999;" />

<span style="color: #999999;">&nbsp;Enter Log-in UserName:
<span style="color: #cccccc;">go_user
</span>
</span>
<br style="color: #cccccc;" />

<br style="color: #999999;" />

<span style="color: #999999;">&nbsp;Password:
<span style="color: #cccccc;">restrictedpassword
</span>
</span>
</span>
<b style="color: #cccccc;">

</b>
</div>
<div style="color: #cccccc;">

</div>&nbsp;$
<b>ci-go-nfo pass
</b>

<div style="background-color: black;">&nbsp;
<b>
<span style="color: red;">my_pipeline -&gt; specs -&gt; specs
</span>
</b>
</div>
<div style="background-color: black;">&nbsp;
<b style="color: lime;">Success
</b>&nbsp;
<span style="color: #999999;"> for run#
</span>
<span style="color: #6aa84f;">2
</span>
<span style="color: #f1c232;">at 2012-09-19T04:24:38
</span>
</div>
<div style="background-color: black;">&nbsp;
<span style="color: #999999;">details at
</span>
<span style="color: #3d85c6;">http://my.go.server:8153/go/tab/build/detail/my_pipeline/10/specs/2/specs
</span>
</div>
<div style="background-color: black;">
&nbsp;
<b style="color: red;">my_pipeline -&gt; package -&gt;gemify
</b>
</div>
<div style="background-color: black;">&nbsp;
<b>
<span style="color: lime;">Success
</span>
</b>&nbsp;
<span style="color: #cccccc;"> f
<span style="color: #999999;">or run#
</span>
</span>
<span style="color: #6aa84f;">1
</span>
<span style="color: #f1c232;">at 2012-09-19T07:04:39
</span>
</div>
<div style="background-color: black;">&nbsp;
<span style="color: #999999;">details at
</span>
<span style="color: #3d85c6;">http://my.go.server:8153/go/tab/build/detail/my_pipeline/10/package/1/gemify
</span>
</div>
&nbsp;$
<b>ci-go-nfo fail
</b>

<div style="background-color: black;">&nbsp;
<b>
<span style="color: red;">your_pipeline -&gt; smoke -&gt; cukes
</span>
</b>
</div>
<div style="background-color: black;">&nbsp;
<b style="color: lime;">Failure
</b>&nbsp;
<span style="color: #999999;"> for run#
</span>
<span style="color: #6aa84f;">5
</span>
<span style="color: #f1c232;">at 2012-09-19T04:24:38
</span>
</div>
<div style="background-color: black;">&nbsp;
<span style="color: #999999;">details at
</span>
<span style="color: #3d85c6;">http://my.go.server:8153/go/tab/build/detail/your_pipeline/7/smoke/5/cukes
</span>
</div>
&nbsp;$
<b>ci-go-nfo
</b>

<div style="background-color: black;">&nbsp;
<b>
<span style="color: red;">my_pipeline -&gt; specs -&gt; specs
</span>
</b>
</div>
<div style="background-color: black;">&nbsp;
<b style="color: lime;">Success
</b>&nbsp;
<span style="color: #999999;"> for run#
</span>
<span style="color: #6aa84f;">2
</span>
<span style="color: #f1c232;">at 2012-09-19T04:24:38
</span>
</div>
<div style="background-color: black;">&nbsp;
<span style="color: #999999;">details at
</span>
<span style="color: #3d85c6;">http://my.go.server:8153/go/tab/build/detail/my_pipeline/10/specs/2/specs
</span>
</div>
<div style="background-color: black;">
&nbsp;
<b style="color: red;">my_pipeline -&gt; package -&gt;gemify
</b>
</div>
<div style="background-color: black;">&nbsp;
<b>
<span style="color: lime;">Success
</span>
</b>&nbsp;
<span style="color: #cccccc;"> f
<span style="color: #999999;">or run#
</span>
</span>
<span style="color: #6aa84f;">1
</span>
<span style="color: #f1c232;">at 2012-09-19T07:04:39
</span>
</div>
<div style="background-color: black;">&nbsp;
<span style="color: #999999;">details at
</span>
<span style="color: #3d85c6;">http://my.go.server:8153/go/tab/build/detail/my_pipeline/10/package/1/gemify
</span>
</div>
<div style="background-color: black;">

</div>
<div style="background-color: black;">&nbsp;
<b>
<span style="color: red;">your_pipeline -&gt; smoke -&gt; cukes
</span>
</b>&nbsp;
<b style="color: lime;">Failure
</b>&nbsp;
<span style="color: #999999;"> for run#
</span>
<span style="color: #6aa84f;">5
</span>
<span style="color: #f1c232;">at 2012-09-19T04:24:38
</span>&nbsp;
<span style="color: #999999;">details at
</span>
<span style="color: #3d85c6;">http://my.go.server:8153/go/tab/build/detail/your_pipeline/7/smoke/5/cukes
</span>
</div>
</div>


</div>
