```meta-title: XSS Defeating PoC : if have any time for Experimentation```
```meta-date: 2010-09-06 09:54:00```
```meta-updated: 2010-09-06 10:08:00```
```meta-comments: 0```
```meta-tags: concept xss mitigation bug whitepaper sitehoster javascript security vulnerability poc hacking```


> was originally posted at deprecated blog [http://hackersmag.blogspot.com](http://hackersmag.blogspot.com/2010/09/xss-defeating-poc-if-have-any-time-for.html)

* Video Demo of the same PoC: [http://www.youtube.com/watch?v=ENiiAccY1v0](http://www.youtube.com/watch?v=ENiiAccY1v0)

<iframe width="560" height="315" src="https://www.youtube.com/embed/ENiiAccY1v0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


* Project Base: [now at Github](https://github.com/abhishekkr/sitehoster)

* WhitePaper is available at [slideshare](http://www.slideshare.net/AbhishekKr/whitepaper-abktrick-to-subvert-xss)

I was working on a XSS-Patch PoC, which I now feel works proper enough to prove its point. This neither require Web-Developers for any Filtering/Validation, nor any javascript blocking add-on on user's browser.

> I'm not good at explaining still I've tried to do that in the above linked WhitePaper.
>
> And the ZIP file can be extracted, having 'StartDemo.bat' to be executed to start the server already patched with XSS Subverting Module.

Then browse, `http://localhost/tweet.htm` in any browser... and it lets you Submit any text to Server w/o validation which is as it is saved there. But when retrieved on 'Read...' remains inactive for any

---
