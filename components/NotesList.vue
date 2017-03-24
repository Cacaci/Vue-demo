<template>
  <div id="notes-list">

    <div id="list-header">
      <h2>Notes | coligo</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'all'"
            :class="{active: show === 'all'}">
            All Notes
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'favorites'"
            :class="{active: show === 'favorites'}">
            Favorites
          </button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes"
          class="list-group-item" href="#"
          :class="{active: activeNote === note}"
          @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.text.trim().substring(0, 30)}}
          </h4>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      show: 'all'
    }
  },
  methods: {
    updateActiveNote(note) {this.$store.dispatch('updateActiveNote', note)}
  },
  computed: {
    // 既可以在局部状态中直接获取状态，也可以通过模块定义的getters中获取状态
    notes() {return this.$store.state.note.notes},
    activeNote() {return this.$store.state.note.activeNote},
    filteredNotes() {
      if(this.show === 'all') {
        return this.notes
      } else if(this.show === 'favorites') {
        return this.notes.filter(note => note.favorite)
      }
    }
  },
  /*computed: mapState({
    // 箭头函数，当只有一个参数是，可省略();当只有一条语句是，可以省略return
    notes: state => state.note.notes,
    activeNote: state => state.note.activeNote,
    filteredNotes() {
      if(this.show === 'all') {
        return this.notes
      } else if(this.show === 'favorites') {
        return this.notes.filter(note => note.favorite)
      }
    }
  }),*/
  /*computed: {
    // notes() {return this.$store.getters.notes},
    // activeNote() {return this.$store.getters.activeNote},

    ...mapGetters([
        'notes', 'activeNote'
      ]),
    filteredNotes() {
      if(this.show === 'all') {
        return this.notes
      } else if(this.show === 'favorites') {
        return this.notes.filter(note => note.favorite)
      }
    }
  },*/
  created() {
    console.log(this.notes)
  },
}
</script>

<style>
#notes-list {
  float: left;
  width: 300px;
  height: 100%;
  background-color: #F5F5F5;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}
#list-header {
  padding: 5px 25px 25px 25px;
}
#list-header h2 {
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
  padding-bottom: 8px;
}
#notes-list .container {
  height: calc(100% - 137px);
  max-height: calc(100% - 137px);
  overflow: auto;
  width: 100%;
  padding: 0;
}
#notes-list .container .list-group-item {
  border: 0;
  border-radius: 0;
}
.list-group-item-heading {
  font-weight: 300;
  font-size: 15px;
}
</style>
