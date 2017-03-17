import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

new Vue({
  store, 
  el: '#app',
  components: { App }
  // render: h => h(App)
})
