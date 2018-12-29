```meta-title: howto check for safety of Shorten URLs before opening them in your browsers```
```meta-date: 2011-08-11 22:37:00```
```meta-updated: 2011-08-11 22:37:21```
```meta-comments: 2```
```meta-tags: curl short urls Security Google webhoudini appengine```



<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">Short URLs were in fashion a while back and now they are in requirement.
No matter which social, professional or public web portal you browse, you get to see short url.

But Short URLs from so many sources are not secure as a carefully planted short url redirecting (sometimes single redirection and sometimes multiple) to an infected web portal.
So, all the short links from non-reliable sources must be first traced back to original links and only visited if they cross-check successfully.

So, how to know the actual portal to be visited without using that URL and following it to final location.

[]
<b>
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">from your shell
</span>
</b>

<b>
<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">$ curl --head -L
<i>http://short.en/url
</i> | grep Location:
</span>
</b>
so, place the short url to be checked in place of "
<i>
<b>http://short.en/url
</b>
</i>" in the command provided above and then you can see the entire url trace and the final url to be visited...
~~~~~~~~~~~~~~~~~~~~

[]
<b>
<span class="Apple-style-span" style="font-family: Verdana, sans-serif;">from the web-app
</span>
</b>

<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">Link:&nbsp;
<b>
<a href="http://webhoudini.appspot.com/">http://webhoudini.appspot.com/
</a>
</b>
</span>

<div class="separator" style="clear: both; text-align: left;">
</div>At this portal paste in the link in Short URL text box and click the 'Unshorten' button to see the actual redirected URL.


<div class="separator" style="clear: both; text-align: center;">
<a href="http://webhoudini.appspot.com/">
<img border="0" src="http://4.bp.blogspot.com/-adr6Pc7Tb3c/TkRXrd7QfpI/AAAAAAAAAvo/qWGYsGmEUOU/s1600/webhoudini_screenie1.jpg" />

</a>
</div>~~~~~~~~~~~~~~~~~~~~


</div>


</div>


<div class="css-full-comments-content js-full-comments-content">


<div class="css-full-comment js-full-comment">


<div class="css-comment-user-link js-comment-user-link">


<a href="http://www.blogger.com/profile/03976825783116896176">


<div class="css-comment-name js-comment-name">

    Kumar Ravi


</div>


</a>


<div class="css-comment-date js-comment-date">

    2011-08-12T09:43:04.112Z


</div>


</div>


<div class="css-comment-content js-comment-content">

    Avi,  I din try it but will it work for other short URLs like tiny or goo ?


</div>


<br/>



</div>


<div class="css-full-comment js-full-comment">


<div class="css-comment-user-link js-comment-user-link">


<a href="http://www.blogger.com/profile/06276198262605731980">


<div class="css-comment-name js-comment-name">

    AbhishekKr a.k.a ~=ABK=~


</div>


</a>


<div class="css-comment-date js-comment-date">

    2011-08-22T16:39:24.387Z


</div>


</div>


<div class="css-comment-content js-comment-content">

    yes, it would work each and every URL... even if the URL is not a short-en url... the pattern of it&#39;s working is follow the URL until it&#39;s redirected to a final resource and then display the resource... it even works for t.co links from twitter which I heard uses JS for redirection


</div>


<br/>



</div>


</div>
