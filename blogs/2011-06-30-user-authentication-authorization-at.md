
> was originally posted at a deprecated blog

## User Authentication & Authorization [AT] Google AppEngine

AppEngine, a *PaaS* provided with a 'limited free' (not anymore) version to all GMail users (Google Account Owners). So, you can host your WebContent their making use of Python, Java or Go.

AppEngine enables you to use existing Google account of your Web-App users to be used for their authentication & authorization at your AppEngine-hosted Web-App also.

So, there are two main ways to acieve that:

* To import google.appengine.api.[users](http://code.google.com/appengine/docs/python/users/), this [USERS module](http://code.google.com/appengine/docs/python/users/) from AppEngine APIs enables your Web-App to identify the users on the basis of their Google A/c ID (GMail ID). Makes the decision of routing the user to secured Resource or forbidden resource error message.

> [An Example on Usage](http://code.google.com/appengine/docs/python/users/loginurls.html)

* To specify '[login](http://code.google.com/appengine/docs/python/config/appconfig.html#Requiring_Login_or_Administrator_Status)' under '[app.yaml](http://code.google.com/appengine/docs/python/config/appconfig.html)' so the major basic configuration about your Web-App and routing configuration reside in `app.yaml` file. It has default location of Web-App root location. So, you can specify at secured *url* specifications to enforce user for a Google login.

> [An Example Of Usage](http://code.google.com/appengine/docs/python/config/appconfig.html#Requiring_Login_or_Administrator_Status)


In, both of these implementations whenever a user tries to visit a 'secured url' on your Web-App, they are automatically redirected to Google A/c Log-In page further redirecting them back to your Web-App on succesful log-in.


> *The Curious Case of static\_dir*
>
> Initially while working for my newly initiated opensource project 'py-gae-legs'.
> I added entire 'secure URL' logic by *method#1* i.e. using 'users' api.
>
> It was all working fine & secured until I added some [static-content using static\_dir](http://code.google.com/appengine/docs/python/gettingstarted/staticfiles.html) and tried securing it's url using the same tactic.
>
> But, there was a thing about '[static\_dir](http://code.google.com/appengine/docs/python/gettingstarted/staticfiles.html)' which I investigated after my *supposed-to-be secure* static\_dir's content *was all publicly available*, if someone could enumerate/know the complete urls.
>
> The thing about it was... the directories marked to be `static_dir` in `app.yaml` are no more located on the AppEngine Server in the same location after you update your Web-App.
>
> So, the entire directory structure would remain same... it's just that the `static_dir` marked locations would somehow vanish from it on your **Web-App's location at AppEngine** and **served from some other provision** made by Google which maps back to the location.
>
> So, to secure the `static_dir` located urls... the only way (that I know of) is to implement it at the very core of Web-App configurations i.e. in `app.yaml` using the `method#2`. Discussed below..

You can enforce Google Login to be mandatory by setting 'login:required' for that 'url' setting. If you want only a selected Users to see that, then you'll have to add all those Google account IDs by doing following

* Go to Dashboard of your GoogleAppEngine Web-App, the URL-Box link would look like: `https://appengine.google.com/permissions?app_id=s%7E$GAE_APPLICATION_NAME`

* Click the link '*Permission*' from Right-Menu-Column

* Invite all those user's by providing their e-mail ID and changing their role to 'Viewer'. At `app.yaml` provide `login:admin` instead of `login:required`.


---

Lately, I've been involved at starting an **OpenSource** project [py-gae-legs @github](https://github.com/abhishekkr/py-gae-legs). This has a basic architecture, wokring on automated generation part.

It's a very *basic subset* of *WebApp* for the lovers of convention oriented development.

> have been working on it for past few months, love the ease it gives but hate the convention being the soul

This project just aims web-development **specifically aimed to be hosted over AppEngine**.

> Almost done with it's basic starters to look at:
>
> * [gae-flat-web](https://github.com/abhishekkr/gae-flat-web), to create an architecture hosting your already created static website, [gae-flat-web.appspot.com](http://gae-flat-web.appspot.com)
>
> * [gae-private-web @github](https://github.com/abhishekkr/gae-private-web), **W.I.P.** to host all your private content hosted securely (by Google) in an by-invite only website

---
