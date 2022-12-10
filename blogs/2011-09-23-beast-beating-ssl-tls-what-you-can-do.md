> was originally posted at a deprecated blog

## BEAST beating SSL & TLS: What You Can do to be Secured

### B.E.A.S.T.?

Browser Exploit Against SSL/TLS Tool a.k.a. BEAST.

Is the new Javscript utility created by J. Rizzo & T. Duong capable of breaking SSL3.0 & TLS1.0 level protection for HTTPS connections and deciphering the secure connection data.


### What It Does?

There have been previous mention of cryptanalysis attacks over

* SSL v3.0, a Paper `Analysis of SSL3.0 Protocol` by D.Wagner & B.Schneier in 1999

* TLS v1.0, a Paper `Renegotitating TLS` by Marsh Ray in 2009

B.E.A.S.T. is a pure exploit tool built over these (or similar) visions.

B.E.A.S.T. is based upon *blockwise-adaptive chosen-plaintext* attack approach exploited on victim's end via [Man-In-The-Middle](http://en.wikipedia.org/wiki/Man-in-the-middle_attack) attack.

#### Point-to-Note!

It's an MitM over Browser, javascript injection does all harvesting of plaintext attack (which currently takes around 30 minutes for useful data) and then enables you to break the encrypted session.

#### Security Measures until F!XED

* Use a different browser (totally different, i.e. just not a new instance of same browser but a new browser, as in FireFox &amp; Chrome are different) for browsing your Secured Connection. And a different browser for you general web surfing experience, even any external links from your secured session used browser should be copied and opened in the general web-surfing browser.

* It's better if the browser used for secured session is used in Private Browsing Mode.

* Don't keep log-in active in any service if you are not using it currently.

**Something you should already be doing, if not start now...**

> Use browser extensions like [AdBlock](https://addons.mozilla.org/en-US/firefox/addon/adblock-plus/) & [NoScript](http://noscript.net/), to protect your browser from injected IFrames and infected AdServices which are the major source channel for BEAST also.


**To get a more detailed insight at the exploit Paper &amp; Code, get your hands over**

> [Beast-SSL.rar](http://www.insecure.cl/Beast-SSL.rar)

* What to do at Server Side [SANS diary](http://isc.sans.edu/diary/SSL+TLS+part+3+/11635)

---
