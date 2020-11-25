```meta-title: ABK SiteHoster -=[developing a HTTP Network Server to be secure at implementation]=-```
```meta-date: 2010-01-16 13:21:00```
```meta-updated: 2010-01-16 13:24:27```
```meta-comments: 1```
```meta-tags: web network server javascript security http abk webserver sitehoster```


## ABK SiteHoster, developing a HTTP Network Server to be secure at implementation

> was originally posted at deprecated blog [http://hackersmag.blogspot.com](http://hackersmag.blogspot.com/2010/01/abk-sitehoster-developing-http-network.html)
>
> [now at Github](https://github.com/abhishekkr/sitehoster); [Sourceforge](http://sourceforge.net/projects/sitehoster/); [Google Code](http://code.google.com/p/sitehoster/)

Currently in it's BETA stage and can only serve URL as per HTTP v0.9, so not secure but basic WebServer

Actually developing it as a HTTP Network Server to be secure at its implementation, normally all WebServer present out there are vulnerable cuz they didn't implemented Security at their very core but as an extra sheild outside.

Here in this project I'll be aiming at making it secure from the core itself and making it self-secured by immunizing it from all kinds of Web-App attacks.


ABK SiteHoster is aLEHNS (a Lightweight Extensible HTTP Network Server). Developed in pure Java. Currently supports HTTP 0.9, easily delivering normal HTML oriented WebSites. Aiming to be a full-fledged WebSite Server with all Web Services.


#### Video of Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/ENiiAccY1v0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### Whitepaper of the implementation causing XSS mitigation

<iframe src="//www.slideshare.net/slideshow/embed_code/key/g2HTuPNOQfP8Qf" width="668" height="714" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/AbhishekKr/whitepaper-abktrick-to-subvert-xss" title="XSS Defeating Trick ~=ABK=~ WhitePaper" target="_blank">XSS Defeating Trick ~=ABK=~ WhitePaper</a> </strong> from <strong><a href="https://www.slideshare.net/AbhishekKr" target="_blank">Abhishek Kumar</a></strong> </div>

---
