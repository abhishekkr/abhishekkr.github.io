```meta-title: ADS [ Alternate Data Stream ] : NTFS - The Dark Side```
```meta-date: 2009-09-07 03:44:00```
```meta-updated: 2010-08-03 11:23:08```
```meta-comments: 0```
```meta-tags: Security NTFS Data Alternate ADS Stream```



<div class="css-full-post-content js-full-post-content">


<span style="color: rgb(255, 255, 0);font-size:180%;" >
<span style="font-weight: bold;">ADS
<span style="font-style: italic;">[ Alternate Data Stream ]
</span> : NTFS - The Dark Side
</span>
</span>

The feature of NTFS from WinNT v3.1 onwards which is very dangerous as can be used to hide files on your system even undetected from several Antivirus, and other Security Products.

This ADS can even be used to hide malicious files, so to counter such covert attacks one need to figure out the the unwanted files in ADS on their disk drives.

To hide files in ADS (say adsF.ext into ADS of mainF.ext), at command prompt

<span style="font-weight: bold; color: rgb(255, 204, 153);"> cmd:\> type adsF.ext > mainF.ext:adsFile.ext
</span>
Now to access it (say it opens in Notepad)

<span style="font-weight: bold; color: rgb(255, 204, 153);"> cmd:\> notepad mainF.ext:adsFile.ext
</span>

For this several professional tools can be used, like

<span style="color: rgb(255, 204, 204);">HijackThis (from Trend Micro) :
</span>
<a style="color: rgb(255, 204, 204);" href="http://free.antivirus.com/">http://free.antivirus.com/
</a>

<span style="color: rgb(255, 204, 204);">Lads (from Heysoft) :
</span>
<a style="color: rgb(255, 204, 204);" href="http://www.heysoft.de/en/software/lads.php?lang=EN">http://www.heysoft.de/en/software/lads.php?lang=EN

</a>
<span style="color: rgb(255, 204, 204);">SFind (in Forensic Toolkit) :
</span>
<a style="color: rgb(255, 204, 204);" href="http://www.foundstone.com/us/resources/">http://www.foundstone.com/us/resources/
</a>

Here we discuss how to use ADS to hide files... and how to secure yourself from files in ADS.

To get a live demo Video on this stuff watch the video below:

<a href="http://blip.tv/file/2565748">http://blip.tv/file/2565748
</a>
or

<a href="http://www.youtube.com/watch?v=h96meoDYWSg">http://www.youtube.com/watch?v=h96meoDYWSg
</a>


<embed src="http://blip.tv/play/AYGd6UsC" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="390">
</embed>


</div>
