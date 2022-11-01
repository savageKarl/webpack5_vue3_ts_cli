# webpack5_vue3_ts_cli



## 介绍

使用`webpack5`搭建的`vue3` + `typescript` 开发脚手架

## 功能

- 支持最新的`vue3 script setup` 语法
- 使用 `babel` ，配置`js`向后兼容
- 使用 `sass` 预处理器
- 使用 `postcss`解决`css`向后兼容
- 引入 `element-plus` 组件库


## 目录结构
```
├─dist                        // 打包产物存放目录
├─public                      // 公开目录
│  ├─index.html               // 页面入口
├─src                         // 项目源码
├─.browserslistrc             // 需要兼容目标浏览器配置，babel和postcss会读取
├─.env.development            // 开发环境的环境变量
├─.env.production             // 生产环境的环境变量
├─.gitignore                  // git忽略文件
├─auto-imports.d.ts           // 按需导入组件的插件自动生成，无须关心
├─babel.config.js             // babel配置文件
├─components.d.ts             // 按需导入组件的插件自动生成，无须关心
├─LICENSE                     // 开源协议
├─package.json          
├─tsconfig.json               // ts 配置文件
├─webpack.common.js           // webpack基础配置文件
├─webpack.dev.js              // webpack开发环境配置文件
├─webpack.pro.js              // webpack生产环境配置文件

```

## 安装 

```
https://github.com/savage181855/webpack5_vue3_ts_cli.git
```


## 使用

### 开发
```
npm run dev
```

### 生产
```
npm run build
```


## 文档

[脚手架配套文档](https://github.com/savage181855/blogs/blob/master/%E5%89%8D%E7%AB%AF/webpack5/%E6%90%AD%E5%BB%BAVue3%2BTS%2BSCSS%E8%84%9A%E6%89%8B%E6%9E%B6.md)