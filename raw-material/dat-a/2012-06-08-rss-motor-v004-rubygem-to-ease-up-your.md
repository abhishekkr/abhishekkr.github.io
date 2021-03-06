```meta-title: rss-motor v0.0.4 ~ a rubygem to ease up your RSS interactions```
```meta-date: 2012-06-08 16:46:00```
```meta-updated: 2012-06-08 16:56:23```
```meta-comments: 0```
```meta-tags: ruby rss-motor parser rubygem rss motor gems xml rssmotor xml-motor rss```



<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">started a new rubygem project
<b>
<i>
<a href="http://rubygems.org/gems/rss-motor" target="_blank">'rss-motor'
</a>&nbsp;(
</i>
</b>
<a href="http://rubygems.org/gems/rss-motor">http://rubygems.org/gems/rss-motor
</a>
<b>
<i>)
</i>
</b>&nbsp;to aid all RSS consuming code by providing the entire (or filtered as per choice) of feeds as Array of Hash values per Feed Item.

<pre style="border-bottom-width: 0px; border-color: initial; border-image: initial; border-left-width: 0px; border-right-width: 0px; border-style: initial; border-top-width: 0px; font-family: 'Bitstream Vera Sans Mono', Courier, monospace; font-size: 17px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px; text-align: -webkit-auto; white-space: pre-wrap;">
<span style="color: #333333;">===============================================

</span>
<span style="color: #351c75;"> ||}}  //\  //\ _ ||\/|| ||@|| ~++~ ||@|| ||))
 ||\\ _\\  _\\    ||  || ||_||  ||  ||_|| ||\\
</span>
<span style="color: #333333;">
===============================================
</span>
</pre>
I tried it in a new project
<a href="https://github.com/abhishekkr/rss-fanatic" target="_blank">
<b>
<i>'rss-fanatic'
</i>
</b>
</a>&nbsp;
<b>
<i>(
</i>
</b>
<a href="https://github.com/abhishekkr/rss-fanatic">https://github.com/abhishekkr/rss-fanatic
</a>
<b>
<i>)
</i>
</b>&nbsp;making to help out RSS Feed fanatics collecting required content without pain of browsing/saving/downloading.
<i>
<span style="font-size: x-small;">Though
<a href="https://github.com/abhishekkr/rss-fanatic" target="_blank">RSS-Fanatic
</a> project is just started and shall be usable in some time soon
</span>
</i>.

<pre style="border-bottom-width: 0px; border-color: initial; border-image: initial; border-left-width: 0px; border-right-width: 0px; border-style: initial; border-top-width: 0px; color: #333333; font-family: 'Bitstream Vera Sans Mono', Courier, monospace; font-size: 17px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px; text-align: -webkit-auto; white-space: pre-wrap;">
</pre>
<pre style="border-bottom-width: 0px; border-color: initial; border-image: initial; border-left-width: 0px; border-right-width: 0px; border-style: initial; border-top-width: 0px; color: #333333; font-family: 'Bitstream Vera Sans Mono', Courier, monospace; font-size: 17px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px; text-align: -webkit-auto; white-space: pre-wrap;">
</pre>
<div>

</div>
<div>Here is just a mini HowTo easily power you code with
<b>rss-motor
</b>:
</div>
<div>

</div>
<div>
<span style="font-size: large;">
<b>First
</b>
</span>, obviously you'll need to install the gem
</div>
<blockquote class="tr_bq">$ &nbsp;
<span style="color: #cc0000; font-family: 'Courier New', Courier, monospace;">gem install rss-motor
</span>
</blockquote>
<div>or if luckily you already have a Gemfile usage, add following lines to it
</div>
<div>
<pre style="border-bottom-width: 0px; border-color: initial; border-image: initial; border-left-width: 0px; border-right-width: 0px; border-style: initial; border-top-width: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px;">
<blockquote class="tr_bq">

<span style="font-family: 'Courier New', Courier, monospace;">
<span class="n" style="border-bottom-width: 0px; border-color: initial; border-image: initial; border-left-width: 0px; border-right-width: 0px; border-style: initial; border-top-width: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px;">source
</span>
<span class="s2" style="border-bottom-width: 0px; border-color: initial; border-image: initial; border-left-width: 0px; border-right-width: 0px; border-style: initial; border-top-width: 0px; color: #dd1144; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px;">"http://rubygems.org"
</span>

<span class="n" style="border-bottom-width: 0px; border-color: initial; border-image: initial; border-left-width: 0px; border-right-width: 0px; border-style: initial; border-top-width: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px;">gem
</span>
<span class="s1" style="border-bottom-width: 0px; border-color: initial; border-image: initial; border-left-width: 0px; border-right-width: 0px; border-style: initial; border-top-width: 0px; color: #dd1144; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px;">'rss-motor'
</span>
</span>
</blockquote>

<span style="font-family: 'Times New Roman'; white-space: normal;">
<pre style="border-bottom-width: 0px; border-color: initial; border-image: initial; border-left-width: 0px; border-right-width: 0px; border-style: initial; border-top-width: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px;">
<span style="font-family: 'Times New Roman'; white-space: normal;">

</span>
</pre>
<span style="font-size: large;">
<b>Now
</b>
</span>, currently available engines from the rss-motor
</span>
</pre>
<ul style="text-align: left;">
<li>simple way of getting all the items as array of key=value

<span style="font-family: 'Courier New', Courier, monospace;">puts
<span style="color: #cc0000;">Rss::Motor.rss_items
</span> 'http://news.ycombinator.com/rss'
</span>
</li>
</ul>
<div>
<span style="font-family: 'Courier New', Courier, monospace;">

</span>
</div>
<ul style="text-align: left;">
<li>get an array of items filtered by one or more keywords

<span style="font-family: 'Courier New', Courier, monospace;">puts "#{
<span style="color: #cc0000;">Rss::Motor.rss_grep
</span> 'http://news.ycombinator.com/rss', ['ruby', 'android']}"
</span>
</li>
</ul>
<div>
<span style="font-family: 'Courier New', Courier, monospace;">

</span>
</div>
<ul style="text-align: left;">
<li>to filter even the data of content available at &gt;link/&lt; field present in item plus normal filter

<span style="font-family: 'Courier New', Courier, monospace;">puts "#{
<span style="color: #cc0000;">Rss::Motor.rss_grep_link
</span> 'http://news.ycombinator.com/rss', ['ruby', 'android']}"
</span>
</li>
</ul>
<div>
<span style="font-family: 'Courier New', Courier, monospace;">

</span>
</div>
<div style="text-align: left;">
<i>now go on, ride your own rss-bikes.....
</i>
</div>
</div>
</div>


</div>
