---
layout: posts
title: laravelのViewメモ 
---
[Blade Templates](https://laravel.com/docs/5.2/blade)  
` resources/views`ディレクトリに配置する。  
`.blade.php`はbladeテンプレートエンジンの拡張子  

<br>
layout内の`@yield(name)`でviewで挿入する内容の位置を指定する  
`@section(name)...@endsection`でlayoutで指定した`@yield(name)`に対応するコンテンツを記述する  
`@include(name)`はパーシャルを挿入する  
helperの`view(name)`でview名を指定する  
ディレクトリは`.`  
`$errors`は`ViewErrorBag`のインスタンスですべてのビューで利用可能  

`{!! method_field('DELETE') !!}`はHTTPメソッドをDELETEにする  
