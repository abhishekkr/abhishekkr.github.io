```meta-title: Conficker : one of most dreaded worm of 2008```
```meta-date: 2009-06-12 02:30:00```
```meta-updated: 2009-07-08 10:20:44```
```meta-comments: 0```
```meta-tags: Hack Conficker Attack Windows worm Exploit Microsoft 2008```


<div class="css-full-post-content js-full-post-content">

<span style="color: rgb(255, 255, 51);font-size:180%;" ><span style="font-weight: bold;">Conficker</span></span><br />(also known as Downup, Downadup and Kido)<br />targets Microsoft Windows operating system, first detected in November 2008.<br />Believed to be the largest computer worm infection since the 2003 SQL Slammer.<br /><br />If got infected try it:<br /><a href="http://onecare.live.com/site/en-us/default.htm?s_cid=sah">Microssoft's Live Online Scan</a><br />or<br /><a href="http://www.microsoft.com/downloads/details.aspx?FamilyId=AD724AE0-E72D-4F54-9AB3-75B8EB148356&amp;displaylang=en">download and run this utility on your infected machine</a><br /><br /><br />Its Nature:<br /> * Extracts all of its files to the %System% directory with random DLL file names, which can wreak havoc on your computer.<br /> * Deletes the user's Restore Points.<br /> * Registers a services called Netsvcs<br /> * Creates scheduled tasks that execute all of the DLL files.<br /> * Creates it's own simple HTTP server on the infected computer and spreads the worm to other computers in the network through file shares.<br /> * Creates an Autorun.inf file in file shares to execute the warm files once the share is accessed by another computer.<br /> * Connects to external sites to download additional files.<br /><br />This exploits vulnerability called MS08-067 in Windows 2000, XP, and Server 2003.<br />Microsoft Windows Server Service RPC Handling Remote Code Execution Vulnerability.<br /><br />Click Image To Enlarge It<br /><a src="http://www.microsoft.com/protect/images/viruses/diagram.jpg"><img style="cursor: pointer; width: 431px; height: 319px;" src="http://www.microsoft.com/protect/images/viruses/diagram.jpg" alt="" border="0" /></a><br /><br /><a href="http://www.microsoft.com/protect/computer/viruses/worms/conficker.mspx">For Detailed Information : Click Here</a>

</div>