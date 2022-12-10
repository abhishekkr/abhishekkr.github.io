## XSSed Orkut after Twitter after Facebook &lt;xss/&gt;

> was originally posted at deprecated blog [http://hackersmag.blogspot.com](http://hackersmag.blogspot.com/2009/12/i-am-working-on-open-source.html)

#### Are you social?

> ohhh... let me rephrase it 'Are you net-social?'
>
> yeah... then how much socially secure are you when the plain-text attacks are htting millions


### 2 months back with Facebook

Now almost treated as synonym of Social Networking, and more than 400 million active users... Facebook was exposed to be vulnerable of a XSS vulnerability instead of proper implementation of HTTPOnly cookie protection as that doesn't count for XSS. The PoC video is being linked below along with article.

Article: [http://www.acunetix.com/blog/news/cross-site-scripting-xss-facebook/](http://www.acunetix.com/blog/news/cross-site-scripting-xss-facebook/)

Video: [http://www.youtube.com/watch?v=iTddmr_JRYM&amp;hl&amp;fmt=22](http://www.youtube.com/watch?v=iTddmr_JRYM&amp;hl&amp;fmt=22)

### Last Week with Twitter

The microblogging favorite of masses, and offering a newer promising UX... Twitter accidently resurfaced the XSS hole while site update procedure. Famous as 'onMouseOver' flaw simply injected the XSS code as tweet to execute the function on mouse hover event by victim.

Article: [http://blog.twitter.com/2010/09/all-about-onmouseover-incident.html](http://blog.twitter.com/2010/09/all-about-onmouseover-incident.html)

### Previous Day with Orkut

Previous day was a 'Good Saturday' (i.e. what 'Bom Sabado' means in Portugese) 'scrapping' off the privacy of Orkut Users. This attack is supposed to originate from Brazil and compromised enormous Orkut accounts in a span of few hours. The code with details can be viewed at the link below.

Article: [http://antrix.net/posts/2007/orkut-xss/](http://antrix.net/posts/2007/orkut-xss/)

---
