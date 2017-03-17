<template>
  <div id="note-editor">
    <textarea 
      class="form-control"
      :value="activeNoteText"
      @input="editorNote">	
    </textarea>
  </div>
</template>

<script>

export default {
  computed: {
  	activeNoteText() {return this.$store.getters.activeNote.text}
  },
  methods: {
  	editorNote(e) {this.$store.dispatch('editNote', e.target.value)}
  }
}
</script>
