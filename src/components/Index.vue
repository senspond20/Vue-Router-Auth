<template>
  <div class="hello">
    <router-link to="/home">home</router-link>
     <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
