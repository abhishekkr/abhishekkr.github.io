```meta-title: run PYTHON (no-script) to provide a CGI supported HTTP Server```
```meta-date: 2010-08-05 13:34:00```
```meta-updated: 2010-08-05 13:47:24```
```meta-comments: 0```
```meta-tags: server http CGIHTTPServer howto file-sharing file python cgi-bin web script cgi```


<div class="css-full-post-content js-full-post-content">

<span style="font-size: small;"><b>want HTTP Server with CGI Support, just need PYTHON without any scripts</b></span><br /><br />so to have CGI supported HTTP server, just by using PYTHON, you need to follow below steps<br /><br /><b>Step#1.&nbsp;</b><br />opening shell/command-prompt<br /><br /><b>Step#2.</b><br />$&gt;cd (change dir) to directory you want to be root of your server<br /><br /><b>Step#4.</b><br />create a directory name 'cgi-bin' or 'htbin', say "mkdir cgi-bin"<br /><br /><b>Step#5.</b><br />copy all your CGI-scripts to this newly created 'cgi-bin' directory<br /><br /><br /><b>Step#6.&nbsp;</b><br />now if anyhow you changed your directory, change it back to Parent Dir of created dir 'cgi-bin'<br /><br /><b>Step#7.&nbsp;</b><br />now run this command without quotes<b style="font-family: &quot;Courier New&quot;,Courier,monospace;">&nbsp;</b><br /><span style="font-size: large;"><b style="font-family: &quot;Courier New&quot;,Courier,monospace;">"python -m CGIHTTPServer"</b></span><br /><br />Finally, [ Say yyippppeeeee... ] Thanks...<br /><br />now you have a CGI supported Simple HTTP Server running, that can be accessed at <i><b>Port 8000</b></i> of your Server's IP/Name<br /><br />so you can test it by browsing in any web browser at <i><b>http://YOUR_SERVER_IP:8000/</b></i><br />and like if you copied <i><b>any script 'time'</b></i> to cgi-bin then its accessible at <i><b>http://YOUR_SERVER_IP:8000/cgi-bin/time</b></i>

</div>
