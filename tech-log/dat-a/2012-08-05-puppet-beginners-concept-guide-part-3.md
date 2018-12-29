```meta-title: Puppet ~ a beginners concept guide (Part 3) ~ Modules much more```
```meta-date: 2012-08-05 12:26:00```
```meta-updated: 2012-08-05 12:26:29```
```meta-comments: 0```
```meta-tags: puppetlabs devops configuration puppet automation concept guide beginners fundamentals Infrastructure```



<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">

<div style="font-family: Times,&quot;Times New Roman&quot;,serif; text-align: right;">
<span class="Apple-style-span" style="background-color: #fff9ee; color: #222222;">
<i>you might prefer first reading&nbsp;guide&nbsp;
<a href="http://justfewtuts.blogspot.in/2012/05/puppet-beginners-concept-guide-part-1.html" target="_blank">Part#1
</a>(intro to puppet), &amp;&nbsp;
<a href="http://justfewtuts.blogspot.in/2012/07/puppet-beginners-concept-guide-part-2.html" target="_blank">Part#2
</a>(intro to modules)
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
<span style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">&nbsp;(Part&nbsp;
<b>3
</b>)
</span>


<h2 style="text-align: left;">
<b>
<span style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
<i>Modules with More
</i>
</span>
</b>
</h2>
<div>
<span style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">here some time on the practices to prefer while writing most of your modules
<i>

</i>
</span>
</div>

<b style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">[]&nbsp;
<i>HowTo&nbsp;Write Good Puppet Modules
</i>
</b>
<i style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">&nbsp;&nbsp;
</i>
<span class="Apple-style-span" style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: xx-small; font-style: italic;">

<span style="font-size: x-small;">(so everyone could use it and you could use it everywhere)
</span>
</span>

<ul>
<li>
<span style="background-color: white; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
<b>platform-agnostic
</b>
With change in Operating System distro; module also might require difference in package names, configuration file locations, device port names, system commands and more.
Obviously, it's not expected to test each and every module against each and every distro and get it full-proof for community usage. But what's expected is to use
<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">
<i>case $operatingsystem{...}
</i>
</span> statements for whatever distros you can and let the users get notified in case they gotta add something for their distro by
<span style="font-family: &quot;Courier New&quot;,Courier,monospace;">
<i>fail("")
</i>
</span>, and might also contribute back..... like following
</span>

<span style="font-family: 'Courier New', Courier, monospace;">case $operatingsystem {
&nbsp; centos, redhat: {
&nbsp; &nbsp; $libxml2_development = 'libxml2-devel'
&nbsp; }
&nbsp; ubntu, debian: {
&nbsp; &nbsp; $libxml2_development = 'libxml2-dev'
&nbsp; }
&nbsp; default: {
&nbsp; &nbsp; fail("Unrecognized libxml2 development header package name for your O.S. $operatingsystem")
&nbsp; }
}
</span>

<span style="background-color: white; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">~
</span>
</li>
<li>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">
<span style="font-size: 15px; line-height: 21px;">
<b>untangled puppet strings
</b>
You are writing puppet modules. Good chance is you have a client or personal environment to manage for which you had a go at it.
That means there gonna be your environment specific some client or personal code &amp;/or configuration that is 'for your eyes only'. This will prohibit you from placing any of your module in Community.
It's wrong on two main fronts. First, you'll end up using so much from OpenSource and give back nothing. Second, your modules will miss on the community update/comment action.
So, untangle all your modules into atomic service level modules. Further modularize those modules into service puppet-ization requirement. That will be like sub-modules for install, configure, service and whatever more you can extract out. Now these sub-modules can be clubbed together to and we can move bottom-up gradually.
Now you can just keep your private service modules to yourself, go ahead and use the community trusted and available modules for whatever you can..... try &nbsp;making minor updates to those and also contribute these updates. Write the others that you don't find out in the wild and contribute those too for community to use, update and improve.
~

</span>
</span>
</li>
<li>
<span style="background-color: white; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
<b>no data in c~o~d~e
</b>
Now when you are delivering 'configuration as a code', adapt the good coding practices applicable in this domain. One of those is keeping data separate than the code, as in no db-name, db-user-name, db-password, etc. details stored directly in the module's manifest intending to create the db-config file.
There will be a detailed section later over different external data usage involving separate
<a href="http://docs.puppetlabs.com/guides/parameterized_classes.html#appendix-smart-parameter-defaults" target="_blank">parameter manifest
</a> setting up values when included,
<a href="http://docs.puppetlabs.com/references/2.6.8/function.html#extlookup" target="_blank">extlookup
</a> loading values from CSVs,
<a href="http://puppetlabs.com/blog/introducing-puppetdb-put-your-data-to-work/" target="_blank">puppetDB
</a>,
<a href="http://projects.puppetlabs.com/projects/hiera/" target="_blank">hiera
</a> data-store and
<a href="http://docs.puppetlabs.com/guides/custom_facts.html" target="_blank">custom facts
</a> file to load up key-values.
~
</span>
</li>
<li>
<span style="background-color: white; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
<b>puppet-lint
</b>
To keep the modules adhere to dsl-syntactic correct and beautiful code writing practice. So the DSL and the community contributors, both find it easy to understand your manifests. It's suggested to have it added to rake default of your project to check all the manifests, ran before every repo-check-in.
~
</span>
</li>
<li>
<span style="background-color: white; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
<b>do-undo-redo
</b>
It's suggested to have a undo-manifest ready for all the changes made by a module. It mainly comes in handy for infrastructures/situations where creating and destroying a node is not under your administrative tasks or consumes hell lot of time.
Obviously, in case getting new node is easier..... that's the way to go instead of wasting time in undo-ing all the changes (and also relying on that).

<b>
<i>Those are just there for the dry-days when there is no 'cloud'.
</i>
</b>
~
</span>
</li>
</ul>



<b style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">[]&nbsp;
<i>More about Modules
</i>
</b>
<i style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">&nbsp;&nbsp;
</i>
<span class="Apple-style-span" style="background-color: #fff9ee; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: xx-small; font-style: italic;">(moreover.....)
</span>

<div style="text-align: left;">
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">
<span style="font-size: 15px; line-height: 21px;">Where to get new:
</span>
</span>
<span style="font-family: Arial, Helvetica, sans-serif;">
<a href="http://forge.puppetlabs.com/">http://forge.puppetlabs.com/
</a>&nbsp;is the community-popular home for most of the Puppet Modules.
</span>
</div>
<span style="color: #222222;">
<span style="line-height: 21px;">
<span style="font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px;">Where to contribute:
</span>

<span style="font-family: Arial, Helvetica, sans-serif;">Can manage your public module at
<a href="https://github.com/">GitHub
</a> or similar online free repository like&nbsp;
</span>
</span>
</span>
<span style="font-family: Arial, Helvetica, sans-serif;">
<a href="https://github.com/puppetlabs/puppetlabs-kvm">puppetlabs-kvm
</a>.
Then you can push your module to
<a href="http://docs.puppetlabs.com/puppet/2.7/reference/modules_publishing.html">forge.puppetlabs.com
</a>.
</span>

<div>
<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">
<span style="font-size: 15px; line-height: 21px;">

</span>
</span>
</div>
</div>


</div>
