```meta-title: Easily Set Up a WebServer with a StandAlone Executable JAR```
```meta-date: 2010-01-16 13:43:00```
```meta-updated: 2010-08-03 11:27:18```
```meta-comments: 0```
```meta-tags: server opensource http abk beta web sitehoster```


## ABK SiteHoster, easily setup a webserver with standalone executable jar

> was originally posted at deprecated blog [http://justfewtuts.blogspot.com](http://justfewtuts.blogspot.com/2010/01/easily-set-up-webserver-with-standalone.html)

To set up a WebServer on your machine, a very easy way would be to use 'ABK SiteHoster', a project currently in its beta stage... just a standalone executable JAR... no complex configuration required...

[demo @ Youtube](http://www.youtube.com/watch?v=CogPa646vi8)

Using:

#### Step.1

* Download JAR file from any of the two locations below, say you downloaded a file named `http09_v0.5beta.jar`.

> [now at Github](https://github.com/abhishekkr/sitehoster); [Sourceforge](http://sourceforge.net/projects/sitehoster/); [Google Code](http://code.google.com/p/sitehoster/)


#### Step.2

* Copy your WebSite (currently no Server Side Scripting supported) to any folder, whose Absolute Path is say `C:\temp\WebDocs` or `/opt/webdocs`.


#### Step.3

[usage is deprecate below, latest available here](https://github.com/abhishekkr/sitehoster/blob/master/Documentation/ReadMe_latest.txt)

* Open command prompt, change directory to `http09_v0.5beta.jar`'s directory and execute following command.

```windows
cmd> java -jar http09_v0.5beta.jar "C:\temp\WebDocs"
```

* If you want `C:\temp\WebDocs\index.html` to be default file opened at Website root, then instead run following command

```
cmd> java -jar http09_v0.5beta.jar "C:\temp\WebDocs" index.html
```

* If `Port 80` of your machine is already busy, and you want to run it at some other port (say `1234`), then run following command

```
cmd> java -jar http09_v0.5beta.jar "C:\temp\WebDocs" index.html 1234
```

> PreRequirement: need JVM obviously


<iframe width="560" height="315" src="https://www.youtube.com/embed/ENiiAccY1v0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
