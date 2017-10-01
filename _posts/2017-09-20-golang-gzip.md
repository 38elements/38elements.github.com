---
layout: posts
title: GoのGzipメモ
---

Goで文字列をGzipで圧縮して展開する処理のメモ  

```Go
package main

import (
	"bytes"
	"compress/gzip"
	"fmt"
)

func main() {
	// 圧縮
	var buffer bytes.Buffer
	writer := gzip.NewWriter(&buffer)
	writer.Write([]byte("あいうえお\n"))
	writer.Close()
	b := buffer.Bytes()
	fmt.Println(string(b))
	
	// 展開
	reader, _ := gzip.NewReader(&buffer)
	output := bytes.Buffer{}
	output.ReadFrom(reader)
	s := string(output.Bytes())
	fmt.Println(s)
}
```
