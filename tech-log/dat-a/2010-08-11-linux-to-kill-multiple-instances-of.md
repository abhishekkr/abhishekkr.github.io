```meta-title: [LiNUX] to kill multiple instances of a service; so AWKill (kill + awk) it```
```meta-date: 2010-08-11 11:25:00```
```meta-updated: 2010-08-11 11:31:21```
```meta-comments: 0```
```meta-tags: pid awk process linux howto kill shell script automate```



<div class="css-full-post-content js-full-post-content">


<i>
<b>aw(Kill) all instances:
</b>
</i>

it has been happening in Linux where sometimes I need to start/restart/stop any Linux service but either it don't have a
<i>(init.d,rc.d,*)/
</i>Service Script or simply failed even if it had
then the usual thing I used to do is get Process ID of relevant App by using

<blockquote>
<b>`ps aux | grep $StuckApp`&nbsp;
</b>
</blockquote>and then kill it by

<blockquote>
<b>`kill -9 $PID`
</b>
</blockquote>
but few days back I ran a server (w/o any service script), generating 7-10 parallel instances of it
now to kill it look + type all PIDs... now 'm not lazy but that real wastage of time
so I automated it with help of AWK

<i>
<b>

</b>
</i>

<i>
<b>so here is a command/script you can use to automate it in similar cases:
</b>
</i>


<b>
<i>shell command:
</i>
</b>

<blockquote>
<b style="font-family: Arial,Helvetica,sans-serif;">ps aux | grep $StuckAppNameHere | awk '{print $2; system("kill -9 "$2"");}'&nbsp;
</b>
</blockquote>

<i>
<b>to use it as a shell script save following two lines in a script:
</b>
</i>

<blockquote style="font-family: Arial,Helvetica,sans-serif;">
<b>echo "Killing all instances found matching for "$1
ps aux | grep $1 | awk '{print $2; system("kill -9 "$2"");}'
</b>
</blockquote>

and pass the name of app to be matched and killed as parameter to it
say you saved
<i>script as awKillAll.sh
</i>, and you have to kill all
<i>processes matching with 'python'
</i>
then use

<blockquote>
<b>#awKillAll.sh python
</b>
</blockquote>


</div>
