> was originally posted at a deprecated blog

## DevOps AND 12FactorApp: some obsolete & much valid

### Why?

Few months ago I came across [The Twelve-Factor-App](http://www.12factor.net/) preaching the best practices for building and delivering software. Nothing really new, but a good central place with many good practices for people to refer and compare.

Recently I saw some implementation of it in an environment where the basic concerns were already handled and thus the solution implemented was redundant and extra cost. To some level also low-grade.

### What?

Actually what [12FactorApp](http://www.12factor.net/) is... it is a good set of ideas around basic set of concerns. The concerns are right, the solutions suggested are situational and the situation is the default/basic setup. With the teams following good DevOps-y practices, they don't turn out to be exactly same.

So to avoid the confusions for more people and foremost saving me the pain of explaining myself at different places in different times for my views against [12FactorApp](https://speakerdeck.com/u/kennethreitz/p/the-12-factor-app) ... here is what the concerns are and what the solutions turn into when following a proper DevOps-y approach.


### What @12FactorApp doesn't suit at all for DevOps-y Solutions

#### 2. Dependencies

> **Obsolete:** If the app needs to shell out to a system tool, that tool should be vendored into the app.
>
> **Changed-to:** Make your automation configuration management system handle it.

#### 3. Configurations

> **Obsolete:** The twelve-factor app stores config in environment variables changing between deploys w/o changing any code.
>
> **Changed-to:** This is not a fine scalable with disaster management based solution. Now configuration management handles the node level deterministic state. The non-developer box level configuration is no more in code.

> **Obsolete:** The twelve-factor app stores config in environment variables changing between deploys w/o changing any code.
>
> **Changed-to:** Now configuration management handles the node level deterministic state. In such a case keeping configurations in a file is much more verifiable, cleaner and broadly available solution. So, there will be no more noise of different environment level configurations in the same configuration file.

#### 5. Build, Release, Run

> **Obsolete:** The resulting release contains both the build and config.
>
> **Changed-to:** Packaging configuration along-with build makes it dependent of a set environment. Any disaster resistant or scalable architecture would be crippled with it as it requires creating new packages every change. Make your automated configuration management solution intelligent enough to infer required configuration and deploy the build.

#### 8. Concurrency

> **Obsolete:** Twelve-factor app processes should never daemonize or write PIDfiles.
>
> **Changed-to:** PID files help some automated configuration management solutions to easily identify the 'service' check placed in them. There are operating system level process managers also supporting PIDfiles. Having a pidfile eases up lots of other custom monitoring plug-ins too... and is not a bad practice to have.


### Cumulative Correct Concerns 3C@12FactorApp and DevOps-y Solutions

Overall aiming to achieve a easy-to-setup, clean-to-configure, quick-to-scale and smooth-to-update software development ambiance.

**The 12 Concerns+Solutions:**

#### 1. Problem: Maintaining Application Source Code

Solution:

* a. Using Version Control Mechanism, if possible Distributed VCS like [git](http://git-scm.com/). Private hosted (at least private account) code repository.

* b. Unique application~to~repository mapping i.e. single application or independent library's source code in a single repository.

* c. For different versions of same application depend on different commit-stages (not even branches in general cases) of the same code repository.

#### 2. Problem: Managing Application Dependencies

Solution:

* a. Never manually source compile any dependent library or application. Always depend on the standard PackageManager for the intended platform (like [rpm](http://www.rpm.org/), [debian pkg](http://www.debian.org/doc/manuals/debian-faq/ch-pkg_basics.en.html), [gem](http://rubygems.org/), [egg](http://peak.telecommunity.com/DevCenter/PythonEggs#building-eggs), [npm](http://npmjs.org/)). If there are no packages available, create one. It's not really difficult. On a standard practice, I'd suggest to utilize something like [FPM](https://github.com/jordansissel/fpm/wiki/) (may be even [fpm-cookery gem](https://github.com/bernd/fpm-cookery/blob/master/README.md) if you like), which would give you elasticity of easily changing your platform without worrying for the re-creation of packages. Even creating rpm, gem and other is not too much pain compared to the stability it would bring to infrastructure set-up.

* b. Make your automated configuration management utility ensure all the required dependencies of your application are pre-installed in correct order of correct version with correct required configurations.

* c. The dependency configuration will be specific enough to ensure the usage of the installed & configured dependencies. So in case of compiling binary, use static library linking. If you are loading external libraries, ensure the fixated path. Same configuration management tool can be run even in solo/masterless (no-server) usage mode.


#### 3. Problem: Configuration in Code, Configuration at all Deploy

Solution:

* a. Ideally no configuration details as in node's IP/Name, credentials, etc. shall not be a part of application's codebase. As if such a configuration file is locally available in developer-box repository, in non-alert & non-gitignore days it might get committed to your repository.

* b. Make your automated configuration management tool generate all these configuration files for a node based on the node-specific details provided to configuration management tool, no the application.

* c. Suggested practice for keeping these configurations with configuration management tool, also require to utilize a proper different data-store from normal configuration statements.

> Could be in [CSV](http://en.wikipedia.org/wiki/Comma-separated_values)s, [Hiera](http://projects.puppetlabs.com/projects/hiera/), dedicated [parameter](https://github.com/example42/puppet-modules/blob/master/cron/manifests/params.pp)'s manifest for a tool like [Puppet](http://puppetlabs.com/puppet/what-is-puppet/).
>
> For a tool like [OpsCode](http://www.opscode.com/)'s [Chef](http://www.opscode.com/chef/), there is already [databag](http://wiki.opscode.com/display/chef/Data+Bags) facility available. Wherever available and required the info should be [encrypted](http://wiki.opscode.com/display/chef/Encrypted+Data+Bags) with a non-repository available secret key.


#### 4. Problem: Backing Services

Solution:

* a. Whatever other application services are required by application to serve can be included in the `Backing Services` list. It will be services like data-stores ([databases](http://en.wikipedia.org/wiki/Active_record_pattern), [memory cache](http://api.rubyonrails.org/classes/ActiveSupport/Cache.html) and more [activesupport](http://as.rubyonrails.org/)) , smtp services, etc.

* b. Every information required for these backing services should be configuration details like node-name, credentials, port#, etc. and maintained as a loaded configuration file via configuration management tool.

* c. If it's a highly complex applications broken into several component applications supporting each other, then all other component applications for any component application are also 'Backing Services'.

#### 5. Problem: Build, Release, Run

Solution:

* a. The development stage code gets pushed to codebase and after passing intended tests should be pushed to Build Stage for preparing deploy-able (compile, include dependencies) code. Should read [Continuous](http://en.wikipedia.org/wiki/Continuous_integration) [Integration](http://martinfowler.com/articles/continuousIntegration.html) process for the better approach at it.

* b. The deploy-able code is packaged ready to deliver in Release Stage and pushed in to the package-manager repositories. The required configuration for execution environment is provided to automated configuration management solution.

* c. Run Stage involves release application package from package-manager and intended system-level configurations via configuration management solution.


#### 6. Problem: Processes

Solution:

* a. No persistent data related to application shall be kept along-with it. All of user-input & calculated information required for service shall be at the `Backing Services` available to all the instances of the application of that environment. Helping the application to be stateless.

* b. Get the static assets compiled at `Build Stage`, served via [CDN](http://en.wikipedia.org/wiki/Content_delivery_network) and cached at [load balancing server](http://www.haproxy.org//).

* c. Session state data is a good candidate to be stored and retrieved using backing memory powered cache service (like memcache or redis) providing full-blown stateless servers where lossing/killing one and bringing another doesn't impact on user experience.


#### 7. Problem: Port Binding

Solution:

* a. Applications shouldn't allow any run-time injection to get utilized by 'Backing Services' but instead expose their interaction over any [RESTful](http://en.wikipedia.org/wiki/Representational_state_transfer) (or similar) protocol.

* b. In a standard setup, the data/information store/provider opens up a socket and the&nbsp;retriever&nbsp;contacts at the socket with required data transaction protocol.&nbsp;Now this data/information provider can be 'Backing Service' (like db service) or could be the primary application providing information over to a 'Backing Service' (like application server, load balancer).

* c. Either way, they get configured with primary application via automated configuration management by url, port and any other service specific required detail being provided.


#### 8. Problem: Concurrency

Solution:

* a. Here concurrency is mainly used for highly scalable (on requirement) process model, which is almost&nbsp;equivalent to how used libraries manage internal concurrent processes.

* b. All application & `Backing Service` processes should be such managed that process count of one doesn't effect another as in say access via load balancer over multiple http processes.

* c. All the processes have a process-type and process-count. There should be a process manager to handle continuous execution of that process with that count. Now it could be ruby rack server to be run with multiple threads on same server, or multiple nodes with nginx serving indecent amount of users via a load balancer.


#### 9. Problem: Disposability

Solution:

* a. Quick code & configuration deployment. Configuration Management solution makes sure of the latest (or required stage) application code & configuration changes cleanly & quickly replace the old application exactly as desired.

* b. Application (and `Backing Services`) Architecture [shall be](http://labs.vmware.com/publications/elastic-systems) [elastic](http://www.slideshare.net/ericvh/scalable-elastic-systems-architecture-sesa), spawning up new nodes under a load-balancer and destroying when the process-load is less must be smooth.

* c. Application's data transactions & task list should be [crash-proof](http://lwn.net/Articles/191059/). The data & tasks shall be managed to handle the re-schedule of those processes in case of application crash.


#### 10. Problem: Dev/Prod Parity

Solution:

* a. Keep dev, staging, ..., and production environments as similar as possible.If not in process count and machine nodes count, but necessarily similar on the deployment tasks. Could utilize [vagrant](http://vagrantup.com/) in coordination with configuration management solution to get quick production like environments at any development box.

* b. Code manages the application and configuration both, any developer (with considerable system level expertise) could get a hang of configuration management frameworks and manage them. Using `Backing Services` as mentioned would enable environment based different service providers.

* c. Adapting [Continuous](http://www.slideshare.net/jmcgarr/continuous-delivery-8341276) [Delivery](http://en.wikipedia.org/wiki/Continuous_deployment) would also ensure no new change in code or configuration breaks the deployment.


#### 11. Problem: Logs

Solution:

* a. All staging/production environment will have application and 'Backing Services' promoting its logs to a central (like [syslog](http://www.syslog.org/), [syslog-ng](http://www.balabit.com/network-security/syslog-ng), [logstash](https://github.com/logstash/logstash), etc) log hub for archival, if required back-up proof. It can be queried here for analyzing trnds in application performance over past time.

* b. The central log solution is not configured within applications but the log solution takes care of what to pick and collect, can even have a look at log routers ([fluentd](https://github.com/fluent/fluentd), [logplex](https://github.com/heroku/logplex), [rsyslog](http://www.rsyslog.com/)).

c. Specific log trends can be put to alert everyone effected whenever captured again at Central Log Services (like [graylog2](http://www.graylog2.org/about), [splunk](http://www.splunk.com/), etc.).


#### 12. Problem: Admin Processes

Solution:

* a. Application level admin processes (like db-migration, specific-case-tasks, debug console, etc.) shall also pick the same code and configuration as the running instances of application.

* b. The admin tasks script related to application shall also ship with application code and evolve with it. As [db management](http://guides.rubyonrails.org/migrations.html) rake tasks in [RubyOnRails](http://rubyonrails.org/) applications, run using '[bundler](http://gembundler.com/)' to stay [pick required Environment](http://asciicasts.com/episodes/201-bundler) related []library versions(http://yehudakatz.com/2010/04/21/named-gem-environments-and-bundler/).

* c. Languages with [REPL](http://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) shell (like python) or providing it via separate utility (like '[rails console](http://guides.rubyonrails.org/command_line.html)' for rails) give an advantage to easily debug an environment specific issue (which might me arising due to library versions of that environment, data in-consistency, etc) by directly playing around with the objects seemingly acting as the source of flaw.


> As I Always Say..
>
>Every Generic Solution is very Specifically Placed.

---
