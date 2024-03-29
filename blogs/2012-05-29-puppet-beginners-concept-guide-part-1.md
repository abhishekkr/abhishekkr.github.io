> was originally posted at a deprecated blog

## Puppet ~ a beginners concept guide (Part 1)

Someone asked me where to start with Puppet learning. I pointed them at [PuppetLabs](http://puppetlabs.com/) [online doc](http://docs.puppetlabs.com/) for [Puppet](http://docs.puppetlabs.com/guides/introduction.html), which is actually nice for a proper understanding. 

But for someone trying to start with Puppet, [that documentation is a bit long](http://docs.puppetlabs.com/learning/) to read similar to any book. 

>I searched for few blogs, but didn't found any content (*short but enough, fundamentals but usable*) that I was looking for.

---

**Puppet, a beginners concept guide (Part 1)**

### What it is? When is it required?

> for all new guys, who came here while just browsing internet

Puppet is an OpenSource automated configuration management framework. Which means a tool that knows how to configure all machines to a deterministic state once you provide it the required set of manifests pulling the correct strings.

It's managed at enterprise level by an organization called [PuppetLabs](http://puppetlabs.com/).


It is required
* when you have a hell-lot of machines required to be configured in a similar form
* when you have a infrastructure requirement of dynamic scale-up and scale-down of machines with a pre-determined (or at least metadata-calculated) configuration
* to have a control over all set of configured machines, so a centralized (master-server or repo-based) change gets propagated to all automatically

*And more scenarios come up as you require it.*

### Quickstart

* Install [Ruby](http://www.ruby-lang.org/en/downloads/), [Rubygems](http://rubygems.org/) on your machine where you aim to test it.

```
# gem install puppet --no-ri --no-rdoc
```

* Can download installers for [Windows](http://docs.puppetlabs.com/windows/installing.html), [MacOSX](http://downloads.puppetlabs.com/mac/) and [docs to installing](http://docs.puppetlabs.com/guides/installation.html).

* Checking, if it's installed properly and acting good.

> * Now, `puppet --version` shall give you the version of installed puppet once succeed.
>
> * Executing `facter` shall get a list of System Environment related major information.

Have a quick puppet run, this shall create a directory `/tmp/pup` if absent. Creates a file `/tmp/pup/et` with `look at me` as its content.

In case of trying out on platforms without '/tmp' location. Like for Windows, change '/tmp' with suitable path.

```
# puppet apply -e "file {
    '/tmp/pup': ensure => 'directory'
  }
  file {
    '/tmp/pup/et': ensure => 'present',
    content => 'look at me',
    require => File['/tmp/pup']
  }"
```


### Dumb usage structure

Create huge manifest for your node with all resources &amp; data mentioned in it. Then directly apply that manifest file instead of `-e "abc{.....xyz}"`.

Say if the example above is your entire huge configuration commandment for the node. Copy all that to a file say `mynode.pp`.

Then apply it similarly like `# puppet apply mynode.pp`.


### How it evolves?

Now, as any application had pluggable library components to be loaded and shared as and when required. Puppet too have a concept of modules. These modules can have manifests, files-serving and more.

Modules can be created in any design preference. Normally it works by having different modules per system component. To entertain different logical configuration states for any given system component (and also keeping it clean) further re-factoring can be done in the modules' manifest dividing it into different scopes.

Taking **example of a module for 'apache httpd'**.

For a very basic library, you might wanna structure your module like

* a directory base for your module: `<MODULE_PATH>/ httpd`

* a directory in module to serve static files: `<MODULE_PATH>/ httpd/files`

* static configuration file for httpd: `<MODULE_PATH>/ httpd/files/myhttpd.conf AccessFileName .acl`

* directory to hold your manifests in module: `<MODULE_PATH>/ httpd/manifests`

* a complete solution manifest: `<MODULE_PATH>/ httpd/manifests/init.pp`

```
class httpd{
  include httpd::install
  include httpd::config
  include httpd::service
}
```

* a manifest just installing httpd: `<MODULE_PATH>/ httpd/manifests/install.pp`

```
class httpd::install {
  package {
    'httpd': ensure => 'installed'
  }
}
```

* a manifest just configuring httpd: `<MODULE_PATH>/ httpd/manifests/config.pp`

```
class httpd::config{
  file {'/etc/httpd/conf.d/httpd.conf':
    ensure => 'present',
    source => 'puppet:///modules/httpd/myhttpd.conf'
  }
}
```

* a manifest just handling httpd service: `<MODULE_PATH>/ httpd/manifests/service.pp`

```
class httpd::service{
  service{'httpd': ensure => 'running' }
}
```

**Now, using it**

* install, custom-configure and start the httpd service.

`# puppet apply --modulepath=$MODULE_PATH -e "include httpd"`

* would just install the httpd service.

`# puppet apply --modulepath=$MODULE_PATH -e "include httpd::install"`

---

[Part2: Road to Modules](http://justfewtuts.blogspot.com/2012/07/puppet-beginners-concept-guide-part-2.html)


<div class="css-full-comments-content js-full-comments-content">
  <div class="css-full-comment js-full-comment">
    <div class="css-comment-user-link js-comment-user-link">
      <a href="http://www.blogger.com/profile/07233280907745145354">
        <div class="css-comment-name js-comment-name">John Arundel</div>
      </a>
      <div class="css-comment-date js-comment-date">2013-02-10T14:31:53.093Z</div>
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
        <div class="css-comment-name js-comment-name">Abhishek Kumar</div>
      </a>
      <div class="css-comment-date js-comment-date">2013-02-25T17:25:55.459Z</div>
    </div>
    <div class="css-comment-content js-comment-content">
      @JohnArundel outline seems nice, do you plan on covering puppet custom add-on... also it will be good to include habits around tools like librarian-puppet, puppet-lint and rspec-puppet.
    </div>
    <br/>
  </div>
</div>

---
