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
`@yield(name)`はnameに対応するセクションを表示する  
<br>

**layout**  
layout内の`@yield(name)`でviewで挿入する内容の位置を指定する  
レイアウトは`@extends('レイアウトファイル名')`で指定する。  

```
@extends('foo.bar')
```

**セクションの定義**  
以下は同じ意味     
`@section('name')...@stop`  
`@section('name')...@endsection`  
`@section('name', '...')`   
<br>

以下は同じ意味  
`@section('name')...@show`   
`@section('name')...@yield('name')`  

セクションを定義しただけでは表示されない  
@yieldしないと表示されない  

`@include(name, ['key' => 123])`はパーシャルを挿入する  

```
<html>
    <head>
        <title>@yield('title')</title>
    </head>
    <body>
        @section('sidebar')
            test
        @show

        <div class="container">
            @yield('content')
        </div>
    </body>
</html>
```

```
@extends('layouts.master')

@section('title', 'Page Title')

@section('sidebar')
    // 親のテンプレートのsidebarを置き換える
    @parent
    <p>FOO BAR</p>
@endsection

@section('content')
    <p>内容</p>
@endsection
```

### 変数を表示
{% raw %}
{{  }}はHTMLエスケープする  
{{ $name }}  

エスケープしない場合は以下のようにする
{!! $name !!}

@はテンプレートエンジンによって削除される  
@{{ a }}とすると{{ a }}と表示される  

{{ $a or $b}}のような書式を使うことができる
{% endraw %}

{\!\! method_field('DELETE') \!\!}はHTTPメソッドをDELETEにする  
{\!\! csrf_field() \!\!}
<br>

### if 

```
@if ($a === 1)
    foo
@elseif ($b > 1)
    bar
@else
    baz
@endif
```

**セクションがあるか**  

```
    @hasSection('foo')
        @yield('foo')
    @else
        bar
    @endif
```

### ループ

```
@for ($i = 0; $i < 10; $i++)
    {{ $i }}
@endfor

@foreach ($users as $user)
    {{ $user->id }}
@endforeach

@forelse ($users as $user)
    {{ $user->name }}
@empty
    empty
@endforelse

@while (true)
    while
@endwhile

@foreach ($users as $user)
    @if($user->id == 1)
        @continue
    @endif

    {{$user->name}}

    @if($user->id == 5)
        @break
    @endif
@endforeach

@foreach ($users as $user)
    @continue($user->id == 1)

    {{$user->name}}

    @break($user->id == 5)
@endforeach

@each(ビュー名, コレクション, ビュー内の変数, コレクションが空のとき表示するビュー)
```
<br>

### コメント

{% raw %}
{{-- コメント --}}
{% endraw %}
<br>

### Stack
コードをグローバル数のようなものに記録する  

```
@push('scripts')
    <script src="/example.js"></script>
@endpush

<head>
    @stack('scripts')
</head>
```
<br>

### サービスを利用する
```
@inject('user', 'App\Services\UserService')

<div>
    {{ $user->get() }}.
</div>
```
<br>

### 独自関数の定義
`@datetime($value)`の定義

```
namespace App\Providers;

use Blade;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Blade::directive('datetime', function($expression) {
            return "<?php echo with{$expression}->format('m/d/Y H:i'); ?>";
        });
    }
}
```
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



















