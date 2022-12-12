> was originally posted at a deprecated blog

## Puppet, a beginners concept guide: Part 4

Parts of the "Puppet, Beginner's Concept Guide" to read before: [Part#1](http://justfewtuts.blogspot.in/2012/05/puppet-beginners-concept-guide-part-1.html) intro to puppet, [Part#2](http://justfewtuts.blogspot.in/2012/07/puppet-beginners-concept-guide-part-2.html) intro to modules and [Part#3](http://justfewtuts.blogspot.in/2012/08/puppet-beginners-concept-guide-part-3.html) modules much more.

### Where is my Data

When I started my Puppet-ry, the examples I used to see had all configuration data buried inside the DSL code of manifests, people were trying to use inheritance to push down data.

Then got to see a design pattern in puppet manifests keeping out separate parameters manifest for configuration variables.

Then came along the External Data lookup via CSV files as a Puppet function. Then with enhancements in puppet and other modules came along more.

> Below are few usable to fine ways utilizing separate data sources within your manifests,
> Here, we will see usage styles of data for Puppet Manifests, Extlookup CSV, Hiera, Plug-in Facts and PuppetDB.

### [params-manifest](http://docs.puppetlabs.com/guides/parameterized_classes.html#appendix-smart-parameter-defaults)

It is the very basic way of separating out data from your functionality code, and the preferred way for in-future growing value-set type of data.

It will keep it separate from the code since start. Once the requirement is at a level to have varied value to inferred based on environment/domain/fqdn/operatingsystem/[any-facter], it can be extracted to any preferred ways given below and just looked-up here. That would avoid changing the main (sub)module-code.

> Gist-Set Externalize into Params Manifest: [https://gist.github.com/3683955](https://gist.github.com/3683955)

Say you are providing httpd::git sub-module for httpd module placing a template generated config file using params placed data...

* [File: httpd/manifests/git.pp](https://gist.github.com/abhishekkr/3683955#git.pp), it includes the params submodule to access the data.

* [File: httpd/templates/mynode.conf.erb](https://gist.github.com/abhishekkr/3683955#mynode.conf.erb)

* [File: httpd/manifests/params.pp](https://gist.github.com/abhishekkr/3683955#params.pp), it actually is just another submodule to only handle data

* [Use it: run\_puppet.sh](https://gist.github.com/abhishekkr/3683955#run_puppet.sh)


### [extlookup-csv](http://docs.puppetlabs.com/references/2.6.8/function.html#extlookup)

If you think your data would suit to a (key,value) CSV format being extracted to data files.Puppet need to be told the location for CSV files need to be looked up for key, and fetch the value assigned to it in that file.

Names given to these CSV files would matter to Puppet while looking up the values from all present CSV files. Puppet need to be given hierarchy order for these file-names to look for the key and the order could involve variable names.

> For e.g.
>
> Say you have a CSV by name of HOSTNAME, ENVIRONMENT and a common file, with hierarchy specified in respective order too.
>
> Then Puppet will first look for the queried Key in CSV by HOSTNAME, if not found looks up in ENVIRONMENT named file and after not finding it there goes looking into common file.
>
> If it doesn't find the key in any of those files, it returns the default value if specified in the `extlookup(key, default_value)` method like this.
>
> If there is no default value also, Puppet will raise an exception for no value to return.

> [Gist-Set Externalize into Hierarchical CSV Files](https://gist.github.com/3684010)

It's the same example as for params with a flavor of ExtData. Here you'll notice a *'common.csv'* external data file providing a default set of values.

Then there is also a *'env_testnode.csv'* file overriding the only required changed value.

Now as in *'site.pp'* file, precedence of `env_%{environment}` file is higher than *'common'*, the `httpd::git` would look-up all values first from `env_testnode.csv` and if not found there would goto *'common.csv'*.

Hence would end-up overriding *'httpd_git_url'* value from *'env_testnode.csv'*.

Here, `extlookup()` method is available as a *Puppet Parser Function*, you would read more in [WIP: Part#5 Custom Puppet Plug-Ins](#) on how to create your own functions.


### [hiera-and-backends](http://projects.puppetlabs.com/projects/hiera/)

Hiera is a pluggable hierarchical data storage for Puppet.

It was started to provide a better external data storage support than Ext-lookup feature with data formats other than CSV too.

This brings in the essence of ENC for data retrieval without having to write one.

Data look-up happens in a hierarchy provided by configuration with self scope resolution mechanism.

It enables Puppet to fetch data from varied external data sources using it's different backends (like local files, redis, http protocol) which can be added on to if needed.

The 'http' backend in turn enables support for data store from any service (couchdb, [riak](http://beingasysadmin.wordpress.com/2012/11/24/hiera-http-and-riak/), web-app or so) to provide data.

File "[hiera.yaml](https://gist.github.com/abhishekkr/6133012#file-conf_dir-hiera-yaml)" from Gist below is an example of hiera configuration to be placed in puppet's configuration directory. The highlights of this configuration are `:backends:`, backend source and `:hierarchy:`.

Multiple backend can be used at same time, their order of listing mark their order of look-up. Hierarchy configures the order for data look-up by scope.

Then depending on what backend you have added, you need to add their source/config to look-up data at.

Here we can see configuration for using local "yaml", "json" files. Look-up data from Redis server ([it will set-up datasets for redis usage for current example](https://gist.github.com/abhishekkr/6133012#file-prepare_redis-sh)) with authentication in place. And looking up data from any "[http](https://github.com/crayfishx/hiera-http)" service with hierarchy as the `:paths:` value.

You can even use [GPG protected data as backend](https://github.com/crayfishx/hiera-gpg), but that is a bit messy to use.

Placing ".yaml" and ".json" from Gist at intended provider location.

The running "[use\_hiera.sh](https://gist.github.com/abhishekkr/6133012#file-use_hiera-sh)" would make you show the magic from this example on hiera.

> Gist-Set Using Hiera with Masterless Puppet set-up: [https://gist.github.com/abhishekkr/6133012](https://gist.github.com/abhishekkr/6133012)


### [plugin-facts](http://docs.puppetlabs.com/guides/custom_facts.html)

Every system has its own set of information facter ([http://projects.puppetlabs.com/projects/facter](http://projects.puppetlabs.com/projects/facter)) by default made available to puppet. Puppet also enable DevOps people to set custom facter to be used in modules.

The power of these computed Facters is they can use full ruby-power to use local/remote plain/encrypted data over REST/Database/API/anyway available channel.

These require the power of Puppet Custom Plug-Ins ([http://docs.puppetlabs.com/guides/custom_facts.html](http://docs.puppetlabs.com/guides/custom_facts.html)). The ruby file doing this would go at `MODULE/lib/puppet/facter` and would get loaded by the `pluginsync=true` in action.

Way to set a Facter in such Ruby code is just...

```
my_value = 'all ruby code to compure it'

Facter.add(mykey) do
  setcode do
    my_value
  end
end
```

...all the rest of code there need to compute the value to be set, or even key-set.

> Gist-Set Externalize Data receiving as Facter: [https://gist.github.com/3684968](https://gist.github.com/3684968)

Same `httpd::git` example revamped to use Custom Facter as 

There is also another way to provide a Facter in Puppet Catalog, that can be done by providing an Environment variable with capitalized Facter name pre-fixed by 'FACTER_' and the value which it's supposed to have.

> For E.g.
```
# export FACTER_MYKEY=$my_value
# puppet apply --modulepath=$MODULEPATH -e "include httpd::git"
```


### [puppetdb](http://puppetlabs.com/blog/introducing-puppetdb-put-your-data-to-work/)

It's a beautiful addition to Puppet component set. Something that have been missing for long and possibly the thing because of which I delayed this post by half year.

It enables the 'storeconfig' power without the Master, provides a support of trusted DB for infrastructure-related data needs and thus best suited of all.

To set-up 'puppetdb' on a node follow the [PuppetLabs has a nice documentation](http://docs.puppetlabs.com/puppetdb/latest/index.html#install-it-now).

#### To set-up a decent example for master-less puppet mode, follow the given steps

* Place the 2 '.conf' and 1 '.yaml' file in Puppet's configuration directory.

* The [shell script](https://gist.github.com/abhishekkr/6114760#file-prepare_puppetdb-sh) would prepare the node with PuppetDB service for masterless puppet usage scenario.

* [Puppet config](https://gist.github.com/abhishekkr/6114760#file-conf_dir-puppet-conf) setting storeconfig to `puppetdb` enables saving of exported resources to it. The `reports` config their would push the puppet apply reports to the database.

* [PuppetDB config](https://gist.github.com/abhishekkr/6114760#file-conf_dir-puppetdb-conf) makes Puppet aware of the host and port to connect database at.

* The facts setting on [routes.yaml](https://gist.github.com/abhishekkr/6114760#file-conf_dir-routes-yaml) enable PuppetDB to be used in a masterless mode.

> Gist-Set Using PuppetDB with Masterless Puppet set-up: [https://gist.github.com/abhishekkr/6114760](https://gist.github.com/abhishekkr/6114760)

Now running anything say like... `puppet apply -e 'package{"vim": }'` and beautiful to that `export resources` would work like a charm using PuppetDB.

The puppet.conf accompanied will make reports dumped to PuppetDB as well.

There's a [fine article](http://puppetlabs.com/blog/the-problem-with-separating-data-from-puppet-code/) on the same by [PuppetLabs](http://puppetlabs.com/blog/the-problem-with-separating-data-from-puppet-code/).

---
