<template>
  <div class>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Login />

  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login/Login.vue';

export default {
  name: 'SignUp',
  components: {
    Login
  }
}
</script>
