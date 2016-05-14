---
layout: posts
title: laravelのViewメモ 
---
### Template
[Blade Templates](https://laravel.com/docs/5.2/blade)  
`resources/views`ディレクトリに配置する。  
`.blade.php`はbladeテンプレートエンジンの拡張子  
ディレクトリは`.`  
helperの`view(name)`でview名を指定する [*](https://laravel.com/docs/5.2/views)  
データを渡す`view('name', ['user' => $user])`  
`$errors`は`ViewErrorBag`のインスタンスですべてのビューで利用可能  
<br>

**layout**  
layout内の`@yield(name)`でviewで挿入する内容の位置を指定する  
レイアウトは`@extends('レイアウトファイル名')`で指定する。  

```
@extends('foo.bar')
```

`@section(name)...@endsection`でlayoutで指定した`@yield(name)`に対応するコンテンツを記述する  
`@include(name)`はパーシャルを挿入する  


{\!\! method_field('DELETE') \!\!}はHTTPメソッドをDELETEにする  
{\!\! csrf_field() \!\!}
<br>

### データを渡す

```
return view('hoge.index', ['foo' => 'bar']);
return view('hoge.index')->with('foo', 'bar');
```

#### すべてのビューに渡すデータの定義
`AppServiceProvider`の`boot`メソッド内に記述する  

```
namespace App\Providers;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        view()->share('key', 'value');
    }
}
```
<br>

### View Composer
ビューを生成する処理の前に実行する処理を登録する。   

```
namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ComposerServiceProvider extends ServiceProvider
{
    public function boot()
    {
        // クラスベース
        view()->composer(
            // view名を複数登録
            // *はすべてのview
            ['user', 'foo'], 'App\Http\ViewComposers\UserComposer'
        );

        // 関数ベース
        view()->composer('user', function ($view) {
            //
        });
    }
}
```

```
namespace App\Http\ViewComposers;

use Illuminate\View\View;
use App\Repositories\UserRepository;

class UserComposer
{

    protected $users;

    public function __construct(UserRepository $users)
    {
        $this->users = $users;
    }

    public function compose(View $view)
    {
        $view->with('count', $this->users->count());
    }
}
```
<br>



















