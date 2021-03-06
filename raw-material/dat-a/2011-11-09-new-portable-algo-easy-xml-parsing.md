```meta-title: [new portable algo] Easy XML Parsing using XML-Motor (currently just in Ruby)```
```meta-date: 2011-11-09 21:30:00```
```meta-updated: 2011-11-09 21:41:00```
```meta-comments: 0```
```meta-tags: rubygems ruby parser. xml parser gems xml algorithm xml-motor```

> was originally posted at deprecated blog [http://.blogspot.com]()


<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">Easy
<b>XML Parsing
</b>using
<b> XML-Motor&nbsp;
</b>

<span style="font-size: x-small;">(currently just implemented in Ruby as a Gem)
</span>

<span style="font-size: x-small;">
<span style="font-size: small;">
<b style="font-family: Georgia,&quot;Times New Roman&quot;,serif;">Using a new, compact algorithm of XML Partsing
</b>
</span>
</span>

===================================================
v 0.0.2
@
<b>GitHub
</b>:
<a href="https://github.com/abhishekkr/rubygem_xml_motor">https://github.com/abhishekkr/rubygem_xml_motor
</a>

@
<b>RubyGems
</b>:
<a href="http://rubygems.org/gems/xml-motor">http://rubygems.org/gems/xml-motor
</a>
===================================================

A new short XML Parsing Algorithm implemented in LessThan 200 Ruby lines.
An easy-to-use XML Parser without any Native Dependencies.


<div style="text-align: center;">
<b>
<span style="font-size: large;">
<span style="font-family: &quot;Helvetica Neue&quot;,Arial,Helvetica,sans-serif;">[How To Use]
</span>
</span>
</b>
</div>

<b>
<span style="font-size: large;">
<span style="font-family: &quot;Helvetica Neue&quot;,Arial,Helvetica,sans-serif;">Installing and Loading:
</span>
</span>
</b>
&nbsp;&nbsp; + $
<b>gem install xml-motor
</b>
&nbsp;&nbsp; + in your ruby code:
<b>require 'xml-motor'
</b>


<span style="font-size: large;">
<b style="font-family: &quot;Helvetica Neue&quot;,Arial,Helvetica,sans-serif;">Usage:
</b>
</span>
&nbsp; + To find values of an xml node from an xml file
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<b>
<span style="font-family: Times,&quot;Times New Roman&quot;,serif;">XMLMotor.get_node_from_file [file_name_with_path], [tag_name]
<file_with_path>
<node>
</node>
</file_with_path>
</span>
</b>
&nbsp; + To find values of an xml node from an xml string
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<b>
<span style="font-family: Times,&quot;Times New Roman&quot;,serif;">XMLMotor.get_node_from_content [xml_data], [tag_name]
<xml_string>
<node>
</node>
</xml_string>
</span>
</b>
&nbsp; + To find values of an xml node with a tag_name having required attribute
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<b>
<span style="font-family: Times,&quot;Times New Roman&quot;,serif;">XMLMotor.get_node_from_content
</span>
</b>
<b>
<span style="font-family: Times,&quot;Times New Roman&quot;,serif;"> [xml_data], [tag_name], [attr_key=attr_value]
</span>
</b>


<span style="font-size: large;">
<b>
<span style="font-family: &quot;Helvetica Neue&quot;,Arial,Helvetica,sans-serif;">Example Calls As Code:
</span>
</b>
</span>
&nbsp;+
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">XMLMotor
</span>.
<span style="font-size: x-small;">get_node_from_content
</span>
<span style="font-size: x-small;">"
</span>
</b>
</span>
<b>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&lt;
</span>
</b>
</span>
</b>
<span style="font-size: x-small;">
<b style="font-family: Arial,Helvetica,sans-serif;">A i='1'
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;a
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&lt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">
<b>
<c>A
</c>
</b>
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">
<b>
<c>&lt;B
</c>
</b>
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">
<b>
<c>b&lt;C
</c>
</b>
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">
<b>
<c>c&lt;C
</c>
</b>
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;&lt;A
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">
<b>
<c>
</c>ba&lt;A
</b>
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;&lt;B
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">"
</span>, "A"
</b>
</span>
&nbsp;&nbsp;&nbsp;&nbsp; RETURNS: ["a", "ba"]
&nbsp;+
<b>
<span style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">XMLMotor
</span>.
<span style="font-size: x-small;">get_node_from_content
</span>
<span style="font-size: x-small;">"
</span>
</span>
</b>
<b>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&lt;
</span>
</b>
</span>
</b>
<span style="font-size: x-small;">
<b style="font-family: Arial,Helvetica,sans-serif;">A i='1'
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;a
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&lt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">
<b>A
</b>
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">
<b>&lt;B
</b>
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">
<b>b&lt;C
</b>
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">
<b>c&lt;C
</b>
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;&lt;A
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">
<b>ba&lt;A
</b>
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;&lt;B
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;
</span>
</b>
</span>
<span style="font-size: x-small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<b>
</b>
</b>
</span>
<b>
<span style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">"
</span>, "B.A"
</span>
</b>
&nbsp;&nbsp;&nbsp;&nbsp; RETURNS: ["ba"]
&nbsp;+
<b>
<span style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">XMLMotor
</span>.
<span style="font-size: x-small;">get_node_from_content "
</span>
</span>
</b>
<b>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&lt;
</span>
</b>
</span>
</b>
<span style="font-size: x-small;">
<b style="font-family: Arial,Helvetica,sans-serif;">A i='1'
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;a
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&lt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">
<b>A
</b>
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">
<b>&lt;B
</b>
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">
<b>b&lt;C
</b>
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">
<b>c&lt;C
</b>
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;&lt;A
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">
<b>ba&lt;A
</b>
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;&lt;B
</span>
</b>
</span>
<span style="font-size: small;">
<b style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">&gt;
</span>
</b>
</span>
<b>
<span style="font-family: Arial,Helvetica,sans-serif;">
<span style="font-size: x-small;">"
</span>, "A",
<span style="font-size: x-small;">"i='1'"
</span>
</span>
</b>
&nbsp;&nbsp;&nbsp;&nbsp; RETURNS: ["a"]

===================================================


<div style="text-align: center;">
<b>
<span style="font-size: large;">
<span style="font-family: &quot;Helvetica Neue&quot;,Arial,Helvetica,sans-serif;">[Example Code]
</span>
</span>
</b>
</div>

<blockquote class="tr_bq">
<blockquote class="tr_bq">
<pre>
<span style="font-size: large;">
<b style="font-family: &quot;Courier New&quot;,Courier,monospace;">require 'xml-motor'

puts XMLMotor.get_node_from_file "eloqjs.htm", "h1"

fyl = File.open("elogjs.htm")
XMLData = fyl.read

puts XMLMotor.get_node_from_content XMLData, "div.span"

puts XMLMotor.get_node_from_content XMLData, "div"
</b>
</span>
</pre>
</blockquote>
</blockquote>
===================================================


<div id="__ss_10062216" style="width: 477px;">
<b style="display: block; margin: 12px 0pt 4px;">
<a href="http://www.slideshare.net/AbhishekKr/xmlmotor" target="_blank" title="XML-Motor">XML-Motor
</a>
</b>
<iframe frameborder="0" height="510" marginheight="0" marginwidth="0" scrolling="no" src="http://www.slideshare.net/slideshow/embed_code/10062216" width="477">
</iframe>

<div style="padding: 5px 0pt 12px;">View more
<a href="http://www.slideshare.net/" target="_blank">documents
</a> from
<a href="http://www.slideshare.net/AbhishekKr" target="_blank">Abhishek Kumar
</a>
</div>
</div>
</div>


</div>
