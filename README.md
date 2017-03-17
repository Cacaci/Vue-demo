# Learn Vuex by Rebuilding a Notes App

This code is for the tutorial on building a Notes App using VueJs and Vuex

Check out the full tutorial on [coligo](http://coligo.io/learn-vuex-by-building-notes-app/)

### Install the dependencies

```bash
npm install
```

### Run the dev server with hot reload at localhost:8080

```bash
npm run dev
```

### Build the app for production

```bash
npm run build
```

### 使用vuex2.0重构

这是我学习vuex过程中看到的最容易理解vue状态管理的的一个Demo，原先的版本是使用vuex1.0写的，
这里我用vuex2.0重新写了一遍，仅供参考。

### 关于demo

你可以从原作者的[Github Repo](https://github.com/coligo-io/notes-app-vuejs-vuex)下载vuex1.0的源码，这里是[demo](https://coligo-io.github.io/notes-app-vuejs-vuex)的地址。  

当然，你也可以参考我github上的**改写后的源码**，这里是[demo](https://bonzstars.github.io/Vue-demo/)地址。

Segmentfault社区也有人翻译了作者的[原文](https://coligo.io/learn-vuex-by-building-notes-app/)，[译文](https://segmentfault.com/a/1190000005015164)，有兴趣的同学可以参考一下，对比vuex1.0和vuex2.0的一些差异。

### 使用webpack2打包

使用webpack2稍微做了调整，尝试将组件内容的css样式独立打包到单独的css文件中
关于webpack2的相关教程，可参考[这边博文](http://www.qinshenxue.com/article/20161118151423.html)
