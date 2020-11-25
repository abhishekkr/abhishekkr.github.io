```meta-title: Weak Excuses after Weak Security :: Mozilla's user a/c on Public Server```
```meta-date: 2010-12-29 13:09:00```
```meta-updated: 2010-12-29 13:09:00```
```meta-comments: 0```
```meta-tags: Security Mozilla News Critics Accounts```


## Weak Excuses after Weak Security :: Mozilla's user a/c on Public Server

> was originally posted at deprecated blog [http://hackersmag.blogspot.com](http://hackersmag.blogspot.com/2010/12/weak-excuses-after-weak-security.html)

Now, this year has been filled with loads of news related to user-data getting leaked from different websites... but it wasn't much disturbing as web-vulnerabilities in Facebook are well known and accepted as cons of the deal and neither 1.3m a/c details leaked from Gawker came as a shock (it was more of a Tweet-Flood)

**But**

> On Dec-17-2010, Mozilla was reported about availability of its user-accounts (partially, which were used on addons.mozilla.org) over a public server.

They have projects like Firefox (super famous web-browser), NSS (one of the most famous libraries for developing secured client-server application), and more... if an organization like them do a mistake like this, oh yeah... hackers paradise.

### It's how they defend themselves...

* database included 44,000 inactive accounts using older

> but don't you think... even inactive users on a site deserve their privacy, and if they were inactive and not important then better purge the information pertaining to account... why keep it instead


* md5-based password hashes

> they don't use it now... for active users they support SHA-512 per-user-salt mechanism; now that's good


* current addons.mozilla.org users and accounts are not at risk

> so if I don't use Mozilla anymore... they wouldn't respect my a/c details anymore and still keep it... so that in future they could 'arrrrgh sorrry' me, brutally nice


* incident did not impact any of Mozilla’s infrastructure

> it was available on a public server and not a hacked-n-fetched... bravo


* only outsider who accessed the data was the security researcher that reported the mistake to Mozilla

> how are they so sure... if none else reported it doesn't mean that none else saw it, and it is not necessary that everyone accessing it will 'remain in' logs.


### References:

* [http://blog.mozilla.com/security/2010/12/27/addons-mozilla-org-disclosure/](http://blog.mozilla.com/security/2010/12/27/addons-mozilla-org-disclosure/)

* [http://www.thetechherald.com/article.php/201052/6620/Mozilla-password-disclosure-a-non-event](http://www.thetechherald.com/article.php/201052/6620/Mozilla-password-disclosure-a-non-event)

---
