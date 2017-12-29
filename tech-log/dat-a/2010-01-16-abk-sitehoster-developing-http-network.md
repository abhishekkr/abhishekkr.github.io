```meta-title: ABK SiteHoster -=[developing a HTTP Network Server to be secure at implementation]=-```
```meta-date: 2010-01-16 13:21:00```
```meta-updated: 2010-01-16 13:24:27```
```meta-comments: 1```
```meta-tags: Web Network Server Javascript Security HTTP ABK WebServer SiteHoster Site```


<div class="css-full-post-content js-full-post-content">

<span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; white-space: pre;"><span style="font-family: 'Courier New', Courier, monospace;"><span style="font-size: x-large;"><b><span style="color: #ffe599;">ABK SiteHoster</span></b></span></span></span><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-family: Arial; font-size: 13px; white-space: pre;"><span style="color: #ffe599;">&nbsp;   </span></span><br /><span style="color: #ffe599; font-family: Arial; font-size: small;"><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-size: 13px; white-space: pre;"> </span></span><br /><span style="font-family: Arial; font-size: small;"><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; white-space: pre;"><span style="font-size: x-large;"><span style="color: #f9cb9c;">Sourceforge</span></span></span><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-size: 13px; white-space: pre;"> Link : <a dir="ltr" href="http://sourceforge.net/projects/sitehoster/" rel="nofollow" target="_blank" title="http://sourceforge.net/projects/sitehoster/">http://sourceforge.net/projects/sitehoster/</a>&nbsp;</span></span><br /><div style="margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px;"><span style="font-family: Arial; font-size: small;"><span class="Apple-style-span" style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-size: 13px; white-space: pre;"><br /></span></span><br /></div><div style="margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px;"><span class="Apple-style-span" style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-family: Arial; font-size: 13px; white-space: pre;"><span style="font-size: x-large;"><span style="color: #f9cb9c;">Google Code</span></span> Link : <a dir="ltr" href="http://code.google.com/p/sitehoster/" rel="nofollow" target="_blank" title="http://code.google.com/p/sitehoster/">http://code.google.com/p/sitehoster/</a></span><br /></div><span style="font-family: Arial; font-size: small;"><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-size: 13px; white-space: pre;"><br /></span></span><br /><span class="Apple-style-span" style="font-family: Arial;"><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; white-space: pre;"><span style="font-size: x-large;"><span style="color: #f9cb9c;">Youtube</span></span></span><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-size: 13px; white-space: pre;"> <b>Demo</b> Link: <a href="http://www.youtube.com/watch?v=CogPa646vi8">http://www.youtube.com/watch?v=CogPa646vi8</a></span></span><br /><span style="font-family: Arial; font-size: small;"><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-size: 13px; white-space: pre;"> </span></span><br /><span style="font-family: Arial; font-size: small;"><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-size: 13px; white-space: pre;">Currently in it's BETA stage and can only serve URL as per HTTP v0.9, so not secure but basic WebServer</span></span><br /><span style="font-family: Arial; font-size: small;"><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-size: 13px; white-space: pre;"> </span></span><br /><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-family: Arial; font-size: 13px; white-space: pre;">Actually developing it as a HTTP Network Server to be secure at its implementation, normally all WebServer present out there are vulnerable cuz they didn't implemented Security at their very core but as an extra sheild outside.</span><br /><span style="font-family: Arial; font-size: small;"><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-size: 13px; white-space: pre;">Here in this project I'll be aiming at making it secure from the core itself and making it self-secured by immunizing it from all kinds of Web-App attacks.</span></span><br /><span style="font-family: Arial; font-size: small;"><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-size: 13px; white-space: pre;"><br /></span></span><br /><span style="font-family: Arial; font-size: small;"><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-size: 13px; white-space: pre;"><span style="-webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; font-family: arial, helvetica, clean, sans-serif; line-height: 18px; white-space: normal;"><span style="color: #d5a6bd;">ABK SiteHoster is aLEHNS (a Lightweight Extensible HTTP Network Server). Developed in pure Java. Currently supports HTTP 0.9, easily delivering normal HTML oriented WebSites. Aiming to be a full-fledged WebSite Server with all Web Services.</span></span></span></span><br /><span style="font-family: Arial; font-size: small;"><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-size: 13px; white-space: pre;"><br /><object height="344" width="425"><param name="movie" value="http://www.youtube.com/v/CogPa646vi8&amp;hl=en_US&amp;fs=1&amp;"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/CogPa646vi8&amp;hl=en_US&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344"></embed></object> </span></span><br /><span style="font-family: Arial; font-size: small;"><span style="-webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-size: 13px; white-space: pre;"><br /></span></span>

</div>

<div class="css-full-comments-content js-full-comments-content">

<div class="css-full-comment js-full-comment">

  <div class="css-comment-user-link js-comment-user-link">

  <a href="http://www.blogger.com/profile/06276198262605731980">

  <div class="css-comment-name js-comment-name">

    Abhishek

  </div>

  </a>

  <div class="css-comment-date js-comment-date">

    2010-03-22T16:52:34.093Z

  </div>

  </div>

  <div class="css-comment-content js-comment-content">

    version 1.0Beta with much improved HTTP v1.1 support has been released... also added to Softpedia.com

  </div>

  <br/>

</div>

</div>