> was originally posted at a deprecated blog

## XML-Motor v0.0.3: mine XML once... multiple search

released v0.0.3 of xml-motor with following update: [gems/xml-motor](http://rubygems.org/gems/xml-motor)

* Earlier: it just supported one search per every XML data processing

* Now: could retrieve processed XML 'Information' once, and search again &amp; again with minimized cost

* Alongwith: a single method-call search for Tag (w/ or w/o Attribute) in provided XML String or File

* Also capability to fetch the two (or one, depends how you wanna roll) required set of Information mined by providing it XML String

* Then provide that information everytime to search anything, and hence making it way quicker for multiple searches

* Now, the way to use it

```
#!/usr/bin/env ruby

require 'xml-motor'

fyl = File.open "myXMLfile.xml"

str = fyl.read

xNodes = XMLMotorEngine._splitter_ str

xTags = XMLMotorEngine._indexify_ xNodes

result1 = XMLMotorEngine.pre_processed_content(xNodes, xTags, "h1")

result2 = XMLMotorEngine.pre_processed_content(xNodes, xTags, "div", "class='wanted'")
```

---
