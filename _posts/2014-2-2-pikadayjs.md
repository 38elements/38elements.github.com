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
{% highlight html %}
    var picker = new Pikaday({ 
        //対象となる要素
        field: document.getElementById('datepicker'),
        //カレンダーを表示する際に起点になる要素
        trigger: document.getElementById('datepicker'),
        //fieldに指定した要素にフォーカスした際に自動的にカレンダーが表示されるか
        bound: true,
        //カレンダーが表示される位置(top right, bottom right)
        position: "bottom left",
        //出力する際のフォーマット(Moment.jsの形式)
        format: 'YYYY/MM/DD',
        //最初に表示された際に選択されている日付
        defaultDate: new Date('2012-12-12'),
        //初期化する際にdefaultDateで指定された日付を入力フォームに入力しておくか
        setDefaultDate: true,
        //カレンダーで表示する最初の曜日(0: Sunday, 1: Monday, etc)
        firstDay: 1,
        //選択することができる最小の日付
        minDate: new Date('1999-12-10'),
        //選択することができる最大の日付
        maxDate: new Date('2015-12-24'),
        //プルダウンで選択することができる日付の範囲(ex 10 or [2000, 2020])
        yearRange: [1999, 2015],
        //カレンダーの日付の表示順序を逆にするか
        isRTL: false,
        //国際化
        i18n: {
                previousMonth : '前の月',
                nextMonth     : '次の月',
                months        : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',],
                weekdays      : ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
                weekdaysShort : ['日','月','火','水','木','金','土']
        },
        //カレンダーの年の後に表示する文字列
        yearSuffix: '年',
        //年の後に月を表示するか
        showMonthAfterYear: true,
    });
{% endhighlight %}
[デモ](http://jsrun.it/38elements/headroomjs?t=1389618253932)
    
