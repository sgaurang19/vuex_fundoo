<template>
  <div class>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ResetPass />

  </div>
</template>

<script>
// @ is an alias to /src
import ResetPass from '@/components/Resetpass/Resetpass.vue';

export default {
  name: 'resetpass',
  components: {
    ResetPass
  }
}
</script>
