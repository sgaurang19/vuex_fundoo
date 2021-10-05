<template>
  <div>
    <AddTodo/><br>
    <div class="hello">
        <div class="Todos" v-for="items in alltodos" :key="items.id">
            Title: {{items.title}} <br>
            <br>
            Body: {{items.body}}
            <button @click="deletetodo(items.id)" >Delete</button>
        </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import {mapGetters, mapActions} from 'vuex';
import AddTodo from '@/components/Addtodo.vue'
export default {
  name: "Todo",
  components:{
      AddTodo
  },
  methods:{
      ...mapActions(["getAll","deletetodo"])
  },
  created(){
      this.getAll();
  },
  computed:
      mapGetters(["alltodos"]),
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 45px;
}
.Todos{
    display: flex;
    flex-direction: column;
        text-align: left;
    justify-content: space-evenly;
    background-color: #42b983;
  border-radius: 20px;
  padding: 10px;
  min-height: 35vh;

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
