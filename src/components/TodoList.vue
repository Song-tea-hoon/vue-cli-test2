<template>
  <div>
    <h1>Todo List</h1>
    <md-card class="md-size-70">
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
          <md-checkbox v-model="todoItem.todo"></md-checkbox>
          <span>{{todoItem.title}}</span>
          <span>{{todoItem.name}}</span>
          <span>{{todoItem.addTime | time}}</span>
        </md-list-item>
      </md-list>
    </md-card>
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
    this.getList()
  },
  methods: {
    getList () {
      services.getTodoList()
        .then((data) => {
          this.todoList = data
        })
        .catch(err => {
          alert('Get list error : ' + err)
        })
    },
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
          // 데이터 삽입
          this.$set(this.todoList, data.key, data.val())
        })
        .catch(err => {
          alert('Add list error : ' + err)
        })
      console.log(this.todoList)
    }
  },
  filters: {
    time (val) {
      let date = new Date(val)
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      let d = date.getDate()
      let h = date.getHours()
      let mn = date.getMinutes()
      return y + '/' + m + '/' + d + '-' + (h < 10 ? '0' + h : h) + ':' + (mn < 10 ? '0' + mn : mn)
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
