> was originally posted at a deprecated blog

## Easy XML Parsing using XML-Motor (currently in Ruby, new portable algo)

Easy XML Parsing using XML-Motor (currently just implemented in Ruby as a Gem).

Using a new, compact algorithm of XML Partsing.

* [xml-motor v0.0.2](https://github.com/abhishekkr/rubygem_xml_motor)

* [rubygems.org/xml-motor](http://rubygems.org/gems/xml-motor)

> A new short XML Parsing Algorithm implemented in LessThan 200 Ruby lines.
>
> An easy-to-use XML Parser without any Native Dependencies.

### How to use

* installing and loading: `# gem install xml-motor`; in your ruby code: `require 'xml-motor'`

* usage: to find values of an xml node from an xml file `XMLMotor.get_node_from_file(file_name_with_path, tag_name)`

* to find values of an xml node from an xml string `XMLMotor.get_node_from_content(xml_data, tag_name)`

* to find values of an xml node with a `tag_name` having required attribute

> [example code](https://github.com/abhishekkr/axml-motor/blob/master/ruby/examples/eg1.rb)

## Example

```
require 'xml-motor'

puts XMLMotor.get_node_from_file "eloqjs.htm", "h1"

fyl = File.open("elogjs.htm")
XMLData = fyl.read

puts XMLMotor.get_node_from_content XMLData, "div.span"

puts XMLMotor.get_node_from_content XMLData, "div"
```

---

<a href="http://www.slideshare.net/AbhishekKr/xmlmotor" target="_blank" title="XML-Motor">XML-Motor Slides</a>

<iframe frameborder="0" height="510" marginheight="0" marginwidth="0" scrolling="no" src="http://www.slideshare.net/slideshow/embed_code/10062216" width="477">
</iframe>

[view more](http://www.slideshare.net/AbhishekKr)

---
