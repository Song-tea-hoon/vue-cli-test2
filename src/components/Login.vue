<template>
  <div>
    <md-card>
      <md-card-header>
        <p class="md-title">LOGIN</p>
      </md-card-header>
      <md-card-content>
        <input type="text" placeholder="e-mail" v-model="email"><br>
        <input type="password" placeholder="password" v-model="password"><br>
        <md-button class="md-raised" v-on:click="login" >Login</md-button>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
import service from '../services/services'
export default{
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      service.login(this.email, this.password)
      .then((res) => {
        alert('login sucees !')
      }).catch((err) => {
        alert('Error. ', err)
      })
    }
  }
}
</script>
<style scoped>
.md-card{
  width: 50%;
  margin: 0 auto;
}
</style>
