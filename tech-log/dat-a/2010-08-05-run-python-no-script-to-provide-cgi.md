```meta-title: run PYTHON (no-script) to provide a CGI supported HTTP Server```
```meta-date: 2010-08-05 13:34:00```
```meta-updated: 2010-08-05 13:47:24```
```meta-comments: 0```
```meta-tags: server http CGIHTTPServer howto file-sharing file python cgi-bin web script cgi```



<div class="css-full-post-content js-full-post-content">


<span style="font-size: small;">
<b>want HTTP Server with CGI Support, just need PYTHON without any scripts
</b>
</span>

so to have CGI supported HTTP server, just by using PYTHON, you need to follow below steps


<b>Step#1.&nbsp;
</b>
opening shell/command-prompt


<b>Step#2.
</b>
$&gt;cd (change dir) to directory you want to be root of your server


<b>Step#4.
</b>
create a directory name 'cgi-bin' or 'htbin', say "mkdir cgi-bin"


<b>Step#5.
</b>
copy all your CGI-scripts to this newly created 'cgi-bin' directory



<b>Step#6.&nbsp;
</b>
now if anyhow you changed your directory, change it back to Parent Dir of created dir 'cgi-bin'


<b>Step#7.&nbsp;
</b>
now run this command without quotes
<b style="font-family: &quot;Courier New&quot;,Courier,monospace;">&nbsp;
</b>

<span style="font-size: large;">
<b style="font-family: &quot;Courier New&quot;,Courier,monospace;">"python -m CGIHTTPServer"
</b>
</span>

Finally, [ Say yyippppeeeee... ] Thanks...

now you have a CGI supported Simple HTTP Server running, that can be accessed at
<i>
<b>Port 8000
</b>
</i> of your Server's IP/Name

so you can test it by browsing in any web browser at
<i>
<b>http://YOUR_SERVER_IP:8000/
</b>
</i>
and like if you copied
<i>
<b>any script 'time'
</b>
</i> to cgi-bin then its accessible at
<i>
<b>http://YOUR_SERVER_IP:8000/cgi-bin/time
</b>
</i>


</div>
