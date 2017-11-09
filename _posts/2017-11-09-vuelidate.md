---
layout: posts
title: vuelidateメモ
---
[Github](https://github.com/monterail/vuelidate)  
[Document](https://monterail.github.io/vuelidate/)  

#### 使い方

Vueにインストールする。

```
import {Vue} from 'vue';
import {Vuelidate} from 'vuelidate';
Vue.use(Vuelidate);
```

オプションのvalidationsキーにvalidatorを登録する。

```
import {required, alphaNum, maxLength} from 'vuelidate/lib/validators';

export default {
    data() {
        return {
            form: {
                id: '',
                password: '',
            },
        },
    },
    // dataのキーに対応するvalidatorを登録する
    validations: {
        form: {
            id: {
                required,
                alphaNum,
                maxLength: maxLength(64),
            },
            password: {
                required,
                maxLength: maxLength(64),
            },
        },
    },
}

```

vm.$v.form.id.$touch()を実行することによって、vm.$v.form.id.$dirtyがtrueになる。  
vm.$v.form.idにはidの結果が入る。    
vm.$v.formにはidとpasswordをvalidateした総合的な結果が入る。    


```
<input v-model.trim="form.id" @input="$v.form,id.$touch()">
```

<hr>

[Vue.jsメモ](/2016/12/20/vuejs.html)  
[Vuexメモ](/2017/01/14/vuex.html)  
