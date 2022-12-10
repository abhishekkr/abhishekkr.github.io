```meta-title: Beginner's Guide to OpenStack : Basics [Part 1]```
```meta-date: 2013-04-17 23:52:00```
```meta-updated: 2013-04-18 14:04:17```
```meta-comments: 2```
```meta-tags: openstack compute platform melange guide glance cinder nasa nova quantum IaaS cloud swift keystone beginners oslo horizon opensource rackspace```



<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">#
<b>OpenStack?
</b>

OpenStack (
<a href="http://www.openstack.org/">http://www.openstack.org/
</a>) is an OpenSource cloud computing platform that can be used to build up a&nbsp;
<b>
<i>
<a href="http://www.rackspace.com/cloud/servers/overview_a/" target="_blank">Public
</a>
</i>
</b> and
<a href="http://www.rackspace.com/cloud/private/openstack_software/" target="_blank">
<b>
<i>Private
</i>
</b>
</a> cloud. As in weaving of various technological components to provide a capability to build a cloud service supporting any use-case and scale.

Once upon a time RackSpace came into Cloud Services. In some parallel beautiful world, few Pythonistas at NASA started building there own Nova Cloud Compute to handle there own instances. RackSpace bought SliceHost which worked 'somewhat' fine. RackSpace came along with their Swift Object Storage Service and weaved in Nova with few more components around it. More other companies like HP, RedHat, Canonical &nbsp;etc. came along to contribute and benefit from OpenSource cloud.

It's all Open it can be. Open Source. Open Design. Ope Development. Open Community.

---


<b># Quick Hands-On
</b>

DevStack (
<a href="http://devstack.org/">http://devstack.org/
</a>) gives you the easiest fastest way to get all OpenStack components installed, configured and started on any supported O.S. platform.
You can trial-run your app-code in an OpenStack environment at TryStack (
<a href="http://trystack.org/">http://trystack.org/
</a>).
RedHat RDO (
<a href="http://openstack.redhat.com/Main_Page">http://openstack.redhat.com/Main_Page
</a>) is also coming in soon making it super easy to get OpenStack running on RHEL-based distros.
---


<h3 style="text-align: left;">
<b># Components?
</b>
</h3>
OpenStack Cloud Platform constitutes of mainly following components:

<ul style="text-align: left;">
<li>
<i>
<b>Compute
</b>:
</i>
<b>Nova
</b>
Brings up and maintains operations related to virtual server as per requirement.
~like aws ec2
</li>
<li>
<i>
<b>Storage
</b>:
</i>
<b>Swift
</b>
Allows you to store, retrieve &amp; remove objects (files).
~like aws s3
</li>
<li>
<i>
<b>Image Registry/Delivery
</b>:
</i>
<b>Glance
</b>
Processes metadata for disk images, manages read/write/delete for actual image files using &nbsp;'Swift' or similar scalable file storage service.
~like aws ami
</li>
<li>
<i>
<b>Network Management
</b>:
</i>
<b>Quantum/Melange
</b>
Provides all the networking mechanisms required in any instance or environment as a service. Handels network interface cards plug/un-plug actions, ip allocation procedures along-with capability enhancement possible to virtual switches.
</li>
<li>
<i>
<b>Block Storage
</b>:
</i>
<b>Cinder
</b>
Enables to attach volumes for persistent usage. Detach them, snapshot them.
~like aws ebs
</li>
<li>
<i>
<b>WebUI
</b>:
</i>
<b>Horizon
</b>
Provides usability improvement for users or projects for managing compute nodes, object storage resources, quota usages and more in a detailed web-app way.
~like aws web dashboard
</li>
<li>
<i>
<b>Authentication
</b>:
</i>
<b>Keystone
</b>
Identity management system, providing apis to all other OpenStack components to query for authorization.
</li>
<li>
<b style="font-style: italic;">Billing Service
</b>
<i>:
</i>
<b>Ceilometer
</b> (preview)
Analyzes quantity, cost-priority and hence billing of all the tasks performed at cloud.
</li>
<li>
<i>
<b>Cloud Template
</b>:
</i>
<b>Heat
</b> (under construction)
Build your entire desired cloud setup providing OpenStack a Template for it.
~like aws cloudformation
</li>
<li>
<b style="font-style: italic;">OpenStack Common
</b>
<i>:&nbsp;
</i>
<b>OSLO
</b>&nbsp;(
<i>tenure code
</i>)
Supposed to contain all common libraries of shared infrastructure code in OpenStack.
</li>
</ul>
Hypervisors are software/firmware/hardware that enables to create, run and monitor virtual machines. OpenStack Compute supports multiple hypervisors like KVM, LXC, QEMU, XEN, VMWARE &amp; more.

Message Queue Service is used by most of the OpenStack Compute services to communicate with each other using AMQP (Advanced Message Queue Protocol) supporting async calls and callbacks.

---


<h3 style="text-align: left;">
<b># Weaving of Components
</b>
</h3>

