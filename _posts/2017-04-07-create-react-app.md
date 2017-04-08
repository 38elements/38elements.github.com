---
layout: posts
title: Create React Appメモ
---
[Github](https://github.com/facebookincubator/create-react-app)  

### npm start

[packages/react-scripts/scripts/start.js](https://github.com/facebookincubator/create-react-app/blob/0ace417c459dc5f1355f5f9a820c5b847feb4e35/packages/react-scripts/scripts/start.js)に処理が記述されている。  
<br>

#### webpack.config.dev

`public/index.html`と`src/`以下のファイルをwebpackは処理する  

publicディレクトリにはwebpackが処理しないがアプリケーションに使用するファイルを置く  

loadersは後ろから先に適用される  

[packages/react-scripts/config/webpack.config.dev.js](https://github.com/facebookincubator/create-react-app/blob/47a8148fb195707b4fb533521afd3aee6807d92a/packages/react-scripts/config/webpack.config.dev.js)で`npm start`で実行されるwebpackの設定が記述されている。  

[createWebpackCompiler.js](https://github.com/facebookincubator/create-react-app/blob/0ace417c459dc5f1355f5f9a820c5b847feb4e35/packages/react-scripts/scripts/utils/createWebpackCompiler.js#L39)で`let  compiler = webpack(config, handleCompile)`する。  

[webpack-dev-server](https://github.com/webpack/webpack-dev-server)を利用する。  
webpack-dev-serverの[config](https://github.com/facebookincubator/create-react-app/blob/fe7b5c212b5127775287ce444947f4c604c024dd/packages/react-scripts/config/webpackDevServer.config.js)   
[WebpackDevServer(compiler, devServerConfig)](https://github.com/facebookincubator/create-react-app/blob/0ace417c459dc5f1355f5f9a820c5b847feb4e35/packages/react-scripts/scripts/start.js#L80)する。  
<br>

#### eslint

eslintの設定は[eslint-config-react-app](https://github.com/facebookincubator/create-react-app/tree/master/packages/eslint-config-react-app)で記述されている。  

```
{
  "extends": "react-app"
}
```

#### babel

babelの設定は[babel-preset-react-app](https://github.com/facebookincubator/create-react-app/tree/master/packages/babel-preset-react-app)で記述されている。  
<br>

### npm run test
<br>

### npm run build
<br>

### npm run eject

動作をカスタマイズすることができる
<br>


