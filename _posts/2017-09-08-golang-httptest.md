---
layout: posts
title: httptestメモ
---

httptestはGoでhttp関係のテストをすることに使用します。

[godoc](https://golang.org/pkg/net/http/httptest/)

* [NewServer(handler http.Handler)](https://golang.org/pkg/net/http/httptest/#NewServer)は\*[Server](https://golang.org/pkg/net/http/httptest/#Server)を返す

* [Server.URL](https://golang.org/pkg/net/http/httptest/#Server)はipとportだけのBase URL

## Example 

[hrq](https://github.com/windy-server/hrq/)のテストの例

```Go
package hrq

import (
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"
	"time"
)

func TestGetRequest(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		v1 := r.URL.Query().Get("abc")
		if v1 != "def" {
			t.Errorf("v1 is wrong in TestGetRequest(). v1 is %v", v1)
		}
		v2 := r.URL.Query().Get("hij")
		if v2 != "klm" {
			t.Errorf("v2 is wrong in TestGetRequest(). v2 is %v", v2)
		}
		c1, _ := r.Cookie("c1")
		if c1.Value != "v1" {
			t.Errorf("c1 is wrong in TestGetRequest(). c1 is %v", c1)
		}
		c2, _ := r.Cookie("c2")
		if c2.Value != "v2" {
			t.Errorf("c2 is wrong in TestGetRequest(). c2 is %v", c2)
		}
		values := [][]string{
			[]string{"a", "b"},
			[]string{"c", "d"},
		}
		for _, v := range values {
			cookie := &http.Cookie{
				Name:  v[0],
				Value: v[1],
			}
			http.SetCookie(w, cookie)
		}
		fmt.Fprintf(w, "FooBar")
	}))
	url := server.URL + "?abc=def&hij=klm"
	req, _ := Get(url)
	req.PutCookie("c1", "v1")
	req.PutCookie("c2", "v2")
	res, _ := req.Send()
	text, _ := res.Text()
	if text != "FooBar" {
		t.Errorf("text is wrong in TestGetRequest(). text is %v", text)
	}
	cookies := map[string]string{
		"a": "b",
		"c": "d",
	}
	cm := res.CookiesMap()
	if cookies["a"] != cm["a"] || cookies["b"] != cm["b"] {
		t.Errorf("CookiesMap() is wrong in TestGetRequest(). cm is %v", cm)
	}
}
```
