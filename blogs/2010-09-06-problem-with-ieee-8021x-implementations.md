## Problem with IEEE 802.1x implementation's fallback option

> was originally posted at deprecated blog [http://hackersmag.blogspot.com](http://hackersmag.blogspot.com/2010/09/problem-with-ieee-8021x-implementations.html)

I was just looking over some gyan for 802.1x implementation on Cisco's Portal.

They have a very nice guide over Phase Deployment Model for Identity Based Network Services.

While learning a bit, I saw mention of fallback option for IEEE 802.1x. Then I checked whether Juniper has it or not and it supports it too.


**MAB i.e. MAC Authnetication Bypass** providing support for Legacy Devices (say Printers) which are not capable of IEEE 802.1x and hence require some other method of authentication.

And the method provided to them is adding the incapable device's MAC Address to a static (or even dynamic based on implementation) MAC list on 802.1x provider.

> There goes the cocroach surviving Nuclear Attack. The super-strong 802.1x bypassed by a MAC ...are they really having faith on this, or have it implemented in super-man style. Though currently I can't think of any super-man for MAC Authentication. All I see is Sipper-Man :( sipping my security away.
>
> Attacker just have to DUPLICATE allowed MAC, and enjoy the falling security.
>
> Seriously, I'm afraid... if anyone know the manner of its implementation hidden to me till now, which makes it secure. Please, let me know asap.
>
> If you want their support to make your environment vulnerable: [Cisco Support](http://www.cisco.com/en/US/docs/ios/sec_user_services/configuration/guide/standalone_mab.html)
>
> Juniper Support: [link](http://kb.juniper.net/KB11429)

---
