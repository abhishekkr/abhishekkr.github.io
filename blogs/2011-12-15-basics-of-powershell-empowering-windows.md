> was originally posted at a deprecated blog

## Basics of Powershell: Empowering Windows Config/Admin Automation

**Basics of MS Windows Powershell**

<a href="http://4.bp.blogspot.com/-6T7qdAJip5k/Tu4WcGORw5I/AAAAAAAAAyY/xsjg1S2L0f8/s1600/powershell_joke.jpg" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;">
  <img border="0" height="244" src="http://4.bp.blogspot.com/-6T7qdAJip5k/Tu4WcGORw5I/AAAAAAAAAyY/xsjg1S2L0f8/s320/powershell_joke.jpg" width="320" />
</a>

### Introduction

A dotNet framework based scripting language to automate the configuration/administration of Microsoft Windows machine.

Powershell is loaded with several cmdlets (special command-lets) acting as a built-in shell utilities to perform different tasks on Windows machine for performing administrative tasks.

### Getting Started

Powershell's cmdlets act upon and return objects as a result of any action taken.

These can be used in combination with traditional Windows services like Registry, Net and more.

* to try your hands over powershell, access it at `Start Menu => Accessories => Windows Powershell`

* there you'll get mainly a shell from `Powershell` or an interactive IDE-like shell `Powershell ISE`

Using powershell, cmdlets are the main power-source of this Powershell which are discussed briefly below...

### Do a quick */Hello World/* of Powershell

* emulating a dos command `echo` used to print message at console; command:

`Write-Host "[get-help write-host] would tell about cmdlet write-host"`

* emulating a dos command `cd` used to change current directory; command:

`Set-Location C:\Temp`

* emulating a dos command `mkdir` used to create directory; command:

`New-Item -name "ztemp" -type directory -Force`

* emulating a dos command `dir` used to list items in current directory; command:

`Get-ChildItem -path C:\Temp`

* even the windows `dir` command can be executed and played with inside powershell

* could get a list of cmdlets available in Powershell 2.0: [http://ss64.com/ps/](http://ss64.com/ps/)

<a href="http://3.bp.blogspot.com/-ytKRp2W4Mpc/Tu4Wa8lV_hI/AAAAAAAAAyQ/-l5NzRpr2mU/s1600/powershell.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;">
  <img border="0" src="http://3.bp.blogspot.com/-ytKRp2W4Mpc/Tu4Wa8lV_hI/AAAAAAAAAyQ/-l5NzRpr2mU/s1600/powershell.jpg" />
</a>

### cmdlets

Command-lets have a specific name format of **/'verb'-'noun'/** such as 'Get-ChildItem', 'Get-Help', etc.

To know more about any `cmdlet` (like using man in linux shell), use command:

`Get-Help &lt;_cmdlet_&gt; -detailed`


### A glimpse of system level SuperUser stuff, as possible on a linux shell

* to get a listing of all System Services; command:

`Get-Service`

* to just get a listing of `Spooler` named system service, telling its *name*,*status* and *display name*; command:

`Get-Service | Where {$_.name -eq 'Spooler'}`

* to get current state of `Spooler` named system service, whether its running/stopped/paused; command:

`Get-Service | Where {$_.name -eq 'Spooler'} | %{ $_.status }`

* to have a Powershell script, check for a system service... start it if stopped

```
$svc_name = " aspnet_state "
$svc_status = Get-Service | Where {$_.name -eq $svc_name} | %{ $_.status }

if (-not $svc_status) {
    Write-Host "Error: $svc_name not found"
} elseif ($svc_status -eq "running") {
    Write-Host "status ok $svc_name"
} else {
    Start-Service $svc_name
}
```

* Now you can save the script above as any file say `start_aspnet.ps1`, but to execute it as an external script you would need the local system's Execution Policies to be unrestricted for the script.


*It's not advisable to have it un-restricted all the times, so you could pass on the specific modes along-with the script you desire to be run in un-restricted mode.*

As below...

```
cmd_prompt:>
    powershell -executionpolicy unrestricted -file ".\start_aspnet.ps1"
```


### Helpful links:

<ul>
  <li>
    <a href="http://msdn.microsoft.com/en-us/library/windows/desktop/aa973757(v=vs.85).aspx">http://msdn.microsoft.com/en-us/library/windows/desktop/aa973757(v=vs.85).aspx</a>
  </li>
  <li>
    <a href="http://blogs.msdn.com/b/powershell/">http://blogs.msdn.com/b/powershell/</a>
  </li>
  <li>
    <a href="http://thepowershellguy.com/blogs/posh/default.aspx">http://thepowershellguy.com/blogs/posh/default.aspx</a>
  </li>
  <li>
    <a href="http://powershell.com/cs/">http://powershell.com/cs/</a>
  </li>
  <li>
    <a href="http://stackoverflow.com/questions/496234/what-tutorial-do-you-recommend-for-learning-powershell">http://stackoverflow.com/questions/496234/what-tutorial-do-you-recommend-for-learning-powershell</a>
  </li>
</ul>
