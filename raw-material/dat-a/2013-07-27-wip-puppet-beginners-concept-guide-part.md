```meta-title: Puppet ~ a beginners concept guide (Part 4) ~ Where is my Data```
```meta-date: 2013-07-27 00:50:00```
```meta-updated: 2013-08-01 18:29:59```
```meta-comments: 0```
```meta-tags: puppetlabs data configuration puppet concept guide fundamentals extlookup Infrastructure devops hiera-http automation puppetdb beginners external data hiera```



<div style="text-align: right;">

<span style="background-color: white; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">

<i>parts of the "Puppet ~ Beginner's Concept Guide" to read before ~


<a href="http://justfewtuts.blogspot.in/2012/05/puppet-beginners-concept-guide-part-1.html">Part#1
</a>: intro to puppet,&nbsp;

<a href="http://justfewtuts.blogspot.in/2012/07/puppet-beginners-concept-guide-part-2.html">Part#2
</a>: intro to modules,&nbsp;
    and
<a href="http://justfewtuts.blogspot.in/2012/08/puppet-beginners-concept-guide-part-3.html">Part#3
</a>: modules much more.
</i>

</span>

</div>

## _Puppet_: beginners concept guide _(Part 4)_

### Where is my Data?

When I started my Puppet-ry, the examples I used to see had all configuration data buried inside the DSL code of manifests, people were trying to use inheritance to push down data. Then got to see a design pattern in puppet manifests keeping out separate parameters manifest for configuration variables. Then came along the External Data lookup via CSV files as a Puppet function. Then with enhancements in puppet and other modules came along more.

> Below are few usable to fine ways utilizing separate data sources within your manifests,
> Here, we will see usage styles of data for Puppet Manifests, Extlookup CSV, Hiera, Plug-in Facts and PuppetDB.

### [params-manifest](http://docs.puppetlabs.com/guides/parameterized_classes.html#appendix-smart-parameter-defaults)

It is the very basic way of separating out data from your functionality code, and the preferred way for in-future growing value-set type of data. It will keep it separate from the code since start. Once the requirement is at a level to have varied value to inferred based on environment/domain/fqdn/operatingsystem/[any-facter], it can be extracted to any preferred ways given below and just looked-up here. That would avoid changing the main (sub)module-code.

> Gist-Set Externalize into Params Manifest: [https://gist.github.com/3683955](https://gist.github.com/3683955)

&nbsp;]

Say you are providing httpd::git sub-module for httpd module placing a template generated config file using params placed data...


<div>
```



File: httpd/manifests/git.pp

it includes the params submodule to access the data


<script src="https://gist.github.com/3683955.js?file=git.pp">

</script>


File: httpd/templates/mynode.conf.erb


<script src="https://gist.github.com/3683955.js?file=mynode.conf.erb">

</script>


File: httpd/manifests/params.pp

it actually is just another submodule to only handle data


<script src="https://gist.github.com/3683955.js?file=params.pp">

</script>


Use it: run_puppet.sh


<script src="https://gist.github.com/3683955.js?file=run_puppet.sh">

</script>

</div>


```


<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">

<span style="font-size: 15px; line-height: 21px;">
_
</span>

</span>



<h3>

<a href="http://docs.puppetlabs.com/references/2.6.8/function.html#extlookup" style="font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; line-height: 21px;" target="_blank">

<span style="font-size: 25px;">
extlookup-csv
</span>

</a>

<span style="background-color: white; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
:
</span>

</h3>


If you think your data would suit to a (key,value) CSV format being extracted to data files.Puppet need to be told the location for CSV files need to be looked up for key, and fetch the value assigned to it in that file.

Names given to these CSV files would matter to Puppet while looking up the values from all present CSV files. Puppet need to be given hierarchy order for these file-names to look for the key and the order could involve variable names.



For E.g. say you have a CSV by name of HOSTNAME, ENVIRONMENT and a common file, with hierarchy specified in respective order too. Then Puppet will first look for the queried Key in CSV by HOSTNAME, if not found looks up in ENVIRONMENT named file and after not finding it there goes looking into common file. If it doesn't find the key in any of those files, it returns the default value if specified in the 'extlookup(key, default_value)' method like this. If there is no default value also, Puppet will raise an exception for no value to return.



[ Gist-Set Externalize into Hierarchical CSV Files:
<a href="https://gist.github.com/3684010">
https://gist.github.com/3684010
</a>
 ]



It's the same example as for params with a flavor of ExtData. Here you'll notice a
<b>
 'common.csv'
