> was originally posted at a deprecated blog

## ci-go-nfo v0.0.1: console util for ThoughtWorks' Go CI Server

<a href="http://abhishekkr.github.com/ci-go-nfo" target="_blank">
  <img border="0" src="http://4.bp.blogspot.com/-XBit_cihSts/UFoCEAy97FI/AAAAAAAAB0U/es4_QYDyS04/s1600/cigonfo.jpg" />
</a>

Just a rubygem console utility to get focussed INFO about your Go Continuous Integration pipeline easily, no more switching again to browsers.

* @[RubyGems](https://rubygems.org/gems/ci-go-nfo)

* @[Github](https://github.com/abhishekkr/ci-go-nfo)

* Installation `# gem install ci-go-nfo`

### Usage, Ci-Go-Nfo v.0.0.1

* to set-up credential config for your go-ci `# ci-go-nfo setup`

* it asks for
> * the location where you want to store your configuration file
> * the URL for your Go Server like http://my.go.server:8153
> * then username and password (create a read-only a/c for it)

* to show go-ci info of all runs `# ci-go-nfo`

* to show go-ci info of failed runs `# ci-go-nfo fail`

* to show go-ci info of passed runs `# ci-go-nfo pass`

### output example

```
# ci-go-nfo setup

Store sensitive Go Configs in file {current file: /home/myuser/.go.default}:
Enter Base URL of Go Server {like http://ip:8153}: http://my.go.server:8153
This is better to be ReadOnly account details...
Enter Log-in UserName: go_user
Password: restrictedpassword
```

```
# ci-go-nfo pass

my_pipeline -> specs -> specs
Success for run#2 at 2012-09-19T04:24:38
details at http://my.go.server:8153/go/tab/build/detail/my_pipeline/10/specs/2/specs

my_pipeline -> package -> gemify
Success for run#1 at 2012-09-19T07:04:39
details at http://my.go.server:8153/go/tab/build/detail/my_pipeline/10/package/1/gemify
```

```
# ci-go-nfo fail

your_pipeline -> smoke -> cukes
Failure for run#5 at 2012-09-19T04:24:38
details at http://my.go.server:8153/go/tab/build/detail/your_pipeline/7/smoke/5/cukes
```

```
# ci-go-nfo

my_pipeline -> specs -> specs
Success for run#2 at 2012-09-19T04:24:38
details at http://my.go.server:8153/go/tab/build/detail/my_pipeline/10/specs/2/specs

my_pipeline -> package -> gemify
Success for run#1 at 2012-09-19T07:04:39
details at http://my.go.server:8153/go/tab/build/detail/my_pipeline/10/package/1/gemify

your_pipeline -> smoke -> cukes
Failure for run#5 at 2012-09-19T04:24:38
details at http://my.go.server:8153/go/tab/build/detail/your_pipeline/7/smoke/5/cukes
```

---
