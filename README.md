# Yorha Boilerplate

![](https://i.loli.net/2017/08/19/5997220b136c7.png) 

[DEMO页面预览](https://sakuyakun.github.io/Yorha-Boilerplate/)

# Feature
- ES6/7/8 Immutable React React-Redux5 React-Router4
- SASS & PostCSS
- 使用 Webpack3 进行处理打包
- 使用 Hot Module Replacement 热加载
- 启用 UglifyJS 代码压缩，文件后缀添加 MD5 缓存处理
- 启用 offline plugin 可离线浏览网页

# Directory Layout
```
├── dist                           # 打包输出目录
├── src
│   ├── component                  # 组件目录
│   ├── locales                    # 国际化语言json
│   ├── actions                    # Redux Actions 文件目录
│   ├── reducers                   # Redux reducers 文件目录
│   ├── assets                     # 资源目录
│   ├── template                   # HTML模板
│   ├── utils                      # Utility and helper classes
│   ├── views                      # 路由主页面
│   ├── app.jsx                    # 组件初始化处理
│   ├── entry.jsx                  # 入口文件
│   ├── intl.js                    # intl接口
│   ├── routers.jsx                # React Router 路由文件
│   ├── normalize.scss             # normalize
├── index.html                     # devServer index
├── package-lock.json              # package lock
├── package.json                   # package
├── postcss.config.js              # postCSS 配置文件
├── webpack.config.js              # Webpack 基本配置
├── webpack.dev.config.js          # Webpack 开发环境配置
└── webpack.prod.config.js         # Webpack 部署环境配置
```

# Run
`npm run start` 开发环境启动

`npm run build` 部署打包

`npm run lint` 代码检测
