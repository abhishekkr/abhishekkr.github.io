```meta-title: hrberry.com :: php flaw self-inviting DoS, leaked framework and server info [by, ABK]```
```meta-date: 2010-08-27 00:20:00```
```meta-updated: 2010-08-27 18:53:35```
```meta-comments: 0```
```meta-tags: Web PHP flaw Vulnerability DoS Exploit ABK```


<div class="css-full-post-content js-full-post-content">

<a href="https://sites.google.com/site/abklabs/home/secured/posts.xml">Posted@ https://sites.google.com/site/abklabs/home/secured/posts.xml</a><br /><br /><b>[]Patched: </b><br />Yes <br /><br /><b>[]Product Name:</b><br />http://www.hrberry.com<br />Payroll Helpdesk, serving several prestigious companies <br /><br /><b>[]Victim Name:</b><br />Ascent Consulting Services Pvt. Ltd. <br />[http://ascent-online.com]<br /><br /><b>[]Vuln Summary:</b><br />There were validation flaws for GET Request Parameters sent to CAPTCHA image generating PHP script on the Portal.<br />This allowed attacker to trick the app to generate any number of characters consuming processing power.<br />It had a timout after 30 seconds (too much) and generated error message with full PATH of PHP file.<br />Also worked on older un-patched version of OpenSSL.<br /><br /><a href="https://sites.google.com/site/abklabs/home/secured/hrberrycom">to read detailed Description... click here</a>

</div>