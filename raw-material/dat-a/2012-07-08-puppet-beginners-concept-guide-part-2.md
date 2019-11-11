```meta-title: Puppet ~ a beginners concept guide (Part 2) ~ road to Modules```
```meta-date: 2012-07-08 12:32:00```
```meta-updated: 2013-03-13 11:29:53```
```meta-comments: 1```
```meta-tags: puppetlabs devops manifests best practices structure modules puppet puppet-lint```



<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">
<div style="text-align: right;">
<span class="Apple-style-span" style="background-color: #fff9ee; color: #222222;">
<i>
<span style="font-family: Times, 'Times New Roman', serif;">you might prefer first reading
<a href="http://www.blogger.com/goog_1050588259">
</a>
</span>
<a href="http://justfewtuts.blogspot.in/2012/05/puppet-beginners-concept-guide-part-1.html" target="_blank">
<span style="font-family: 'Trebuchet MS', sans-serif;">[ Puppet ~ beginners' concept guide ]
</span>
<span style="font-family: Times, 'Times New Roman', serif;"> Part#1
</span>
</a>
the section after this
<a href="http://justfewtuts.blogspot.com/2012/08/puppet-beginners-concept-guide-part-3.html">Part#3 talks about More &nbsp;on Modules is you work serious
</a>
</i>
</span>
</div>
<span class="Apple-style-span" style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: medium;">

</span>
<span class="Apple-style-span" style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: medium;">Puppet
</span>

<span class="Apple-style-span" style="background-color: #fff9ee; color: #222222; font-family: 'Courier New', Courier, monospace; font-size: 15px; line-height: 21px;">
<b>
<span class="Apple-style-span" style="font-size: xx-small;">beginners concept guide
</span>
</b>
</span>
<span style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">&nbsp;(Part
<b>2
</b>)
</span>

<span style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
<i>The Road To Modules
</i>
</span>

<span style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
<i>

</i>
</span>
<b style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">[]&nbsp;
<i>Puppet Modules?
</i>
</b>
<i style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">&nbsp;&nbsp;
</i>
<span class="Apple-style-span" style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: xx-small; font-style: italic;">(no, no..... nothing different conceptually)
</span>

<span style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">Puppet Modules (
<i>like in most other technological references, and the previous part of this tutorial
</i>) &nbsp;are libraries to be loaded and shared as per the required set of configuration.
</span>

<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">
<span style="font-size: 15px; line-height: 21px;">

</span>
</span>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">
<span style="font-size: 15px; line-height: 21px;">Think if you have a war application to be deployed over tomcat. For the stated requirement you require tomcat to be present on the machine with correct required configurations and war file to be correctly downloaded and placed on the machine with correct permissions.
</span>
</span>

<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">
<span style="font-size: 15px; line-height: 21px;">In a general scenario requirement&nbsp;
</span>
</span>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">like this,&nbsp;
</span>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">
<span style="font-size: 15px; line-height: 21px;">two modules come up. One to install, configure and service-start tomcat service. Another to
<i>download/locate war file
</i>, use
<i>tomcat's configure
</i> and
<i>service sub-module
</i>.
</span>
</span>


<b style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">[]
<i>Logic of&nbsp;Structure Logic
</i>
</b>
<i style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">&nbsp;&nbsp;
</i>
<span class="Apple-style-span" style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: xx-small; font-style: italic;">(just how is your module structured and )
</span>

<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">
<span style="font-size: 15px; line-height: 21px;">The different components of structural design followed by each puppet module:
</span>
</span>

