---
layout: posts
title: Laravelのテストメモ 
---
[Document](https://laravel.com/docs/master/testing)  
`tests`ディレクトリの下に記述する  

### ファイルの作成

```
php artisan make:test UserTest
```
<br>

### 実行

```
./vendor/bin/phpunit tests/
```
<br>

### 結合テスト

**遷移**  
visit($url): $urlにGETリクエストを送る    
see($text): $textがレスポンスに含まれる  
dontSee($text): $textがレスポンスに含まれない  
click($text): $textがa要素の中身であるhrefを開く    
seePageIs($url): 現在のurlが$url  

**フォーム**  
type($text, $elementName): name属性のテキストフィールドに$textを入力  
select($value, $elementName): name属性のselectに$valueを選択  
check($elementName): name属性のcheckboxをチェック  
uncheck($elementName): name属性のcheckboxをチェックしない    
attach($pathToFile, $elementName): name属性にファイルを添付   
press($buttonTextOrElementName): name属性のボタンを押す  


<br>

DBをテストごとにリセットするには`use DatabaseMigrations;`する  
`DatabaseMigrations`traitはテスト前に`migrate`、後に`migrate:rollback`を実行する  










