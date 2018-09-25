<template>
  <div>
    <md-card>
      <md-card-header>
        <p class="md-title">SIGN UP</p>
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
        <md-button class="md-raised" v-on:click="signup" >sing up</md-button>
        <p>or go back to <router-link to="/login">login</router-link></p>
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
    signup () {
      service.signup(this.email, this.password)
        .then((res) => {
          alert('join sucees !')
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
