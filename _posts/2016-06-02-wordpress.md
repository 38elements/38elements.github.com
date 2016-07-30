---
layout: posts
title: WordPressメモ
---

```
sudo apt-get install php-fpm
```

/etc/php/7.0/fpm/php-fpm.conf   

```
events.mechanism = epoll
```

/etc/php/7.0/fpm/pool.d/www.conf 

```
user = nginx
group = nginx

listen = /var/run/php7.0-fpm.sock
listen.owner = nginx 
listen.group = nginx 
listen.mode = 0660
```

<br>

### Nginx

動作に必要な最小限の設定をするには下記の4つを記述する必要がある  

* [Main (generic) startup file](https://codex.wordpress.org/Nginx#Main_.28generic.29_startup_file)  

* [Per Site configuration](https://codex.wordpress.org/Nginx#Per_Site_configuration)  

* [Global restrictions file](https://codex.wordpress.org/Nginx#Global_restrictions_file)  

* [General WordPress rules](https://codex.wordpress.org/Nginx#General_WordPress_rules)  
