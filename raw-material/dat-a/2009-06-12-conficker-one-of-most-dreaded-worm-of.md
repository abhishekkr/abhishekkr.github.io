```meta-title: Conficker : one of most dreaded worm of 2008```
```meta-date: 2009-06-12 02:30:00```
```meta-updated: 2009-07-08 10:20:44```
```meta-comments: 0```
```meta-tags: hack conficker attack windows worm exploit microsoft 2008```


## Conficker, one of most dreaded worms of 2008

> was originally posted at deprecated blog [http://hackersmag.blogspot.com](http://hackersmag.blogspot.com/2009/06/conficker-one-of-most-dreaded-worm-of.html)

* Conficker is also known as Downup, Downadup and Kido. Targets Microsoft Windows operating system, first detected in November 2008.

* Believed to be the largest computer worm infection since the 2003 SQL Slammer.

* If got infected try it: [Microssoft's Live Online Scan](http://onecare.live.com/site/en-us/default.htm?s_cid=sah) or [download and run this utility on your infected machine](http://www.microsoft.com/downloads/details.aspx?FamilyId=AD724AE0-E72D-4F54-9AB3-75B8EB148356&amp;displaylang=en)


#### Its Nature

* Extracts all of its files to the %System% directory with random DLL file names, which can wreak havoc on your computer.

* Deletes the user's Restore Points.

* Registers a services called Netsvcs

* Creates scheduled tasks that execute all of the DLL files.

* Creates it's own simple HTTP server on the infected computer and spreads the worm to other computers in the network through file shares.

* Creates an Autorun.inf file in file shares to execute the warm files once the share is accessed by another computer.

* Connects to external sites to download additional files.

> This exploits vulnerability called MS08-067 in Windows 2000, XP, and Server 2003.
>
> Microsoft Windows Server Service RPC Handling Remote Code Execution Vulnerability.

* [Virus Diagram](http://www.microsoft.com/protect/images/viruses/diagram.jpg)

[For Detailed Information : Click Here](http://www.microsoft.com/protect/computer/viruses/worms/conficker.mspx)

---
