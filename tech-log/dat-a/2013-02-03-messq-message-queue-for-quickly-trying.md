```meta-title: MessQ : message queue for quickly trying any idea```
```meta-date: 2013-02-03 14:35:00```
```meta-updated: 2013-02-03 14:35:02```
```meta-comments: 0```
```meta-tags: rubygems ruby messQ rubygem queue message queue opensource message gem```



<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">Past some time while trying up some set-up based on Message Queue at infrastructure... needed a quick to set-up, localhost friendly, network available Message Queue service to try out ideas.
So here is Mess(age)Q(ueue). Something quickly thrown together. Would work later to get it more performance oriented, good to go with smaller projects.

@GitHub: &nbsp; &nbsp; &nbsp;&nbsp;
<a href="https://github.com/abhishekkr/messQ">https://github.com/abhishekkr/messQ
</a>
@RubyGems:&nbsp;
<a href="https://rubygems.org/gems/messQ">https://rubygems.org/gems/messQ
</a>
_________________________


<span style="font-size: large;">A Quick Tryout
</span>


<b>[+]&nbsp;Install
</b>

<b>$
</b> gem install messQ --no-ri --no-rdoc

<b>[+] Start Server (starts at 0.0.0.0 on port#5566)
</b>

<div>
<b>$
</b>&nbsp;messQ --start
</div>
<div>
<b>[+] Enqueue user-id &amp; home value to the Queue
</b>
</div>
<div>
<b>$
</b>&nbsp;messQ -enq $USER
</div>
<div>
<b>$
</b> messQ --enqueue $HOME
</div>
<b>[+] Dequeue 2 values from Queue
</b>

<div>
<b>$
</b> messQ -deq
</div>
<div>
<b>$
</b> messq --dequeue
</div>
<div>
<div>
<b>[+] Stop Server
</b>
</div>
<div>
<b>$
</b> messQ --stop
</div>
<div>_________________________


<span style="font-size: large;">Via Code
</span>

<b>

</b>
<b>[+]&nbsp;Install
</b>

<b>$
</b>&nbsp;gem install messQ --no-ri --no-rdoc
or add following to your
<b>
<i>Gemfile
</i>
</b>
gem 'messQ'

<b>require 'messQ'
</b>


<b>[+] Start Server
</b>
</div>
<div>MessQ.host = '127.0.0.1' # default is 0.0.0.0
</div>
<div>MessQ.port =&nbsp;8888 # default is 5566
</div>
<div>MessQ.messQ_server

<div>

</div>
<div>
<b>[+] Enqueue user-id &amp; home value to the Queue
</b>
</div>
<div>MessQ.host = '127.0.0.1' # default is 0.0.0.0
</div>
<div>MessQ.port =&nbsp;8888 # default is 5566
</div>MessQ::Agent.enqueue(ENV['USER'])
</div>
<div>MessQ::Agent.enqueue(ENV['HOME'])


<b>[+] Dequeue 2 values from Queue
</b>

<div>MessQ.host = '127.0.0.1' # default is 0.0.0.0
</div>
<div>MessQ.port =&nbsp;8888 # default is 5566
</div>puts MessQ::Agent.dequeue
</div>
<div>puts MessQ::Agent.dequeue

<div>

</div>
<div>
<div>
<b>[+] Stop Server
</b>
</div>
<div>MessQ::Server.stop
</div>
</div>
</div>
</div>
</div>


</div>
