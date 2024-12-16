## Golang crypto, Hugo, Laravel, Drupal, Py LibArchive, Bitcoin | Tech Security News 2024, Dec 16th

@Youtube: [https://www.youtube.com/watch?v=g50iTmUQM0g](https://www.youtube.com/watch?v=g50iTmUQM0g)

<iframe width="560" height="315" src="https://www.youtube.com/embed/g50iTmUQM0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Security Reports in Golang Ecosystem

#### Go's Crypto package may allow Auth Bypass with misuse of ServerConfig's PublicKeyCallback.

* [details](https://github.com/advisories/GHSA-v778-237x-gjrc)

* In flows like SSH protocol, it was possible for an attacker to make authentication based on not owned Public Key, during concurrent calls for multiple public keys.

* It's patched in v0.31.0.

#### Hugo (Web framework) doesn't escape some template attributes

* [details](https://github.com/advisories/GHSA-c2xf-9v2r-r2rx)

* HTML attributes in Markdown to render in templates for link, image, table and youtube shortcodes were not escaped well.

* So if any user flow uses untrusted data to be rendered by any of these impacted templates they are vulnerable until upgraded to v0.139.4.


### Security Reports in PHP Ecosystem

#### Laravel pulse allows Remote Code Execution

* [details](https://github.com/advisories/GHSA-8vwh-pr89-4mw2)

* Laravel Pulse's Livewire component can be exploited to make arbitrary calls within the app.

* It requires the user to be authenticated to make Remember Queries.

* This has been patched in v1.3.1.

#### Drupal core access Bypass for resue of User's email address.

* [details](https://github.com/advisories/GHSA-7cwc-fjqm-8vh8)

* User field uniqueness check inconsistencies allowing a User to register multiple accounts reusing the same email address leading to data consistency issues.

* It's been fixed in latest release.


### Security Reports in Python Ecosystem

#### Python's libarchive allows Directory Traversal

* [details](https://github.com/advisories/GHSA-75mx-hw5q-pvx3)

* v4.2.1 and prior allow directory traversal in attempt to create files for Zipfile extraction.

* Patch is awaited.


#### D-Tale, a Panda Data Structure Visualizer allows Remote Code execution

* [details](https://github.com/advisories/GHSA-832w-fhmw-w4f4)

* With direct access to D-Tale service, remote code execution is allowed prior to v3.16.1.

* Only patch is for prior versions is limiting access to trusted users only.


### XWiki a popular OpenSource Wiki platform has released several Security Patches

* [details](https://github.com/advisories?query=type%3Areviewed+Xwiki)

* Fixing issues for Remote Code Execution, SQL Injection and Data leaks.

* So if using them, verify and apply the latest patches soon.


### Apple Security Updates for macOS Sequoia 15.2, iOS 18.2 and iPadOS 18.2

* details: [iPad/iOS](https://support.apple.com/en-us/121837), [macOS](https://support.apple.com/en-us/121839)

* A Kernel patch to fix creation of ROM mapping.

* Also system library patches to fix RCE, Sandbox Breakout, Privilege Escalation & Webkit Memory Corruption.

* There are multiple CVEs patches to fix access to private information and process memory disclosure.


### Windows Security Updates

* [details](https://msrc.microsoft.com/update-guide/vulnerability)

* MS Update Catalog provides list of patches, drivers and products for corporations to distribute over network.

* CVE-2024-49147 shows untrusted data's deserialization in Update Catalog, allowing privilege escalation on webserver.

* There are multiple updates for Microsoft Office Products.

* Like CVE-2024-49142 shows Remote Code Execution in MS Access.

* CVE-2024-49069 details RCE in MS Excel and CVE-2024-49065 for RCE in MS Office.

* Windows Defender to have Information Disclosure Vulnerability as per CVE-2024-49071.

* There is also CVE-2024-49127 for RCE in Windows LDAP.

* And CVE-2024-49132 for RCE via issues in Windows Remote Desktop Service.

* Most of these required None to Low privileges to take affect.

* By CVE-2024-49126; the Windows Local Security Authority Subsystem Service also allows RCE.

* LSASS is a service responsible verifying security policies for User Logins in Windows computer or servers.

#### Oasis Security disclosed AuthQuake Attack method for Microsoft Azure MFA

* [details](https://www.oasis.security/resources/blog/oasis-security-research-team-discovers-microsoft-azure-mfa-bypass)

* It bypasses Microsoft Azure MFA within an hour without user interaction.

* The issue was lack of Rate Limit, allowing one to make massive count of failed attempts.

#### Zero-Day NTLM Credentials leaking exploit would be officially patched by April

* [details](https://blog.0patch.com/2024/12/url-file-ntlm-hash-disclosure.html)

* ACROS Security Researchers reported Zero-Day NTLM Credentials stealing bug.

* A malicious file viewed in Windows Explorer allows attacker to grab User's NTLM credentials using it.

* It impacts multiple Windows version legacy and still receiving updates.

* Researchers can provide with Micropatches for these vulnerabilities.


### Data leak of 58000 users from Byte Federal, a US Bitcoin ATM operator

* [details](https://www.forbes.com/sites/larsdaniel/2024/12/13/58000-bitcoin-atm-users-exposed-in-byte-federal-data-breach/)

* In September 2024, an attacker exploited a known Gitlab vulnerability to access sensitive customer data including names, birth dates, contact details, social security numbers, other government identitiy numbers, photographs & crypto transaction history.


### AFRIPOL with INTERPOL, nabs 1006 suspects across 19 African countries

* [details](https://www.interpol.int/en/News-and-Events/News/2024/Major-cybercrime-operation-nets-1-006-suspects)

* More than 35,000 victims identified.

* Monetary value recovered about 43,964,537 USD.

* It was a combined effort of Afripol, Interpol, Cybersecurity firms, and 19 different African national authorities.

* From card fraud in Kenya to cyber trafficking in Cameroon, multiple cyber crime networks were dismantled.


### FBI operation caught a Texas Teen as member of Scattered Spider

* [details](https://www.darkreading.com/cyberattacks-data-breaches/texas-teen-arrested-scattered-spider-telecom-hacks)

* Scattered Spider is a hacking group that gained infamy in year 2023 for hacking Caesares Entertainment and MGM Resorts International, two large casino and gambling companies in US.

---
