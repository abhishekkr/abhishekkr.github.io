## Vulnerable Microsoft's Video ActiveX Control Allows Remote Access `0-day attacks`

> was originally posted at deprecated blog [http://hackersmag.blogspot.com](http://hackersmag.blogspot.com/2009/07/vulnerable-microsofts-video-activex.html)

As made public on June 6'2009, Microsoft's Video ActiveX has Remote Code Exploit threat, where using a malformed web-page Remote code execution could be enabled on the target machine.

Cybercriminals are using the vulnerability to install a data stealing trojan on target machine affecting Microsoft Directshow.

If the **target user is using IE**, then **attacker could get local user rights using exploits by without any user-intervention**. So, the **CyberCriminal just need to pursue victim to view it's malformed web-page** and the victim's machine gets compromised.

Microsoft states it is aware of the vulnerability and suggests `Kill-bit MPEG2TuneRequest ActiveX Control Object (CLSID 0955AC62-BF2E-4CBA-A2B9-A63F772D46CF)` as the workaround to avoid the threat.

The defense it would provide is more than the minor side-effects it would cause.


#### To Avoid Threat

This kill-bit to avoid the threat can be automatically applied to your windows machine by "Microsoft Fix It" from online utility provided by Microsoft.com @ [http://support.microsoft.com/kb/972890](http://support.microsoft.com/kb/972890).


* [Microsoft's Link : Enable The Fix || Workaround](http://go.microsoft.com/?linkid=9672398)

* [Microsoft's Link : Disable The Fix || Workaround](http://go.microsoft.com/?linkid=9672397)


#### Data 'bout Threat

Can be exploited via any kind of HTML document, a website or e-mail, etc. This vulnerability is not a risk if you are using Windows Vista.

967 Chinese websites reported to successive redirecting to finally download a JPG file containing the exploit, detected by [Trend Micro](http://apac.trendmicro.com/apac/threats/microsoft-mpeg-vulnerability/index.html?WT.mc_id=0907_MSFTMPEG_APAC_HOME_bar) as JS_DLOADER.BD., that downloads another malware detected as WORM_KILLAV.AI. This malware disables and terminates AV processes, and drops other malware on the affected system.

[Detailed Info from **Microsoft Security Advisory**](http://www.microsoft.com/technet/security/advisory/972890.mspx)

---
