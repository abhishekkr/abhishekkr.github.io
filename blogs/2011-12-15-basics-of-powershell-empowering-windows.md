```meta-title: Basics of Powershell ~ empowering Windows Config/Admin Automation```
```meta-date: 2011-12-15 03:03:00```
```meta-updated: 2011-12-18 16:45:03```
```meta-comments: 0```
```meta-tags: configuration development windows administration Microsoft devops powershell operations automation tutorial examples dotnet```

> was originally posted at deprecated blog [http://.blogspot.com]()


<div class="css-full-post-content js-full-post-content">


<div dir="ltr" style="text-align: left;" trbidi="on">
<span class="Apple-style-span" style="font-family: Georgia, 'Times New Roman', serif;">
<i>Basics &nbsp;of &nbsp;
</i>
<b>MS Windows Powershell
</b>
</span>

<span class="Apple-style-span" style="font-family: Georgia, 'Times New Roman', serif;">
<b>

</b>
</span>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-6T7qdAJip5k/Tu4WcGORw5I/AAAAAAAAAyY/xsjg1S2L0f8/s1600/powershell_joke.jpg" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;">
<img border="0" height="244" src="http://4.bp.blogspot.com/-6T7qdAJip5k/Tu4WcGORw5I/AAAAAAAAAyY/xsjg1S2L0f8/s320/powershell_joke.jpg" width="320" />

</a>
</div>
<span class="Apple-style-span" style="font-family: Georgia, 'Times New Roman', serif;">
<b>
<i>Introduction
</i>
</b>
</span>
A dotNet framework based scripting language to automate the configuration/administration of Microsoft Windows machine.
Powershell is
<b>
<i> loaded with several cmdlets
</i>
</b> (special command-lets) acting as a built-in shell utilities to perform different tasks on Windows machine for performing administrative tasks.



<span class="Apple-style-span" style="font-family: Georgia, 'Times New Roman', serif;">
<b>
<i>Getting Started
</i>
</b>
</span>
Powershell's cmdlets act upon and return objects as a result of any action taken.
These can be used in combination with traditional Windows services like Registry, Net and more.

To try your hands over powershell, access it at&nbsp;
<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">
<b>'Start Menu' &gt; 'Accessories' &gt; 'Windows Powershell'
</b>
</span>;
there you'll get mainly a shell from
<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">
<b> 'Powershell'
</b>
</span>, and an interactive IDE-like shell
<span class="Apple-style-span" style="font-family: Times, 'Times New Roman', serif;">
<b>'Powershell ISE'
</b>
</span>.

Using powershell, cmdlets are the main power-source of this Powershell which are discussed briefly below.....


<i>
<b>to get a quick
</b>/Hello World/
<b> feel of Powershell, you could try on few next steps
</b>
</i>
*&nbsp;emulating a dos command
<i>&nbsp;'echo'
</i> used to print message at console,
<i>&nbsp;
</i>

<i>&nbsp; &nbsp;command:&nbsp;
</i>

<i>&nbsp; &nbsp; &nbsp;
<span class="Apple-style-span" style="font-family: 'Trebuchet MS', sans-serif;">&nbsp;
</span>
</i>
<b>
<span class="Apple-style-span" style="font-family: 'Trebuchet MS', sans-serif;">Write-Host&nbsp;"[get-help write-host] would tell about cmdlet write-host"
</span>
</b>
* emulating a dos command
<i>&nbsp;'cd'
</i>used to change current directory,
<i>&nbsp;
</i>

<i>&nbsp; &nbsp;command:&nbsp;
</i>
<span class="Apple-style-span" style="font-weight: bold;">
<span class="Apple-style-span" style="font-family: 'Trebuchet MS', sans-serif;">Set-Location C:\Temp
</span>
</span>
* emulating a dos command
<i>&nbsp;'mkdir'&nbsp;
</i>used to create directory,
<i>&nbsp;
</i>

<i>&nbsp; &nbsp;command:&nbsp;
</i>
<span class="Apple-style-span" style="font-weight: bold;">
<span class="Apple-style-span" style="font-family: 'Trebuchet MS', sans-serif;">New-Item -name "ztemp" -type directory -Force
</span>
</span>

<div>
<div>* emulating a dos command
<i> 'dir'
</i> used to list items in current directory,
<i>&nbsp;
</i>

<i>&nbsp; &nbsp;command:&nbsp;
</i>
<span class="Apple-style-span" style="font-weight: bold;">
<span class="Apple-style-span" style="font-family: 'Trebuchet MS', sans-serif;">Get-ChildItem -path C:\Temp
</span>
</span>
</div>
<div>* even the windows '
<b>dir
</b>' command can be executed and played with inside powershell.

<i>.....could get a list of cmdlets available in Powershell2.0 ~&nbsp;
<a href="http://ss64.com/ps/">http://ss64.com/ps/
</a>
</i>


<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-ytKRp2W4Mpc/Tu4Wa8lV_hI/AAAAAAAAAyQ/-l5NzRpr2mU/s1600/powershell.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;">
<img border="0" src="http://3.bp.blogspot.com/-ytKRp2W4Mpc/Tu4Wa8lV_hI/AAAAAAAAAyQ/-l5NzRpr2mU/s1600/powershell.jpg" />

</a>
</div>

<div style="text-align: left;">
<b>
<span class="Apple-style-span" style="font-family: 'Trebuchet MS', sans-serif;">[] cmdlets
</span>
</b>
</div>Command-lets have a specific name format of
<b> /'verb'-'noun'/
</b>such as 'Get-ChildItem', 'Get-Help', etc.
To know more about any
<b>'cmdlet'
</b> (like using
<i> man
</i> in linux shell), use

<i>command:
</i>
<b>
<span class="Apple-style-span" style="font-family: 'Trebuchet MS', sans-serif;">Get-Help &lt;_cmdlet_&gt; -detailed
</span>
</b>


<b>
<span class="Apple-style-span" style="font-family: 'Trebuchet MS', sans-serif;">[]
</span>
<i>A
</i>
<span class="Apple-style-span" style="font-family: 'Trebuchet MS', sans-serif;">Glimpse of
<i> system level
</i>SuperUser stuff
</span>
<i>,
</i>
</b>
<i>&nbsp;as possible on a linux shell
</i>
&nbsp;
<b>[+]
</b> to get a
<i>listing of all System Services
</i>,
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<i>command:
</i> &nbsp;
<b>
<span class="Apple-style-span" style="font-family: 'Trebuchet MS', sans-serif;">Get-Service
</span>
</b>
&nbsp;
<b>[+]
</b> to just get a listing of
<i>'Spooler'
</i> named system service, telling its 'name','status' and 'display name'
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
<i>command:
</i>&nbsp;
<span class="Apple-style-span" style="font-family: 'Trebuchet MS', sans-serif;">&nbsp;
<b>Get-Service | Where {$_.name -eq 'Spooler'}
</b>
</span>
&nbsp;
<b>[+]
</b> to get current state of
<i>'Spooler'
</i> named system service, whether its running/stopped/paused
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
<i>command:
</i>&nbsp;&nbsp;
<b>
<span class="Apple-style-span" style="font-family: 'Trebuchet MS', sans-serif;">Get-Service | Where {$_.name -eq 'Spooler'} | %{ $_.status }
</span>
</b>

<b>&nbsp; [+]
</b>to have a Powershell script, check for a system service..... start it if stopped

<blockquote class="tr_bq" style="background-color: black; color: lime;">
<span class="Apple-style-span" style="font-family: 'Trebuchet MS', sans-serif; font-size: x-small;">&nbsp;
</span>
<span class="Apple-style-span" style="font-family: 'Trebuchet MS', sans-serif;">$svc_name = "
<i>aspnet_state
</i>"

<b>&nbsp; $svc_status = Get-Service | Where {$_.name -eq $svc_name} | %{ $_.status }
</b>
&nbsp; if (-not $svc_status) {

<b>&nbsp; &nbsp; &nbsp;Write-Host "Error: $svc_name not found"
</b>
&nbsp; }

<b>&nbsp;
</b> elseif ($svc_status -eq "running"){

<b>&nbsp; &nbsp; &nbsp;Write-Host "status ok $svc_name"
</b>

<b>&nbsp;
</b> } else {

<b>&nbsp; &nbsp; &nbsp;Start-Service $svc_name
</b>
&nbsp; }
</span>
</blockquote>
<b>&nbsp; [+]&nbsp;N
</b>ow you can
<i>save the script
</i> above as any file say
<i>'start_aspnet.ps1'
</i>, but to execute it as an external script you would need the local system's Execution Policies to be unrestricted for the script.
&nbsp; &nbsp; &nbsp; &nbsp;
<b>
<i>It's not advisable to have it un-restricted all the times, so you could pass on the specific modes along-with the script you desire to be run in un-restricted mode.
</i>
</b> As below.....
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<i>cmd_prompt:&gt;
</i>
<b>
<span class="Apple-style-span" style="font-family: 'Trebuchet MS', sans-serif;">powershell -executionpolicy unrestricted -file ".\start_aspnet.ps1"
</span>
</b>
&nbsp; &nbsp; &nbsp;

<b>

</b>

<b>
<i>helpful links:
</i>
</b>

<a href="http://msdn.microsoft.com/en-us/library/windows/desktop/aa973757(v=vs.85).aspx">http://msdn.microsoft.com/en-us/library/windows/desktop/aa973757(v=vs.85).aspx
</a>

<a href="http://blogs.msdn.com/b/powershell/">http://blogs.msdn.com/b/powershell/
</a>

<a href="http://thepowershellguy.com/blogs/posh/default.aspx">http://thepowershellguy.com/blogs/posh/default.aspx
</a>

<a href="http://powershell.com/cs/">http://powershell.com/cs/
</a>

<a href="http://stackoverflow.com/questions/496234/what-tutorial-do-you-recommend-for-learning-powershell">http://stackoverflow.com/questions/496234/what-tutorial-do-you-recommend-for-learning-powershell
</a>
</div>
</div>
</div>


</div>
