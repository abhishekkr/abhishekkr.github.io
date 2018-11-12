```meta-title: Get Set Go Lang ~ part#1```
```meta-date: 2012-06-06 20:57:00```
```meta-updated: 2012-06-06 21:01:32```
```meta-comments: 0```
```meta-tags: go lang go-lang development go code programming google language```



<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">
<div class="separator" style="clear: both; text-align: center;">
<a href="http://golang.org/doc/gopher/frontpage.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;">
<img border="0" height="100" src="http://golang.org/doc/gopher/frontpage.png" width="73" />

</a>
</div>
<div style="text-align: right;">
<span style="font-size: large;">
<i>Get Set
</i>
<span style="font-family: Verdana, sans-serif;">
<b>
<i>GO
</i>
</b>
</span> Lang
</span>
</div>part#
<b>
<span style="font-family: 'Courier New', Courier, monospace;">1
</span>
</b>
_________________________


<b>What Is
</b>Go
<b>Lang?
</b>

<i>(in case you just came here while curious web surfing)
</i>

<i>

</i>

<a href="http://golang.org/" target="_blank">Go
</a> is an OpenSource programming platform developed by
<a href="http://google.com/" target="_blank">Google
</a> (and
<a href="http://golang.org/CONTRIBUTORS" target="_blank">contributors
</a>) to be expressive and efficient at the same point.
It's distributed under
<a href="http://golang.org/LICENSE" style="font-style: italic;" target="_blank">BSD-
<b>style
</b> License
</a>
It's a concurrency favoring, statically typed, compiler-based language. Though it declares to be giving ease like dynamically typed interpreted code.
_________________________


<b>On your mark,
</b>
<i>Get Set
<b>GO
</b>
</i>

<i>(getting started with the quick boost usage)
</i>

To directly start playing with Go Lang, visit&nbsp;
<b>
<a href="http://play.golang.org/">http://play.golang.org/
</a>,
</b>
where you can directly type/paste in your go-lang code in an online editor and run to get output.

Just a small ++HelluvaWorld code-piece

<blockquote class="tr_bq">
<span style="font-family: 'Courier New', Courier, monospace;">package main
</span>&nbsp;
</blockquote>
<blockquote class="tr_bq">
<span style="font-family: 'Courier New', Courier, monospace;"> import&nbsp;("fmt"
</span>

<span style="font-family: 'Courier New', Courier, monospace;">&nbsp; &nbsp; &nbsp; &nbsp; "time"
</span>

<span style="font-family: 'Courier New', Courier, monospace;">&nbsp; &nbsp; &nbsp; &nbsp; "os"
</span>

<span style="font-family: 'Courier New', Courier, monospace;">&nbsp; &nbsp; &nbsp; &nbsp; "math" )
</span>
</blockquote>
<blockquote class="tr_bq">
<span style="font-family: 'Courier New', Courier, monospace;"> func main() {
&nbsp; fmt.Println("Today is ", time.Now().Weekday())
&nbsp; fmt.Println("env as ",&nbsp;os.Environ())
</span>

<span style="font-family: 'Courier New', Courier, monospace;">
</span>

<span style="font-family: 'Courier New', Courier, monospace;">&nbsp; fmt.Println("A Pi on Ceil looks like ",
</span>

<span style="font-family: 'Courier New', Courier, monospace;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;math.Ceil(math.Pi),&nbsp;
</span>

<span style="font-family: 'Courier New', Courier, monospace;">
<span class="Apple-tab-span" style="white-space: pre;">
</span> &nbsp; &nbsp; &nbsp; " and a Pie on Floor looks like",&nbsp;
</span>

<span style="font-family: 'Courier New', Courier, monospace;">
<span class="Apple-tab-span" style="white-space: pre;">
</span> &nbsp; &nbsp; &nbsp; math.Floor(math.Pi))
</span>

<span style="font-family: 'Courier New', Courier, monospace;">}
</span>
</blockquote>
<b>[]
</b>
<i>Installing it for local &amp; full-flown development practice&nbsp;
</i>
<a href="http://golang.org/doc/install">http://golang.org/doc/install
</a>&nbsp;would guide you getting 'go' working on your
<a href="http://golang.org/doc/install#freebsd_linux" target="_blank">Linux, FreeBSD
</a>,
<a href="http://golang.org/doc/install#osx" target="_blank">OSX
</a> &amp;
<a href="http://golang.org/doc/install#windows" target="_blank">Win
</a> platforms.
_________________________


