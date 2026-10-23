# WebKit page crash on Ubuntu 26.04

Playwright WebKit crashes when loading `facebook.com/sharer/sharer.php` on Ubuntu 26.04.
The same script passes on Ubuntu 24.04.

```
docker build --build-arg UBUNTU=26.04 -t repro-2604 .
docker run --rm --ipc=host repro-2604   # error: page.waitForTimeout: Page crashed

docker build --build-arg UBUNTU=24.04 -t repro-2404 .
docker run --rm --ipc=host repro-2404   # crashed=false
```