<i>
<b>asciigram:
</b> openstack ~ evolution mode, how varied components are connected
</i>

<div>~~~~~

<a href="http://4.bp.blogspot.com/-hp34FDdDqkA/UW8DqwqlXUI/AAAAAAAAB2Y/ZyUdzvptERs/s1600/openstack_p1_level1.jpg" imageanchor="1" style="clear: left; display: inline !important; margin-bottom: 1em; margin-right: 1em; text-align: center;">
<img border="0" src="http://4.bp.blogspot.com/-hp34FDdDqkA/UW8DqwqlXUI/AAAAAAAAB2Y/ZyUdzvptERs/s1600/openstack_p1_level1.jpg" />

</a>
~~~~~

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-J0AnG6jycNc/UW8EloDlXLI/AAAAAAAAB2g/9QPmxLyebJA/s1600/openstack_p1_level2.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;">
<img border="0" src="http://1.bp.blogspot.com/-J0AnG6jycNc/UW8EloDlXLI/AAAAAAAAB2g/9QPmxLyebJA/s1600/openstack_p1_level2.jpg" />

</a>
</div>

</div>
<div>
<div>
<br class="Apple-interchange-newline" />








~~~~~

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-XqnyBCzAudk/UW8ITVvQhcI/AAAAAAAAB2o/pEhu8_4BIKA/s1600/openstack_p1_level3.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;">
<img border="0" src="http://4.bp.blogspot.com/-XqnyBCzAudk/UW8ITVvQhcI/AAAAAAAAB2o/pEhu8_4BIKA/s1600/openstack_p1_level3.jpg" />

</a>
</div>











~~~~~

<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-DQSgbRktezc/UW8WDYqau8I/AAAAAAAAB3A/1dyWhEuSBCM/s1600/openstack_p1_level4.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;">
<img border="0" src="http://2.bp.blogspot.com/-DQSgbRktezc/UW8WDYqau8I/AAAAAAAAB3A/1dyWhEuSBCM/s1600/openstack_p1_level4.jpg" />

</a>
</div>












~~~~~

<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-FKfPJ2ZQFTI/UW8WQvlkmwI/AAAAAAAAB3I/LwcUQgoZt8A/s1600/openstack_p1_level5.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;">
<img border="0" src="http://2.bp.blogspot.com/-FKfPJ2ZQFTI/UW8WQvlkmwI/AAAAAAAAB3I/LwcUQgoZt8A/s1600/openstack_p1_level5.jpg" />

</a>
</div>












</div>
</div>
<div>


</div>
---


<h4 style="text-align: left;">
<b>
<i>More Links:
</i>
</b>
</h4>

<ul style="text-align: left;">
<li>(article)
<a href="http://ken.pepple.info/openstack/2012/09/25/openstack-folsom-architecture/" target="_blank">Folsom Architecture by Ken Pepple
</a>
</li>
<li>(video) Mark Collier on
<a href="http://www.youtube.com/watch?v=dclcFiVvO7g" target="_blank">'Overview of OpenStack &amp; Openstack foundation'
</a>
</li>
<li>(video) Sandy Walsh on
<a href="http://www.youtube.com/watch?v=bCsw2kkIWyw" target="_blank">'Introduction to OpenStack'
</a>
</li>
<li>(work)
<a href="http://launchpad.net/openstack">http://launchpad.net/openstack
</a>
</li>
<li>(wiki)
<a href="http://wiki.openstack.org/">http://wiki.openstack.org
</a>
</li>
<li>(join)
<a href="http://planet.openstack.org/">http://planet.openstack.org
</a>
</li>
<li>(irc) Freenode #openstack #openstack-dev
</li>
<li>RedDward : Database as a Service for OpenStack :&nbsp;
<a href="https://github.com/stackforge/reddwarf">https://github.com/stackforge/reddwarf
</a>
</li>
</ul>
</div>


</div>


<div class="css-full-comments-content js-full-comments-content">


<div class="css-full-comment js-full-comment">


<div class="css-comment-user-link js-comment-user-link">


<a href="http://www.blogger.com/profile/10629973374292258616">


<div class="css-comment-name js-comment-name">

    Viraptor


</div>


</a>


<div class="css-comment-date js-comment-date">

    2013-04-18T03:15:04.425Z


</div>


</div>


<div class="css-comment-content js-comment-content">

    &quot;OSLO (under construction)&quot; -&gt; not exactly. Oslo contains only code that was already proven to work in other projects and has been moved from those separate locations into one common project. It&#39;s more of a &quot;tenured code&quot; than &quot;under construction&quot;.


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

    2013-04-18T14:07:20.550Z


</div>


</div>


<div class="css-comment-content js-comment-content">

    thanks for the correction, updated it... so just to confirm, there is no wrapping-around or so is still in progress... as in it&#39;s just like extracted to a common library.


</div>


<br/>



</div>


</div>
