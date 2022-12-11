> was originally posted at a deprecated blog

## messQ: just a fun little project providing socket-based Queue service

<a href="http://3.bp.blogspot.com/-C1iO3WMPIMg/Tyq8BeYnYVI/AAAAAAAAAys/sPVuIuSq7HE/s1600/messQ_small.jpg" imageanchor="1" style="margin-bottom: 1em; margin-right: 1em;">
  <img border="0" height="150" src="http://3.bp.blogspot.com/-C1iO3WMPIMg/Tyq8BeYnYVI/AAAAAAAAAys/sPVuIuSq7HE/s200/messQ_small.jpg" width="200" />
</a>

> messQ is a small project started to implement and improve in the areas of message queue mechanisms.


### What it does currently?

Just a Network Service to be connect and enqueue/dequeue messages.


### What it requires?

* Ruby, terminal and your fingers :)

* Git it: `# git clone git://github.com/abhishekkr/messQ.git`

* Download: [tarball from github](https://github.com/abhishekkr/messQ/tarball/master)


### Start messQ server

* `# ruby messQ.rb`; this starts a message queue server at `port 8888`.


### Enque new message

* Open a connection at `port 8888`, then say `enq MESSAGE_TO_BE_QUEUED`.


### Deque oldest message

* Open a connection at `port 8888`, then say `deq`. It returns the dequed message.


```
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 _  _   __   ___  ___     _____
||\/|| //_  //_  //_  _  //  //  messQ v0.0.1beta
||  || \\_  __// __//   //__//\\_  simplistic socket message Q
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```

---
