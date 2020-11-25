```meta-title: xml-motor ~ what it is; how &amp; why should you use it```
```meta-date: 2012-03-25 00:47:00```
```meta-updated: 2012-03-25 05:28:31```
```meta-comments: 0```
```meta-tags: parser rubygem algorithm paper project xml-parser presentation ruby research new abk xml xml parser opensource html parser```



<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">
<div style="text-align: right;">
<i>
<b>xml-motor ~ what it is; why &amp; how you should use it
</b>
</i>
</div>
<div>
Download this article as pdf on what,why,how

<a href="http://speakerdeck.com/u/abhishekkr/p/xml-motor-whatwhyhow-this-xml-parsing-rubygem#">http://speakerdeck.com/u/abhishekkr/p/xml-motor-whatwhyhow-this-xml-parsing-rubygem#
</a>


<script src="http://speakerdeck.com/embed/4f6e6818933f08001f00b579.js">
</script>
or read it all here.....


</div>Late 2011, I started with a new rubygem project for parsing xml, html content.
&nbsp;&nbsp;
<b>
<i>@Rubygems:
</i>
</b>
<a href="http://rubygems.org/gems/xml-motor">http://rubygems.org/gems/xml-motor
</a>
&nbsp;&nbsp;
<b>
<i>@GitHub &nbsp; &nbsp; :
</i>
</b>
<a href="https://github.com/abhishekkr/rubygem_xml_motor">https://github.com/abhishekkr/rubygem_xml_motor
</a>

Just created it to test out my work at compact, quick &amp; easy xml-parsing algorithm... can see that
&nbsp;&nbsp;
<b>
<i>@Slideshare:
</i>
</b>
<a href="http://www.slideshare.net/AbhishekKr/xmlmotor">http://www.slideshare.net/AbhishekKr/xmlmotor
</a>

So, currently this is a
<b>
<i>non-native
</i>
</b>, completely
<b>
<i>independent less-than-250 ruby-LOC
</i>
</b> available as a simple rubygem to be require-d and
<b>
<i>use in an easy freehand notation and match with any node attributes
</i>
</b>.


<b>Current Features:
</b>

<ul style="text-align: left;">
<li>Has a single method access to parse require xml nodes from content or file. Use it only if you are gonna parse that xml-content once.&nbsp;For using same xml-content more than once, follow the 3-way step mentioned in examples.
</li>
<li>It doesn't depend on presence of any other system library, purely non-native.
</li>
<li>It parses broken or corrupted xml/html content correctly, just for the content it have.
</li>
<li>Can parse results on looking for node-names, attributes of node or both.
</li>
<li>Uses free-freehand notation to retrieve desired xml nodes
if your xml looks like,

<i>
<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">'&lt;library&gt;...
&nbsp;&nbsp;&lt;book&gt;&nbsp;&lt;title&gt;ABC&lt;/title&gt; &lt;author&gt;CBA&lt;/author&gt; &lt;/book&gt;...
&nbsp;&nbsp;&lt;book&gt;
&nbsp;&nbsp; &nbsp;&lt;title&gt;XYZ&lt;/title&gt;
&nbsp;&nbsp; &nbsp;&nbsp;&lt;authors&gt; &lt;author&gt;XY&lt;/author&gt;&lt;author&gt;YZ&lt;/author&gt; &lt;/authors&gt;&lt;/book&gt;...
&lt;/library&gt;'
</span>
</i>
and you look for 'book.author',
then, you'll get back
<i>['CBA', 'XY', 'YZ']
</i>;
what that means is the child-node could be at any depth in the parent-node.
</li>
<li>Default return mode is without the tags, there is a switch to get the nodes.
as you'd have seen in above example:
'
<i>CBA
</i>' gets sent by default, not '
<i>
<author>CBA
</author>
</i>'
</li>
<li>To filter your nodes on the basis of attributes, single or multiple attributes can be provided.
</li>
<li>These attribute searches can be combined up with freehand node name searches.
</li>
<li>
<b>
<i>Readme (a bit weird):
</i>
</b>
<a href="https://raw.github.com/abhishekkr/rubygem_xml_motor/master/README">https://raw.github.com/abhishekkr/rubygem_xml_motor/master/README
</a>
</li>
</ul>
<div>
<b>

</b>
</div>
<div>
<b>

</b>
</div>
<div>
<b>Features To Come:
</b>

<ul style="text-align: left;">
<li>Work on making it more performance efficient.
</li>
<li>Limit over result-nodes retrieved from start/end of matching nodes.
</li>
<li>Multi-node attribute-based filter for a hierarchical node search.
</li>
<li>Add dev-knows CSS Selector, it's already present using attribute based search... just need to add a mapping method.
</li>
</ul>
<div>

</div>
<div>

</div>
<b>EXAMPLES of usage:
</b>

