> was originally posted at a deprecated blog

## Snoop internal network data without breaking in. Info is already breaking out.

One day when I was creating a pastie for some DevOps related discussion, and filtering out the organization related data... it just occurred to what all internal information just gets added with the long logs getting pasted online for help.

Someone pasted on 20-Mar-2012 at pastebin.com which says nothing much except probably `assanka.com` uses `Puppet` with PuppetMaster at `puppetmaster.virtual.office.assanka.com` with `192.168.30.147` as internal IP.

There are loads of paste-ies like it adding to recon for easy latched rooms behind the huge lock web entry gates.

Now, like [this pastebin-scrap](http://pastebin.com/embed_js.php?i=qJ5jQMK3) says hints being generated at some internal machine of Qualigaz's network so some information about internal network of Qualigaz floating wild in open.

* Internal IPs in range of 192.168.30.x

* Is on a XEN Virtual Machine

* With SELinux Not Enforced

* Running Debian GNU/Linux 5.0.2 (lenny); sshrsakey as `AAAAB3NzaC1yc2E.......==` and sshdsakey as `AAAAB3NzaC1kc3M.......==`

Could have a look at [List of API Keys here](https://pastebin.com/wNP72MRX), [API Key in code here](https://pastebin.com/VPna3X1t) for some funny more out-bursting data.

This was just from very few

`
http://www.google.co.in/search?sourceid=chrome&amp;ie=UTF-8&amp;q=puppet+error+site%3Apastebin.com#hl=en&amp;sclient=psy-ab&amp;q=puppet+ipaddress+site:pastebin.com&amp;oq=puppet+ipaddress+site:pastebin.com&amp;aq=f&amp;aqi=&amp;aql=1&amp;gs_l=serp.3...33935.36443.1.36594.9.9.0.0.0.2.398.1641.0j7j1j1.9.0.erf1.1.0.0.OfIV4YDzWQo&amp;psj=1&amp;bav=on.2,or.r_gc.r_pw.r_qf.,cf.osb&amp;fp=c5dfe9ee54666a8f&amp;biw=1278&amp;bih=715
`

Can easily think what a full blown pastebin scrapper would do.

To be safe from such accidents, try to use service like [ZeroBin](http://sebsauvage.net/paste/), with 256 bits AES  encrypted pastie at server.

---
