<template>
  <div class="addtodo">
   <input type="text" placeholder="New Note" v-model="title"/>
   <button @click="addtodo1()">Add Todos</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'Home',
  data(){
      return{
          title:''
      }
  },
  methods:{
      ...mapActions(["addtodo"]),
      addtodo1(){
          this.addtodo(this.title)
      }
  }
  
}
</script>
<style scoped lang="scss">
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
    button {
    display: inline-block;
    padding: 15px 25px;
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: grey;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;
    }


    button:active {
    background-color: #000;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
    }
</style>