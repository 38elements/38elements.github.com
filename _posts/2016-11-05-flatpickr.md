---
layout: posts
title: Flatpickrメモ  
---
Flatpickrは他のライブラリに依存していないDateTimePickerです。  
[document](https://chmln.github.io/flatpickr/)  
[Github](https://github.com/chmln/flatpickr)  
[日本語の設定](https://github.com/chmln/flatpickr/blob/master/src/flatpickr.l10n.ja.js)  

#### コンストラクタ

```
let flatpickrs = flatpickr(selector, options);
let flatpickr = flatpickr(elem, options);
```
<br>

#### オブション [\*](https://chmln.github.io/flatpickr/#options)

optionはHTML要素のdata属性で指定することができる。  

* altInput  
ユーザに見せるため入力コントロールを設置するか。  
サーバーに送信するデータが入力されるコントールはコンストラクタで指定したHTML要素。  
それはあらかじめhiddenにする。  
使い方 [example](http://jsdo.it/38elements/flatpickr-alt-input)  

* altFormat  
altInputで生成されたHTML要素に表示される日時のフォーマット  

* altInputClass  
altInputで生成されたHTML要素に適用されるCSSクラス名  

* allowInput  
入力コントロールから手入力で日時を入力することを許可するか  

* clickOpens  
入力コントロールをクリックすると自動的にカレンダーを表示するか  

* dateFormat  
カレンダーから選択した際に入力コントロールに入力される日時のフォーマット  
使い方 [example](http://jsdo.it/38elements/flatpickr-date-format)  

* defaultDate 
入力コントロールにデフォルトで入力されている日時  
使い方 [example](http://jsdo.it/38elements/flatpickr-date-format)  

* disable  
選択不可能な日付 [\*](https://chmln.github.io/flatpickr/#disable)  

* enable  
選択可能な日付 [\*](https://chmln.github.io/flatpickr/#enable)  

* enableTime  
時刻を指定可能にするか  

* enableSeconds  
秒数を指定可能にするか  

* hourIncrement  
時間を増加させる単位  

* inline  
inlineで表示させるか  

* maxDate  
選択することができる最大の日時  

* minDate  
選択することができる最小の日時  

* minuteIncrement  
分を増加させる単位  

* nextArrow  
次の月を表示するアイコン  

* noCalendar  
カレンダーを表示しない  
時刻のみを選択する際に利用する

* onChange [\*](https://chmln.github.io/flatpickr/#event-onChange)  

* onClose [\*](https://chmln.github.io/flatpickr/#event-onClose)   

* onOpen [\*](https://chmln.github.io/flatpickr/#event-onOpen)  

* onReady [\*](https://chmln.github.io/flatpickr/#event-onReady)    

* onValueUpdate  

* onDayCreate  

* parseDate  
文字列をDateオブジェクトに変換する関数  

* prevArrow  
前の月を表示するアイコン  

* shorthandCurrentMonth  
月を短縮形で表示するか  

* static  
カレンダーがスクロールしないとき、これをtrueにするとスクロールするかもしれない  

* time_24hr  
時刻選択を24時間表記で選択するか  

* utc  
utcフォーマットにするか  

* weekNumbers  
週番号を表示するか  

* wrap  
input groupを作成する際に利用する  
[Custom elements and input groups](https://chmln.github.io/flatpickr/#example-strap)  

<br>

#### API

* changeMonth(monthNum, is_offset=true)  
月を指定した分だけ移動する  
is_offsetをfalseにすると指定した月に移動する  

* clear()  
リセットする

* close()  
カレンダーを閉じる  

* destroy()  
flatpickrインスタンスを削除  

* formatDate(formatStr, dateObj)  

* jumpToDate(date)  
指定した日時に移動  

* open()  
カレンダーを開く

* parseDate(date)  
指定した文字列をDateオブジェクトにする  

* redraw()  

* set(option, value)  

* setDate(date)  
現在選択している日時を指定する  

* toggle()  
トグル  

<br>

#### Event

* onChange  
日時を変更したとき  
function(dates, datestring, Flatpickr){}

* onOpen  
カレンダーが開いたとき  
function(dates, datestring, Flatpickr){}

* onClose  
カレンダーが閉じたとき    
function(dates, datestring, Flatpickr){}

* onReady  
カレンダーが選択可能になったとき  
function(dates, datestring, Flatpickr){}

* onValueUpdate  

* onDayCreate [\*](https://chmln.github.io/flatpickr/#event-onDayCreate)
カレンダーの日付セルが生成されたとき  
function(dates, datestring, Flatpickr, spanElem){}

<br>

#### カレンダーの年月の表示順序を変える

以下のCSSで変更することができる。

```
.flatpickr-current-month {
    display: flex;
    justify-content: center;
}

.cur-year {
    order: 1
}

.cur-month:before  {
     content: "年 "
}

.cur-month {
    order: 2
}
```

[example](http://jsdo.it/38elements/flatpickr-year-month-order)  

<hr>
[PikaDay.jsメモ](/2014/02/02/pikadayjs.html)  
[vue-flatpickr](https://github.com/jrainlau/vue-flatpickr)  
