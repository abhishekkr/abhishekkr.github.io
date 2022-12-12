> was originally posted at a deprecated blog

## Beginner's Guide to OpenStack: Basics of Nova, Part 2

> parts of *Beginner's Guide to OpenStack* to read before this [Part.1 Basic](http://justfewtuts.blogspot.com/2013/04/beginners-guide-to-openstack-basics.html)

### Nova?

It's the main fabric controller for IaaS providing Cloud Computing Service by OpenStack. Took its first baby steps in NASA. Contributed to OpenSource and became most important component of OpenStack.

It built of multiple components performing different tasks turning End User's API request into a virtual machine service. All these components run in a non-blocking message based architecture, and can be run off from same or different locations with just access to same message queue service.


### Components?

Nova stores states of virtual machines in a central database. It's optimal for small deployments. Nova is moving towards multiple data stores with aggregation for high scale requirements.

<a href="http://4.bp.blogspot.com/-R7pWfCkhU30/UXWJaktN-YI/AAAAAAAAB3Y/kUl9sDlomSU/s1600/openstack_p2_components.jpg" imageanchor="1" style="clear: left; display: block !important; margin-bottom: 1em; margin-right: 1em; text-align: center;">
  <img border="0" height="115" src="http://4.bp.blogspot.com/-R7pWfCkhU30/UXWJaktN-YI/AAAAAAAAB3Y/kUl9sDlomSU/s640/openstack_p2_components.jpg" width="480" />
</a>

* **Nova API**: supports OpenStack Compute API, Amazon's EC2 API and powerful Admin API (for privileged users). It's used to initiate most of orchestration activities and policies (like Quota). It gets communicated over HTTP, converts the requests to commands further contacting other components via Message Broker and HTTP for ObjectStore. It's a [WSGI](http://wsgi.readthedocs.org/en/latest/what.html) application which routes and authenticates requests.

* **Nova Compute**: worker daemon taking orders from its Message Broker and perform virtual machine create/delete tasks using Hypervisor's API. It also updates status of its tasks in Database.

* **Nova Scheduler**: decides which Nova Compute Host to allot for virtual machine request.

* **Network Manager**: worker daemon picking network related tasks from its Message Broker and performing those. *OpenStack's Quantum* now with *Grizzly* release can be opted instead of *nova-network*. Tasks like maintaining IP Forwarding, Network Bridges and VLANs get covered.

* **Volume Manager**: handles attach/detach of persistent block storage volumes to virtual machines (similar to Amazon's EBS). This functionality has been extracted to *OpenStack's Cinder*. It's an ISCSI solution utilizing [Logical Volume Manager](http://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux)). Network Manager doesn't interfere in Cinder's tasks but need to be setup for Cinder to be used.

* **Authorization Manager**: interfaces authorized APIs usage for Users, Projects and Roles. It communicates with *OpenStack's KeyStone* for details.

* **WebUI**: *OpenStack's Horizon* communicates with Nova API for Dashboard interfacing.

* **Message Broker**: All components of Nova communicate with each other in a non-blocking callback-oriented manner using AMQP protocol well supported by RabbitMQ, Apache QPid. There is also emerging support for ZeroMQ integration as Message Queue. It's like central task list shared and updated by all Nova components.

* **ObjectStore**: It's a simple file-based storage (like Amazon's S3) for images. This can be replaced with OpenStack's Glance.

* **Database**: used to gather build times, run states of virtual machines. It has details around instance types available, networks available (if nova-network), and projects. Any database supported by SQLAlchemy can be used. It's central information hub for all Nova components.



### API Style

Interface is mostly RESTful.

[Routes (python re-implementation of Rails route system) packages](http://routes.readthedocs.org/en/latest/) maps URIs to action methods on controller classes.

Each HTTP Request to Compute requires specific authentication credentials required. Multiple authentication schemes can be allowed for a Compute node, provider determines the one to be used.


### Threading Model

Uses Green Thread implementation by design using [eventlet](http://eventlet.net/) and [greenlet](http://greenlet.readthedocs.org/en/latest/) libraries.

This results into single process thread for O.S. with it's blocking I/O issues. Though single reduces race conditions to great extent, to eliminate them further in suspicious scenarios use decorator `@lockutils.synchronized('lock_name')` over methods to be protected from it.

If any action is long-running, it should have methods with desired process-state location triggering eventlet context switch. Placing something like following code-piece will switch context to waiting threads, if any. And will continue on current thread without any delay if there is no other thread in wait.

```
from eventlet import greenthread

greenthread.sleep(0)
```

> MySQL query uses drivers blocking main process thread. In Diablo release a thread pool was implemented but removed because of trade-off for advantages over bugs.


### Filtering Scheduler

In short it's the mechanism used by 'nova-scheduler' to choose the worthy nova-compute host for new required virtual machine to be spawned upon.

It prepares a dictionary of unfiltered hosts and weigh their costing for creating required virtual machine(s) request. Then it chooses the least costly host.

Hosts are weighted based on the configuration options for virtual machines.

It's a better practice for customer to ask for large count of required instances together as each request computes weight.


### Message Queue Usage

Nova components use [RPC](http://en.wikipedia.org/wiki/Remote_procedure_call) to communicate each other via Message Broker using [PubSub](http://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern).

Nova implements rpc.call (request/response, API acts as consumer) and rpc.cast (one way, API acts as publisher).

Nova API and Scheduler uses message queue as Invoker, whereas Network and Compute act as workers. Invoker pattern sends messages via `rpc.call` or `rpc.cast`. Worker pattern receives messages from queue and respond back to `rpc.call` with appropriate response.

Nova uses [Kombu](http://kombu.readthedocs.org/en/latest/introduction.html) library when interfacing with [RabbitMQ](http://www.rabbitmq.com/).


### Hooks

Enable developers to extend Nova capabilities by adding named hooks to Nova code as decorator that will lazily load plug-in code matching hook name (using setuptools entrypoints, it's an extension mechanism). The hook's class definition should have pre and post method.

Don't use hooks when stability is a factor, internal APIs may change.


### Dev Bootstrap

To get started with contributing... [read this (OpenStack Wiki on HowToContribute) in detail](https://wiki.openstack.org/wiki/How_To_Contribute#If_you.27re_a_developer.2C_start_here).

To get rolling with Nova wheels, system will need to have libvirt and one of the hypervisors (xen/kvm preferred for linux hosts) present.

```
# git clone git://github.com/openstack/nova.git
# cd nova
# python ./tools/install_venv.py
```

This will prepare your copy of nova codebase with virtualenv required, now any command you wanna run on this in context of required codebase `# ./tools/with_venv.sh`


### Run My Tests

to run the nose tests and pep8 checker, when you are done with virtualenv setup (or that will be initiated first here)... inside 'nova' codebase

`# ./run_tests.sh`


### Terminology

* *Server*: Virtual Machines created inside Compute System, required Flavor & Image detail.
* *Flavor*: Represents unique hardware configurations with disk space, memory and CPU time priority
* *Image*: System Image File used to create/rebuild a Server
* *Reboot*: Soft Server Reboot sends a graceful shutdown signal. Hard Reboot does power reset.
* *Rebuild*: Removes all data on Server and replaces it with specified image. Server's IP Address and ID remains same.
* *Resize*: Converts existing server to a different flavor. All resize need to be explicitly confirmed, only then the original server is removed. After 24hrs. delay, there is an automated confirmation.

---
