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

export default {
  computed: {
  	activeNote() {return this.$store.getters.activeNote}
  },
  methods: {
  	addNote() {this.$store.dispatch('addNote')},
  	deleteNote() {this.$store.dispatch('deleteNote')},
  	toggleFavorite() {this.$store.dispatch('toggleFavorite')}
  }
}
</script>
