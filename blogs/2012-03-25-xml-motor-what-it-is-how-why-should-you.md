
> was originally posted at a deprecated blog

## xml-motor: what it is; why & how you should use it

Download this article as pdf on what,why,how

<a href="http://speakerdeck.com/u/abhishekkr/p/xml-motor-whatwhyhow-this-xml-parsing-rubygem#">http://speakerdeck.com/u/abhishekkr/p/xml-motor-whatwhyhow-this-xml-parsing-rubygem#</a>

Late 2011, I started with a new rubygem project for parsing xml, html content.

> Rubygems: [http://rubygems.org/gems/xml-motor](http://rubygems.org/gems/xml-motor)
>
> Github: [https://github.com/abhishekkr/rubygem\_xml\_motor](https://github.com/abhishekkr/rubygem_xml_motor)

Just created it to test out my work at compact, quick and easy xml-parsing algorithm... can see that

> Slideshare: [http://www.slideshare.net/AbhishekKr/xmlmotor](http://www.slideshare.net/AbhishekKr/xmlmotor)

So, currently this is a *non-native*, completely *independent less-than-250 ruby-LOC* available as a simple rubygem to be require-d and use in an easy freehand notation and match with any node attributes.


### Current Features

* Has a single method access to parse require xml nodes from content or file. Use it only if you are gonna parse that xml-content once. For using same xml-content more than once, follow the 3-way step mentioned in examples.

* It doesn't depend on presence of any other system library, purely non-native.

* It parses broken or corrupted xml/html content correctly, just for the content it have.

* Can parse results on looking for node-names, attributes of node or both.

* Uses free-freehand notation to retrieve desired xml nodes if your xml looks like below, and you look for `book.author`. Then, you'll get back `['CBA', 'XY', 'YZ']`; what that means is the child-node could be at any depth in the parent-node.

```
<library>...
  <book>
    <title>ABC</title>
    <author>CBA</author>
  </book>...
  <book>
    <title>XYZ</title>
    <authors>
      <author>XY</author>
      <author>YZ</author>
    </authors>
    </book>...
</library>
```

* Default return mode is without the tags, there is a switch to get the nodes. As you'd have seen in above example: `CBA` gets sent by default, not `<author>CBA</author>`.

* To filter your nodes on the basis of attributes, single or multiple attributes can be provided.

* These attribute searches can be combined up with freehand node name searches.

* Readme (a bit weird): [rubygem\_xml\_motor / README](https://raw.github.com/abhishekkr/rubygem_xml_motor/master/README)

### Features To Come

* Work on making it more performance efficient.

* Limit over result-nodes retrieved from start/end of matching nodes.

* Multi-node attribute-based filter for a hierarchical node search.

* Add dev-knows CSS Selector, it's already present using attribute based search... just need to add a mapping method.


### EXAMPLES of usage

*example code to try:* [axml-motor / ruby / examples](https://github.com/abhishekkr/axml-motor/tree/master/ruby/examples)

* say, you have an xml file `dummy.xml`, with data as

```
<dummy>
  <ummy>
    <mmy class="sys">non-native</mmy>
  </ummy>
  <ummy>
    <mmy class="sys">
      <my class="sys" id="mem">compact</my>
    </mmy>
  </ummy>
  <mmy type="user">
    <my class="usage">easy</my>
  </mmy>
</dummy>
```

* its available at rubygems.org, install it as `# gem install xml-motor`

* include it in your ruby code,

```
#!/usr/bin/env ruby

require 'xml-motor'
```

* get the XML Filename and/or XML data available

```
fyl = File.join(File.expand_path(File.dirname __FILE__), 'dummy.xml')

xml = File.open(fyl,'r'){|fr| fr.read }
```

* one-time XML-Parsing directly from file

```
XMLMotor.get_node_from_file(fyl, 'ummy.mmy', 'class="sys"')

=begin
Result: 

["non-native", "\n <my class="\&quot;sys\&quot;" id="\&quot;mem\&quot;">compact</my>\n"]
=end
```

* one-time XML-Parsing directly from content

```
XMLMotor.get_node_from_content(xml, 'dummy.my', 'class="usage"')

=begin
Result:

["easy"]
=end
```

* Way to go for XML-Parsing for xml node searches

```
xsplit = XMLMotor.splitter(xml)
xtags  = XMLMotor.indexify(xsplit)
```

> * just normal node name based freehand notation to search: `XMLMotor.xmldata(xsplit, xtags, 'dummy.my')` with result `["compact", "easy"]`
>
> * searching for values of required nodes filtered by attribute: `XMLMotor.xmldata(xsplit, xtags, nil, 'class="usage"')` with result `["easy"]`
> 
> * searching for values of required nodes filtered by freehand tag-name notation and attribute: `XMLMotor.xmldata(xsplit, xtags, 'dummy.my', 'class="usage"')` with result `["easy"]`
>
> * searching for values of required nodes filtered by freehand tag-name notation and multiple attributes: `XMLMotor.xmldata(xsplit, xtags, 'dummy.my', ['class="sys"', 'id="mem"'])` with result `["compact"]`

---
