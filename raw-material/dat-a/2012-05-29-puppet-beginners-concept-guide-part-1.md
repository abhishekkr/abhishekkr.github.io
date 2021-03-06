```meta-title: Puppet ~ a beginners concept guide (Part 1)```
```meta-date: 2012-05-29 22:06:00```
```meta-updated: 2012-07-19 22:05:48```
```meta-comments: 2```
```meta-tags: puppetlabs devops configuration puppet automation concept guide beginners fundamentals Infrastructure```



<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">
<span class="Apple-style-span" style="font-size: x-small;">
<span class="Apple-style-span" style="font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;">Someone asked me where to start with Puppet learning. I pointed them at
<a href="http://puppetlabs.com/">PuppetLabs
</a>
<a href="http://docs.puppetlabs.com/">online doc
</a> for
<a href="http://docs.puppetlabs.com/guides/introduction.html">Puppet
</a>, which is actually nice for a proper understanding.&nbsp;
</span>
</span>

<span class="Apple-style-span" style="font-size: x-small;">
<span class="Apple-style-span" style="font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;">But for someone trying to start with Puppet,
<a href="http://docs.puppetlabs.com/learning/">that documentation is a bit long
</a> to read similar to any book.&nbsp;
</span>
</span>

<span class="Apple-style-span" style="font-size: x-small;">
<span class="Apple-style-span" style="font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;">I searched for few blogs, but didn't found any content (
<b>
<i>short but enough, fundamentals but usable
</i>
</b>) that I was looking for.
</span>
</span>
____________________________________________________



<span class="Apple-style-span" style="font-size: large;">Puppet
</span>

<span class="Apple-style-span" style="font-family: 'Courier New', Courier, monospace;">
<b>
<span class="Apple-style-span" style="font-size: x-small;">beginners concept guide
</span>
</b>
</span> (Part 1)


<b>[]
<i>What &nbsp;it &nbsp;is? &nbsp;When &nbsp;is &nbsp;it &nbsp;required?
</i>
</b>
<i>&nbsp;&nbsp;
</i>
<span class="Apple-style-span" style="font-size: x-small; font-style: italic;">(for all new guys, who came here while just browsing internet)
</span>
Puppet is an OpenSource automated configuration management framework (
<i>which means a tool that knows how to configure all machines to a deterministic state once you provide it the required set of manifests pulling the correct strings
</i>).
It's managed at enterprise level by an organization called
<a href="http://puppetlabs.com/" target="_blank">PuppetLabs
</a> (
<a href="http://puppetlabs.com/" target="_blank">http://puppetlabs.com/
</a>).


<i>It is
<b>required#1
</b>
</i> when you have a hell-lot of machines required to be configured in a similar form.

<i>It is
<b>required#2
</b>
</i> when you have a infrastructure requirement of dynamic scale-up and scale-down of machines with a pre-determined (or at least metadata-calculated) configuration.

<i>It is
<b>required#3
</b>&nbsp;
</i>to have a control over all set of configured machines, so a centralized (master-server or repo-based) change gets&nbsp;propagated&nbsp;to all automatically.

<i>And more scenarios come up as you require it.
</i>

_____________________________________


<b>
<br class="Apple-interchange-newline" />
[]&nbsp;
<i>Quickie.
</i>
</b>
Install
<a href="http://www.ruby-lang.org/en/downloads/" target="_blank">Ruby
</a>,
<a href="http://rubygems.org/" target="_blank">Rubygems
</a> on your machine where you aim to test it.

<blockquote class="tr_bq">
<span style="font-family: 'Courier New', Courier, monospace;">$
<b>gem install
<a href="http://www.blogger.com/">
<span id="goog_1737753961">
</span>puppet
<span id="goog_1737753962">
</span>
</a>&nbsp;
</b>--no-ri --no-rdoc
</span>
</blockquote>
<blockquote class="tr_bq">Download installers
<a href="http://docs.puppetlabs.com/windows/installing.html" target="_blank">@Windows
</a>&nbsp;&nbsp;
<a href="http://downloads.puppetlabs.com/mac/" target="_blank">@MacOSX
</a>&nbsp;::
<b>&amp;
</b>::&nbsp;
<i>
<a href="http://docs.puppetlabs.com/guides/installation.html" target="_blank">Docs to installing.
</a>
</i>
</blockquote>
Checking, if it's installed properly and acting good

