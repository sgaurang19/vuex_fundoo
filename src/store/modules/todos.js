import axios from 'axios';
const state={
    todo:[],
}
const getters={
    alltodos: (state)=> state.todo
}
const actions={
    async getAll({commit}){
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(res);
        commit("setTodos", res.data)
    },async addtodo({ commit }, title) {
        const res = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          { title }
        );
        console.log(res);
        commit("addTodo", res.data);
      },
      async deletetodo({ commit }, id) {
        const res = await axios.delete(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        console.log(res);
        commit("deleteTodo", id);
      }
      
    
}
const mutations={
    setTodos:(state, todo) => (state.todo = todo),
    addTodo: (state, todo) => (state.todo.unshift(todo)),
    deleteTodo: (state, id) => (state.todo = state.todo.filter((todo) => todo.id != id)),
}


export default{
    state, getters, actions, mutations
}