<template>
  <div>
    <md-card>
      <md-card-header>
        <p class="md-title">LOGIN</p>
      </md-card-header>
      <md-card-content>
        <md-field>
          <label>E-Mail</label>
          <md-input v-model="email"></md-input>
        </md-field>
        <md-field>
          <label>password</label>
          <md-input type="password" v-model="password"></md-input><br>
        </md-field>
        <md-button class="md-raised" v-on:click="login" >Login</md-button>
        <p>You don't have account? You can <router-link to="/signup">create one</router-link></p>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
import service from '../services/services'
export default{
  name: 'SignIn',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      service.login(this.email, this.password)
        .then((res) => {
          alert('login sucees !')
          this.$router.replace('/HelloWorld')
        })
        .catch((err) => {
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
