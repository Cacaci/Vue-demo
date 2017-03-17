<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite"
      class="glyphicon glyphicon-star"
      :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
  	activeNote() {return this.$store.getters.activeNote}
  },
  /*methods: {
  	addNote() {this.$store.dispatch('addNote')},
  	deleteNote() {this.$store.dispatch('deleteNote')},
  	toggleFavorite() {this.$store.dispatch('toggleFavorite')}
  }*/
  methods: {
    // 使用该方法需要配置babel，详见webpack.config.js
    ...mapActions([
        'addNote', 'deleteNote', 'toggleFavorite'
      ])
  }
}
</script>
