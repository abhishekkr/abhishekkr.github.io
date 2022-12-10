## Kill multiple instances of a Linux service; so AWKill (kill + awk) it

> was originally posted at deprecated blog [http://justfewtuts.blogspot.com](http://justfewtuts.blogspot.com/2010/01/easily-set-up-webserver-with-standalone.html)


### aw(Kill) all instances:

It has been happening in Linux where sometimes I need to start/restart/stop any Linux service but either it don't have a `(init.d,rc.d,*)/`Service Script or simply failed even if it had then the usual thing I used to do is get Process ID of relevant App by using

```
ps aux | grep $StuckApp
```

and then kill it by

```
kill -9 $PID
```

But few days back I ran a server (w/o any service script), generating 7-10 parallel instances of it.

Now to kill it look + type all PIDs... now 'm not lazy but that real wastage of time.

So I automated it with help of AWK.

#### So here is a command/script you can use to automate it in similar cases:

* shell command:

```
ps aux | grep $StuckAppNameHere | awk '{print $2; system("kill -9 "$2"");}';
```

* to use it as a shell script save following two lines in a script:

```
echo "Killing all instances found matching for "$1
ps aux | grep $1 | awk '{print $2; system("kill -9 "$2"");}'
```

And pass the name of app to be matched and killed as parameter to it, say you saved `script as 'awKillAll.sh'`, and you have to kill all `processes matching with 'python'`.

Then use.

```
awKillAll.sh python
```

---
