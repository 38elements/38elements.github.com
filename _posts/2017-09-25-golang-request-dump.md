---
layout: posts
title: Goでリクエストの内容を表示する 
---

[httputil.DumpRequest()](https://golang.org/pkg/net/http/httputil/#DumpRequest)を使う。  

```Go
package main

import (
    "fmt"
    "net/http/httputil"

    "github.com/windy-server/hrq"
)

func main() {
    data := map[string]string{
        "foo": "123",
        "bar": "456",
    }
    req, _ := hrq.Post("http://example.com", data)
    req.SetHeader("Foo", "Bar")
    req.Send()
    req.Body, _ = req.GetBody()
    dump, _ := httputil.DumpRequest(req.Request, true)
    fmt.Println(string(dump))
}

// POST / HTTP/1.1
// Host: example.com
// Content-Type: application/x-www-form-urlencoded
// Foo: Bar

// bar=456&foo=123
```
