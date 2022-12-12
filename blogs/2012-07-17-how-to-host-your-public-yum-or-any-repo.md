> was originally posted at a deprecated blog

## How to host your Public YUM (or any) Repo

Almost an year ago came up the simple idea of getting a really simple static-content (html,css,js,...) website on public portal hosted by Google AppEngine for free upto a daily revived usage scheme: [http://gae-flat-web.appspot.com/](http://gae-flat-web.appspot.com/)

Few days back I was just playing around custom yum repos and thought why not get up one of my own for public usage with RPMs served for either my projects or other non-available rpms, and what I came up with is: [http://yum-my.appspot.com/flat_web/index.htm](http://yum-my.appspot.com/flat_web/index.htm)

It's nothing fascinating but just a re-mixed usage of project created from [github/gae-flat-web](https://github.com/abhishekkr/gae-flat-web).

You can access base skeleton of this re-mixed gae-yum-my (the easy way to host your yum repo online) at [https://github.com/abhishekkr/gae-yum-my](https://github.com/abhishekkr/gae-yum-my).

Which also has rpm served for gae-flat-web.

> Now to see how you could get one too

First Task, register a new portal on [Google AppEngine](http://appengine.google.com/) (it's free for reasonable limited usage)using your Google Account. Say, your appengine portal is name MY-YUM-MY.

Now the fun begins.

* cloned the starter kit `# git clone https://github.com/abhishekkr/gae-yum-my`

* change dir to `# cd gae-yum-my`

* to actually change your application name in app.yaml `# sed -i 's/yum-my/MY-YUM-MY/g' app.yaml`

* create the required linux distro, release branch `# mkdir yummy/$distro/$releasever/$basearch`

* copy all required RPMs in that distro, release branch `# cp $ALL_MY_RPMS_of__DISTRO_ReleaseVer_BaseArch yummy/$distro/$releasever/$basearch/`

* prepare yum-repo-listing using createrepo command `# createrepo yummy/$distro/$releasever/$basearch/ `

* now, place a file `flat_web/yum-my-el6<or-whichever>.repo` with content 

```
[yum-my- < distro >< releasever > - < basearch > ]  
name=MY-YUM-MY  
baseurl= http://MY-YUM-MY.appspot.com/yummy/<distro>/$releasever/$basearch  
enabled=1  
gpgcheck=0
```

* and can link this file on your `flat_web/index.htm` homepage to host: 

```
# $google_appengine_path/appcfg.py update MY_YUM_MY_PATH
```

> Now your yum repo has a homepage at `http://MY-YUM-MY.appspot.com`
>
> And placing tthe `*.repo` file above with hinted content will get the RPMs added to you repo accessible.

---
