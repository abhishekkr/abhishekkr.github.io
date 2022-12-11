> was originally posted at a deprecated blog

## (Adios Censorship, Hola ODDNS) Internet Censorship: state & solution

We are (and have been) living in a dark era of corrupted &amp; controlled information, not because of hackers or e-criminals but due to white collared, bureaucratic Legal Organizations trying to control Internet.

They used to control books in old ages; newspapers since several numerous years and news channels for past few decades. This control was over information available to public.
The more informant they are, the less power Legal Agencies have to guide them on their determined decision.

They started with shutting down (supposed to be) bothering web portals, forcing them to change content and even leak information about their users.
When they found out they can't (without any controversy) dominate all web services around the globe. They started taking DNS servers under control.

> Inte**X**net Censo**X**ship

Now just for those unsure how controlling [DNS servers help](http://en.wikipedia.org/wiki/Domain_Name_System)

> In easy words... dns server is the service to which you tell the web portal name and guides you with the address format that all networking devices understand and help you reach the destination web server.

So, the problem why DNS Servers can be controlled currently is because of their structure.

DNS Servers have a tree-like hierarchical set-up.

It has few Root DNS Servers at the top, which contain the entire Internet Domain Name registration database and its relative IP. These are maintained by independent agencies, but maximum of those reside in U.S. and few others distributed over globe.

Then there are lower level DNS Servers maintained by Internet Service Providers, some Universities and also some IT organizations. These DNS servers contain a more specific subset of DNS entries specific to the domain requests they mostly serve.

If the queried lower DNS server doesn't have reply to an entry it contacts daddy DNS, retrieves the address and replies.

The thing is, these network address resolvers are very concentrated and dependent. So if these Legal Organization face threat from any newer (or even older) web portal, say www.wiki-still-leaks.org.

Only thing they need to do is block address resolution of that particular (and many more as per required) web portal name.

As you wouldn't be able to resolve network address for that particular website, you would find it offline.

Currently, how non government liked sites (as thePirateBay) handles it is [making multiple](http://torrentfreak.com/the-pirate-bay-shows-futility-of-domain-and-dns-blocks-120109/) [dns entries](http://www.blogger.com/goog_473108447) [to resolve](http://www.pcworld.com/article/241270/pirate_bay_website_circumvents_belgian_blocking.html).

Recently there was a [firefox plug-in ThePirateBayDancing](https://addons.mozilla.org/en-US/firefox/addon/mafiaafire-piratebay-dancing/) released by [mafiaafire](http://www.mafiaafire.com/download.php), which makes available portal jumping randomly over proxies.

In late 2010, when U.S. blocked WikiLeaks... [ThePirateBay](http://arstechnica.com/tech-policy/news/2010/11/fed-up-with-icann-pirate-bay-cofounder-floats-p2p-dns-system.ars) floated around the idea [of P2P DNS](http://tech.slashdot.org/story/11/10/18/1247228/continuing-the-distributed-dns-system).

Peter Sunde (PirateBay co-founder) gathered coders to work on it. [Cjd](https://github.com/cjdelisle) working on it, shifted his operations to [cjd#irc](irc://irc.efnet.nl:6667/cjdns).

This idea of P2P DNS was [picked upon](http://www.bluishcoder.co.nz/2011/05/12/namecoin-a-dns-alternative-based-on-bitcoin.html) by [vinced](https://github.com/vinced) and put down as [namecoin](https://github.com/vinced/namecoin). A decentralized dns service based on [Bitcoin](http://www.bitcoin.org/).

*Now, that is the main problem with this... its based on a money exchange system architecture.*

You either mine namecoins for a domain name or buy them.

[Jimmy Rudolf](http://torrentfreak.com/oddns-decentralized-and-open-dns-to-defeat-censorship-120407/) is out with [ODDNS : Decentralized and Open DNS](http://oddns.org/en/").

It removes intermediaries dns servers from the scene removing their crippled dns resolutions.

---
