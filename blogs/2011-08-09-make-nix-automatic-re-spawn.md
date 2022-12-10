> was originally posted at a deprecated blog

## Make Linux automatic re-spawn a process/service if stopped

To make your Linux system automatic re-spawn a process/service if stopped..

Write a shell script to check for presence of a service and start it if it is not running.
Then attach that shell-script to a cronjob running at frequent intervals.

Example script to check Apache HTTPD web server and start it if is not started ~

```
#!/bin/sh

pids_=`ps ax | grep /usr/sbin/httpd | grep -v grep | wc -l `

if [ $pids_ -ne 0 ]; then
  echo "Apache is running"
else
  echo "Apache was stopped. Starting..."
  apache_start_=`/etc/init.d/httpd start`
  if [ $? -eq 0 ]; then
    echo "Apache Started Successfully"
  else
    echo "Failed to start again"
    apachectl configtest
  fi
fi
```

> This simply checks for HTTPD process to be present and re-spawn the service in absence of even a single process thread.

There is a wonderful Ruby utility [bluepill](https://github.com/bluepill-rb/bluepill) to achieve the same solution in a more advanced and comfortable manner. Cover it sooooon.....

---
