
> was originally posted at a deprecated blog

## 'derailed\_cuke', now test any website using cucumber as an independent testing utility

> [github.com/abhishekkr/abk-labs.cucumber](https://github.com/abhishekkr/abk-labs.cucumber)

<a href="http://4.bp.blogspot.com/-aS6Mmn-FXVE/TjGK_p-BWQI/AAAAAAAAAu4/Xh3A9x9-3jg/s1600/derailedCucumber_banner.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;">
  <img border="0" src="http://4.bp.blogspot.com/-aS6Mmn-FXVE/TjGK_p-BWQI/AAAAAAAAAu4/Xh3A9x9-3jg/s1600/derailedCucumber_banner.jpg" />
</a>

### What is "Cucumber"?

> BDD Testing Framework [cucumber.io/](https://cucumber.io/)

Cucumber lets software development teams *define the behavior of any application in Business Readable DSL* as plain text.
Hence serves as documentation, automated tests and development aid, All In One.

### What is "derailed\_cuke"?

> OSS at [github.com/abhishekkr/abk-labs.cucumber](https://github.com/abhishekkr/abk-labs.cucumber)

#### How To get "derailed\_cuke"?

* you could either clone the repo or download compressed project in following ways: `# git clone git://github.com/abhishekkr/abk-labs.cucumber.git`

* download As Zip file [here](https://github.com/abhishekkr/abk-labs.cucumber/zipball/master)

#### Pre-requisites for "derailed\_cuke"?

* Ruby & Bundler rubygem installed

#### How to use "derailed\_cuke"?

The downloaded project would have a directory `abk-labs.cucumber` with a directory `derailed_cuke` inside it.

* Step#1: Now all you need to do is open a terminal, change current working directory to `derailed_cukes`

* Step#2: Run `# bundle install` to install all required gems.

* Step#3: If your ruby binary file is accessible by any name other than `ruby` (i.e. say access it using `jruby`}; then edit the file `Fcuke.rb` and replace the value of variable `RUBY_BIN` in line number 2 with the name you access your Ruby Binary.

* Step#4: Now simply execute `Fcuke.rb` and by default it will check for two (already present for testing) features checking `Google.com` and `Twitter.com`

* Step#5: To add custom web-application behavioral tests ~ user will need to write the custom Cucumber Features and respective Step Definitions (as in general scenario for using Cucumber). For reference present feature and step definitions can be seen & used.


#### Where to learn cucumber?

* [http://wiki.github.com/cucumber/cucumber/tutorials-and-related-blog-posts](http://wiki.github.com/cucumber/cucumber/tutorials-and-related-blog-posts)

In current release of `derailed_cuke`, user need to know writing Cuke Features and Step Definitions.

<a href="http://2.bp.blogspot.com/-jqH6LmpgPIE/TjGQ3k0krEI/AAAAAAAAAu8/NZoCuK9PNhQ/s1600/derailedCucumber_logo.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;">
  <img border="0" height="170" src="http://2.bp.blogspot.com/-jqH6LmpgPIE/TjGQ3k0krEI/AAAAAAAAAu8/NZoCuK9PNhQ/s200/derailedCucumber_logo.jpg" width="200" />
</a>

#### Planned Goals for the Project involves

Auto-generation of basic tests by analysis of application, then major task left would be to add uncovered custom tests and tweak the generated tests (if required).

---
