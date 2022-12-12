> was originally posted at a deprecated blog

## MessQ: message queue for quickly trying any idea

Past some time while trying up some set-up based on Message Queue at infrastructure... needed a quick to set-up, localhost friendly, network available Message Queue service to try out ideas.

So here is Mess(age)Q(ueue). Something quickly thrown together. Would work later to get it more performance oriented, good to go with smaller projects.

@GitHub: [https://github.com/abhishekkr/messQ](https://github.com/abhishekkr/messQ)

@RubyGems: [https://rubygems.org/gems/messQ](https://rubygems.org/gems/messQ)


### A Quick Tryout

* Install `# gem install messQ --no-ri --no-rdoc`

* Start Server (starts at 0.0.0.0 on port#5566) `# messQ --start`

* Enqueue user-id & home value to the Queue `# messQ -enq $USER` or `# messQ --enqueue $HOME`

* Dequeue 2 values from Queue `# messQ -deq` or `# messq --dequeue`

* Stop Server `# messQ --stop`


### Via Code

* Install

```
# gem install messQ --no-ri --no-rdoc

## or add following to your Gemfile
gem 'messQ'

## and add require to ruby script where to use
require 'messQ'
```


* Start Server

```
MessQ.host = '127.0.0.1' # default is 0.0.0.0
MessQ.port = 8888 # default is 5566
MessQ.messQ_server
```

* Enqueue user-id & home value to the Queue, in client

```
MessQ.host = '127.0.0.1' # default is 0.0.0.0
MessQ.port = 8888 # default is 5566

MessQ::Agent.enqueue(ENV['USER'])
MessQ::Agent.enqueue(ENV['HOME'])
```

* Dequeue 2 values from Queue, in client

```
MessQ.host = '127.0.0.1' # default is 0.0.0.0
MessQ.port = 8888 # default is 5566

puts MessQ::Agent.dequeue
puts MessQ::Agent.dequeue
```


* Stop Server

```
MessQ::Server.stop
```

---
