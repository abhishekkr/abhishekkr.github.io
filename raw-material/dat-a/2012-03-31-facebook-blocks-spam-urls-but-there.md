```meta-title: facebook blocks spam URLs, but there method looks useless```
```meta-date: 2012-03-31 19:07:00```
```meta-updated: 2012-03-31 19:27:13```
```meta-comments: 1```
```meta-tags: urls spammy short urls Security Facebook url bypass mailicious uri spam links```



<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">Facebook has a user-security service checking for the spam/malicious nature of URLs posted by its users and blocking those if they belong to Facebook's blacklisted list.
More about it at&nbsp;
<a href="http://blog.facebook.com/blog.php?post=403200567130">http://blog.facebook.com/blog.php?post=403200567130
</a>

Some important text from the link above:

<blockquote class="tr_bq">
<i>
<span style="background-color: white; color: #333333; font-family: 'lucida grande', tahoma, verdana, arial, sans-serif; font-size: 12px; line-height: 18px;">These automated systems don't just prevent spam and other annoyances. They also protect against dangerous websites that damage your computer or try to steal your information. ..........
</span>
</i>
</blockquote>
<blockquote class="tr_bq">
<i>
<span style="background-color: white; color: #333333; font-family: 'lucida grande', tahoma, verdana, arial, sans-serif; font-size: 12px; line-height: 18px;">Sometimes, spammers try to hide their malicious links behind URL shorteners like
<a href="http://www.blogger.com/goog_1842732887">&nbsp;
</a>
</span>
<span style="color: #3b5998; font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;">
<span style="background-color: white; cursor: pointer; font-size: 12px; line-height: 18px;">Tiny URL
</span>
</span>
<span style="background-color: white; color: #333333; font-family: 'lucida grande', tahoma, verdana, arial, sans-serif; font-size: 12px; line-height: 18px;">&nbsp;or&nbsp;
</span>
<span style="color: #3b5998; font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;">
<span style="background-color: white; cursor: pointer; font-size: 12px; line-height: 18px;">bit.ly
</span>
</span>
<span style="background-color: white; color: #333333; font-family: 'lucida grande', tahoma, verdana, arial, sans-serif; font-size: 12px; line-height: 18px;">, and in rare cases, we may temporarily block all use of a specific shortener. If you hit a block while using a URL shortener, try a different one or just use the original URL for whatever you're trying to share.
</span>
</i>
</blockquote>
<blockquote class="tr_bq">
<i>
<span style="background-color: white; color: #333333; font-family: 'lucida grande', tahoma, verdana, arial, sans-serif; font-size: 12px; line-height: 18px;">These systems are so effective ..........&nbsp;
</span>
</i>
</blockquote>In my very recent post on Facebook, I was just trying to post the very awesome Google search link displaying the 3D Graph as a heart

<span style="font-family: Georgia, 'Times New Roman', serif; font-size: x-small;">
<i>
<a href="https://www.google.co.in/search?ix=seb&amp;sourceid=chrome&amp;ie=UTF-8&amp;q=sqrt(cos(3*x))*cos(100*y)%2B1.5*sqrt(abs(x))+%2B+0.8+x+is+from+-1+to+1%2C+y+is+from+-1+to+1%2C+z+is+from+0.01+to+2.5">https://www.google.co.in/search?ix=seb&amp;sourceid=chrome&amp;ie=UTF-8&amp;q=sqrt(cos(3*x))*cos(100*y)%2B1.5*sqrt(abs(x))+%2B+0.8+x+is+from+-1+to+1%2C+y+is+from+-1+to+1%2C+z+is+from+0.01+to+2.5
</a>
</i>
</span>
and facebook denied accepting my link saying it belongs to the
<b>
<i>'spammy link'
</i>
</b> section of link url&nbsp;
<i style="font-family: Georgia, 'Times New Roman', serif;">
<a href="https://www.google.co.in/search">https://www.google.co.in/search
</a>.
</i>

<span style="font-family: Georgia, 'Times New Roman', serif;">so actually,
</span>

<span style="font-family: Georgia, 'Times New Roman', serif;">initially just without thinking it from security perspective I converted it to a goo.gl short url
</span>

<span style="font-family: Georgia, 'Times New Roman', serif;">
<a href="http://goo.gl/Xwhff">
<i>http://goo.gl/Xwhff
</i>
</a>
</span>

<span style="font-family: Georgia, 'Times New Roman', serif;">and tried that up, and yeah..... it works (
<i>that's why I'm writing about it, obviously
</i>).
</span>

<span style="font-family: Georgia, 'Times New Roman', serif; font-size: x-small;">

</span>

<span style="font-family: Georgia, 'Times New Roman', serif;">
<b>
<i>So, how it works&nbsp;
</i>
</b>
</span>

