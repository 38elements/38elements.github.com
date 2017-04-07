---
layout: posts
title: Create React Appメモ
---
[Github](https://github.com/facebookincubator/create-react-app)  

#### npm start

[packages/react-scripts/scripts/start.js](https://github.com/facebookincubator/create-react-app/blob/0ace417c459dc5f1355f5f9a820c5b847feb4e35/packages/react-scripts/scripts/start.js)に処理が記述されている。  
<br>

#### webpack.config.dev

[packages/react-scripts/config/webpack.config.dev.js](https://github.com/facebookincubator/create-react-app/blob/47a8148fb195707b4fb533521afd3aee6807d92a/packages/react-scripts/config/webpack.config.dev.js)で`npm start`で実行されるwebpackの設定が記述されている。  
<br>

#### eslint

eslintの設定は[eslint-config-react-app](https://github.com/facebookincubator/create-react-app/tree/master/packages/eslint-config-react-app)で記述されている。  

```
{
  "extends": "react-app"
}
```
