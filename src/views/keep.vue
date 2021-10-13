<template>
  <div>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <Keepheader />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Keepheader from '@/components/Keepheader/Header.vue';


export default {
  name: 'Home',
  components: {
    Keepheader
  }
}

</script>
