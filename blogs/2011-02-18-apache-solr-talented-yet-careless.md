
> was originally posted at deprecated blog [http://hackersmag.blogspot.com](http://hackersmag.blogspot.com/2011/02/apache-solr-talented-yet-careless.html)

## Apache Solr, a talented yet careless server

*SOLR*... what it is?

> link: [http://wiki.apache.org/solr/FAQ#What_is_Solr.3F](http://wiki.apache.org/solr/FAQ#What_is_Solr.3F)
>
> in short... it's an enterprise class search server

SOLR Security Consideration... are clearly stated at link: [http://wiki.apache.org/solr/SolrSecurity](http://wiki.apache.org/solr/SolrSecurity)


* Solr does not concern itself with security either at the document level or the communication level.


* It strongly recommends that the application server containing Solr be firewalled such that the only clients with access to Solr are your own


* Default installation of Solr allows any client with access to it to add, update, and delete documents (and of course search/read too), including access to the Solr configuration and schema files and the administrative user interface.


* Even if firewalled, it might be vulnerable to CSRF because Solr's basic behavior is to receive updates and deletes via HTTP...

> So if you restricted Solr's /update handler to accept connections from approved hosts/clients...
>
> then also approved clients can be tricked to open another page with malicious script while they are authenticated at Solr.


* Basic technique to mitigate this risk is to configure Servlet Container to server speicifc IPs or with HTTP-Authentication.

* Solr doesn't aim to for Document Level Security, recommended way is through Apache Lucene Connector Framework.

> SOLR is a very capable search server, but if you need to use it... be sure to make it unreachable.

---