<span style="font-family: Georgia, 'Times New Roman', serif;">the way I could think it works is plainly by matching the URL (except for the GET parameter passed on to it) from the blacklist of the URLs that Facebook maintains for it.
</span>

<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-EbavpRUg5Kk/T3dZOwZCU-I/AAAAAAAAAz0/oCUYgLqCYMM/s1600/fb_linkWork.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;">
<img border="0" height="43" src="http://4.bp.blogspot.com/-EbavpRUg5Kk/T3dZOwZCU-I/AAAAAAAAAz0/oCUYgLqCYMM/s320/fb_linkWork.jpg" width="320" />

</a>
</div>

<div class="separator" style="clear: both; text-align: center;">
</div>
<span style="font-family: Georgia, 'Times New Roman', serif; font-size: x-small;">

</span>

<span style="font-family: Georgia, 'Times New Roman', serif;">
<b>
<i>The Problem
</i>
</b>
</span>

<span style="font-family: Georgia, 'Times New Roman', serif;">to bypass such a system is real real easy... just get a link redirected from any in the batch of URL Shorteners, Page Translaters, Proxy or..... Simple get up a new machine on cloud and get it to bounce the URL back to desired URL.

Even if FB's awesome team succeeds in blacklisting in ever growing services of proxy and url-shorteners.
</span>

<span style="font-family: Georgia, 'Times New Roman', serif;">This technique of theirs wouldn't be able to catch your newly specially launched service before you a some decent response time.
</span>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-3oF3M8bZhPU/T3dZKG5NIwI/AAAAAAAAAzk/YLZHxmw_R-w/s1600/fb_linkProblem.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;">
<img border="0" height="36" src="http://1.bp.blogspot.com/-3oF3M8bZhPU/T3dZKG5NIwI/AAAAAAAAAzk/YLZHxmw_R-w/s320/fb_linkProblem.jpg" width="320" />

</a>
</div>

<span style="font-family: Georgia, 'Times New Roman', serif; font-size: x-small;">

</span>

<div style="text-align: left;">
<span style="font-family: Georgia, 'Times New Roman', serif;">
<b>
<i>What I think, would solve it
</i>
</b>
</span>
</div>
<div style="text-align: left;">
<span style="font-family: Georgia, 'Times New Roman', serif;">An intelligent security facilitator like Facebook would keep send that blacklist list on client side for several reasons.
</span>
</div>
<div style="text-align: left;">
<span style="font-family: Georgia, 'Times New Roman', serif;">So they must be checking the URL post request at their FB-Servers and then responding back with any concerns related to it.
</span>
</div>
<div style="text-align: left;">
<span style="font-family: Georgia, 'Times New Roman', serif;">

</span>
</div>
<div style="text-align: left;">
<span style="font-family: Georgia, 'Times New Roman', serif;">In such a scenario WHY don't they simple get the URL's crawled back to the last URL responding without any HTTP referrer.
</span>
</div>
<div style="text-align: left;">
<span style="font-family: Georgia, 'Times New Roman', serif;">Say, the same method I use in
<a href="http://webhoudini.appspot.com/">webhoudini.appspot.com
</a>&nbsp;to fetch the final URL from a short-ened or redirected URL for people requiring validation of a suspicious link.
</span>
</div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-rHCIUokVDQs/T3dZMt6oUpI/AAAAAAAAAzs/-0q_dU2G510/s1600/fb_linkSolution.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;">
<img border="0" height="36" src="http://1.bp.blogspot.com/-rHCIUokVDQs/T3dZMt6oUpI/AAAAAAAAAzs/-0q_dU2G510/s320/fb_linkSolution.jpg" width="320" />

</a>
</div>
<span style="font-family: Georgia, 'Times New Roman', serif; font-size: x-small;">

</span>

<span style="font-family: Georgia, 'Times New Roman', serif;">

</span>

<span style="font-family: Georgia, 'Times New Roman', serif;">
<b>
<i>This way they will never have to blacklist the URL Shortener services or any other valid URL bases for that matter, just to avoid their chance of redirection to malicious links.
</i>
</b>
</span>
</div>


</div>


<div class="css-full-comments-content js-full-comments-content">


<div class="css-full-comment js-full-comment">


<div class="css-comment-user-link js-comment-user-link">


<a href="http://www.blogger.com/profile/01813150344575149922">


<div class="css-comment-name js-comment-name">

    Muhammad Amir


</div>


</a>


<div class="css-comment-date js-comment-date">

    2013-03-06T08:01:12.979Z


</div>


</div>


<div class="css-comment-title js-comment-title">

    An intelligent security facilitator
<a href="http...


</div>


<div class="css-comment-content js-comment-content">

     An intelligent security facilitator
<a href="http://www.howdoyoustopspam.com" rel="nofollow">how do you stop spam
</a>   like Facebook would keep send that blacklist list on client side for several reasons.


</div>


<br/>



</div>


</div>
