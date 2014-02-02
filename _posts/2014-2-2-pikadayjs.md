---
layout: posts
title: PikaDay.jsメモ
---
[PikaDay.js](https://github.com/dbushell/Pikaday)はカレンダー機能を入力フォームに付けるためのプログラムです。     
[Moment.js](http://momentjs.com/)に依存しています。  
また、コードが読みやすいと感じました。　　
  
<br/>
基本的な使い方
{% highlight html %}
<!-- 付属のCSSファイル  -->
<link rel="stylesheet" href="pikaday.css" type="text/css" />

<!-- 対象となる要素  -->
<input type="text" id="datepicker">

<script src="moment.js"></script>
<script src="pikaday.js"></script>
<!-- 初期化  -->
<script>
    var picker = new Pikaday({ field: document.getElementById('datepicker') });
</script>
{% endhighlight %}
[デモ](http://jsrun.it/38elements/pikadayjs1?t=1391308411722)

<br/>
設定するパラメータ
{% highlight javascript %}
    var picker = new Pikaday({
        //対象となる要素
        field: document.getElementById('datepicker'),
        //カレンダーを表示する際に起点になる要素
        trigger: document.getElementById('datepicker'),
        //fieldに指定した要素にフォーカスした際に自動的にカレンダーが表示されるか
        bound: true,
        //カレンダーが表示される位置(top right, bottom right)
        positioni: "bottom left",
        //出力する際のフォーマット(Moment.jsの形式)
        format: 'YYYY/MM/DD',
        //最初に表示された際に選択されている日付
        defaultDate: new Date('2012-12-12'),
        //初期化する際にdefaultDateで指定された日付を入力フォームに入力しておくか
        setDaultDate: true,
    });
{% endhighlight %}
[デモ](http://jsrun.it/38elements/headroomjs?t=1389618253932)
    
