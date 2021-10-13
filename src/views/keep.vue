<template>
  <div>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <Keepheader />
    <Sidenav />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Keepheader from '@/components/Keepheader/Header.vue';
import Sidenav from '@/components/Sidenav/Sidenav.vue';


export default {
  name: 'Home',
  components: {
    Keepheader, Sidenav
  }
}

</script>
