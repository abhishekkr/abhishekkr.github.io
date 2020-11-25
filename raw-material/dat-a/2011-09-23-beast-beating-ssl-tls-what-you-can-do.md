```meta-title: BEAST beating SSL &amp; TLS :: What You Can do to be Secured```
```meta-date: 2011-09-23 16:25:00```
```meta-updated: 2011-09-26 21:11:06```
```meta-comments: 0```
```meta-tags: SSL TLS Javascript Security flaw research Attack HTTPS Exploit hackers BEAST```

> was originally posted at deprecated blog [http://.blogspot.com]()


<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">
<b>B.E.A.S.T.?
</b>
Browser Exploit Against SSL/TLS Tool [B.E.A.S.T.], is the new Javscript utility created by J. Rizzo &amp; T. Duong capable of breaking SSL3.0 &amp; TLS1.0 level protection for HTTPS connections and deciphering the secure connection data.


<b>What It Does?
</b>
There have been previous mention of cryptanalysis attacks over
+ SSL3.0
&nbsp;| &nbsp;
<span style="font-size: x-small;">
<i>(a Paper 'Analysis of SSL3.0 Protocol' by D.Wagner &amp; B.Schneier in 1999 )
</i>
</span>, &amp;
+ TLS1.0
&nbsp;| &nbsp;
<span style="font-size: x-small;">
<i>(a Paper 'Renegotitating TLS' by Marsh Ray in 2009)
</i>
</span>.
B.E.A.S.T. is a pure exploit tool built over these (or similar) visions.
B.E.A.S.T. is based upon
<i style="font-family: &quot;Trebuchet MS&quot;,sans-serif;">
<a href="http://en.wikipedia.org/wiki/Chosen-plaintext_attack">
<b>blockwise-adaptive chosen-plaintext
</b>
</a>
</i>attack approach exploited on victim's end via
<b>
<i style="font-family: &quot;Trebuchet MS&quot;,sans-serif;">
<a href="http://en.wikipedia.org/wiki/Man-in-the-middle_attack">man-in-the-middle
</a>
</i>
</b> attack.


<b>Point-to-Note!
</b>
It's a MitM over Browser, javascript injected does all harvesting of plaintext attack (which currently takes around 30 minutes for useful data) and then enables you to break the encrypted session.


<b>Security Measures until F!XED
</b>

<ol style="text-align: left;">
<li>Use a different browser (totally different, i.e. just not a new instance of same browser but a new browser, as in FireFox &amp; Chrome are different) for browsing your Secured Connection. And a different browser for you general web surfing experience, even any external links from your secured session used browser should be copied and opened in the general web-surfing browser.
</li>
<li>It's better if the browser used for secured session is used in Private Browsing Mode.
</li>
<li>Don't keep log-in active in any service if you are not using it currently.
</li>
</ol>

<b>Something you should already be doing, if not start now...
</b>
Use browser extensions like
<a href="https://addons.mozilla.org/en-US/firefox/addon/adblock-plus/">
<i style="font-family: &quot;Trebuchet MS&quot;,sans-serif;">
<b>AdBlock
</b>
</i>
</a> &amp;
<a href="http://noscript.net/">
<i style="font-family: &quot;Trebuchet MS&quot;,sans-serif;">
<b>NoScript
</b>
</i>
</a>, to protect your browser from injected IFrames and infected AdServices which are the major source channel for BEAST also.


<b>
<i>To get a more detailed insight at the exploit Paper &amp; Code, get your hands over
</i>
</b>

<span class="Apple-style-span" style="background-color: white; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 19px;">
<a href="http://www.insecure.cl/Beast-SSL.rar">http://www.insecure.cl/Beast-SSL.rar
</a>
</span>


<b>
<i>What to do at Server Side
</i>
</b>

<a href="http://isc.sans.edu/diary/SSL+TLS+part+3+/11635">http://isc.sans.edu/diary/SSL+TLS+part+3+/11635
</a>
</div>


</div>

