
> was originally posted at a deprecated blog

## Host your Site on Google AppEngine in 7 Easy Steps

Project/**Example** Site: [gae-flat-web.appspot.com](http://gae-flat-web.appspot.com)

Hosting your site on Google AppEngine:

* Register any **$App** at [Google ApEngine](http://appengine.google.com/) using your **Google** Account. As if **$App** is you Application Name giving you url like `$App.appspot.com`.

* *Download* the Python Script `flat.py` provided on this [github.com/abhishekkr/gae-flat-web](https://github.com/abhishekkr/gae-flat-web).

* Execute `# python flat.py $App`

* It will created required structure in a dir *$App*.

* *Copy* all your static site to `$App/flat_web/*`

* *Download* Google AppEngine Python SDK

* Update this `$App` using Google AppEngine SDK as `# python appcfg.py update $Path_to_App`

> Your own Static Content Website served by Google AppEngine.
> [https://github.com/abhishekkr/gae-flat-web](https://github.com/abhishekkr/gae-flat-web)

---
