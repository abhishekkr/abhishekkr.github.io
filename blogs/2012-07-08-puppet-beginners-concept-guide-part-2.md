> was originally posted at a deprecated blog

## Puppet, a beginners concept guide (Part 2): road to Modules

> you might prefer first reading ['Puppet ~ beginners' concept guide Part#1'](http://justfewtuts.blogspot.in/2012/05/puppet-beginners-concept-guide-part-1.html)
>
> the section after this [Part#3 talks about More on Modules is you work serious](http://justfewtuts.blogspot.com/2012/08/puppet-beginners-concept-guide-part-3.html)


### Puppet Modules?

*No, no..... nothing different conceptually.*

Puppet Modules (like in most other technological references, and the previous part of this tutorial)  are libraries to be loaded and shared as per the required set of configuration.

Think if you have a war application to be deployed over tomcat. For the stated requirement you require tomcat to be present on the machine with correct required configurations and war file to be correctly downloaded and placed on the machine with correct permissions.

In a general scenario requirement like this, two modules come up. One to install, configure and service-start tomcat service. Another to download/locate war file , use tomcat's configure and service sub-module.


### Logic of Structure Logic

*Just how is your module structured.*

The different components of structural design followed by each puppet module:

#### Manifests

> All your `<module/submodule>.pp` manifest files go into `module_dir/manifests`.
> 
> Puppet has an auto-load service for modules/sub-modules, so the naming of these
> `*.pp` files should be suiting the class names.
> 
> As discussed above for a 'tomcat' module, you are also gonna create sub-modules like `tomcat::install`, `tomcat::configure`, and `tomcat::service`.
> 
> So the files that will get create be `tomcat-module/manifests/install.pp`, `tomcat-module/manifests/configure.pp`, `tomcat-module/manifests/service.pp`.
> 
> Now if there would have been a sub-module like `tomcat::configure::war`,  then the file-path would go like `tomcat-module/manifests/configure/war.pp`.


#### Templates

> As any other language, where you want some static data merged with varying passed-on or environment variables and pushed in somewhere as content.
>
> Say, for `tomcat::config` sub-module as you wanna parameter-ize somethings like `war` file name.
>
> Then this war file-name is being passed-on by `deploy_war` module.
>
> This ruby template goes in `tomcat-module/files/war_app.conf.erb` and whenever required it's content received as `template('tomcat-module/war_app.conf.erb')`.


#### Files

> Any kin'of static file can be served from a module using puppet's fileserver mount points. Every puppet module has a default file-server mount location at `tomcat-module/files`.
>
> So a file like `tomcat-module/files/web.war` get to be served at Puppet Agents pointing to source of `puppet:///modules/tomcat-module/web.war`.


#### Lib

> This is the place where you can plug-in your custom mods to puppet and use your newly powered up puppet features.
>
> This is the one feature that lets you actually utilize your ruby-power and **add-on custom facts, providers & types** (with default location at `tomcat-module/lib/<facter|puppet>`, `tomcat-module/lib/puppet/<parser|provider|type>`) to be used via puppet in your modules.
>
> To be used it requires `pluginsync = true` configuration to be present at `puppet.conf` level.
>
> We'll discuss this in more detail with all sorts of examples in following up blogs and add the links here.
>
> Until then it can be referred at [docs.puppetlabs.com](http://docs.puppetlabs.com/guides/plugins_in_modules.html).


#### Specs/Tests

> As *Love needs Money* to avoid worldly issues affect its charm. Similarly, *Code need Tests*.
>
> In location `tomcat-module/spec/` you can have your [puppet-rspec](http://rspec-puppet.com/) tests for puppet module.
>
> [ref: bombasticmonkey.com blog](http://bombasticmonkey.com/2012/03/02/automatically-test-your-puppet-modules-with-travis-ci/).
>
>
>The path `tomcat-module/tests/` would have common examples on how the module classes would be defined.


### Modules Fundamental Live

> mean the actual code sample...

* [gist set: Puppet Module Sample](https://gist.github.com/abhishekkr/3070758)

* [gist set: Puppet Module, no code in data](https://gist.github.com/abhishekkr/3683955)


<div class="css-full-comments-content js-full-comments-content">
  <div class="css-full-comment js-full-comment">
    <div class="css-comment-user-link js-comment-user-link">
      <a href="http://www.blogger.com/profile/05583017738947703614">
        <div class="css-comment-name js-comment-name">city</div>
      </a>
      <div class="css-comment-date js-comment-date">2012-12-25T02:02:19.692Z</div>
    </div>
    <div class="css-comment-content js-comment-content">thanks for sharing</div>
    <br/>
  </div>
</div>

---
