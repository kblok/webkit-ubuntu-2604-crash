# WebKit page crash on Ubuntu 26.04

Playwright WebKit crashes when loading `facebook.com/sharer/sharer.php` on Ubuntu 26.04.
The same script passes on Ubuntu 24.04.

## Official Playwright images

```
docker build -f Dockerfile.microsoft --build-arg DISTRO=resolute -t repro-resolute .
docker run --rm --ipc=host repro-resolute   # error: page.waitForTimeout: Page crashed

docker build -f Dockerfile.microsoft --build-arg DISTRO=noble -t repro-noble .
docker run --rm --ipc=host repro-noble      # crashed=false
```

## Plain Ubuntu images

```
docker build --build-arg UBUNTU=26.04 -t repro-2604 .
docker run --rm --ipc=host repro-2604       # error: page.waitForTimeout: Page crashed

docker build --build-arg UBUNTU=24.04 -t repro-2404 .
docker run --rm --ipc=host repro-2404       # crashed=false
```

Playwright 1.64.1 (WebKit 27.2) in all cases.