<ul style="text-align: left;">
<li>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">
<span style="font-size: 15px; line-height: 21px;">
<b>manifests
</b>
All your '
<b>&lt;module/submodule&gt;.pp
</b>' manifest files go into '
<b>&lt;module_dir&gt;/manifests
</b>'.
Puppet has an auto-load service for modules/sub-modules, so the naming of these
<b>*.pp
</b> files should be suiting the class names.
As discussed above for a 'tomcat' module, you are also gonna create sub-modules like '
<b>tomcat::install
</b>', '
<b>tomcat::configure
</b>', and '
<b>tomcat::service
</b>'.
So the files that will get create be '
<b>&lt;tomcat-module&gt;/manifests/install.pp
</b>', '
</span>
</span>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
<b>&lt;tomcat-module&gt;/manifests/configure.pp
</b>', &nbsp;'
</span>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
<b>&lt;tomcat-module&gt;/manifests/service.pp
</b>'.
Now if there would have been a sub-module like '
<b>tomcat::configure::war
</b>', &nbsp;then the file-path would go like '
</span>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
<b>&lt;tomcat-module&gt;/manifests/configure/war.pp
</b>'.
</span>
</li>
<li>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">
<span style="font-size: 15px; line-height: 21px;">
<b>templates
</b>
As any other language, where you want some static data merged with varying passed-on or environment&nbsp;
</span>
</span>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">&nbsp;variables and pushed in somewhere as content. Say, for '
<i>tomcat::config
</i>' sub-module as you wanna parameter-ize somethings like '
<i>war
</i>' file name. Then this war file-name is being passed-on by '
<i>deploy_war
</i>' module.
This ruby template goes in
</span>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">&nbsp;'
</span>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
<b>&lt;tomcat-module&gt;/files/war_app.conf.erb
</b>' and whenever required it's content received as "
<b>template('&lt;tomcat-module&gt;/war_app.conf.erb')
</b>"
</span>
</li>
<li>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">
<span style="font-size: 15px; line-height: 21px;">
<b>files
</b>
Any kin'of static file can be served from a module using puppet's fileserver mount points. Every puppet module has a default file-server mount location at '
<b>&lt;tomcat-module&gt;/files
</b>'.
So a file like '
<b>&lt;tomcat-module&gt;/files/web.war
</b>' get to be served at Puppet Agents pointing to source of '
<b>puppet:///modules/&lt;tomcat-module&gt;/web.war
</b>'.
</span>
</span>
</li>
<li>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">
<span style="font-size: 15px; line-height: 21px;">
<b>lib
</b>
This is the place where you can plug-in your custom mods to puppet and use your newly powered up puppet features.
This is the one feature that lets you actually utilize your ruby-power and
<b>add-on custom facts, providers &amp; types
</b> (with default location&nbsp;
<span style="font-weight: normal;">at '
</span>
<b style="font-weight: bold;">&lt;tomcat-module&gt; /lib/ &lt;facter|puppet&gt;
</b>
<span style="font-weight: normal;">',&nbsp;
</span>
<b>
<span style="font-weight: normal;">'
</span>
<b>&lt;tomcat-module&gt; /lib/puppet/ &lt;parser|provider|type&gt;
</b>
<span style="font-weight: normal;">'
</span>)
</b> to be used via puppet in your modules. To be used it requires '
<b>pluginsync = true
</b>' configuration to be present at '
<b>puppet.conf
</b>' level.
We'll discuss this in more detail with all sorts of examples in following up blogs and add the links here. Until then it can be referred at&nbsp;
<a href="http://docs.puppetlabs.com/guides/plugins_in_modules.html" target="_blank">docs.puppetlabs.com
</a>.
</span>
</span>
</li>
<li>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">
<span style="font-size: 15px; line-height: 21px;">
<b>spec/tests
</b>
As
<b>Love
</b> needs
<b>Money
</b> to avoid worldly issues affect its charm
<b>.
</b>Similarly,
<b>Code
</b> need
<b>Tests.
</b>&nbsp; In location&nbsp;
</span>
</span>
<b style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
<span style="font-weight: normal;">'
</span>
<b>&lt;tomcat-module&gt;/spec/
</b>
</b>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">' you can have your
<a href="http://rspec-puppet.com/" target="_blank">puppet-rspec
</a>
<b>
<a href="http://bombasticmonkey.com/2012/03/02/automatically-test-your-puppet-modules-with-travis-ci/" target="_blank">tests
</a>
</b> for puppet module.

<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: small; line-height: normal;">
<span style="font-size: 15px; line-height: 21px;">The path&nbsp;
</span>
</span>
<b>
<span style="font-weight: normal;">'
</span>
<b>&lt;tomcat-module&gt;/tests/
</b>
</b>' would have common examples on how the module classes would be defined.
</span>
</li>
</ul>



<b style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">[]&nbsp;
<i>Modules Fundamental Live
</i>
</b>
<i style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">&nbsp;&nbsp;
</i>
<span class="Apple-style-span" style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: xx-small; font-style: italic;">(mean the actual code sample.....)
</span>

<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">
<span style="font-size: 15px; line-height: 21px;">

</span>
</span>

<div>
<script src="https://gist.github.com/abhishekkr/3070758.js">
</script>
</div>
</div>


</div>


<div class="css-full-comments-content js-full-comments-content">


<div class="css-full-comment js-full-comment">


<div class="css-comment-user-link js-comment-user-link">


<a href="http://www.blogger.com/profile/05583017738947703614">


<div class="css-comment-name js-comment-name">

    city


</div>


</a>


<div class="css-comment-date js-comment-date">

    2012-12-25T02:02:19.692Z


</div>


</div>


<div class="css-comment-content js-comment-content">

    thanks for sharing
<a href="http://www.justdetective.com/" title="徵信社" rel="nofollow">.
</a>


</div>


<br/>



</div>


</div>
