```meta-title: XML-Motor v0.0.3 ~ mine XML once..... multiple search```
```meta-date: 2011-11-12 14:30:00```
```meta-updated: 2011-11-12 15:55:27```
```meta-comments: 0```
```meta-tags: rubygems ruby performance parser gems xml update xml parser xml-motor```

> was originally posted at deprecated blog [http://.blogspot.com]()


<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">
<span style="font-size: x-small;">released
</span>v0.0.3
<span style="font-size: x-small;"> of
</span>xml-motor
<span style="font-size: x-small;">with following update
</span>:
<b>
<span style="font-family: Georgia,&quot;Times New Roman&quot;,serif; font-size: small;">
<a href="http://rubygems.org/gems/xml-motor">http://rubygems.org/gems/xml-motor
</a>
</span>
</b>


<b>Earlier
</b>:
&nbsp; * it just supported one search per every XML data processing

<b>Now
</b>:
&nbsp; * could retrieve processed XML 'Information' once, and search again &amp; again with minimized cost


<b>Now, along-with.....
</b>
&nbsp; * a single method-call search for Tag (w/ or w/o Attribute) in provided XML String or File

<b>You also have the capability to.....
</b>
&nbsp; * fetch the two (
<i>
<span style="font-size: x-small;">or one, depends how you wanna roll
</span>
</i>) required set of Information mined by providing it XML String
&nbsp; * then provide that information everytime to search anything, and hence making it way quicker for multiple searches



<div style="font-family: &quot;Trebuchet MS&quot;,sans-serif;">
<i>
<b>
<span style="font-size: large;">So, the improved way for multiple searches:
</span>
</b>
</i>
</div>
&nbsp; First, update your 'xml-motor' gem using
&nbsp;&nbsp;&nbsp; $
<b>
<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">gem install xml-motor
</span>
</b>

&nbsp; Now, the way to use it

<blockquote class="tr_bq" style="font-family: &quot;Courier New&quot;,Courier,monospace;">
<span style="font-size: small;">
<b>#!/usr/bin/env ruby
</b>
</span>

<span style="font-size: small;">
<b>require 'xml-motor'
</b>
</span>


<span style="font-size: small;">
<b>fyl = File.open "myXMLfile.xml"
</b>
</span>

<span style="font-size: small;">
<b>str = fyl.read
</b>
</span>

<span style="font-size: small;">
<b>xNodes = XMLMotorEngine._splitter_ str
</b>
</span>

<span style="font-size: small;">
<b>xTags = XMLMotorEngine._indexify_ xNodes
</b>
</span>

<span style="font-size: small;">
<b>result1 = XMLMotorEngine.pre_processed_content(
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xNodes, xTags, "h1")
</b>
</span>

<span style="font-size: small;">
<b>result2 = XMLMotorEngine.pre_processed_content(
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xNodes, xTags, "div", "class='wanted'")
</b>
</span>
</blockquote>

</div>


</div>
