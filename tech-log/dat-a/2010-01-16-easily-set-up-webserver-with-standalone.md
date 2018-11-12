```meta-title: Easily Set Up a WebServer with a StandAlone Executable JAR```
```meta-date: 2010-01-16 13:43:00```
```meta-updated: 2010-08-03 11:27:18```
```meta-comments: 0```
```meta-tags: server open source http abk beta web SiteHoster```



<div class="css-full-post-content js-full-post-content">

To set up a WebServer on your machine, a very easy way would be to use 'ABK SiteHoster', a project currently in its beta stage... just a standalone executable JAR... no complex configuration required...

demo @ Youtube:&nbsp;http://www.youtube.com/watch?v=CogPa646vi8

Using:
[Step#1]
Download JAR file from any of the two locations below


<span class="Apple-style-span" style="color: #cccccc; font-family: 'Trebuchet MS',Trebuchet,Verdana,sans-serif; font-size: 13px; line-height: 20px;">
<span style="font-family: Arial; font-size: small;">
<span style="white-space: pre;">
<span style="font-size: x-large;">
<span style="color: #f9cb9c;">Sourceforge
</span>
</span>
</span>
<span style="font-size: 13px; white-space: pre;"> Link :
<a dir="ltr" href="http://sourceforge.net/projects/sitehoster/" rel="nofollow" style="color: #aa77aa; text-decoration: none;" target="_blank" title="http://sourceforge.net/projects/sitehoster/">http://sourceforge.net/projects/sitehoster/
</a>&nbsp;
</span>
</span>
</span>

<div style="margin: 0px;">
<span class="Apple-style-span" style="font-family: Arial; font-size: 13px; white-space: pre;">
<span style="font-size: x-large;">
<span style="color: #f9cb9c;">Google Code
</span>
</span> Link :
<a dir="ltr" href="http://code.google.com/p/sitehoster/" rel="nofollow" style="color: #aa77aa; text-decoration: none;" target="_blank" title="http://code.google.com/p/sitehoster/">http://code.google.com/p/sitehoster/
</a>
</span>
</div>


say you downloaded a file named "http09_v0.5beta.jar"

[Step#2]
Copy your WebSite (currently no Server Side Scripting supported) to any folder, whose Absolute Path is say "C:\temp\WebDocs"

[Step#3]
open command prompt, change directory to&nbsp;"http09_v0.5beta.jar"'s directory&nbsp;and execute following command

cmd&gt; java -jar&nbsp;http09_v0.5beta.jar "C:\temp\WebDocs"

if you want "C:\temp\WebDocs\index.html" to be default file opened at Website root, then instead run following command

cmd&gt; java -jar&nbsp;http09_v0.5beta.jar "C:\temp\WebDocs" index.html

if Port 80 of your machine is already busy, and you want to run it at some other port say 1234, then run following command

cmd&gt; java -jar&nbsp;http09_v0.5beta.jar "C:\temp\WebDocs" index.html 1234

[NOTE]
if you are on Linux/Unix not Windows follow the Note at end of this post


PreRequirement:
Instrall Java Virtual Machine on your Computer System.

Syntax :

[] Starting HTTP Server hosting web files in
<c:\webdoc\> folder with
<index.htm> as default file to open when root of IP accessed (it opens at Port 80 by default)
</index.htm>
</c:\webdoc\>
SYNTAX:
"java -jar http09_v0.5a.jar C:\WebDoc\ index.htm"

[] Starting HTTP Server hosting web files in
<c:\webdoc\> folder with
<index.htm> as default file to open when root of IP accessed; and 1234 is Port to be opened at (so access like http://IP:1234/index.htm)
</index.htm>
</c:\webdoc\>
SYNTAX:"java -jar http09_v0.5a.jar C:\WebDoc\ index.htm 1234"


NOTE:
to make it work in Linux, download Source Code, extract it and in /SRC/MACRO/appMACRO.java file
change
<platform ;="" win32="WIN32"> to &nbsp;
<platform ;="" posix="POSIX"> and recompile the app
</platform>
</platform>


<object height="344" width="425">
<param name="movie" value="http://www.youtube.com/v/CogPa646vi8&amp;hl=en_US&amp;fs=1&amp;">
</param>
<param name="allowFullScreen" value="true">
</param>
<param name="allowscriptaccess" value="always">
</param>
<embed src="http://www.youtube.com/v/CogPa646vi8&amp;hl=en_US&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344">
</embed>
</object>


</div>