</b>
external data file providing a default set of values. Then there is also a
<b>
'env_testnode.csv'
</b>
file overriding the only required changed value. Now as in
<b>
 'site.pp'
</b>
 file, precedence of
<b>
'env_%{environment}'
</b>
 file is higher than
<b>
 'common'
</b>
, the
<b>
'httpd::git'
</b>
would look-up all values first from
<b>
'env_testnode.csv'
</b>
 and if not found there would goto
<b>
 'common.csv'
</b>
. Hence would end-up overriding
<b>
'httpd_git_url'
</b>
 value from
<b>
 'env_testnode.csv'
</b>
.


<div>
```


<script src="https://gist.github.com/abhishekkr/3684010.js">

</script>
```
</div>



<b>
extlookup()
</b>
 method used here is available as a
<b>
Puppet Parser Function
</b>
, you would read more in
<b>
Part#5 Custom Puppet Plug-Ins
</b>
 on how to create your own functions

_




<div style="text-align: left;">

<a href="http://projects.puppetlabs.com/projects/hiera/" style="font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;" target="_blank">

<span style="font-size: 25px;">

<b>
hiera-and-backends
</b>

</span>

</a>

<span style="background-color: white; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
:
</span>

<span style="background-color: white; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; line-height: 21px;">



</span>

</div>

<div style="text-align: left;">

</div>

<div style="text-align: left;">

<span style="font-family: inherit;">

<span style="font-weight: normal;">



</span>

<span style="font-weight: normal;">
Hiera is a pluggable hierarchical data storage for Puppet. It was started to provide a better external data storage support than Ext-lookup feature with data formats other than CSV too.
</span>

</span>


This brings in the essence of ENC for data retrieval without having to write one.



Data look-up happens in a hierarchy provided by configuration with self scope resolution mechanism.


<span style="font-family: inherit;">

<span style="font-weight: normal;">



</span>

</span>

<span style="font-family: inherit;">

<span style="font-weight: normal;">
It enables Puppet to fetch data from varied external data sources using it's different backends (like local files, redis, http protocol) which can be added on to if needed.
</span>

</span>


The 'http' backend in turn enables support for data store from any service (couchdb,
<b>

<i>

<a href="http://beingasysadmin.wordpress.com/2012/11/24/hiera-http-and-riak/" target="_blank">
riak
</a>

</i>

</b>
, web-app or so) to provide data.
</div>

<div style="text-align: left;">

<span style="font-family: inherit;">

<span style="font-weight: normal;">



</span>

</span>

</div>

<div style="text-align: left;">
File "
<a href="https://gist.github.com/abhishekkr/6133012#file-conf_dir-hiera-yaml" target="_blank">
hiera.yaml
</a>
" from Gist below is an example of hiera configuration to be placed in puppet's configuration directory. The highlights of this configuration are ":backends:", backend source and ":hierarchy:". Multiple backend can be used at same time, their order of listing mark their order of look-up. Hierarchy configures the order for data look-up by scope.



Then depending on what backend you have added, you need to add their source/config to look-up data at.

Here we can see configuration for using local "yaml", "json" files. Look-up data from Redis server (
<i>

<a href="https://gist.github.com/abhishekkr/6133012#file-prepare_redis-sh" target="_blank">
it will set-up datasets for redis usage for current example
</a>

</i>
) with authentication in place. And looking up data from any "
<b>

<a href="https://github.com/crayfishx/hiera-http" target="_blank">
http
</a>

</b>
" service with hierarchy as the ":paths:" value.

You can even use
<a href="https://github.com/crayfishx/hiera-gpg" target="_blank">
GPG protected data as backend
</a>
, but that is a bit messy to use.



Placing ".yaml" and ".json" from Gist at intended provider location.

The running "
<b>

<i>

<a href="https://gist.github.com/abhishekkr/6133012#file-use_hiera-sh" target="_blank">
use_hiera.sh
</a>

</i>

</b>
" would make you show the magic from this example on hiera.
</div>

<div style="text-align: left;">

<span style="font-family: inherit;">

<span style="font-weight: normal;">



</span>

</span>

<span style="font-family: inherit;">

<span style="font-weight: normal;">
```Gist
</span>

</span>



<div>

<script src="https://gist.github.com/abhishekkr/6133012.js">

</script>

</div>

<span style="font-family: inherit;">

<span style="font-weight: normal;">
```
</span>

</span>


