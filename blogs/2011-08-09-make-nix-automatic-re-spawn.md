```meta-title: Make *nix automatic re-spawn a process/service if stopped```
```meta-date: 2011-08-09 14:49:00```
```meta-updated: 2011-08-09 14:49:44```
```meta-comments: 0```
```meta-tags: process linux shell script Monitor```

> was originally posted at deprecated blog [http://.blogspot.com]()


<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">
To make your *nix system automatic re-spawn a process/service if stopped ~

Write a shell script to check for presence of a service and start it if it is not running.
Then attach that shell-script to a cronjob running at frequent intervals.

Example Script to monitor Apache HTTPD web server and start it if is not started ~

<blockquote>
<b>
<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">#!/bin/sh
</span>
<br style="font-family: &quot;Courier New&quot;,Courier,monospace;" />

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">pids_=`ps ax | grep /usr/sbin/httpd | grep -v grep | wc -l `
</span>
<br style="font-family: &quot;Courier New&quot;,Courier,monospace;" />

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">if [ $pids_ -ne 0 ];
</span>
<br style="font-family: &quot;Courier New&quot;,Courier,monospace;" />

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">then
</span>
<br style="font-family: &quot;Courier New&quot;,Courier,monospace;" />

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">&nbsp;&nbsp;&nbsp;&nbsp; echo "Apache is running"
</span>
<br style="font-family: &quot;Courier New&quot;,Courier,monospace;" />

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">else
</span>
<br style="font-family: &quot;Courier New&quot;,Courier,monospace;" />

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">&nbsp;&nbsp;&nbsp;&nbsp; echo "Apache was stopped. Starting..."
</span>
<br style="font-family: &quot;Courier New&quot;,Courier,monospace;" />

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">&nbsp;&nbsp;&nbsp;&nbsp; apache_start_=`/etc/init.d/httpd start`
</span>
<br style="font-family: &quot;Courier New&quot;,Courier,monospace;" />

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">&nbsp;&nbsp;&nbsp;&nbsp; if [ $? -eq 0 ];
</span>
<br style="font-family: &quot;Courier New&quot;,Courier,monospace;" />

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">&nbsp;&nbsp;&nbsp;&nbsp; then
</span>
<br style="font-family: &quot;Courier New&quot;,Courier,monospace;" />

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; echo "Apache Started Successfully"
</span>
<br style="font-family: &quot;Courier New&quot;,Courier,monospace;" />

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">&nbsp;&nbsp;&nbsp;&nbsp; fi
</span>
<br style="font-family: &quot;Courier New&quot;,Courier,monospace;" />

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">fi
</span>
<br style="font-family: &quot;Courier New&quot;,Courier,monospace;" />

<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">#############################
</span>
</b>
</blockquote>&nbsp;this simply checks for HTTPD process to be present and re-spawn the service in absence of even a single process thread.

There is a wonderful Ruby utility "
<b>
<a href="http://www.blogger.com/">bluepill
</a>
</b>" to achieve the same solution in a more advanced and comfortable manner. Cover it sooooon.....
</div>


</div>
