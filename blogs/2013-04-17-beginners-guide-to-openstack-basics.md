> was originally posted at a deprecated blog

## Beginner's Guide to OpenStack, Basics: Part 1


### OpenStack?

OpenStack ([http://www.openstack.org/](http://www.openstack.org/)) is an OpenSource cloud computing platform that can be used to build up a [Public](http://www.rackspace.com/cloud/servers/overview_a/) and [Private](http://www.rackspace.com/cloud/private/openstack_software/) cloud. As in weaving of various technological components to provide a capability to build a cloud service supporting any use-case and scale.

> Once upon a time RackSpace came into Cloud Services. In some parallel beautiful world, few Pythonistas at NASA started building there own Nova Cloud Compute to handle there own instances.
>
> RackSpace bought SliceHost which worked 'somewhat' fine. RackSpace came along with their Swift Object Storage Service and weaved in Nova with few more components around it.
>
> More other companies like HP, RedHat, Canonical  etc. came along to contribute and benefit from OpenSource cloud.

It's all Open as it can be. Open Source. Open Design. Ope Development. Open Community.


### Quick Hands-On


DevStack ([http://devstack.org/](http://devstack.org/)) gives you the easiest fastest way to get all OpenStack components installed, configured and started on any supported O.S. platform.

You can trial-run your app-code in an OpenStack environment at TryStack ([http://trystack.org/](http://trystack.org/)).

RedHat RDO ([http://openstack.redhat.com/Main\_Page](http://openstack.redhat.com/Main_Page)) is also coming in soon making it super easy to get OpenStack running on RHEL-based distros.


### Components?

OpenStack Cloud Platform constitutes of mainly following components:

* Compute: **Nova** Brings up and maintains operations related to virtual server as per requirement. Like aws ec2.
* Storage: **Swift** Allows you to store, retrieve & remove objects (files). Like aws s3.
* Image Registry/Delivery: **Glance** Processes metadata for disk images, manages read/write/delete for actual image files using 'Swift' or similar scalable file storage service. Like aws ami.
* Network Management: **Quantum/Melange** Provides all the networking mechanisms required in any instance or environment as a service. Handels network interface cards plug/un-plug actions, ip allocation procedures along-with capability enhancement possible to virtual switches.
* Block Storage: **Cinder** Enables to attach volumes for persistent usage. Detach them, snapshot them. Like aws ebs.
* WebUI: **Horizon** Provides usability improvement for users or projects for managing compute nodes, object storage resources, quota usages and more in a detailed web-app way. Like aws web dashboard.
* Authentication: **Keystone** Identity management system, providing apis to all other OpenStack components to query for authorization. Like AWS IAM.
* Billing Service: **Ceilometer** (preview) Analyzes quantity, cost-priority and hence billing of all the tasks performed at cloud.
* Cloud Template: **Heat** (under construction) Build your entire desired cloud setup providing OpenStack a Template for it. Like aws cloudformation.
* OpenStack Common : **OSLO** (tenure code) Supposed to contain all common libraries of shared infrastructure code in OpenStack.

> Hypervisors are software/firmware/hardware that enables to create, run and monitor virtual machines. OpenStack Compute supports multiple hypervisors like KVM, LXC, QEMU, XEN, VMWARE & more.
>
> Message Queue Service is used by most of the OpenStack Compute services to communicate with each other using AMQP (Advanced Message Queue Protocol) supporting async calls and callbacks.

### Weaving of Components

> asciigram: openstack ~ evolution mode, how varied components are connected

<a href="http://4.bp.blogspot.com/-hp34FDdDqkA/UW8DqwqlXUI/AAAAAAAAB2Y/ZyUdzvptERs/s1600/openstack_p1_level1.jpg" imageanchor="1" style="clear: left; display: block !important; margin-bottom: 1em; margin-right: 1em; text-align: center;">
  <img border="0" src="http://4.bp.blogspot.com/-hp34FDdDqkA/UW8DqwqlXUI/AAAAAAAAB2Y/ZyUdzvptERs/s1600/openstack_p1_level1.jpg" />
</a>


<a href="http://1.bp.blogspot.com/-J0AnG6jycNc/UW8EloDlXLI/AAAAAAAAB2g/9QPmxLyebJA/s1600/openstack_p1_level2.jpg" imageanchor="1" style="clear: left; display: block !important; margin-bottom: 1em; margin-right: 1em; text-align: center;">
  <img border="0" src="http://1.bp.blogspot.com/-J0AnG6jycNc/UW8EloDlXLI/AAAAAAAAB2g/9QPmxLyebJA/s1600/openstack_p1_level2.jpg" />
</a>

<a href="http://4.bp.blogspot.com/-XqnyBCzAudk/UW8ITVvQhcI/AAAAAAAAB2o/pEhu8_4BIKA/s1600/openstack_p1_level3.jpg" imageanchor="1" style="clear: left; display: block !important; margin-bottom: 1em; margin-right: 1em; text-align: center;">
  <img border="0" src="http://4.bp.blogspot.com/-XqnyBCzAudk/UW8ITVvQhcI/AAAAAAAAB2o/pEhu8_4BIKA/s1600/openstack_p1_level3.jpg" />
</a>

<a href="http://2.bp.blogspot.com/-DQSgbRktezc/UW8WDYqau8I/AAAAAAAAB3A/1dyWhEuSBCM/s1600/openstack_p1_level4.jpg" imageanchor="1" style="clear: left; display: block !important; margin-bottom: 1em; margin-right: 1em; text-align: center;">
  <img border="0" src="http://2.bp.blogspot.com/-DQSgbRktezc/UW8WDYqau8I/AAAAAAAAB3A/1dyWhEuSBCM/s1600/openstack_p1_level4.jpg" />
</a>

<a href="http://2.bp.blogspot.com/-FKfPJ2ZQFTI/UW8WQvlkmwI/AAAAAAAAB3I/LwcUQgoZt8A/s1600/openstack_p1_level5.jpg" imageanchor="1" style="clear: left; display: block !important; margin-bottom: 1em; margin-right: 1em; text-align: center;">
  <img border="0" src="http://2.bp.blogspot.com/-FKfPJ2ZQFTI/UW8WQvlkmwI/AAAAAAAAB3I/LwcUQgoZt8A/s1600/openstack_p1_level5.jpg" />
</a>

### More Links

* (article) [Folsom Architecture by Ken Pepple](http://ken.pepple.info/openstack/2012/09/25/openstack-folsom-architecture/)

* (video) Mark Collier on ['Overview of OpenStack & Openstack foundation'](http://www.youtube.com/watch?v=dclcFiVvO7g)

* (video) Sandy Walsh on ['Introduction to OpenStack'](http://www.youtube.com/watch?v=bCsw2kkIWyw)

* (work) [http://launchpad.net/openstack](http://launchpad.net/openstack)

* (wiki) [http://wiki.openstack.org/](http://wiki.openstack.org/)

* (join) []http://planet.openstack.org/(http://planet.openstack.org/)

* (irc) Freenode #openstack #openstack-dev

* RedDwarf : Database as a Service for OpenStack, [https://github.com/stackforge/reddwarf](https://github.com/stackforge/reddwarf)

---

<div class="css-full-comments-content js-full-comments-content">
  <div class="css-full-comment js-full-comment">
    <div class="css-comment-user-link js-comment-user-link">
      <a href="http://www.blogger.com/profile/10629973374292258616">
        <div class="css-comment-name js-comment-name">Viraptor</div>
      </a>
      <div class="css-comment-date js-comment-date">2013-04-18T03:15:04.425Z</div>
    </div>
    <div class="css-comment-content js-comment-content">
        'OSLO (under construction)' -&gt; not exactly. Oslo contains only code that was already proven to work in other projects and has been moved from those separate locations into one common project. It&#39;s more of a 'tenured code' than 'under construction'.
    </div>
    <br/>
  </div>
  <div class="css-full-comment js-full-comment">
    <div class="css-comment-user-link js-comment-user-link">
      <a href="http://www.blogger.com/profile/06276198262605731980">
        <div class="css-comment-name js-comment-name">Abhishek Kumar</div>
      </a>
      <div class="css-comment-date js-comment-date">2013-04-18T14:07:20.550Z</div>
    </div>
    <div class="css-comment-content js-comment-content">
        thanks for the correction, updated it... so just to confirm, there is no wrapping-around or so is still in progress... as in it&#39;s just like extracted to a common library.
    </div>
    <br/>
  </div>
</div>

---
