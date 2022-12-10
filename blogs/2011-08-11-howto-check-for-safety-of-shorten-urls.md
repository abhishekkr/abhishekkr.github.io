> was originally posted at a deprecated blog

## HowTo check for safety of Shorten URLs before opening them in your browsers

Short URLs were in fashion a while back and now they are in requirement.
No matter which social, professional or public web portal you browse, you get to see short url.

But Short URLs from so many sources are not secure as a carefully planted short url redirecting (sometimes single redirection and sometimes multiple) to an infected web portal.
So, all the short links from non-reliable sources must be first traced back to original links and only visited if they cross-check successfully.

So, how to know the actual portal to be visited without using that URL and following it to final location.

* from your shell, run `# curl --head -L "${SHORT_URL}" | grep 'Location:'`

* from the web-app Link: [webhoudini.appspot.com](http://webhoudini.appspot.com/)

At this portal paste in the link in Short URL text box and click the 'Unshorten' button to see the actual redirected URL.

<a href="http://webhoudini.appspot.com/">
  <img border="0" src="http://4.bp.blogspot.com/-adr6Pc7Tb3c/TkRXrd7QfpI/AAAAAAAAAvo/qWGYsGmEUOU/s1600/webhoudini_screenie1.jpg" />
</a>

---

<div class="css-full-comments-content js-full-comments-content">
  <div class="css-full-comment js-full-comment">
    <div class="css-comment-user-link js-comment-user-link">
      <a href="http://www.blogger.com/profile/03976825783116896176">
        <div class="css-comment-name js-comment-name">Kumar Ravi</div>
      </a>
      <div class="css-comment-date js-comment-date">2011-08-12T09:43:04.112Z</div>
    </div>
    <div class="css-comment-content js-comment-content">
      Avi,  I din try it but will it work for other short URLs like tiny or goo ?
    </div>
    <br/>
  </div>

  <div class="css-full-comment js-full-comment">
    <div class="css-comment-user-link js-comment-user-link">
      <a href="http://www.blogger.com/profile/06276198262605731980">
        <div class="css-comment-name js-comment-name">AbhishekKr a.k.a ~=ABK=~</div>
      </a>
      <div class="css-comment-date js-comment-date">2011-08-22T16:39:24.387Z</div>
    </div>
    <div class="css-comment-content js-comment-content">
      yes, it would work each and every URL... even if the URL is not a short-en url... the pattern of it&#39;s working is follow the URL until it&#39;s redirected to a final resource and then display the resource... it even works for t.co links from twitter which I heard uses JS for redirection
    </div>
    <br/>
  </div>
</div>

---
