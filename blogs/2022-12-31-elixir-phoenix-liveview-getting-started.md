
## Phoenix LiveView App: Hello Elixir App, Part.1

> about: webapp, elixir, phoenix, liveview
>
> code for this is available at @[github/my\_status](https://github.com/abhishekkr/my_status), can dive right


### What is Phoenix & Phoenix LiveView?

* **Phoenix** is a popular web framework in the realms of *Elixir* implementing MVC pattern, as *RubyOnRails* is to *Ruby* and *Django* is to *Python*. It has it's own conventions, hooks & design backed by the fire power of Elixir/Erlang ([BEAM](https://www.erlang.org/blog/a-brief-beam-primer/)).

* **Phoenix LiveView** is seamless convention available within Phoenix to allow RealTime update features for Client-Side rendering. The JS, WebSocket & ServerSide event management is abstracted and managed well, if server-side modules are written with LiveView conventions. Initial request is a HTTP request.


### Pre-requisite

* Need [Elixir](https://elixir-lang.org/install.html) to be pre-installed, [mix](https://elixir-lang.org/getting-started/mix-otp/introduction-to-mix.html) tool to be available. Also [PostgreSQL](https://www.postgresql.org/download/), [NodeJS & NPM](https://nodejs.org/en/download/).

* Fetch [Hex](https://hex.pm/) package manager & [Phoenix](https://www.phoenixframework.org/) framework.

```
mix archive.install hex phx_new
```


### Bootstrap a Phoenix LiveView Project

* Command *[mix phx.new](https://hexdocs.pm/phoenix/Mix.Tasks.Phx.New.html)* allows generating standard Phoenix app structure.

```
$ mix phx.new my_status --no-mailer --no-gettext --binary-id --database=sqlite3
```

> * Unless added `--no-live`, it by default gets LiveView support since [v1.6](https://github.com/phoenixframework/phoenix/blob/v1.6/CHANGELOG.md).
>
> * With `--no-mailer` it skips generating *Swoosh* mailer files, we ain't gonna need it. I feel comfortable adding such helpers in a custom way, even when needed. The `--no-gettext` switch skips on generating `gettext` files, save yourself on warnings unless actually need it.
>
> * With `--binary-id` uses `binary_id` as Primary Key in [Ecto/Data](https://github.com/elixir-ecto/ecto) schemas.
>
> * With `--database=sqlite3` would use SQLite3 as DB engine. As we'll build something very lightweight. Can easily use `postgres`, `mysql` or `mssql` as natively supported engine values as well. SQLite3 support was missing for some version in between due to bad Ecto compatibility of its Hex package. It's been fixed.
>
> It will ask you to press `Y` to allow installing dependencies, do so. Then at success, it will show you something like below.. run the first 3 commands.

```
We are almost there! The following steps are missing:

    $ cd my_status

Then configure your database in config/dev.exs and run:

    $ mix ecto.create

Start your Phoenix app with:

    $ mix phx.server

You can also run your app inside IEx (Interactive Elixir) as:

    $ iex -S mix phx.server
```

You should be able to check this barebone app at [http://localhost:4000](http://localhost:4000), if no errors occured.

> @[github/my\_status](https://github.com/abhishekkr/my_status) could see the current state of code and all steps to be covered here & in future tutorials
>
> available at *git commit* [8651b625e504f8e4637608716f768da2fb509999](https://github.com/abhishekkr/my_status/commit/8651b625e504f8e4637608716f768da2fb509999)

### Make it your own

> We'll evolve it to be a simple Service Real-time Status Indicator. It'll be simple stuff still using Live MVC alongwith making integrating HTTP Client calls.
>
> All following paths would be relative to your `my_status` project directory.

#### Add your flavor to interface

> * remove lines with `-` & add the ones with `+`

* at `lib/my_status_web/templates/layout/root.html.heex`

```
     <header>
       <section class="container">
         <nav>
-          <ul>
-            <li><a href="https://hexdocs.pm/phoenix/overview.html">Get Started</a></li>
             <%= if function_exported?(Routes, :live_dashboard_path, 2) do %>
               <li><%= link "LiveDashboard", to: Routes.live_dashboard_path(@conn, :home) %></li>
             <% end %>
-          </ul>
         </nav>
-        <a href="https://phoenixframework.org/" class="phx-logo">
-          <img src={Routes.static_path(@conn, "/images/phoenix.png")} alt="Phoenix Framework Logo"/>
+        <a href="/" class="phx-logo">
+          <img src={Routes.static_path(@conn, "/images/my-status.png")} alt="My Status"/>
         </a>
       </section>
     </header>
```

* at `lib/my_status_web/templates/page/index.html.heex`

```
 <section class="phx-hero">
-  <h1>Welcome to Phoenix!</h1>
-  <p>Peace of mind from prototype to production</p>
+  <h2>A Sample App.</h2>
+  <p>A service status dashboard to keep an eye on things.</p>
 </section>
 
 <section class="row">
   <article class="column">
-    <h2>Resources</h2>
+    <h2>Features</h2>
     <ul>
       <li>
-        <a href="https://hexdocs.pm/phoenix/overview.html">Guides &amp; Docs</a>
+        <a href="#">list all of My Status</a>
       </li>
       <li>
-        <a href="https://github.com/phoenixframework/phoenix">Source</a>
-      </li>
-      <li>
-        <a href="https://github.com/phoenixframework/phoenix/blob/v1.6/CHANGELOG.md">v1.6 Changelog</a>
+        <a href="#">add new service to check</a>
       </li>
     </ul>
   </article>
   <article class="column">
-    <h2>Help</h2>
+    <h2 class="red">Code-Red</h2>
     <ul>
       <li>
-        <a href="https://elixirforum.com/c/phoenix-forum">Forum</a>
-      </li>
-      <li>
-        <a href="https://web.libera.chat/#elixir">#elixir on Libera Chat (IRC)</a>
-      </li>
-      <li>
-        <a href="https://twitter.com/elixirphoenix">Twitter @elixirphoenix</a>
+        <a href="#">Fake Service #1</a>
       </li>
       <li>
-        <a href="https://elixir-slackin.herokuapp.com/">Elixir on Slack</a>
+        <a href="#">Fake Service #2</a>
       </li>
       <li>
-        <a href="https://discord.gg/elixir">Elixir on Discord</a>
+        <a href="#">Fake Service #3</a>
       </li>
     </ul>
```

* replace `priv/static/images/phoenix.png` with `priv/static/images/my-status.png`

* also update `test/my_status_web/controllers/page_controller_test.exs` to check for `A Sample Service` in homepage html; so `mix test` pass

> available at *git commit* [b42f24a2064af1d11491676d9cff74e2b932bc84](https://github.com/abhishekkr/my_status/commit/b42f24a2064af1d11491676d9cff74e2b932bc84)

> **We'll evolve onto this boilerplate LiveView App created in Part.2 for a Live Status Page.**

---
