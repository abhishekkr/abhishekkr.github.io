```meta-title: Testing Chaos with Automated Configuration Management solutions```
```meta-date: 2013-05-31 22:32:00```
```meta-updated: 2013-05-31 22:59:36```
```meta-comments: 0```
```meta-tags: serverspec chaosmonkey configuration rspec-puppet Monitoring puppet test-kitchen Infrastructure devops rspec-chef operations automation chef docker testing vagrant configuration management test-docker```



No noise making.

But let's be real, think of the count of community contributed (or mysterious closed-and-sold 3rd Party) services, frameworks, library and modules put to use for managing your ultra-cool self-healing self-reliant scalable Infrastructure requirements. Now with so many cogs collaborating in the infra-machine, a check on their collaboration seems rather mandatory like any other integration test for your in-house managed service.&nbsp;

After all that was key idea behind having automated configuration management itself.

Now the utilities like Puppet/Chef have been out there accepted and used by dev &amp; ops folks for quite some time now.

But the issue with the initially seen amateur testing styles is it evolved from the non-matching frame of 'Product' oriented unit/integration/performance testing. 'Product' oriented testing focus more on what happens inside the coded logic and less on how user gets affected by product.
Most of the initial tools released for testing logic developed in Chef/Puppet were RSpec/Cucumber inspired Product testing pieces. Now for the major part of installing a package, restarting a service or pushing artifacts these tests are almost non-required as the main functionality for per-say installing package_abc is already tested inside the framework being used.
So coding to "ask" to install package_abc and testing if it has been asked seems futile.

That's the shift. The logic developed for Infrastructure acts as a&nbsp;

glue to all other applications created in house and 3rd party.&nbsp;

Here in Infrastructure feature development there is more to test for the effect it has on the it's users (software/hardware) and less on internal changes (dependencies and dynamic content). Now the stuff in&nbsp;parentheses here means a lot more than seems... let's get into detail of it.

---

#### Real usability of Testing is based on keeping sanctity of WHAT needs to be tested WHERE.

Software/Hardware services that collaborate with the help of Automated Infrastructure logic needs major focus of testing. These services can be varying from the

* in-house 'Product', that is the central component you are developing

* 3rd Party services it collaborates with,

* external services it utilizes for what it doesn't host,

* operating system that it supports and Ops-knows what not.


Internal changes mainly revolve around

* Resources/Dependencies getting called in right order and grouped for specific state.

* It also relates to correct generation/purging of dynamic content, that content can itself range as

* non-corrupt configuration files generated of a template

* format of sent configuration data from one Infra-component to another for reflected changes

* dynamically creating/destroying service instances in case of auto-scalable infrastructure

---

#### One can decide `How?` on ease and efficiency basis.

*Unit Tests*> work for the major portion of 'Internal Changes' mentioned before using [chefspec](https://github.com/acrmp/chefspec), [rspec-chef](http://rubygems.org/gems/rspec-chef), [rspec-puppet](http://rubygems.org/gems/rspec-puppet) like libraries are good enough. They can very well test the dependency order and grouping management as well as the different data effect on non-corrupt configuration generation from templates.

*Integration Tests* in this perspective are a of a bit interesting and evolutionary nature. Here we have to ensure the "glue" functionality we talked about for Software/Hardware service is working properly. These will confirm that every type of required machine role/state can be achieved flawlessly, call them *'State Generation Test'*.

They also need to confirm the *'Reflected Changes Test'* across Infra-component as mentioned in Internal changes.

Now utilities like [test-kitchen](https://github.com/opscode/test-kitchen), [kitchen-docker](https://github.com/portertech/kitchen-docker) in collaboration with [vagrant](http://www.vagrantup.com/), [docker](http://www.docker.io/gettingstarted/), etc. help placing them in your [Continuous Integration](http://en.wikipedia.org/wiki/Continuous_integration) pipeline. This would even help in testing same service across multiple linux distros if that's the plan to support.

Library 'ServerSpec' is also a little nifty piece to write quick final state check scripts.

Then final set of Integration Testing is implemented in form of *Monitoring* on your all managed/affecting Infrastructure components. This is the final and ever-running Integration Test.

*Performance Tests*, yes even they are required for it. Tools like [ChaosMonkey](https://github.com/Netflix/SimianArmy) enable you to enable your Infra to be self-healing and auto-scalable. Should be load-test noticing dynamic containers count and behavior if auto-scalability is a desired functionality too.

---
