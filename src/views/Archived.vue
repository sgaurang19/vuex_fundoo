<template>
  <div>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <Keepheader v-bind:logo_txt="TEXT"/>
    <Sidenav />
    
    <Archivednotes />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Keepheader from '@/components/Keepheader/Header.vue';
import Sidenav from '@/components/Sidenav/Sidenav.vue';
// import Addnote from '@/components/Addnote/Addnote.vue'
// import Notes from '@/components/Notes/Notes.vue'
import Archivednotes from '@/components/Archivednotes/Archivednotes.vue'



export default {
  name: 'Home',
  components: {
    Keepheader, Sidenav, Archivednotes,
  },
  props:{
    TEXT :{
      type: String,
      default: "Archived"
    }
  }
}

</script>
