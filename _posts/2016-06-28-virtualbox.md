---
layout: posts
title: VirtualBoxメモ
---
下記のようなエラーが出たらGuest Addtionsを入れなおす。

```
/sbin/mount.vboxsf: mounting failed with the error: No such device
```

自動マウントしない

```
sudo mount -t vboxsf foo /mnt/foo
```
