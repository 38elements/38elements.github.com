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
call($method, $url, $param): 指定したリクエストを送信  

**フォーム**  
type($text, $elementName): name属性のテキストフィールドに$textを入力  
select($value, $elementName): name属性のselectに$valueを選択  
check($elementName): name属性のcheckboxをチェック  
uncheck($elementName): name属性のcheckboxをチェックしない    
attach($pathToFile, $elementName): name属性にファイルを添付   
press($buttonTextOrElementName): name属性のボタンを押す  

**JSON**  
json($method, $url, $param): 指定したリクエストを送信  
seeJson($arr): 指定したデータがレスポンスに存在する  
seeJsonEquals($arr): 指定したデータとレスポンスが一致する  
seeJsonStructure($arr): 指定した構造のレスポンスか  

**セッション**  
actingAs($user): 認証済みのユーザを設定  
withSession($arr): セッションデータを設定する  
<br>

middlewareを無効化するには`use WithoutMiddleware;`する  

DBをテストごとにリセットするには`use DatabaseMigrations;`する  
`DatabaseMigrations`traitはテスト前に`migrate`、後に`migrate:rollback`を実行する  
























