```meta-title: [LiNUX] to kill multiple instances of a service; so AWKill (kill + awk) it```
```meta-date: 2010-08-11 11:25:00```
```meta-updated: 2010-08-11 11:31:21```
```meta-comments: 0```
```meta-tags: pid awk process linux howto kill shell script automate```


<div class="css-full-post-content js-full-post-content">

<i><b>aw(Kill) all instances:</b></i><br /><br />it has been happening in Linux where sometimes I need to start/restart/stop any Linux service but either it don't have a <i>(init.d,rc.d,*)/</i>Service Script or simply failed even if it had<br />then the usual thing I used to do is get Process ID of relevant App by using<br /><blockquote><b>`ps aux | grep $StuckApp`&nbsp;</b></blockquote>and then kill it by<br /><blockquote><b>`kill -9 $PID`</b></blockquote><br />but few days back I ran a server (w/o any service script), generating 7-10 parallel instances of it<br />now to kill it look + type all PIDs... now 'm not lazy but that real wastage of time<br />so I automated it with help of AWK<br /><i><b><br /></b></i><br /><i><b>so here is a command/script you can use to automate it in similar cases:</b></i><br /><br /><b><i>shell command: </i></b><br /><blockquote><b style="font-family: Arial,Helvetica,sans-serif;">ps aux | grep $StuckAppNameHere | awk '{print $2; system("kill -9 "$2"");}'&nbsp; </b></blockquote><br /><i><b>to use it as a shell script save following two lines in a script:</b></i><br /><blockquote style="font-family: Arial,Helvetica,sans-serif;"><b>echo "Killing all instances found matching for "$1<br />ps aux | grep $1 | awk '{print $2; system("kill -9 "$2"");}'</b></blockquote><br /><br />and pass the name of app to be matched and killed as parameter to it<br />say you saved <i>script as awKillAll.sh</i>, and you have to kill all <i>processes matching with 'python'</i><br />then use<br /><blockquote><b>#awKillAll.sh python</b></blockquote>

</div>