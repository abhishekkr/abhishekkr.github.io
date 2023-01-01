
## Nim project to generate custom sitemap.xml

> Code of project created for this tutorial is available @[github/mysitemap](https://github.com/abhishekkr/mysitemap)

### Create a Nim Project

* Generate a new Nim project *mysitemap*, select `binary` for type of project with `<Tab>` key and can just press `<Enter>` key for others.

```
nimble init mysitemap
```


### Generate a simple Sitemap from fixed data

* Update `src/mysitemap.nim` to look like

```
import std/xmltree

proc main() =
    var loc = newElement("loc")
    loc.add newText("https://abhishekkr.github.io/")

    var lastmod = newElement("lastmod")
    lastmod.add newText("2022-12-31T11:38:06+00:00")

    var priority = newElement("priority")
    priority.add newText("1.00")

    var url = newElement("url")
    url.add loc
    url.add lastmod
    url.add priority

    let att = {
        "xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9",
        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "xsi:schemaLocation": "http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    }.toXMLAttributes
    let sitemap = newXmlTree("urlset", [url], att)
    echo($sitemap)

when isMainModule:
    main()
```

> * Here, we are using `std/xmltree` standard library to generate XML Node Elements like `url`, then it's child elements `loc`, `lastmod` & `priority` with required text field using `newText(..)`.
>
> * Then we prepare attributes of root node and add all pre created elements to XML Tree using `newXmlTree(..)`.

* Running it gives

```
$ nim c -r src/mysitemap.nim

<urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https:/abhishekkr.github.io</loc>
    <lastmod>2022-12-31T11:38:06+00:00</lastmod>
    <priority>1.00</priority>
  </url>
</urlset>
```


### Evolve to Walk Dir and add static HTML Paths

* Split `main()` into two functions, base to walk the directory provided

```
proc main(rootURL, dynamicPath, mdPath, rootPath: string) =
    var urls = newSeq[XmlNode]()
    var path, name, ext: string
    let allowedExtensions = @[".html", ".htm"]
    for f in walkDirRec(rootPath, {pcFile}, {pcDir}, true, true):
      (path, name, ext) = splitFile(f)
      if ext in allowedExtensions:
          var link = rootURL/"/"/f
          echo("adding path: ", link)
          urls.add(url(link, "1.00"))
    let att = {
        "xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9",
        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "xsi:schemaLocation": "http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    }.toXMLAttributes
    let sitemap = newXmlTree("urlset", urls, att)
    echo($sitemap)
```

> * Here [walkDirRec](https://nim-lang.org/docs/os.html#walkDirRec.i,string) from `std/os` gets passed the path to recursively walked. Fourth param `true` makes it return relative paths as relative paths attached to site-url would form static links. Fifth param `true` makes it raise error is provided dir path doesn't exist.
>
> * Using `splitFile` to get file extension to be matched for extensions which would be allowed to be part of static links in Sitemap.

* Another function called to return `url` xml-node for relevant paths to be added

```
proc url(link, priorityVal: string): XmlNode =
    var loc = newElement("loc")
    loc.add newText(link)

    var lastmod = newElement("lastmod")
    lastmod.add newText("2022-12-31T11:38:06+00:00")

    var priority = newElement("priority")
    priority.add newText(priorityVal)

    var url = newElement("url")
    url.add loc
    url.add lastmod
    url.add priority
    result = url
```

* Evolve main call to utilize cli params as below, this also covers next part where we pass dynamic path params

```
when isMainModule:
    if paramCount() < 3:
      quit("wrong usage; e.g. mysitemap 'https://abhishekkr.github.io' '/blog.html#/' ./blogs [$PWD]")
    let rootURL = paramStr(1)
    let dynamicPath = paramStr(2)
    let mdPath = paramStr(3)
    var optRoot = "."
    if paramCount() == 4:
        optRoot = paramStr(4)
    main(rootURL, dynamicPath, mdPath, optRoot)
```

* Running it in [abhishekkr.github.io](https://github.com/abhishekkr/abhishekkr.github.io) gives something like

```
$ nim c -r src/mysitemap.nim 'https://abhishekkr.github.io' '/blog.html#/' ./blogs

adding path:https:/abhishekkr.github.io/about.html
adding path:https:/abhishekkr.github.io/blog.html
...
<urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https:/abhishekkr.github.io/about.html</loc>
    <lastmod>2022-12-31T11:38:06+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https:/abhishekkr.github.io/blog.html</loc>
    <lastmod>2022-12-31T11:38:06+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  ...
</urlset>
```


### Evolve to Walk Dir for Markdown Files generating Dynamic Site Links

* add walk dir for dynamic path, non-recursive as just base dir contains all markdown files in case of this blog; in `main()` function right below `walkDirRec` block

```
    for f in walkDir(mdPath, true, true):
      (path, name, ext) = splitFile(f.path)
      if ext == ".md":
          var link = rootURL/dynamicPath/f.path
          echo("adding path: ", link)
          urls.add(url(link, "1.00"))
```

* also add `urls.add(url(rootURL, "1.00"))` above `walkDirRec` block to make Root URL first link entry


### Dynamic link priority for `html/htm` files based on their depth

* Import `import std/strutils`, needed for *formatFloat* to two precision decimal points and add a global default `let topPriority = 1.0` as start value

* Update `proc url(..)` block with following diff, so priority gets passed per link as float value & converted to string here

```
+proc url(link: string, priorityVal: float): XmlNode =
+    var priorityStr = priorityVal.formatFloat(ffDecimal, 2)
     var loc = newElement("loc")
     ...
     var priority = newElement("priority")
-    priority.add newText(priorityVal)
+    priority.add newText(priorityStr)
     ...
```

* Update `proc main(..)` block with following diff, using *topPriority* to calculate priorities of links based on depth for html files & static for dynamic

```
 proc main(rootURL, dynamicPath, mdPath, rootPath: string) =
     ...
     let allowedExtensions = @[".html", ".htm"]
+    let allowedSubdirs = @["", "blogs", "slides"]
 
-    urls.add(url(rootURL, "1.00"))
+    urls.add(url(rootURL, topPriority))
 
+    var htmlPriority = topPriority - 0.05
+    var curDir = rootPath
     for f in walkDirRec(rootPath, {pcFile}, {pcDir}, true, true):
       (path, name, ext) = splitFile(f)
+      if not (path in allowedSubdirs):
+          continue
       if ext in allowedExtensions:
           var link = rootURL/"/"/f
           echo("adding path: ", link)
-          urls.add(url(link, "1.00"))
+          urls.add(url(link, htmlPriority))
+      if curDir != path:
+          htmlPriority = htmlPriority - 0.05
+          curDir = path
 
+    let mdPriority = topPriority - 0.1
     for f in walkDir(mdPath, true, true):
           ...
           echo("adding path: ", link)
-          urls.add(url(link, "1.00"))
+          urls.add(url(link, mdPriority))
           ...
```

> if any specific link needs specific priority, shall be tweaked separately


### Fix Param Parsing, so traditional static links sites could also use

* Import `std/parseopt` to use *initOptParser* for easy flag/switch parsing.

* Update calling of `main(..)` to

```
when isMainModule:
    var p = initOptParser(longNoVal = @["help", "skipmd"])
    var help, skipmd: bool
    var site, sitePath, mdURL, mdPath: string
    for kind, key, val in p.getopt():
        case key:
            of "help":
                help = true
            of "skipmd":
                skipmd = true
            of "site":
                site = val
            of "site-path":
                sitePath = val
            of "md-url":
                mdURL = val
            of "md-path":
                mdPath = val
    if help:
        quit("e.g. mysitemap --site='https://abhishekkr.github.io'[--site-path='.'] [--skipmd] [--md-url='/blog.html#/blogs' --md-path=./blogs]")
    if skipmd:
      echo("--skipmd has been passed, so assuming no dynamic/markdown paths available")
    if sitePath == "":
        sitePath = "."
    main(site, sitePath, mdURL, mdPath, skipmd)
```

> * Here `initOptParser()` parses and populates `p` with required sequences of `{kind,key,val}` for provided cli flag/switch.
>
> * Then just need to fetch each via `getopt()` and set your internal variables.

* Update `main(..)` as following diff to match this call and utilize `skipmd` to skip dynamic sitemap links

```
-proc main(rootURL, dynamicPath, mdPath, rootPath: string) =
+proc main(rootURL, rootPath, dynamicPath, mdPath, : string, skipmd: bool) =
     var urls = newSeq[XmlNode]()
     ...
     var curDir = rootPath
     for f in walkDirRec(rootPath, {pcFile}, {pcDir}, true, true):
-      (path, name, ext) = splitFile(f)
-      if not (path in allowedSubdirs):
-          continue
-      if ext in allowedExtensions:
-          var link = rootURL/"/"/f
-          echo("adding path: ", link)
-          urls.add(url(link, htmlPriority))
-      if curDir != path:
-          htmlPriority = htmlPriority - 0.05
-          curDir = path
+        (path, name, ext) = splitFile(f)
+        if not (path in allowedSubdirs):
+            continue
+        if ext in allowedExtensions:
+            var link = rootURL/"/"/f
+            echo("adding path: ", link)
+            urls.add(url(link, htmlPriority))
+        if curDir != path:
+            htmlPriority = htmlPriority - 0.05
+            curDir = path

-    let mdPriority = topPriority - 0.1
-    for f in walkDir(mdPath, true, true):
-      (path, name, ext) = splitFile(f.path)
-      if ext == ".md":
-          var link = rootURL/dynamicPath/f.path
-          echo("adding path: ", link)
-          urls.add(url(link, mdPriority))
+    if not skipmd:
+        let mdPriority = topPriority - 0.1
+        for f in walkDir(mdPath, true, true):
+            (path, name, ext) = splitFile(f.path)
+            if ext == ".md":
+                var link = rootURL/dynamicPath/f.path
+                echo("adding path: ", link)
+                urls.add(url(link, mdPriority))
 
     let att = {
```

* Now to run it as

```
## to show help
$ nim c -r src/mysitemap.nim --help

## to generate full sitemap with dynamic/markdown links
$ nim c -r src/mysitemap.nim --site='https://abhishekkr.github.io' --site-path='.' --md-url='/blog.html#/blogs' --md-path=./blogs

## to generate sitemap without dynamic/markdown links
$ nim c -r src/mysitemap.nim --site='https://abhishekkr.github.io' --site-path='.' --skipmd

## using current dir as site path, for sitemap without dynamic/markdown links
$ nim c -r src/mysitemap.nim --site='https://abhishekkr.github.io' --skipmd
```

---
