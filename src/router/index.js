import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import TodoList from '@/components/TodoList'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'todoList',
          name: 'TodoList',
          component: TodoList,
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // console.log(currentUser)
  // console.log(to.matched)
  if (!currentUser && requiresAuth) next('/login')
  else if (currentUser && !requiresAuth) next('/helloworld')
  else next()
})

export default router
