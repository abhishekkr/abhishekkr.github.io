```meta-title: ADS [Alternate Data Stream] : NTFS - The Dark Side```
```meta-date: 2009-09-07 03:44:00```
```meta-updated: 2010-08-03 11:23:08```
```meta-comments: 0```
```meta-tags: Security NTFS Data Alternate ADS Stream```


## ADS (Alternate Data Stream) in NTFS - The Dark Side

> was originally posted at deprecated blog [http://hackersmag.blogspot.com](http://hackersmag.blogspot.com/2009/09/ads-alternate-data-stream-ntfs-dark.html)

The feature of NTFS from WinNT v3.1 onwards which is very dangerous as can be used to hide files on your system even undetected from several Antivirus, and other Security Products.

This ADS can even be used to hide malicious files, so to counter such covert attacks one need to figure out the the unwanted files in ADS on their disk drives.

#### To hide files in ADS

> (say adsF.ext into ADS of mainF.ext)

* at command prompt ```cmd:\> type adsF.ext > mainF.ext:adsFile.ext```

* now to access it (say it opens in Notepad) ```cmd:\> notepad mainF.ext:adsFile.ext```


#### For this several professional tools can be used, like

* HijackThis (from Trend Micro): [http://free.antivirus.com/](http://free.antivirus.com/)

* Lads (from Heysoft): [http://www.heysoft.de/en/software/lads.php?lang=EN](http://www.heysoft.de/en/software/lads.php?lang=EN)

* SFind (in Forensic Toolkit): [http://www.foundstone.com/us/resources/](http://www.foundstone.com/us/resources/)

Here we discuss how to use ADS to hide files... and how to secure yourself from files in ADS.

### To get a live demo Video on this stuff watch the video below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/h96meoDYWSg?start=76" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
