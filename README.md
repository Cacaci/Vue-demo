# Learn Vuex by Building a Notes App

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

### 理一理开发思路

1. 关于状态state
(1) notes: 笔记列表
(2) activeNote: 当前笔记

2. 动作
(1) 新增笔记addNote
(2) 编辑笔记editNote
(3) 删除笔记deleteNote
(4) 选择当前的笔记updateActiveNote
(5) 切换收藏状态toggleFavorite
