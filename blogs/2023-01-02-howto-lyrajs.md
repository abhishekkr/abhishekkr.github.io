
## HowTo: LyraJS, full-text search available in Javascript/Typescript.. hence in Browser

> * the sample code shown here to use, is available in whole [here](https://github.com/abhishekkr/tutorials_as_code/blob/master/talks-articles/languages-n-runtimes/javascript/lyrajs/lyra-blog.js)

[Lyra](https://lyrajs.io) is a dependency-free full-text search engine written in TypeScript. Thus it runs wherever JavaScript can; on a server, edge devices & in brwosers. Focus on Speed. Licesned `Apache 2.0`, OpenSource.


### Test Usage, preparations

* Init a project space to try this `mkdir test-lyrajs ; cd test-lyrajs`

* install Lyra

```
$ npm install --save @lyrasearch/lyra

$ cat package.json

{
  "dependencies": {
    "@lyrasearch/lyra": "^0.3.1"
  }
}
```

* Fetching sample data from my blog list's render json

```
$ curl -LkO https://abhishekkr.github.io/datum.json
```

* check the sample data schema

```
$ cat datum.json
[
  {
    "blogTitle": "Nim project to generate custom sitemap.xml",
    "blogFile": "./blogs/2023-01-01-nim-generate-sitemap.md",
    "blogTags": "2022-01-01, howto, nim, nim-lang, sitemap, xml, generator",
    "blogDate": "31st Dec'2022, Saturday"
  },
  ....
```

> * means it's simple structure as each data node with `title`, `file`, `tags`, `date`
>
> * tags could be broken as csv, or not.. given we can check Lyra's search


### Creating a simple JS script to run locally

#### Create data with Lyra

```
import { create } from '@lyrasearch/lyra';

const blogDB = create({
  schema: {
    title: 'string',
    file: 'string',
    tags: 'string',
    date: 'string',
  }
});
```

#### Adding Data

```
const insertBlog = (b) => {
  insert(blogDB, {
    title: b['blogTitle'],
    file: b['blogFile'],
    tags: b['blogTags'],
    createdAt: b['blogDate']
  });
}

var fs = require('fs');
var bloglist = JSON.parse(fs.readFileSync('datum.json', 'utf8'));
bloglist.forEach(
  function(data, index) {
    insertBlog(data);
  }
)
```

#### Searching

* let's create a helper function to show how many search hits were received, and show first if any

```
const showBlog = (s) => {
  console.log("Hits: ", s.hits.length)
  if (s.hits.length > 0) {
    console.log("[first hit]")
    console.log(s.hits[0].document);
  }
}
```

* To search for `puppet`, `how to` and `howto`

```
const searchPuppet = search(blogDB, {
  term: "puppet",
  properties: "*",
  tolerance: 0,
});
console.log("Search: puppet");
showBlog(searchPuppet);

const searchHowTo = search(blogDB, {
  term: "how to",
  properties: ["tags"],
  tolerance: 1,
});
console.log("Search: how to");
showBlog(searchHowTo);

const searchHowto = search(blogDB, {
  term: "howto",
  properties: ["tags"],
  tolerance: 1,
});
console.log("Search: howto");
showBlog(searchHowto);
```

* Now running this all as `node sample-lyra.js` gives following output

```
Search: puppet
Hits:  5
[first hit]
{
  title: 'Puppet: a beginners concept guide (Part 1)',
  file: './blogs/2012-05-29-puppet-beginners-concept-guide-part-1.md',
  tags: '2012-05-29, puppet, devops, configuration, automation, guide, beginners, infra',
  createdAt: "29th May'2012, Tuesday"
}

Search: how to
Hits:  0

Search: howto
Hits:  10
[first hit]
{
  title: 'HowTo Github: Enable Sponsor Button',
  file: './blogs/2021-02-13-howto-github-sponsor-button.md',
  tags: '2021-02-13, howto, github, sponsor',
  createdAt: "13th Feb'2021, Saturday"
}
```

### Persistence

Lyra does have a **data persistence plug-in**, that could be used to save index in a file and load from there.

---