<blockquote class="tr_bq">Now, '
<b>
<span style="font-family: 'Courier New', Courier, monospace;">puppet --version
</span>
</b>' shall give you the version of installed puppet once succeed.
Executing '
<b>
<span style="font-family: 'Courier New', Courier, monospace;">facter
</span>
</b>' and you shall get a list of System Environment related major information.
</blockquote>
Have a quick puppet run, this shall create a directory '/tmp/pup' if absent. Creates a file '/tmp/pup/et' with 'look at me' as its content.

<i>{In case of trying out on platforms without '/tmp' location. Like for Windows, change '/tmp' with 'C:/' or so}
</i>

<span style="font-family: Georgia, 'Times New Roman', serif;">
$
<b>puppet apply -e "file
</b>{'
<b>/tmp/pup
</b>':
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;ensure =&gt; 'directory'}
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<b>file
</b>{ '
<b>/tmp/pup/et
</b>':
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;ensure =&gt; 'present',
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;content =&gt; 'look at me',
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;require =&gt; File['/tmp/pup']}
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<b>&nbsp;"
</b>
</span>
_____________________________________



<b>[]
<i>Dumb &nbsp;usage &nbsp;structure.
</i>
</b>
Create huge manifest for your node with all resources &amp; data mentioned in it. Then directly apply that manifest file instead of
<i> '-e "abc{.....xyz}"'
</i>.

Say if the example above is your entire huge configuration commandment for the node. Copy all that to a file say '
<b>
<i>mynode.pp
</i>
</b>'.
Then apply it similarly like

<span style="font-family: 'Courier New', Courier, monospace;">$
<b>puppet apply mynode.pp
</b>
</span>

_____________________________________



<b>[]
<i>How &nbsp;it &nbsp;evolves?
</i>
</b>

Now, as any application had pluggable library components to be loaded and shared as and when required. Puppet too have a concept of modules. These modules can have manifests, files-serving and more.

Modules can be created in any design preference. Normally it works by having different modules per system component. To entertain different logical configuration states for any given system component (and also keeping it clean) further&nbsp;re-factoring&nbsp;can be done in the modules' manifest dividing it into different scopes.

Taking
<b>
<i>example of a module for 'apache httpd'
</i>
</b>. For a very basic library, you might wanna structure your module like


<ul style="text-align: left;">
<li>a directory base for your module:&nbsp;
<modulepath>
<b>
<span style="font-weight: normal; text-align: -webkit-auto;">&lt;
</span>
<span style="font-weight: normal;">MODULE_PATH&gt;
</span>httpd/
</b>
</modulepath>
</li>
<li>
<b style="text-align: -webkit-auto;">
<span style="font-weight: normal;">a directory in module to serve static files:&nbsp;&nbsp;
<modulepath>&nbsp;&lt;
<span style="text-align: left;">MODULE_PATH&gt;
</span>/httpd/
</modulepath>
</span>files
</b>
</li>
<li>
<span style="text-align: -webkit-auto;">static configuration file for httpd:&nbsp;&nbsp;
</span>
<span style="text-align: -webkit-auto;">&nbsp;&lt;
<span style="text-align: left;">MODULE_PATH&gt;
</span>/httpd/files/
<b>myhttpd.conf
</b>

