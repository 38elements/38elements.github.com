---
layout: posts
title: PHP_CodeSnifferメモ 
---
#### ルールを無効にする
ルールを無効にしたいときはルールを無効にしたルールセット(ruleset.xml)を作成する。  
`PSR2`を基にした`Foo`というルールを作成する例  

以下のファイルを作成する。

```
php_codesniffer/CodeSniffer/Standards/Foo/ruleset.xml
```

`ruleset.xml`の内容  
無効にしたいクラスを以下のように変換して`exclude`要素の`name`属性に指定する。  
\<ルールセット名\>.\<種類\>.\<ファイル名\>　　

```
PSR1_Sniffs_Classes_ClassDeclarationSniff => PSR1.Classes.ClassDeclaration
```

```xml
<?xml version="1.0"?>
<ruleset name="Foo">
    <description></description>
    <rule ref="PSR2">
        <exclude name="PSR1.Classes.ClassDeclaration"/>
    </rule>
</ruleset>
```
