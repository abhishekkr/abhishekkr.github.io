```meta-title: DummyNet - HowTo { an open-source tool to tweak network latency and bandwidth }```
```meta-date: 2010-07-13 08:01:00```
```meta-updated: 2010-07-13 08:01:14```
```meta-comments: 6```
```meta-tags: tool network howto internet testing latency bandwidth web dummynet```


## DummyNet - HowTo; an open-source tool to tweak network latency and bandwidth

> was originally posted at deprecated blog [http://justfewtuts.blogspot.com](http://justfewtuts.blogspot.com/2010/07/dummynet-howto-open-source-tool-to.html)

Any service allowing to&nbsp; tweak Network Latency and Bandwidth as per desire for testing application&nbsp; performance at different network latency scenarios.


#### Tools/Technology Used:

* DummyNet [{Home}URL](http://info.iet.unipi.it/~luigi/dummynet/)

#### Background:

Normally the difference which comes in&nbsp; development and&nbsp; deployment environment of Web Applications, is of bandwidth and latency.

To test the applications in actual scenario, one needs to tweak the latency as per deployment scene and then use it.

There are few paid VE Technology based services like "Shunra" for this. But we required a free, open-source application, if possible for windows.

DummyNet, it's an old Italian university project started for BSD systems, recently ported for Windows also. It helps in reducing latency of NIC to desired level.


#### Execution Method:

* Install NDIS Driver

> 1. Open the configuration panel for the network card in use `right click on the icon on the SYSTRAY, or go to 'Control Panel' > 'Network' to select`
>
> 2. Click on 'Properties' &gt; 'Install' &gt; 'Service' &gt; 'Add'
>
> 3. Click on 'Driver Disk' and select 'netipfw.inf' in the folder it has been extracted to.
>
> 4. Select 'ipfw+dummynet' which should be the only service visible.
>
> 5. Click 'Accept' on the warnings for the installation of an unknown driver.

* Create a BAT-File for your Application to be run under test bandwidth and latency with following content

```
@echo off
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
```

In the script above,

> * 1000ms is latency set and can be changed to desired value, `delay x`
>
> * 500 Kbps is bandwidth set and can be changed to desired value, `bw y`
>
> * both latency and bandwidth can be used separately also as per need
>
> * either place a command running your application to be tested in place of `your_command_running_your_app`; or simple remove that line and when the command gets paused at the first pause, run your application manually.


#### Installation:

* Follow the wlak-through video on Youtube at :

<iframe width="560" height="315" src="https://www.youtube.com/embed/jP-DrxTMXDc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

* Then, to test if it gets installed properly as a network services. It has a testme.bat file showing different tests, just run it and
check statistics. I tested it on Windows XP, Vista, 7... and it worked great.

---

### Comments From Blog For Troubleshooting

<div class="full-comment-panel">
  <div class="full-comment">
    <div class="comment">
      <a href="http://www.blogger.com/profile/09733397847307378489">freebiesutopia</a>
      <span>2012-01-11T10:35:38.085Z</span>
      <div class="comment-text">
        I got the following error on windows 7 32 bit. ipfw pipe show my_socket failed 5, cannot talk to kernel module ipfw: socket<br/>
        Kindly advise.
      </div>
    </div>
    <div class="comment-reply-panel">
      <div class="comment-reply">
        <a href="http://www.blogger.com/profile/06276198262605731980">AbhishekKr a.k.a ~=ABK=~</a>
        <span>2012-02-22T18:59:25.215Z</span>
        <div class="comment-reply-text">
          I&#39;ll re-try it on my new updated 32-bit Win7 and be back with the solution ASAP, if its to do anything with the newer updates.
        </div>
      </div>
      <div class="comment-reply">
        <a href="http://www.blogger.com/profile/15451017154478943176">Andrija</a>
        <span>2012-05-14T19:27:53.792Z</span>
        <div class="comment-reply-text">
          Just start your cmd.exe using &quot;Run as administrator&quot;. In my case that solved the error message.
        </div>
      </div>
      <div class="comment-reply">
        <a href="https://www.blogger.com/profile/05515823858185345815">dimitu3</a><span>November 7, 2013 at 3:52 AM</span>
        <div class="comment-reply-text">
          Unfortunately, it doesnt work by me with "Run as administrator". I still get the error: "my_socket failed 2, cannot talk to kernel module" I use Win 7 , x64 . If someone found a solution, I will be very thankful to share it here.
        </div>
      </div>
    </div>
  </div>

  <div class="full-comment">
    <div class="comment">
      <a href="http://www.blogger.com/profile/15315712237241122972">shap</a>
      <span>2012-02-17T02:45:58.399Z</span>
      <div class="comment-text">
        Did you try this on win 7-64 bit or 32 bit? My 64 bit windows doesn;t recognise a driver after the first step.
      </div>
    </div>
    <div class="comment-reply-panel">
      <div class="comment-reply">
        <a href="http://www.blogger.com/profile/06276198262605731980">AbhishekKr a.k.a ~=ABK=~</a>
        <span>February 22, 2012 at 10:56 AM</span>
        <div class="comment-reply-text">
          I don't have a 64-bit Win7 version, can't test it out on that, though I'll try it on my 32-bit Win7.
        </div>
      </div>
    </div>
  </div>

  <div class="full-comment">
    <div class="comment">
      <a href="http://www.blogger.com/profile/07038276901262027051">Mikros Bozos</a>
      <span>2012-07-30T19:47:34.044Z</span>
      <div class="comment-text">
        Hi there, thank you for the guide.<br/>
        Question #1<br/>
        I would like to ask you if there is a way to not open the pipes right away put when it have to send something.<br/>
        <br/>
        Question #2<br/>
        Is it a great overhead to have say ... 200 pipes opened at the same time? Is there a mechanism in DummyNet to put in sleep those that are not in use?
      </div>
    </div>
  </div>

  <div class="full-comment">
    <div class="comment">
      <a href="https://www.blogger.com/profile/05518547699315433873">Hiệu Lương Minh</a>
      <span>February 19, 2014 at 7:10 PM</span>
      <div class="comment-text">
        Hi every one!<br/>
        My computer installed it.However ,there is one mistake when I run bat file :<br/>
        "ipfw is not recognized as an internal or external command"<br/>
        give me some advises :)
      </div>
    </div>
    <div class="comment-reply-panel">
      <div class="comment-reply">
        <a href=""https://www.blogger.com/profile/06281680392443406522>PhoenixBR</a>
        <span>January 4, 2016 at 3:27 PM</span>
        <div class="comment-reply-text">
          You have to put the path in the system enviroment:<br/>
          <br/>
          Press Window+PauseBreak or ControlPanel-&gt;System and Maintainance-&gt;System-&gt;Advanced system settings-&gt;enviroment variables-&gt;system variables-&gt;Path and put ;yourpath(where ipfw is), click ok and it's done! dpam.cin@gmail.com if you need help.
        </div>
      </div>
    </div>
  </div>

  <div class="full-comment">
    <div class="comment">
      <a href="https://www.blogger.com/profile/07470006731926589206">Shrestha</a>
      <span>November 1, 2018 at 6:01 AM</span>
      <div class="comment-text">
        Hiii!<br/>
        I want to use DummyNet in ubuntu 18.04. Kindly guide.
      </div>
    </div>
  </div>
</div>

---
