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

### DB

seeInDatabase($table_name, $data): テーブルに該当するデータのレコードが存在するか  
<br>

### Model Factory

ある程度プロパティに値が入力されたモデルオブジェクトを返す  
`database/factories/ModelFactory.php`に記述する  
`$faker`は[Faker](https://github.com/fzaninotto/Faker)で任意の値を入力する  

```
$factory->defineAs(App\User::class, 'admin', function ($faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'password' => str_random(10),
        'remember_token' => str_random(10),
        'admin' => true,
    ];
});

// 値をオーバーライド
$user = factory(App\User::class)->make([
    'name' => 'Ken',
]);

// 1つ作成
$user = factory(App\User::class, 'admin')->make();

// 3つ作成
$users = factory(App\User::class, 'admin', 3)->make();
```

複数のモデルを`create()`するとコレクションが返る  
`each()`が利用できる  

```
$users = factory(App\User::class, 3)
    ->create()
    ->each(function($user) {
        $user->cars()->save(factory(App\Car::class)->make());
    });
```

ファクトリーでリレーションを定義する  

```
$factory->define(App\Car::class, function ($faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->paragraph,
        'user_id' => function () {
            return factory(App\User::class)->create()->id;
        },
        'user_type' => function (array $car) {
            return App\User::find($car['user_id'])->type;
        }
    ];
});
```
<br>

### モック

<br>

middlewareを無効化するには`use WithoutMiddleware;`する  
もしくは`$this->withoutMiddleware();`  

DBをテストごとにリセットするには`use DatabaseMigrations;`する  
`DatabaseMigrations`traitはテスト前に`migrate`、後に`migrate:rollback`を実行する  
























