> was originally posted at a deprecated blog

## RSS-Motor v0.0.4: a rubygem to ease up your RSS interactions

> started a new rubygem project ['rss-motor'](http://rubygems.org/gems/rss-motor)
>
> to aid all RSS consuming code by providing the entire (or filtered as per choice) of feeds as Array of Hash values per Feed Item.

```
===============================================
 ||}}  //\  //\ _ ||\/|| ||@|| ~++~ ||@|| ||))
 ||\\ _\\  _\\    ||  || ||_||  ||  ||_|| ||\\
===============================================
```


I tried it in a new project ['rss-fanatic' at github](https://github.com/abhishekkr/rss-fanatic), making it to help out RSS Feed fanatics collecting required content without pain of browsing/saving/downloading.

Though [RSS-Fanatic](https://github.com/abhishekkr/rss-fanatic) project is just started and shall be usable in some time soon.

Here is just a mini HowTo easily power you code with **rss-motor**:

* First, obviously you'll need to install the gem `gem install rss-motor`

* or if luckily you already have a Gemfile usage, add following lines to it

```
source "http://rubygems.org"

gem 'rss-motor'
```

### Now, currently available engines from the rss-motor

* simple way of getting all the items as array of key=value

```
Rss::Motor.rss_items('http://news.ycombinator.com/rss')
```

* get an array of items filtered by one or more keywords

```
Rss::Motor.rss_grep('http://news.ycombinator.com/rss', ['ruby', 'android'])
```

* to filter even the data of content available at &gt;link/&lt; field present in item plus normal filter

```
Rss::Motor.rss_grep_link('http://news.ycombinator.com/rss', ['ruby', 'android'])
```

> now go on, ride your own rss-bikes.....

---
