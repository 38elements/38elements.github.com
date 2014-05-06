---
layout: posts
title: DevToolsメモ 
---

[ショートカット一覧](https://developers.google.com/chrome-developer-tools/docs/shortcuts)   
新しく知ったこと       
#### すべてのパネル

* Ctrl+[, Ctrl+], Ctrl+[1-9]:パネルの移動    
* Esc: コンソールの表示・非表示     
* Ctrl+f: 現在開いているファイルやパネルを対象に検索  
* Ctrl+Shift+f: すべてのファイルを検索   
* Ctrl+o: ファイル名でファイルを検索   
<br/>
      
#### Elementsパネル   

* ←,→:選択されている要素を開く・閉じる    
* Enter:選択されている要素の属性を変更する   
* h:選択されている要素のstyleにvisibility: hidden !important;を付与する    
* F2:選択されている要素を編集する    
<br/>
      
#### Styleサイドバー 

* Ctrl+クリック:該当するスタイルを定義している場所を表示する   
* Tab, Tab+shift:CSSのproperty,valueの移動    
<br/>
      
#### Sourceパネル 

* Ctrl+o:ファイル名を検索  
* Ctri+Shift+o:選択しているファイル内の関数を検索    
* Ctrl+Shift+e:選択しているコードをconsoleで実行する    
* Ctrl+g:行移動   
* Ctrl+Enter:snippetの実行   
<br/>

[Console API Reference](https://developers.google.com/chrome-developer-tools/docs/console-api)   

* [console.log()](https://developers.google.com/chrome-developer-tools/docs/console-api#consolelogobject_object)の第1引数に%s, %d, %f, %o, %O, %cを指定することができる。   
%sは文字列   
%dはinteger     
%fはfloat     
%oはdom   
%Oはobject   
%cは第2引数のstyleを文字列に適用する   
console.log("%cfoo bar %d", "color:green; background:black; font-size: 16pt", 100);       
<br/>

[Command Line API Reference](https://developers.google.com/chrome-developer-tools/docs/commandline-api)   

* $_: 最後に評価された値  
* $0-$4: Elementsパネルでクリックした要素($0が最後にクリックした要素、$1は最後から2番目)  
* $(selector): document.querySelector()  
* $$(selector): document.querySelectorAll()  
* $x(path): XPathで要素を取得  
* clear(): 履歴をクリア  
* copy(object): オブジェクトを文字列にしてクリップボードにコピーする。  
* inspect(object): objectがdomの場合はElementsパネルが開いて該当する要素が選択される。  
* getEventListeners(object): objectに登録されているイベントハンドラを返す。 
* keys(object): objectのkeyの一覧を返す。  
* values(object): objectの値の一覧を返す。   
* monitorEvents(object[, events]): objectに指定したイベントが生じた際はログを出力する。  
* unmonitorEvents(object[, events]): 指定したイベントのログ出力を止める。   