<b>Rewind before
</b>the
<b style="font-style: italic;">Start Line&nbsp;
</b>and take your&nbsp;
<b>First
<i>Leap
</i>
</b>

<i>(first useful step to starting use of Go Lang)
</i>


<b>[]
</b> quickie at
<b>variables
</b> and
<b>constants,&nbsp;
</b>
<i>a look at&nbsp;
<a href="http://golang.org/doc/articles/gos_declaration_syntax.html" target="_blank">GO's declaration style
</a>
</i>

<blockquote class="tr_bq">
<span style="font-family: 'Trebuchet MS', sans-serif;">
<b>  //
</b>var used to declare variable with type at end
var a, b, c int

<b>  //
</b>direct initialization doesn't require providing type
var x, y, z = 1, true, "yes"

<b>  //
</b>constants just require a 'const' keyword
const newconst = 10
func tellvar() {
  a, b, c = newconst + 1, newconst + 2, newconst + 3

<b>    //
</b>inside a function, even := construct

<b>    //
</b>could be used to assign and not use 'var'
  clang, java, ruby := "dRitchie", "jGosling", "Matz"
  fmt.Println(a, b, c, x, y, z, clang, ruby, java)
}
</span>
</blockquote>now, you also know '//' is to comment as in C/C++ and more.

<div>

<b>[]
</b>mobilizing
<b> functions
</b>
just an emulation of 'math' libraries 'pow' method (
<i>
<b>also
</b>a look at using
<b>for loop
</b>
</i>)

<blockquote class="tr_bq">
<span style="font-family: 'Courier New', Courier, monospace;">package main
</span>&nbsp;
</blockquote>
<blockquote class="tr_bq">
<span style="font-family: 'Courier New', Courier, monospace;">import "fmt"
</span>&nbsp;
</blockquote>
<blockquote class="tr_bq">
<span style="font-family: 'Courier New', Courier, monospace;">func pow(x int, y int) int {
&nbsp; a := 1
&nbsp; for i := 0; i &lt; y; i++ {
&nbsp; &nbsp; a = a * x
&nbsp; }
&nbsp; return a
}
</span>&nbsp;
</blockquote>
<blockquote class="tr_bq">
<span style="font-family: 'Courier New', Courier, monospace;">func main() {
&nbsp; fmt.Println( "2 to the power of 5 is ", pow(2, 5) )
}
</span>
</blockquote>

<b>[]
</b> some
<b> function parameters style
</b>, the pow above is same as

<blockquote class="tr_bq">
<span style="font-family: 'Courier New', Courier, monospace;">func pow(x, y int) int { ... }
</span>
</blockquote>

<b>[]
</b>function
<b> returning multiple values
</b>
dream come true of how a function can return any number of values (
<i>
<b>also
</b> use of
<b>if condition
</b>
</i>)

<blockquote class="tr_bq">
<span style="font-family: 'Courier New', Courier, monospace;">func plusminus(a, b int) (int, int) {
</span>
<span style="font-family: 'Courier New', Courier, monospace;">&nbsp;
</span>
</blockquote>
<blockquote class="tr_bq">&nbsp; &nbsp; &nbsp;
<span style="font-family: 'Courier New', Courier, monospace;">if a &gt; b {return a+b, a-b}
</span>
<span style="font-family: 'Courier New', Courier, monospace;">&nbsp;
</span>
</blockquote>
<blockquote class="tr_bq">&nbsp; &nbsp; &nbsp;
<span style="font-family: 'Courier New', Courier, monospace;">return a+b, b-a
</span>
</blockquote>
<blockquote class="tr_bq">
<span style="font-family: 'Courier New', Courier, monospace;">}
</span>
</blockquote>
<div>&nbsp; or could be like

