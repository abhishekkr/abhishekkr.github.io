> was originally posted at a deprecated blog

## Facebook blocks spam URLs, but there method looks useless

Facebook has a user-security service checking for the spam/malicious nature of URLs posted by its users and blocking those if they belong to Facebook's blacklisted list.

More about it at [http://blog.facebook.com/blog.php?post=403200567130](http://blog.facebook.com/blog.php?post=403200567130).

Some important text from the link above:

> These automated systems don't just prevent spam and other annoyances.
>
> They also protect against dangerous websites that damage your computer or try to steal your information.

> Sometimes, spammers try to hide their malicious links behind URL shorteners like `Tiny URL` or `bit.ly`, and in rare cases, we may temporarily block all use of a specific shortener.
>
> If you hit a block while using a URL shortener, try a different one or just use the original URL for whatever you're trying to share.

*These systems are so effective...*

In my very recent post on Facebook, I was just trying to post the very awesome Google search link displaying the 3D Graph as a heart

<a href="https://www.google.co.in/search?ix=seb&amp;sourceid=chrome&amp;ie=UTF-8&amp;q=sqrt(cos(3*x))*cos(100*y)%2B1.5*sqrt(abs(x))+%2B+0.8+x+is+from+-1+to+1%2C+y+is+from+-1+to+1%2C+z+is+from+0.01+to+2.5">https://www.google.co.in/search?ix=seb&amp;sourceid=chrome&amp;ie=UTF-8&amp;q=sqrt(cos(3*x))*cos(100*y)%2B1.5*sqrt(abs(x))+%2B+0.8+x+is+from+-1+to+1%2C+y+is+from+-1+to+1%2C+z+is+from+0.01+to+2.5</a>

and facebook denied accepting my link saying it belongs to the `spammy link` section of link url.

So actually, initially just without thinking it from security perspective I converted it to a goo.gl short url [http://goo.gl/Xwhff](http://goo.gl/Xwhff). I tried that, and it works (that's why I'm writing about it, obviously).

### So, how it works

The way I could think it works is plainly by matching the URL (except for the GET parameter passed on to it) from the blacklist of the URLs that Facebook maintains for it.

<a href="http://4.bp.blogspot.com/-EbavpRUg5Kk/T3dZOwZCU-I/AAAAAAAAAz0/oCUYgLqCYMM/s1600/fb_linkWork.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;">
  <img border="0" height="43" src="http://4.bp.blogspot.com/-EbavpRUg5Kk/T3dZOwZCU-I/AAAAAAAAAz0/oCUYgLqCYMM/s320/fb_linkWork.jpg" width="320" />
</a>

### The Problem

To bypass such a system is real real easy... just get a link redirected from any in the batch of URL Shorteners, Page Translaters, Proxy or..... Simple get up a new machine on cloud and get it to bounce the URL back to desired URL.

Even if FB's awesome team succeeds in blacklisting in ever growing services of proxy and url-shorteners.

>This technique of theirs wouldn't be able to catch your newly specially launched service before you a some decent response time.


<a href="http://1.bp.blogspot.com/-3oF3M8bZhPU/T3dZKG5NIwI/AAAAAAAAAzk/YLZHxmw_R-w/s1600/fb_linkProblem.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;">
  <img border="0" height="36" src="http://1.bp.blogspot.com/-3oF3M8bZhPU/T3dZKG5NIwI/AAAAAAAAAzk/YLZHxmw_R-w/s320/fb_linkProblem.jpg" width="320" />
</a>

### What I think, would solve it

An intelligent security facilitator like Facebook would keep send that blacklist list on client side for several reasons.

So they must be checking the URL post request at their FB-Servers and then responding back with any concerns related to it.

In such a scenario WHY don't they simple get the URL's crawled back to the last URL responding without any HTTP referrer.

Say, the same method I use in [http://webhoudini.appspot.com/](http://webhoudini.appspot.com/) to fetch the final URL from a short-ened or redirected URL for people requiring validation of a suspicious link.

<a href="http://1.bp.blogspot.com/-rHCIUokVDQs/T3dZMt6oUpI/AAAAAAAAAzs/-0q_dU2G510/s1600/fb_linkSolution.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;">
  <img border="0" height="36" src="http://1.bp.blogspot.com/-rHCIUokVDQs/T3dZMt6oUpI/AAAAAAAAAzs/-0q_dU2G510/s320/fb_linkSolution.jpg" width="320" />
</a>

**This way they will never have to blacklist the URL Shortener services or any other valid URL bases for that matter, just to avoid their chance of redirection to malicious links.**

---

<div class="css-full-comments-content js-full-comments-content">
  <div class="css-full-comment js-full-comment">
    <div class="css-comment-user-link js-comment-user-link">
      <a href="http://www.blogger.com/profile/01813150344575149922">
        <div class="css-comment-name js-comment-name">Muhammad Amir</div>
      </a>
      <div class="css-comment-date js-comment-date">2013-03-06T08:01:12.979Z</div>
    </div>
    <div class="css-comment-title js-comment-title">
      An intelligent security facilitator <a href="http://www.howdoyoustopspam.com" rel="nofollow">how do you stop spam</a>   like Facebook would keep send that blacklist list on client side for several reasons.
    </div>
  </div>
</div>

---
