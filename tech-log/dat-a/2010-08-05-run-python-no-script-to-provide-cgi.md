```meta-title: run PYTHON (no-script) to provide a CGI supported HTTP Server```
```meta-date: 2010-08-05 13:34:00```
```meta-updated: 2010-08-05 13:47:24```
```meta-comments: 0```
```meta-tags: server http CGIHTTPServer howto file-sharing file python cgi-bin web script cgi```


## run PYTHON (no-script) to provide a CGI supported HTTP Server

> was originally posted at deprecated blog [http://justfewtuts.blogspot.com](http://justfewtuts.blogspot.com/2010/08/run-python-no-script-to-provide-cgi.html)

> want HTTP Server with CGI Support, just need PYTHON without any scripts

So to have CGI supported HTTP server, just by using PYTHON, you need to follow below steps

* Step1. opening shell/command-prompt

* Step2. cd (change dir) to directory you want to be root of your server

* Step3. create a directory name `cgi-bin` or `htbin`, say `mkdir cgi-bin`

* Step4. copy all your CGI-scripts to this newly created `cgi-bin` directory

* Step6. now if anyhow you changed your directory, change it back to Parent Dir of created dir `cgi-bin`

* Step7. now run this command without quotes `python -m CGIHTTPServer`

Finally, say yyippppeeeee... thanks...

> Now you have a CGI supported Simple HTTP Server running, that can be accessed at `Port 8000` of your Server's IP/Name.
>
> So you can test it by browsing in any web browser at `http://YOUR_SERVER_IP:8000/`. If you copied **ny script `time`** to cgi-bin then its accessible at `http://YOUR_SERVER_IP:8000/cgi-bin/time`.

---
