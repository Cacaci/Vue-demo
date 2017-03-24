<template>
  <div id="note">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
// 引入子组件
import Toolbar from './Toolbar.vue'
import NotesList from './NotesList.vue'
import Editor from './Editor.vue'

export default {
  // 注册组件
  components: {
    Toolbar,
    NotesList,
    Editor
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,300);
html, #app {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}
#note {
  height: 100%;
}
</style>
