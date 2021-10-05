// import axios from 'axios';
const state={
    users:[],
}
const getters={
    allusers: (state)=> state.users
}
const actions={
    // async getAll({commit}){
    //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    //     console.log(res);
    //     commit("setTodos", res.data)
    // },
    adduser({ commit },userdata) {
        // let userdata =[]
        // let user_id = Math.floor(Math.random() * 10000);
        // console.log(lname);
        // userdata._id = user_id;
        // userdata._fname = fname;
        // userdata._lname = lname;
        // userdata._username = username;
        // userdata._pass = pass;
        // userdata._cpass = cpass;

        // const res = await axios.post(
        //   "https://jsonplaceholder.typicode.com/posts",
        //   { title }
        // );
        console.log(userdata);
        commit("addUser", userdata);
      },
      
    
}
const mutations={
    // setTodos:(state, todo) => (state.todo = todo),
    addUser: (state, user) => (state.users.unshift(user)),
}



export default{
    state, getters, actions, mutations
}