[Gist-Set Using Hiera with Masterless Puppet set-up:&nbsp;
<a href="https://gist.github.com/abhishekkr/6133012">
https://gist.github.com/abhishekkr/6133012
</a>
&nbsp;]


<span style="font-family: inherit;">

<span style="background-color: white; color: #222222; line-height: 21px;">
_
</span>

</span>

</div>

<div style="text-align: left;">

<span style="font-family: inherit;">

<span style="background-color: white; color: #222222; line-height: 21px;">



</span>

</span>

</div>

<h3 style="text-align: left;">

<a href="http://docs.puppetlabs.com/guides/custom_facts.html" style="font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;" target="_blank">

<span style="font-size: 25px;">
plugin-facts
</span>

</a>

<span style="background-color: white; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
:
</span>

</h3>

<div style="text-align: left;">

<span style="font-family: inherit;">

<span style="font-weight: normal;">



</span>

<span style="font-weight: normal;">
Every system has its own set of information facter (
</span>

</span>

<a href="http://projects.puppetlabs.com/projects/facter">
http://projects.puppetlabs.com/projects/facter
</a>
)
<span style="font-family: inherit;">
&nbsp;by default made available to puppet. Puppet also enable DevOps people to set custom facter to be used in modules.

The power of these computed Facters is they can use full ruby-power to use local/remote plain/encrypted data over REST/Database/API/anyway available channel.
</span>

</div>

<div style="text-align: left;">

<span style="font-family: inherit;">
These require the power of Puppet Custom Plug-Ins (
</span>

<a href="http://docs.puppetlabs.com/guides/custom_facts.html">
http://docs.puppetlabs.com/guides/custom_facts.html
</a>
). The ruby file doing this would go at 'MODULE/lib/puppet/facter' and would get loaded by the 'pluginsync=true' in action.
</div>

<div style="text-align: left;">

<span style="font-family: inherit;">

<span style="font-weight: normal;">
Way to set a Facter in such Ruby code is just...
</span>

</span>

</div>

<blockquote class="tr_bq">
my_value = 'all ruby code to compure it'

Facter.add(mykey) do

&nbsp; setcode do

&nbsp; &nbsp; my_value

&nbsp; end

end
</blockquote>

<div>

<div style="text-align: left;">

<span style="font-family: inherit;">

<span style="font-weight: normal;">
.....all the rest of code there need to compute the value to be set, or even key-set.
</span>

</span>

</div>

<div style="text-align: left;">

<span style="font-family: inherit;">

<span style="font-weight: normal;">



</span>

</span>

</div>

<div style="text-align: left;">

<span style="font-family: inherit;">

<span style="font-weight: normal;">
[Gist-Set Externalize Data receiving as Facter:&nbsp;
</span>

</span>

<a href="https://gist.github.com/3684968">
https://gist.github.com/3684968
</a>

<span style="font-family: inherit;">
&nbsp;]
</span>

</div>

<div style="text-align: left;">

<span style="font-family: inherit;">

<span style="font-weight: normal;">



</span>

<span style="font-weight: normal;">
Same 'httpd::git' example revamped to use Custom Facter as&nbsp;
</span>

<span style="background-color: white; color: #222222; line-height: 21px;">



</span>

</span>

</div>

<div>
```


<script src="https://gist.github.com/abhishekkr/3684968.js">

</script>
```
</div>

<div style="text-align: left;">

<span style="background-color: white; color: #222222; line-height: 21px;">

<span style="font-family: inherit;">
There is also another way to provide a Facter in Puppet Catalog, that can be done by providing an Environment variable with capitalized Facter name pre-fixed by 'FACTER_' and the value which it's supposed to have.
</span>



<span style="font-family: inherit;">
For E.g.
</span>

<b style="font-family: inherit;">
#
</b>

<span style="font-family: Courier New, Courier, monospace;">
FACTER_MYKEY=$my_value puppet apply --modulepath=$MODULEPATH -e "include httpd::git"
</span>



<span style="font-family: inherit;">
_
</span>

</span>

</div>

<div style="text-align: left;">

<span style="font-family: inherit;">

<span style="background-color: white; color: #222222; line-height: 21px;">



</span>

</span>

</div>

<h3 style="text-align: left;">

<a href="http://puppetlabs.com/blog/introducing-puppetdb-put-your-data-to-work/" style="font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;" target="_blank">

<span style="font-size: 25px;">
puppetdb
</span>

</a>

<span style="background-color: white; color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif; font-size: 15px; line-height: 21px;">
:
</span>

