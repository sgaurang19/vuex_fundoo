import axios from 'axios';
import notesService from '@/services/notesServices';
const ns = new notesService();
const state={
    Notes:[],
}
const getters={
    alltodos: (state)=> state.Notes
}

const actions={
    async getAll({commit}){
        var loginData = JSON.parse(localStorage.getItem("loginData"));
        const headers = {
            'x-auth-token': loginData._TKN
        }
        ns.getAllNotes(headers)
        await axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            commit("setNotes", res.data)
        }).catch((err)=>{
            console.log(err);
        })
        // console.log(res);
        
    }

}

const mutations={
    setNotes:(state, Notes) => (state.todo = Notes),
}

export default{
    state, getters, actions, mutations
}