```meta-title: DummyNet - HowTo { an open-source tool to tweak network latency and bandwidth }```
```meta-date: 2010-07-13 08:01:00```
```meta-updated: 2010-07-13 08:01:14```
```meta-comments: 6```
```meta-tags: tool network howto internet testing latency bandwidth web dummynet```



<div class="css-full-post-content js-full-post-content">

Any service allowing to&nbsp; tweak Network Latency and Bandwidth as per desire
for testing application&nbsp; performance at different network latency scenarios.


<b>Tools/Technology Used:
</b>
DummyNet
{Home}URL:
<a href="http://info.iet.unipi.it/%7Eluigi/dummynet/">http://info.iet.unipi.it/~luigi/dummynet/
</a>


<b>Background:
</b>
Normally the difference which comes in&nbsp; development and&nbsp; deployment
environment of Web Applications, is of bandwidth and latency.
To test the applications in actual scenario, one needs to tweak the latency as
per deployment scene and then use it.
There are few paid VE Technology based services like "Shunra" for this. But
we required a free, open-source application, if possible for windows.
DummyNet, it's an old Italian university project started for BSD systems,
recently ported for Windows also. It helps in reducing latency of NIC to
desired level.


<b>Execution Method:
</b>
[] Install NDIS Driver
1.&nbsp; Open the configuration panel for the network card in use
&nbsp; {right click on the icon on the SYSTRAY, or go to 'Control
Panel' &gt; 'Network' to select}
2.&nbsp; Click on 'Properties' &gt; 'Install' &gt; 'Service' &gt; 'Add'
3.&nbsp; Click on 'Driver Disk' and select 'netipfw.inf' in the
folder it has been extracted to.
4.&nbsp; Select 'ipfw+dummynet' which should be the only service
visible.
5.&nbsp; Click 'Accept' on the warnings for the installation of an
unknown driver.

Create a BAT-File for your Application to be run under test bandwidth &amp;
latency with following content
--------------------------------------File Content Starts&nbsp; from Next line

<blockquote style="font-family: &quot;Courier New&quot;,Courier,monospace;">@echo off
@set CYGWIN=nodosfilewarning
@ipfw -q flush
@ipfw -q pipe flush
@echo #################
@echo ## Setting up ##
@echo #################
ipfw pipe 3 config delay 1000ms bw 500Kbit/s mask all
ipfw add pipe 3 ip from any to any
ipfw pipe show

@echo ""
@echo "Network Tweaking Done, Start Testing."
@echo ""
@echo "Press Enter when testing is done, to restore original Network Settings."
pause

@echo #################
@echo ## Cleaning up ##
@echo #################
ipfw -q flush
ipfw -q pipe flush
pause
</blockquote>--------------------------------------File Content Ends at Previous line
Here, 1000ms is latency set and can be changed to desired value
500 Kbps is bandwidth set and can be changed to desired value
'delay x' and 'bw x'; both can be used separately also as per need
either place a command running your application to be tested in place of
'your_command_running_your_app'; or simple remove that line&nbsp;
and when the command gets paused at the first pause, run your appl ication
manually.
&nbsp;


<b>Installation:
</b>
Follow the wlak-through video on Youtube at :

<a href="http://www.youtube.com/watch?v=jP-DrxTMXDc">http://www.youtube.com/watch?v=jP-DrxTMXDc
</a>

Then, to test if it gets installed properly as a network services. It has a testme.bat file showing different tests, just run it and
check statistics.

I tested it on Windows XP, Vista, 7... and it worked great.


</div>


<div class="css-full-comments-content js-full-comments-content">


<div class="css-full-comment js-full-comment">


<div class="css-comment-user-link js-comment-user-link">


<a href="http://www.blogger.com/profile/09733397847307378489">


<div class="css-comment-name js-comment-name">

    freebiesutopia


</div>


</a>


<div class="css-comment-date js-comment-date">

    2012-01-11T10:35:38.085Z


</div>


</div>


<div class="css-comment-content js-comment-content">

    I got the following error on windows 7 32 bit. ipfw pipe show my_socket failed 5, cannot talk to kernel module ipfw: socket
Kindly advise.


</div>


<br/>



</div>


<div class="css-full-comment js-full-comment">


<div class="css-comment-user-link js-comment-user-link">


<a href="http://www.blogger.com/profile/15315712237241122972">


<div class="css-comment-name js-comment-name">

    shap


</div>


</a>


<div class="css-comment-date js-comment-date">

    2012-02-17T02:45:58.399Z


</div>


</div>


<div class="css-comment-content js-comment-content">

    Did you try this on win 7-64 bit or 32 bit? My 64 bit windows doesn;t recognise a driver after the first step


</div>


<br/>



</div>


<div class="css-full-comment js-full-comment">


<div class="css-comment-user-link js-comment-user-link">


<a href="http://www.blogger.com/profile/06276198262605731980">


<div class="css-comment-name js-comment-name">

    AbhishekKr a.k.a ~=ABK=~


</div>


</a>


<div class="css-comment-date js-comment-date">

    2012-02-22T18:56:21.696Z


</div>


</div>


<div class="css-comment-content js-comment-content">

    I don&#39;t have a 64-bit Win7 version, can&#39;t test it out on that, though I&#39;ll try it on my 32-bit Win7


</div>


<br/>



</div>


<div class="css-full-comment js-full-comment">


<div class="css-comment-user-link js-comment-user-link">


<a href="http://www.blogger.com/profile/06276198262605731980">


<div class="css-comment-name js-comment-name">

    AbhishekKr a.k.a ~=ABK=~


</div>


</a>


<div class="css-comment-date js-comment-date">

    2012-02-22T18:59:25.215Z


</div>


</div>


<div class="css-comment-content js-comment-content">

    I&#39;ll re-try it on my new updated 32-bit Win7 and be back with the solution ASAP, if its to do anything with the newer updates


</div>


<br/>



</div>


<div class="css-full-comment js-full-comment">


<div class="css-comment-user-link js-comment-user-link">


<a href="http://www.blogger.com/profile/15451017154478943176">


<div class="css-comment-name js-comment-name">

    Andrija


</div>


</a>


<div class="css-comment-date js-comment-date">

    2012-05-14T19:27:53.792Z


</div>


</div>


<div class="css-comment-content js-comment-content">

    Just start your cmd.exe using &quot;Run as administrator&quot;. In my case that solved the error message.


</div>


<br/>



</div>


<div class="css-full-comment js-full-comment">


<div class="css-comment-user-link js-comment-user-link">


<a href="http://www.blogger.com/profile/07038276901262027051">


<div class="css-comment-name js-comment-name">

    Mikros Bozos


</div>


</a>


<div class="css-comment-date js-comment-date">

    2012-07-30T19:47:34.044Z


</div>


</div>


<div class="css-comment-content js-comment-content">

    Hi there, thank you for the guide.

Question #1
I would like to ask you if there is a way to not open the pipes right away put when it have to send something.

Question #2
Is it a great overhead to have say ... 200 pipes opened at the same time? Is there a mechanism in DummyNet to put in sleep those that are not in use?


</div>


<br/>



</div>


</div>