</h3>

<div style="text-align: left;">

<span style="font-family: inherit;">



</span>

</div>

<div style="text-align: left;">
It's a beautiful addition to Puppet component set. Something that have been missing for long and possibly the thing because of which I delayed this post by half year.

It enables the 'storeconfig' power without the Master, provides a support of trusted DB for infrastructure-related data needs and thus best suited of all.



To set-up 'puppetdb' on a node follow the
<a href="http://docs.puppetlabs.com/puppetdb/latest/index.html#install-it-now" target="_blank">
PuppetLabs has a nice documentation
</a>
.
</div>

<div style="text-align: left;">

<span style="font-family: inherit;">

<span style="font-weight: normal;">
To set-up a decent example for master-less puppet mode, follow the given steps
</span>

</span>



<span style="font-family: inherit;">

<span style="font-weight: normal;">



</span>

</span>

<span style="font-family: inherit;">

<span style="font-weight: normal;">
Place the 2 '.conf' and 1 '.yaml' file in Puppet's configuration directory.
</span>

</span>



<span style="font-family: inherit;">

<span style="font-weight: normal;">
The
</span>

<b>

<i>

<a href="https://gist.github.com/abhishekkr/6114760#file-prepare_puppetdb-sh" target="_blank">
shell script
</a>

</i>

</b>

<span style="font-weight: normal;">
 would prepare the node with PuppetDB service for masterless puppet usage scenario.
</span>

</span>



<span style="font-family: inherit;">

<span style="font-weight: normal;">



</span>

</span>

<span style="font-family: inherit;">

<span style="font-weight: normal;">

<a href="https://gist.github.com/abhishekkr/6114760#file-conf_dir-puppet-conf" target="_blank">
Puppet config
</a>
 setting storeconfig to 'puppetdb' enables saving of exported resources to it. The 'reports' config their would push the puppet apply reports to the database.
</span>

</span>



<span style="font-family: inherit;">

<a href="https://gist.github.com/abhishekkr/6114760#file-conf_dir-puppetdb-conf" target="_blank">
PuppetDB config
</a>

<span style="font-weight: normal;">
 makes Puppet aware of the host and port to connect database at.
</span>

</span>



<span style="font-family: inherit;">

<span style="font-weight: normal;">
The facts setting on
<a href="https://gist.github.com/abhishekkr/6114760#file-conf_dir-routes-yaml" target="_blank">
routes.yaml
</a>
 enable PuppetDB to be used in a masterless mode.
</span>

</span>



<span style="font-family: inherit;">

<span style="font-weight: normal;">



</span>

</span>
```


<div>

<script src="https://gist.github.com/abhishekkr/6114760.js">

</script>

</div>
```


<span style="font-family: inherit;">

<span style="font-weight: normal;">



</span>

</span>

<span style="font-family: inherit;">

<span style="font-weight: normal;">
[Gist-Set Using PuppetDB with Masterless Puppet set-up:&nbsp;
</span>

</span>

<a href="https://gist.github.com/abhishekkr/6114760">
https://gist.github.com/abhishekkr/6114760
</a>
&nbsp;]


<span style="font-family: inherit;">

<span style="font-weight: normal;">



</span>

</span>

</div>

<div style="text-align: left;">

<span style="font-family: inherit;">

<span style="font-weight: normal;">
Now running anything say like...
</span>

</span>



<span style="font-family: inherit;">

<b>

<i>
puppet apply -e 'package{"vim": }'
</i>

</b>

</span>


and beautiful to that '
<b>

<i>
export resources
</i>

</b>
' would work like a charm using PuppetDB.

The puppet.conf accompanied will make reports dumped to PuppetDB as well.




</div>

<div style="text-align: left;">

<span style="font-family: inherit;">

<span style="background-color: white; color: #222222; line-height: 21px;">
_
</span>

</span>

</div>

<div style="text-align: left;">



</div>

<div style="text-align: left;">



</div>

<span style="color: #222222; font-family: Georgia, Utopia, 'Palatino Linotype', Palatino, serif;">

<span style="font-size: 15px; line-height: 21px;">
There's a
<a href="http://puppetlabs.com/blog/the-problem-with-separating-data-from-puppet-code/" target="_blank">
fine article
</a>
 on the same by
<a href="http://puppetlabs.com/blog/the-problem-with-separating-data-from-puppet-code/" target="_blank">
PuppetLabs
</a>
...
</span>

</span>

</div>

</div>


