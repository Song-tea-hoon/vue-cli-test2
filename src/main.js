// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import { MdButton, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)
Vue.use(MdCard)

Vue.config.productionTip = false
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDJM5buDZlxVRAc_KkuDmPDiI2b5_p6uoo',
  authDomain: 'portfolio-f3218.firebaseapp.com',
  databaseURL: 'https://portfolio-f3218.firebaseio.com',
  projectId: 'portfolio-f3218',
  storageBucket: 'portfolio-f3218.appspot.com',
  messagingSenderId: '235982987451'
}
firebase.initializeApp(config)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