<b>AccessFileName .acl
</b>
</span>
</li>
<li>directory to hold your manifests in module:&nbsp;&nbsp;
<modulepath>&nbsp;
<span style="text-align: -webkit-auto;">&lt;
</span>MODULE_PATH&gt;/httpd/
<b>manifests/
</b>
</modulepath>
</li>
<li>a complete solution manifest:&nbsp;&nbsp;
<modulepath>&nbsp;
<span style="text-align: -webkit-auto;">&lt;
</span>MODULE_PATH&gt;/httpd/manifests/
<b>init.pp
class httpd{
&nbsp; include httpd::install
&nbsp; include httpd::config
&nbsp; include httpd::service
}
</b>
</modulepath>
</li>
<li>a manifest just installing httpd: &nbsp;&nbsp;
<span style="text-align: -webkit-auto;">
<modulepath>&nbsp;&lt;
<span style="text-align: left;">MODULE_PATH&gt;
</span>/httpd/manifests/
<b>install.pp
class httpd::install {
</b>
</modulepath>
</span>
<b style="text-align: -webkit-auto;">&nbsp; package {'httpd': ensure =&gt; 'installed'}
}
</b>
</li>
<li>
<span style="text-align: -webkit-auto;">a manifest just configuring httpd:&nbsp;&nbsp;
</span>&nbsp;
<span style="text-align: -webkit-auto;">
<modulepath>&lt;
<span style="text-align: left;">MODULE_PATH&gt;
</span>/httpd/manifests/
<b>config.pp
</b>
</modulepath>
</span>
<span style="text-align: -webkit-auto;">
<b>
class httpd::config{
</b>
</span>
<b style="text-align: -webkit-auto;">&nbsp; file {'/etc/httpd/conf.d/httpd.conf':
&nbsp; &nbsp; ensure =&gt; 'present',
&nbsp; &nbsp; source =&gt; 'puppet:///modules/httpd/myhttpd.conf'
&nbsp; }
}
</b>
</li>
<li>
<span style="text-align: -webkit-auto;">a manifest just handling httpd service:&nbsp;
<modulepath>&nbsp;&lt;
<span style="text-align: left;">MODULE_PATH&gt;
</span>/httpd/manifests/
<b>service.pp
class httpd::service{
&nbsp; service{'httpd': ensure =&gt; 'running' }
}
</b>
</modulepath>
</span>
</li>
</ul>

<i>Now, using it
</i>

&nbsp; $
<b>puppet apply --modulepath=&lt;MODULE_PATH&gt; &nbsp;-e "include httpd"
</b>
would install, custom-configure and start the httpd service.


&nbsp; $
<b>puppet apply --modulepath=&lt;MODULE_PATH&gt; &nbsp;-e "include httpd::install"
</b>
would just install the httpd service.



________________________________________________________________

<h4 style="text-align: left;">
<a href="http://justfewtuts.blogspot.com/2012/07/puppet-beginners-concept-guide-part-2.html" target="_blank">
<b>Part2: Road to Modules
</b>
</a>
</h4>
</div>


</div>


<div class="css-full-comments-content js-full-comments-content">


<div class="css-full-comment js-full-comment">


<div class="css-comment-user-link js-comment-user-link">


<a href="http://www.blogger.com/profile/07233280907745145354">


<div class="css-comment-name js-comment-name">

    John Arundel


</div>


</a>


<div class="css-comment-date js-comment-date">

    2013-02-10T14:31:53.093Z


</div>


</div>


<div class="css-comment-content js-comment-content">

    I&#39;m working on a book which may help: The Puppet Beginner&#39;s Guide. If you have time to take a look, I&#39;d appreciate it!

http://bitfieldconsulting.com/pbg


</div>


<br/>



</div>


<div class="css-full-comment js-full-comment">


<div class="css-comment-user-link js-comment-user-link">


<a href="http://www.blogger.com/profile/06276198262605731980">


<div class="css-comment-name js-comment-name">

    Abhishek Kumar


</div>


</a>


<div class="css-comment-date js-comment-date">

    2013-02-25T17:25:55.459Z


</div>


</div>


<div class="css-comment-content js-comment-content">

    @JohnArundel outline seems nice, do you plan on covering puppet custom add-on... also it will be good to include habits around tools like librarian-puppet, puppet-lint and rspec-puppet.


</div>


<br/>



</div>


</div>