<b>
<i>example code to try:&nbsp;
</i>
</b>
<a href="https://github.com/abhishekkr/axml-motor/tree/master/ruby/examples">https://github.com/abhishekkr/axml-motor/tree/master/ruby/examples
</a>
</div>
<div>
<ul style="text-align: left;">
<li>say, you have an xml file
<b>
<i>'dummy.xml'
</i>
</b>, with data as

<i>&lt;dummy&gt;
&nbsp;&nbsp;&lt;ummy&gt;&nbsp;&nbsp; &nbsp;&lt;mmy class="sys"&gt;non-native&lt;/mmy&gt;&nbsp;&nbsp;&lt;/ummy&gt;
&nbsp;&nbsp;&lt;ummy&gt;
&nbsp;&nbsp; &nbsp;&lt;mmy class="sys"&gt;&nbsp;&nbsp; &nbsp; &nbsp;&lt;my class="sys" id="mem"&gt;compact&lt;/my&gt;&nbsp;&nbsp; &nbsp;&lt;/mmy&gt;
&nbsp;&nbsp;&lt;/ummy&gt;
&nbsp;&nbsp;&lt;mmy type="user"&gt;&nbsp;&nbsp; &nbsp;&lt;my class="usage"&gt;easy&lt;/my&gt;&nbsp;&nbsp;&lt;/mmy&gt;&lt;/dummy&gt;
</i>
</li>
<li>its available at rubygems.org, install it as
&nbsp;&nbsp;$
<i>gem install xml-motor
</i>
</li>
<li>include it in your ruby code,

<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">&nbsp;&nbsp;#!/usr/bin/env ruby
&nbsp;&nbsp;require 'xml-motor'
</span>
</li>
<li>get the XML Filename and/or XML data available

<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">&nbsp;&nbsp;fyl =
</span>
<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">File.join(File.expand_path(File.dirname __FILE__),
</span>
<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">'dummy.xml'
</span>
<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">)
</span>

<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">&nbsp;&nbsp;xml = File.open(fyl,'r'){|fr| fr.read }
</span>
</li>
<li>One-time XML-Parsing directly from file

<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">&nbsp;&nbsp;XMLMotor.get_node_from_file(fyl, 'ummy.mmy', 'class="sys"')
</span>

<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">
<i>&nbsp;&nbsp; &nbsp; Result:&nbsp;
</i>
</span>
<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">["non-native", "\n &nbsp; &nbsp; &nbsp;
<my class="\&quot;sys\&quot;" id="\&quot;mem\&quot;">compact
</my>\n &nbsp; &nbsp;"]
</span>
</li>
<li>One-time XML-Parsing directly from content

<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">&nbsp;&nbsp;XMLMotor.get_node_from_content xml, 'dummy.my', 'class="usage"'
</span>

<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">
<i>&nbsp;&nbsp; &nbsp; Result:
</i>&nbsp;["easy"]
</span>
&nbsp;&nbsp;
</li>
<li>Way to go for XML-Parsing for xml node searches

<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">&nbsp;&nbsp;xsplit = XMLMotor.splitter xml
&nbsp;&nbsp;xtags &nbsp;= XMLMotor.indexify xsplit
</span>

<i>
&nbsp;&nbsp;[] just normal node name based freehand notation to search:
</i>
&nbsp;&nbsp; &nbsp;
<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">XMLMotor.xmldata xsplit, xtags, 'dummy.my'
</span>

<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">
<i>&nbsp;&nbsp; &nbsp;Result:
</i>&nbsp;["compact", "easy"]
</span>

<i>&nbsp;&nbsp;[] searching for values of required nodes filtered by attribute:
</i>
&nbsp;&nbsp; &nbsp;
<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">XMLMotor.xmldata xsplit, xtags, nil, 'class="usage"'
</span>

<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">
<i>&nbsp;&nbsp; &nbsp;Result:
</i>&nbsp;["easy"]
</span>

<i>
&nbsp;&nbsp;[] searching for values of required nodes filtered by freehand tag-name notation &amp; attribute:
</i>
&nbsp;&nbsp; &nbsp;
<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">XMLMotor.xmldata xsplit, xtags, 'dummy.my', 'class="usage"'
</span>

<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">
<i>&nbsp;&nbsp; &nbsp;Result:
</i>&nbsp;["easy"]
</span>

<i>
&nbsp;&nbsp;[] searching for values of required nodes filtered by freehand tag-name notation &amp; multiple attributes:
</i>
&nbsp;&nbsp; &nbsp;
<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">XMLMotor.xmldata xsplit, xtags, 'dummy.my', ['class="sys"', 'id="mem"']
</span>

<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">
<i>&nbsp;&nbsp; &nbsp;Result:
</i>&nbsp;["compact"]
</span>
</li>
</ul>
</div>
</div>


</div>