<blockquote class="tr_bq">
<span style="font-family: 'Courier New', Courier, monospace;">func plusminus(a, b int) (plus, minus int) {
</span>
<span style="font-family: 'Courier New', Courier, monospace;">&nbsp;
</span>
</blockquote>
<blockquote class="tr_bq">&nbsp; &nbsp; &nbsp;
<span style="font-family: 'Courier New', Courier, monospace;">plus = a + b
</span>
<span style="font-family: 'Courier New', Courier, monospace;">&nbsp;
</span>
</blockquote>
<blockquote class="tr_bq">&nbsp; &nbsp;&nbsp;
<span style="font-family: 'Courier New', Courier, monospace;">if a &gt; b {
</span>
<span style="font-family: 'Courier New', Courier, monospace;">&nbsp; &nbsp;
</span>
</blockquote>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<span style="font-family: 'Courier New', Courier, monospace;">minus = a - b
</span>
<span style="font-family: 'Courier New', Courier, monospace;">&nbsp;&nbsp;
</span>

<span style="font-family: 'Courier New', Courier, monospace;">&nbsp; &nbsp; &nbsp;} else {
</span>
<span style="font-family: 'Courier New', Courier, monospace;">&nbsp; &nbsp;&nbsp;
</span>

<span style="font-family: 'Courier New', Courier, monospace;">&nbsp; &nbsp; &nbsp; &nbsp;minus = b - a
</span>
<span style="font-family: 'Courier New', Courier, monospace;">&nbsp;&nbsp;
</span>

<span style="font-family: 'Courier New', Courier, monospace;">&nbsp; &nbsp; &nbsp;}&nbsp;
</span>
<span style="font-family: 'Courier New', Courier, monospace;">&nbsp;&nbsp;
</span>

<span style="font-family: 'Courier New', Courier, monospace;">&nbsp; &nbsp; &nbsp;return
</span>

<span style="font-family: 'Courier New', Courier, monospace;">&nbsp; &nbsp;}
</span>

<span style="font-family: 'Courier New', Courier, monospace;">

</span>
</div>
<div>
<div>
<div>usage:
</div>
<blockquote class="tr_bq">
<span style="font-family: 'Courier New', Courier, monospace;">plus, minus := plusminus(1, 2)
fmt.Println("Plus: ", plus,
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "\nMinus: ", minus)
</span>
</blockquote>

<span style="font-family: Times, 'Times New Roman', serif;">
<b>[]
</b>
<i> more to go..... in more to come
</i>
</span>

<span style="font-family: Times, 'Times New Roman', serif;">

</span>

<span style="font-family: Times, 'Times New Roman', serif;">_________________________
</span>


<b>Shops
</b>to
<i style="font-weight: bold;">Go
</i>

<i>(other fine links to Go, until next part of this tutorial comes)
</i>

<ul>
<li>Home Portal:&nbsp;
<a href="http://golang.org/">http://golang.org/
</a>
</li>
<li>A Tour of Go:&nbsp;
<a href="http://tour.golang.org/#1">http://tour.golang.org/#1
</a>
</li>
<li>Google I/O 2010 Go Lang:&nbsp;
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
<li>Mailing List:&nbsp;
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
<li>Blog:&nbsp;
<a href="http://blog.golang.org/">http://blog.golang.org/
</a>
</li>
<li>Dashboard for Go Language:&nbsp;
<a href="http://godashboard.appspot.com/project">http://godashboard.appspot.com/project
</a>
</li>
</ul>_________________________
</div>
</div>
</div>
</div>


</div>
