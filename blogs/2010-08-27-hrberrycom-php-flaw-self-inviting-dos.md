## hrberry.com: self-inviting DoS, leaked framework and server info (by, ABK)

> was originally posted at deprecated blog [http://hackersmag.blogspot.com](http://hackersmag.blogspot.com/2010/08/hrberrycom-php-flaw-self-inviting-dos.html)

[Posted@ https://sites.google.com/site/abklabs/home/secured/posts.xml](https://sites.google.com/site/abklabs/home/secured/posts.xml)

* Patched: Yes

* Product Name: [HRBerry, Payroll Helpdesk, serving several prestigious companies](http://www.hrberry.com)

* Victim Name: [Ascent Consulting Services Pvt. Ltd.](http://ascent-online.com)

* Vuln Summary:

There were validation flaws for GET Request Parameters sent to CAPTCHA image generating PHP script on the Portal.

This allowed attacker to trick the app to generate any number of characters consuming processing power.

It had a timout after 30 seconds (too much) and generated error message with full PATH of PHP file.

Also worked on older un-patched version of OpenSSL.


*now a dead-link* [to read detailed Description... click here](https://sites.google.com/site/abklabs/home/secured/hrberrycom)

---
