<template>
  <div class>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Signup />

  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/SignUp/SignUp.vue';

export default {
  name: 'SignUp',
  components: {
    Signup
  }
}
</script>
