<template>
  <div>
    <h1>Todo List</h1>
    <div class="md-layout  md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label>title</label>
          <md-input v-model="title"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-field>
          <label>name</label>
          <md-input v-model="name"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-size-15">
        <md-button class="md-raised" v-on:click="addItem">add</md-button>
      </div>
    </div>
    <md-list>
      <md-list-item v-for="todoItem in todoList" v-bind:key="todoItem.key">
        <md-checkbox></md-checkbox>
        <span>{{todoItem.title}}</span>
        <span>{{todoItem.name}}</span>
      </md-list-item>
    </md-list>
    <!-- <ul>
      <li v-for="todoItem in todoList" v-bind:key="todoItem.key">
        <span>{{todoItem.name}}</span>
      </li>
    </ul> -->
  </div>
</template>
<script>
import services from '../services/services'
import Vue from 'vue'
import { MdList, MdCheckbox } from 'vue-material/dist/components'

Vue.use(MdList)
Vue.use(MdCheckbox)

export default{
  name: 'TodoList',
  data () {
    return {
      title: '',
      name: '',
      todoList: {}
    }
  },
  created () {
    // console.log(firebase.auth().currentUser)
    // let user = firebase.auth().currentUser;
    // let ref = firebase.database().ref('todo').push()
    // ref.set({
    //   do: false,
    //   name: 'testName',
    //   timetamp: 'time',
    //   title: 'title'
    // })

    services.getTodoList()
      .then((data) => {
        this.todoList = data
      })
  },
  methods: {
    addItem () {
      let item = {
        todo: false,
        addTime: new Date() + '',
        name: '',
        title: '',
        complateTime: ''
      }

      item.name = this.name
      item.title = this.title

      services.addTodoList(item)
        .then(data => {
          console.log(data.key);
          //this.todoList = Object.assign({}, this.todoList, data)
        })
    }
  }
}
</script>
<style scoped>
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
</style>
