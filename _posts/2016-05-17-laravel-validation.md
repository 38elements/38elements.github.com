---
layout: posts
title: LaravelのValidationメモ 
---
[Document](https://laravel.com/docs/5.2/validation)  
[指定できる条件の一覧](https://laravel.com/docs/5.2/validation#available-validation-rules)  
<br>

### 使い方

連想配列のネストは`.`  

```
public function user(Request $request)
{
    $this->validate($request, [
        'id' => 'required|integer',
        'data.name' => 'required|alpha_num|max:255',
        'data.*.title' => 'required|alpha_num|max:255',
    ]);
}
```

エラーになった場合は前のページにリダイレクトされる  
$errorsと入力されたデータがflashに入る  

`bail`をつけると最初のバリデーションエラーでバリデーションの検証が終わる  
<br>

### エラーメッセージの設定
`App\Http\Controllers`のControllerクラスの`formatValidationErrors`メソッドを変更する。  
`Illuminate\Contracts\Validation\Validator`クラスをインポートする。

```
namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;

abstract class Controller extends BaseController
{
    use DispatchesJobs, ValidatesRequests;

    protected function formatValidationErrors(Validator $validator)
    {
        return $validator->errors()->all();
    }
}
```
<br>

### XMLHttpRequest
エラーのときは422のステータスコードを返す  
<br>

### 手動でリダイレクトしてエラーと入力値を記録する

```
    public function index(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'passowrd' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect('user/login')
                        ->withErrors($validator)
                        ->withInput();
        }
    }
```
<br>

### 名前付きエラー
ひとつのページに複数のフォームがある場合エラーを表示する際にどのフォームのバリデーションエラーかを判断するために名前をつける

```
return redirect('register')
    ->withErrors($validator, 'login');
```

{% raw %}
{{ $errors->login->first('email') }}
{% endraw %}
<br>

### フック
バリデーションを実行した後に実行する関数を登録することができる。  

```
$validator = Validator::make(...);

$validator->after(function($validator) {
    if ($this->somethingElseIsInvalid()) {
        //
    }
});

if ($validator->fails()) {
    //
}
```
<br>

### Form Request Validation
複雑なリクエストはフォームリクエストバリデーションを利用するとよい  
以下のコマンドで`app/Http/Requests`ディレクトリに生成する  

```
php artisan make:request FooRequest
```

**使い方**  
パラメータの型に指定する  

```
public function index(FooRequest $request)
{
    //
}
```

`rules()`メソッドではルールを定義する  
`authorize()`は権限をチェックする。エラーなら403  
`$this->route(param_name)`で値をとるとこができる  

<br>

### $errorsのカスタマイズ
`App\Http\Requests\Request`の`formatErrors`をオーバーライドする  
`Illuminate\Contracts\Validation\Validator`をインポートする  

```
protected function formatErrors(Validator $validator)
{
    return $validator->errors()->all();
}
```
<br>

### カスタムエラーメッセージの設定
`messages()`をオーバーライドする  
属性とルールとその対応するメッセージを返す  

```
public function messages()
{
    return [
        'id.required' => '...',
        'password.required'  => '...',
    ];
}
```

`Validator::make()`の第3引数にも上記の形式のデータを渡すことで設定することができる。   
`:attribute`はフィールド名が入る   

```
$messages = [
    'between' => 'The :attribute must be between :min - :max.',,
];
```
<br>

### uniqueのルール

unique:table,column,except,idColumn

```
// ユーザテーブルのemailカラムがユニーク
'email' => 'unique:users,email'

// プライマリーキーが$user->idのemailとの重複を許可
'email' => 'unique:users,email,'.$user->id

// user_idが$user->idのemailとの重複を許可
'email' => 'unique:users,email,'.$user->id.',user_id'

// foo_idが1のときのみチェック
'email' => 'unique:users,email_address,NULL,id,foo_id,1'
```
<br>

### 条件付でバリデーションを追加する
`sometimes`を使用する  

キーが存在しているか

```
$validate = Validator::make($data, [
    'email' => 'sometimes|required|email',
]);
```

述語を使って条件を指定する

```
// buyが1のときのみitem_nameの入力を必須にする
$validate->sometimes('item_name', 'required|max:500', function($input) {
    return $user->buy == 1;
});
```
<br>

### ルールの追加
















































































