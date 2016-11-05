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
        //日付を選択したときの処理
        onSelect: function() {alert("onSelect"); console.dir(this);},
        //カレンダーを表示したときの処理
        onOpen: function() {alert("onOpen"); console.dir(this);},
        //カレンダーを閉じたときの処理
        onClose: function() {alert("onClose"); console.dir(this);},
        //月を変更したときの処理
        onDraw: function() {alert("onDraw"); console.dir(this);},
    });
{% endhighlight %}
[デモ](http://jsrun.it/38elements/pikadayjs2?t=1391318459741)
     
<br/>
メソッド  
<dl>
    <dt>picker.toString(フォーマット)</dt>
    <dd>選択されている日付をMoment.jsのスタイルの日付フォーマットを指定して、それに沿った文字列を返す。</dd>
    <dt>picker.getDate()</dt>
    <dd>選択されている日付のDateオブジェクトを返す。</dd>
    <dt>picker.setDate(日付の文字列)</dt>
    <dd>指定した日付の文字列の日付を選択する。</dd>
    <dt>picker.getMoment()</dt>
    <dd>選択されている日付のMomentオブジェクトを取得する。</dd>
    <dt>picker.setMoment(Momentオブジェクト)</dt>
    <dd>指定したMomentオブジェクトの日付を選択する。</dd>
    <dt>picker.gotoToday()</dt>
    <dd>今日の日付をカレンダーに表示する。</dd>
    <dt>picker.gotoMonth(月)</dt>
    <dd>指定した月を表示する。（1月は0）</dd>
    <dt>picker.nextMonth(),picker.prevMonth()</dt>
    <dd>先月、翌月を表示する。</dd>
    <dt>picker.gotoYear(年)</dt>
    <dd>指定した年を表示する。</dd>
    <dt>picker.setMinDate(Dateオブジェクト), picker.setMaxDate(Dateオブジェクト) </dt>
    <dd>指定したDateオブジェクトの日付を選択可能な日付の最小、最大にする。</dd>
    <dt>picker.isVisible() </dt>
    <dd>カレンダーが表示されているか</dd>
    <dt>picker.show() </dt>
    <dd>カレンダーを表示する。</dd>
    <dt>picker.hide() </dt>
    <dd>カレンダーを非表示にする。</dd>
    <dt>picker.adjustPosition() </dt>
    <dd>カレンダーの表示する場所を調整する。</dd>
    <dt>picker.destroy()  </dt>
    <dd>カレンダーのDOMを削除する。</dd>
</dl>
<br>
<hr>
[Flatpickrメモ](/2016/11/05/flatpickr.html)  





