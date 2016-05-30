---
layout: posts
title: Laravelのテストメモ 
---
[Document](https://laravel.com/docs/master/testing)  

```
./vendor/bin/phpunit tests/
```

DBをテストごとにリセットするには`use DatabaseMigrations;`する  
`DatabaseMigrations`traitはテスト前に`migrate`、後に`migrate:rollback`を実行する  
