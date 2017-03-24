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
  // 在计算属性中获取状态
  computed: {
  	activeNoteText() {return this.$store.getters.activeNote.text}
  },
  methods: {
  	editorNote(e) {this.$store.dispatch('editNote', e.target.value)}
  }
}
</script>

<style>
#note-editor {
  height: 100%;
  margin-left: 380px;
}

#note-editor textarea {
  height: 100%;
  border: 0;
  border-radius: 0;
}
</style>
