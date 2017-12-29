```meta-title: Problem with IEEE 802.1x implementation's fallback option```
```meta-date: 2010-09-06 13:45:00```
```meta-updated: 2010-09-06 13:45:42```
```meta-comments: 0```
```meta-tags: ```


<div class="css-full-post-content js-full-post-content">

<div class="separator" style="clear: both; text-align: center;"><a href="http://4.bp.blogspot.com/_Xxl3TD2AA1M/TITwRHxVCAI/AAAAAAAAAmo/sNdPx_3vc_Y/s1600/IEEE802.1x_MAB.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="46" src="http://4.bp.blogspot.com/_Xxl3TD2AA1M/TITwRHxVCAI/AAAAAAAAAmo/sNdPx_3vc_Y/s320/IEEE802.1x_MAB.jpg" width="320" /></a></div><span style="font-size: large;">Problem with IEEE 802.1x implementation's fallback option</span><br />---------------------------------------------------------<br />I was just looking over some gyan for 802.1x implementation on Cisco's Portal.<br />They have a very nice guide over Phase Deployment Model for Identity Based Network Services.<br />While learning a bit, I saw mention of fallback option for IEEE 802.1x. Then I checked whether Juniper has it or not and it supports it too.<br /><br /><b>MAB i.e. MAC Authnetication Bypass</b> porviding support for Legacy Devices (say Printers) which are not capable of IEEE 802.1x and hence require some other method of authentication.<br />And the method provided to them is adding the incapable device's MAC Address to a static (or even dynamic based on implementation) MAC list on 802.1x provider.<br /><br />There goes the cocroach surviving Nuclear Attack. The super-strong 802.1x bypassed by a MAC ...are they really having faith on this, or have it implemented in super-man style. Though currently I can't think of any super-man for MAC Authentication. All I see is Sipper-Man :( sipping my security away.<br /><br /><b>Attacker just have to DUPLICATE allowed MAC, and enjoy the falling security.</b><i><b><br /><br />Seriously, I'm afraid... if anyone know the manner of its implementation hidden to me till now, which makes it secure. Please, let me know asap. </b></i><br /><br /><i><b>If you want their support to make your environment vulnerable:</b></i><br />Cisco Support: <a href="http://www.cisco.com/en/US/docs/ios/sec_user_services/configuration/guide/standalone_mab.html">http://www.cisco.com/en/US/docs/ios/sec_user_services/configuration/guide/standalone_mab.html</a><br />Juniper Support: <a href="http://kb.juniper.net/KB11429">http://kb.juniper.net/KB11429</a>

</div>