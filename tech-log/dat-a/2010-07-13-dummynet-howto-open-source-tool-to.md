```meta-title: DummyNet - HowTo { an open-source tool to tweak network latency and bandwidth }```
```meta-date: 2010-07-13 08:01:00```
```meta-updated: 2010-07-13 08:01:14```
```meta-comments: 6```
```meta-tags: tool network howto internet testing latency bandwidth web dummynet```


<div class="css-full-post-content js-full-post-content">

Any service allowing to&nbsp; tweak Network Latency and Bandwidth as per desire<br />for testing application&nbsp; performance at different network latency scenarios. <br /><br /><b>Tools/Technology Used: </b><br />DummyNet <br />{Home}URL: <a href="http://info.iet.unipi.it/%7Eluigi/dummynet/">http://info.iet.unipi.it/~luigi/dummynet/</a><br /><br /><b>Background:</b><br />Normally the difference which comes in&nbsp; development and&nbsp; deployment <br />environment of Web Applications, is of bandwidth and latency. <br />To test the applications in actual scenario, one needs to tweak the latency as <br />per deployment scene and then use it. <br />There are few paid VE Technology based services like "Shunra" for this. But <br />we required a free, open-source application, if possible for windows. <br />DummyNet, it's an old Italian university project started for BSD systems, <br />recently ported for Windows also. It helps in reducing latency of NIC to <br />desired level. <br /><br /><b>Execution Method: </b><br />[] Install NDIS Driver <br />1.&nbsp; Open the configuration panel for the network card in use <br />&nbsp; {right click on the icon on the SYSTRAY, or go to 'Control <br />Panel' &gt; 'Network' to select} <br />2.&nbsp; Click on 'Properties' &gt; 'Install' &gt; 'Service' &gt; 'Add' <br />3.&nbsp; Click on 'Driver Disk' and select 'netipfw.inf' in the <br />folder it has been extracted to. <br />4.&nbsp; Select 'ipfw+dummynet' which should be the only service <br />visible. <br />5.&nbsp; Click 'Accept' on the warnings for the installation of an <br />unknown driver.<br /><br />Create a BAT-File for your Application to be run under test bandwidth &amp; <br />latency with following content <br />--------------------------------------File Content Starts&nbsp; from Next line<br /><blockquote style="font-family: &quot;Courier New&quot;,Courier,monospace;">@echo off<br />@set CYGWIN=nodosfilewarning <br />@ipfw -q flush <br />@ipfw -q pipe flush <br />@echo ################# <br />@echo ## Setting up ## <br />@echo ################# <br />ipfw pipe 3 config delay 1000ms bw 500Kbit/s mask all <br />ipfw add pipe 3 ip from any to any <br />ipfw pipe show <br /><br />@echo ""<br />@echo "Network Tweaking Done, Start Testing."<br />@echo ""<br />@echo "Press Enter when testing is done, to restore original Network Settings."<br />pause<br /><br />@echo ################# <br />@echo ## Cleaning up ## <br />@echo ################# <br />ipfw -q flush <br />ipfw -q pipe flush <br />pause</blockquote>--------------------------------------File Content Ends at Previous line<br />Here, 1000ms is latency set and can be changed to desired value <br />500 Kbps is bandwidth set and can be changed to desired value <br />'delay x' and 'bw x'; both can be used separately also as per need <br />either place a command running your application to be tested in place of <br />'your_command_running_your_app'; or simple remove that line&nbsp; <br />and when the command gets paused at the first pause, run your appl ication <br />manually. <br />&nbsp; <br /><br /><b>Installation: </b><br />Follow the wlak-through video on Youtube at :<br /><a href="http://www.youtube.com/watch?v=jP-DrxTMXDc">http://www.youtube.com/watch?v=jP-DrxTMXDc</a><br /><br />Then, to test if it gets installed properly as a network services. It has a testme.bat file showing different tests, just run it and <br />check statistics.<br /><br />I tested it on Windows XP, Vista, 7... and it worked great.

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

    I got the following error on windows 7 32 bit. ipfw pipe show my_socket failed 5, cannot talk to kernel module ipfw: socket<br />Kindly advise.

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

    Hi there, thank you for the guide.<br /><br />Question #1<br />I would like to ask you if there is a way to not open the pipes right away put when it have to send something.<br /><br />Question #2<br />Is it a great overhead to have say ... 200 pipes opened at the same time? Is there a mechanism in DummyNet to put in sleep those that are not in use?

  </div>

  <br/>

</div>

</div>