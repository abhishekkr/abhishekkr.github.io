
## Redis Guide, Part.1: Fundamentals, Pub-Sub Code Example

> *Why another Redis Fundamental Guide?*
>
> Because I wanted to write some beyond funamental guides on it, and this is the first step.
> This will be succinct, so interested but unaware folks have enough pointers to get started before reading the other content to be published later.

### What is Redis?

> with [BSD license](https://redis.io/docs/about/license/) written in `ANSI C`, provides an in-memory data structure (like strings, hashes, lists, sets, hyperloglog, more) as DB, cache, message broker and streaming


### Why Redis?

* have atomic transactions, batch commands and opt in for client side caching

* provides on-dsik persistence (with periodic dump or log) with replication

* allows Functions (`EVAL` in older than Redis 7), to expose richer API with composition of Redis commands to be loaded at startup for login in Lua 5.1

* pub-sub model allowing clients to push and read coherent stream of messages

* can have notifications on datasets for operations performed on a given key

> can check more [FAQs including memory footprint here](https://redis.io/docs/getting-started/faq/#whats-the-redis-memory-footprint)


### Getting Started

#### Install

* can use [install guide](https://redis.io/docs/getting-started/installation/) to set up your own server easily on Linux, macOS or Windows

* my typical commands have been as simple as

```
## for ubuntu & based distros
sudo apt-get install redis

## for rhel, fedora & similar yum/dnf supporting dsitro
sudo dnf install redis
```

#### `redis-cli` to check and use

* can start a server for test case (if not already running as service or otherwise) with simply running `redis-server`

* this allows to test simple operations via CLI as

```
127.0.0.1:6379> INCR abc
(integer) 1
127.0.0.1:6379> GET abc
"1"
127.0.0.1:6379> DEL abc
(integer) 1
127.0.0.1:6379> GET abc
(nil)
127.0.0.1:6379> SET abc 'What Was This'
OK
127.0.0.1:6379> GET abc
"What Was This"
127.0.0.1:6379> STRLEN abc
(integer) 13
127.0.0.1:6379> LPUSH nums 1 10 100
(integer) 3
127.0.0.1:6379> LPUSH nums 1000 10000 100000
(integer) 6
127.0.0.1:6379> LPOP nums
"100000"
127.0.0.1:6379> LPOP nums
"10000"
127.0.0.1:6379> LPOP nums
"1000"
```


#### Simple Code Samples

* save following code as `redis-publish.py` to try out Redis Pub-Sub with it's python client, also make sure you the package by `pip install redis`

```
import redis
import sys


def publish(redcli, channel):
    redcli.publish(channel, "this")
    redcli.publish(channel, "is")
    redcli.publish(channel, "a")
    redcli.publish(channel, "stream")
    redcli.publish(channel, ".")
    print('done.')


def subscribe(redcli, channel):
    sub = redcli.pubsub()
    sub.subscribe(channel)
    for message in sub.listen():
        if message is not None and isinstance(message, dict):
            msg = message.get('data')
            redcli.incr(f"counter_recvd_{channel}")
            print(msg)
            if msg == '.':
                break
    print(redcli.get(f"counter_recvd_{channel}"))


if __name__ == "__main__":
    REDIS_MODE = 'pub'
    REDIS_HOST = 'localhost'
    REDIS_PORT = 6379
    channel = "test-redis"
    if len(sys.argv) >= 2:
        REDIS_MODE = sys.argv[1]
    if len(sys.argv) >= 3:
        REDIS_HOST = sys.argv[2]
    if len(sys.argv) >= 4:
        REDIS_PORT = sys.argv[3]
    redcli = redis.StrictRedis(
                REDIS_HOST,
                REDIS_PORT,
                charset="utf-8",
                decode_responses=True
    )
    if REDIS_MODE == "pub":
        print("publishing:")
        publish(redcli, channel)
    elif REDIS_MODE == "sub":
        print("subscribing:")
        subscribe(redcli, channel)
```

* make sure server is running; then first run subscriber as below, else published messages will not get recieved `python redis-publish.py sub`

* then run publisher as `python redis-publish.py`


* this would show following on subscribe terminal

```
$ python redis-publish.py sub
subscribing:
1
this
is
a
stream
.
6
```

---
