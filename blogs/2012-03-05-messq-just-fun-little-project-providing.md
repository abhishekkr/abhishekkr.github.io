```meta-title: messQ ~ just a fun little project providing socket-based Queue service```
```meta-date: 2012-03-05 19:05:00```
```meta-updated: 2012-03-05 19:08:10```
```meta-comments: 0```
```meta-tags: ruby messQ queue socket message queue opensource message```



<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">
<a href="http://3.bp.blogspot.com/-C1iO3WMPIMg/Tyq8BeYnYVI/AAAAAAAAAys/sPVuIuSq7HE/s1600/messQ_small.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;">
<img border="0" height="150" src="http://3.bp.blogspot.com/-C1iO3WMPIMg/Tyq8BeYnYVI/AAAAAAAAAys/sPVuIuSq7HE/s200/messQ_small.jpg" width="200" />

</a>
<b>
<span style="font-family: Verdana, sans-serif; font-size: large;">messQ
</span>
</b>is a small project started to implement and improve in the areas of message queue mechanisms.


<b>
<i>
<span style="font-family: 'Trebuchet MS', sans-serif;">What it does currently?&nbsp;
</span>
</i>
</b>Just a Network Service to be connect and enqueue/dequeue messages.


<b>
<i>
<span style="font-family: 'Trebuchet MS', sans-serif;">What it requires?&nbsp;
</span>
</i>
</b>Ruby, terminal and your fingers :)


<i>
<b>Git it:
</b>
</i>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;$
<b>git clone&nbsp;git://github.com/abhishekkr/messQ.git
</b>

<b>
<i>Download: &nbsp;&nbsp;
</i>
</b>
<a href="https://github.com/abhishekkr/messQ/tarball/master">https://github.com/abhishekkr/messQ/tarball/master
</a>


<i>
<b>Start messQ server:
</b>
</i> &nbsp; &nbsp; &nbsp; $
<i>
</i>
<b>ruby messQ.rb
</b>
&nbsp; This starts a message queue server at &nbsp;
<i>
<span style="font-family: 'Courier New', Courier, monospace;">port 8888
</span>
</i>.


<b>
<i>Enque new message:
</i>
</b>
&nbsp; Open a connection at
<b>
<span style="font-family: 'Courier New', Courier, monospace;">port 8888
</span>
</b>, then say "
<b>
<span style="font-family: 'Courier New', Courier, monospace;">enq MESSAGE_TO_BE_QUEUED
</span>
</b>".


<b>
<i>Deque oldest message:
</i>
</b>
&nbsp; Open a connection at
<b>
<span style="font-family: 'Courier New', Courier, monospace;">port 8888
</span>
</b>, then say "
<b>
<span style="font-family: 'Courier New', Courier, monospace;">deq
</span>
</b>". It returns the dequed message.



<pre style="background-color: white; border-bottom-width: 0px; border-color: initial; border-image: initial; border-left-width: 0px; border-right-width: 0px; border-style: initial; border-top-width: 0px; color: #333333; font-family: 'Bitstream Vera Sans Mono', Courier, monospace; font: inherit; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px; text-align: -webkit-auto; white-space: pre-wrap;">+++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++

<span style="font-family: 'Courier New', Courier, monospace;"> _  _   __   ___  ___     _____
||\/|| //_  //_  //_  _  //  //  messQ v0.0.1beta
||  || \\_  __// __//   //__//\\_  simplistic socket message Q
</span>

+++++++++++++++++++++++++++++++++++++++++++++++++++++++
</pre>
<pre style="background-color: white; border-bottom-width: 0px; border-color: initial; border-image: initial; border-left-width: 0px; border-right-width: 0px; border-style: initial; border-top-width: 0px; color: #333333; font-family: 'Bitstream Vera Sans Mono', Courier, monospace; font: inherit; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px; text-align: -webkit-auto; white-space: pre-wrap;">
</pre>
<pre style="background-color: white; border-bottom-width: 0px; border-color: initial; border-image: initial; border-left-width: 0px; border-right-width: 0px; border-style: initial; border-top-width: 0px; color: #333333; font-family: 'Bitstream Vera Sans Mono', Courier, monospace; font: inherit; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px; text-align: -webkit-auto; white-space: pre-wrap;">
</pre>
</div>


</div>
