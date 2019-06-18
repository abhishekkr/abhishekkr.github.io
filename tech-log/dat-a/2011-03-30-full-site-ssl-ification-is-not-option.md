```meta-title: Full site SSL-ification is not an option, need to make SSL secure first```
```meta-date: 2011-03-30 11:28:00```
```meta-updated: 2011-03-30 11:40:03```
```meta-comments: 0```
```meta-tags: Web SSL Security HTTP Free Internet sslstrip Sidejacking HTTPS ABK hacking```

> was originally posted at deprecated blog [http://hackersmag.blogspot.com](http://hackersmag.blogspot.com/2011/03/full-site-ssl-ification-is-not-option.html)

## Full site SSL-ification is not an option, need to make SSL secure first

I have  heard (Recently and in past) security aware lives wasting a lot of their potential over the argument like

* `Basic HTTP is insecure` {sometimes in novice past}

* `SSL-ify entire web service` {still a lot push is there}

> Now, `Basic HTTP` being insecure is not a flaw by design... but a flaw by choice.

First of all, when foundation of HTTP were laid attackers were not in the scene. The only concern was ultra productive usability and that is not possible putting all kind of security checks on the service.

Secondly, HTTP wasn't meant to be secure, it was just meant to transfer data in adhering to a protocol which can be used by web-services to recieve user's requests and deliver requested content, that's all.

Cryptography mixed into it will destroy the ease and speed it has. Cryptography over it is instead a necessary (in some cases) and correct (design) option.

### Though it has been haunting the websites by attacks like

* SSL Stripping

![sslstrip](assets/2011-03-30-MITM.jpg)

> It's due to a flaw in the way Security is implemented in a web application.
>
> For example, you visit Facebook Login page at facebook.com which have a HTTPS link in its unprotected page-content to send over the credentials in a protected manner.
>
> But what if some attacker using Monkey-in-the-Middle strategy changed that HTTPS link to a HTTP link and sniff your sent credentials... w00t right.

* Sidejacking

> It occurs due to web-application sending cookie information over non-ssl links.
>
> This allows any Man-in-the-Middle to sniff the cookie then replicate in his/her own browser and use the service identifying user just on basis of cookie information... it pwn3d services like GMail, Y!Mail, Hotmail, etc. until Q1-2010.


### `Full Site SSL-ification`, a good choice from theoretical security point-of-view, but just in theory

Different SSL-Defeating attacks involving

* Flaws in Libraries like NSS

> There was a (earlier exploited, later) famous flaw in libraries with the case of NULL inclusion in URLs used for Domain name on which SSL Certificate is being issued.
>
> Mozilla Engine used NSS Cryptography libraries purely written in C and using basic insecure string functions for comparisons were tricked by certificates for domain name like `www.paypal.com\0innocent.com` stopping at first null after `www.paypal.com`.
>
> Webkit, Opera used null-stripping but they were tricked in just reversed attack using certificates for domain-name like `www.pay\0pal.com` stripping out usefull null.

* Fake SSL Certificate generation

> Not a flaw in SSL, neither in its implementation but in the authorities enforcing it.
>
> In a recent disclosure, Comodo Inc (a major issuer of SSL Certificate) accepted that an attacker was able to get credentials of 'Comodo Registration Authority' based in Southern Europe.
>
> An Iranian attacker used the privilege to issue 9 fraud SSL certificates to 7 web domains including those for Google, Yahoo and Skype.


So, if you will look deeper into serial-murder case file of SSL Certificates, you'll see it ain't safe... and so there is no point in argument over its mixed/full implementation.

---
