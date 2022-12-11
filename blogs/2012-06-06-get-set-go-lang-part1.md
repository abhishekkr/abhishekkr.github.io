

> was originally posted at a deprecated blog

## *Get Set* Go Lang, part#1

<a href="http://golang.org/doc/gopher/frontpage.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;">
  <img border="0" height="100" src="http://golang.org/doc/gopher/frontpage.png" width="73" />
</a>


### What Is **Go** Lang?

> in case you just came here while curious web surfing

[Go](http://golang.org/) is an OpenSource programming platform developed by [Google](http://google.com/) (and [contributors](http://golang.org/CONTRIBUTORS)) to be expressive and efficient at the same point.

It's distributed under [BSD-style License](http://golang.org/LICENSE).

It's a concurrency favoring, statically typed, compiler-based language. Though it declares to be giving ease like dynamically typed interpreted code.

### On your mark, *Get Set* GO

*getting started with the quick boost usage*

To directly start playing with Go Lang, visit [http://play.golang.org/](http://play.golang.org/), where you can directly type/paste in your go-lang code in an online editor and run to get output.

Just a small HelluvaWorld code-piece

```
package main

import (
    "fmt"
    "time"
    "os"
    "math"
)

func main() {
    fmt.Println("Today is ", time.Now().Weekday())
    fmt.Println("env as ", os.Environ())
    fmt.Println(
        "A Pi on Ceil looks like ",
        math.Ceil(math.Pi),
        " and a Pie on Floor looks like",
        math.Floor(math.Pi),
    )
}
```

* Installing it for local &amp; full-flown development practice [http://golang.org/doc/install](http://golang.org/doc/install) would guide you getting 'go' working on your [Linux, FreeBSD](http://golang.org/doc/install#freebsd_linux), [OSX](http://golang.org/doc/install#osx) and [Windows](http://golang.org/doc/install#windows) platforms.

---

### *Rewind* before the Start Line and take your First Leap

*first useful step to starting use of Go Lang*

* quickie at **variables** and **constants**, a look at [GO's declaration style](http://golang.org/doc/articles/gos_declaration_syntax.html)

```
// var used to declare variable with type at end
var a, b, c int

// direct initialization doesn't require providing type
var x, y, z = 1, true, "yes"

// constants just require a 'const' keyword
const newconst = 10

func tellvar() {
  a, b, c = newconst + 1, newconst + 2, newconst + 3
  // inside a function, even := construct
  // could be used to assign and not use 'var'
  clang, java, ruby := "dRitchie", "jGosling", "Matz"
  fmt.Println(a, b, c, x, y, z, clang, ruby, java)
}
```

> now, you also know `//` is to comment as in C/C++ and more.

* mobilizing **functions** just an emulation of 'math' libraries 'pow' method (also a look at using `for` loop)

```
package main

import "fmt"

func pow(x int, y int) int {
  a := 1
  for i := 0; i &lt; y; i++ {
    a = a * x
  }
  return a
}

func main() {
  fmt.Println( "2 to the power of 5 is ", pow(2, 5) )
}
```

* some function parameters style, the pow above is same as `func pow(x, y int) int { ... }`

* function **returning multiple values**, dream come true of how a function can return any number of values (also use of `if` condition)

```
func plusminusX(a, b int) (int, int) {
    if a > b {
        return a+b, a-b
    }
    return a+b, b-a
}

// or could be like

func plusminusY(a, b int) (plus, minus int) {
    plus = a + b
    if a > b {
        minus = a - b
    } else {
        minus = b - a
    }
    return
}

// usage:

plus, minus := plusminusX(1, 2)
fmt.Println("Plus: ", plus, "\nMinus: ", minus)
```

#### more to go... in more to come

<ul>
<li>Home Portal:
<a href="http://golang.org/">http://golang.org/
</a>
</li>
<li>A Tour of Go:
<a href="http://tour.golang.org/#1">http://tour.golang.org/#1
</a>
</li>
<li>Google I/O 2010 Go Lang:
<a href="http://www.youtube.com/watch?v=jgVhBThJdXc&amp;feature=relmfu" target="_blank">@youtube
</a>
</li>
<li>Google I/O 2011 Writing WebApps in Go:
<a href="http://www.youtube.com/watch?v=-i0hat7pdpk&amp;feature=relmfu" target="_blank">@youtube
</a>
</li>
<li>Go Hangout with Brad &amp; Andrew:
<a href="http://www.youtube.com/watch?v=9kzoGaoVkqI" target="_blank">@youtube
</a>
</li>
<li>Mailing List:
<a href="http://groups.google.com/group/golang-nuts">http://groups.google.com/group/golang-nuts
</a>
</li>
<li>IRC Channel:
<a href="irc://irc.freenode.net/#go-nuts">irc://irc.freenode.net/#go-nuts
</a>
</li>
<li>Twitter:
<a href="http://twitter.com/go_nuts">http://twitter.com/go_nuts
</a>
</li>
<li>Blog:
<a href="http://blog.golang.org/">http://blog.golang.org/
</a>
</li>
<li>Dashboard for Go Language:
<a href="http://godashboard.appspot.com/project">http://godashboard.appspot.com/project
</a>
</li>
</ul>_________________________
</div>
</div>
</div>
</div>


</div>
