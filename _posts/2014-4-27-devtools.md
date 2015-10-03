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
      
#### [Elementsパネル](https://developer.chrome.com/devtools/docs/shortcuts#elements-panel)   

* ←,→:選 択されている要素を開く・閉じる    
* Enter: 選択されている要素の属性を変更する   
* h: 選択されている要素のstyleにvisibility: hidden !important;を付与する    
* F2: 選択されている要素を編集する    
* Esc: 要素の編集を終了する     
* Delete: 選択している要素を削除する
* D&Dで要素を移動することができる
* Event Listeners  
handlerを右クリックでShow Function Definition   
nodeをマウスオーバーで該当要素がハイライトされる
<br/>
      
#### [Styleサイドバー](https://developer.chrome.com/devtools/docs/shortcuts#styles-sidebar) 

* Ctrl+クリック:該当するスタイルを定義している場所を表示する   
* Tab, Tab+shift:CSSのproperty,valueの移動    
* 最下部でCSSの属性を検索することができる。   
* color pickerをshift+click: 16進数とrgb表記を切り替える。 
* ↑↓ :インクリメント    
* Shift+↑, Shift+↓:10単位でインクリメント
* PgUP, PgDn:10単位でインクリメント 
* Shift+PgUP, Shift+PgDn:100単位でインクリメント 
* Alt+↑, Alt+↓:0.1単位でインクリメント
<br/>
      
#### [Sourceパネル](https://developer.chrome.com/devtools/docs/shortcuts#sources-panel) 

* Ctrl+o:ファイル名を検索  
* Ctri+Shift+o:選択しているファイル内の関数を検索    
* Ctrl+Shift+e:選択しているコードをconsoleで実行する    
* Ctrl+g:行移動   
* Ctrl+Enter:snippetの実行   
* Breakpointは画面右のBreakpointsを右クリックしてRemove all Breakpointsですべて消すことができる   
* CodeMirrorの[ショートカット](http://codemirror.net/demo/sublime.html)を利用することができる。    
* Alt+DragでVimのCtrl+vみたいに選択することができる。    
* Debug中に行番号を右クリックしてCountinue to hereを選択するとその行番号まで処理が進む。  
* 右側のXHR BreakpointsでXMLHttpRequestをbreakpointにすることができる。
* 右側のCall StackのAsyncにチェックをいれるとsetTimeout等の非同期処理のコールバック関数の登録元がCall Stackに表示される。
<br/>
   
[Debugging](https://developers.google.com/chrome-developer-tools/docs/javascript-debugging#sources-panel) 

* F8: Continue
* F10: Step over
* F11: Step into
* Shift+F11: Step out
* Ctrl+.: Call Stackの次のフレーム  
* Ctrl+,: Call Stackの前のフレーム  
<br/>
      
#### Networkパネル   
FilterにDomain:example.comでリクエストの送信先をフィルタリングすることができる   
<br/>
      
#### [Console](https://developer.chrome.com/devtools/docs/shortcuts#console)   

* $()やdocument.getElementById()などの要素を返す関数を実行した場合その戻り値はConsole上にツリー形式で表示される  
これらの関数の戻り値の要素のツリーをマウスオーバーすることで画面上の該当要素が強調される。   
右クリックReveal in Elements panelでElementsパネル内で該当要素が選択された状態で表示される。  
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
<br/>

[Workspaces](https://developer.chrome.com/devtools/docs/workspaces)   

1. Workspaces用のフォルダを用意する   
2. Sourceパネルのファイル一覧があるところで右クリックをして「Add Folder to Workspace」を選択する。
3. Sourceパネルのファイル一覧で右クリックして変更したいファイルを「Save as」でWorkspaces用のフォルダに保存する。
4. 保存したファイルをSourceパネルのファイル一覧で右クリックして「Map to File System Resource」を選択して変更したいファイルと関連づける。
5. 編集して保存する(javascriptファイルは新しい関数を定義することができない)

<br/>
[Chormeのショートカット](https://support.google.com/chrome/answer/157179?hl=ja)        
よく使いそうな機能       
Ctrl+リンクをクリック: リンクを新しいタブでバックグラウンドで開く       
Ctrl+Shift+リンクをクリック: リンクを新しいタブでバックグラウンドで開く      
Ctrl+w: タブを閉じる    
Ctrl+Shift+t: 最近閉じたタブを開く     
Ctrl+Tab: 次のタブ     
Ctrl+Shift+Tab: 前のタブ  
Ctrl+l: アドレスバーをフォーカス    
Alt+←:  戻る    
Alt+→:  進む    
Home: ページの一番上に移動       
End: ページの一番下に移動      
Space: 下にスクロール     
Shift+Space: 上にスクロール    
Ctrl+Shift+v: テキストとして貼り付け                  
<br/>
<br/>
[DevTools Digest - Chrome 35](http://www.html5rocks.com/en/tutorials/developertools/chrome-35/)   
[DevTools Digest](http://www.html5rocks.com/en/tutorials/developertools/chrome-33/)  






