// import axios from 'axios';
import notesService from '@/services/notesServices';
const ns = new notesService();
const state={
    Notes:[],
}
const getters={
    allNotes: (state)=> state.Notes
}

const actions={
    async getAll_Notes({commit}){
        var loginData = JSON.parse(localStorage.getItem("loginData"));
        console.log(loginData[0]._TKN);
        const headers = {
            'x-auth-token': loginData[0]._TKN
        }
        // ns.getAllNotes(headers)
        await ns.getAllNotes(headers).then((res)=>{
            console.log(res.data);
            commit("setNotes", res.data)
        }).catch((err)=>{
            console.log(err);
        })
        // console.log(res);
        
    },
    async AddNOte({commit}, NoteData){
        console.log(NoteData);
            var loginData1 = JSON.parse(localStorage.getItem("loginData"));
            // console.log(loginData[0]._TKN);
            const headers = {
                'x-auth-token': loginData1[0]._TKN
            }
        console.log(headers);
      await ns.AddNewNote(NoteData, headers).then(async()=>{
        // var loginData = JSON.parse(localStorage.getItem("loginData"));
        // console.log(loginData[0]._TKN);
        // const headers = {
        //     'x-auth-token': loginData[0]._TKN
        // }
        await ns.getAllNotes(headers).then((res)=>{
            console.log(res.data);
            commit("setNotes", res.data)
        }).catch((err)=>{
            console.log(err);
        })
      }).catch((err)=>{console.log(err);})
        // ns.getAllNotes(headers)
            
        // console.log(res);
        
    },
    async ArchivedNotewithID({commit}, id ){
        console.log(id,"with archive:");
        var loginData1 = JSON.parse(localStorage.getItem("loginData"));
            // console.log(loginData[0]._TKN);
            const headers = {
                'x-auth-token': loginData1[0]._TKN
            }
            let archived = {
                "isArchive" : true
            }
        await ns.ArchivedNote(id, archived, headers).then(async()=>{
            // var loginData = JSON.parse(localStorage.getItem("loginData"));
            // console.log(loginData[0]._TKN);
            // const headers = {
            //     'x-auth-token': loginData[0]._TKN
            // }
            await ns.getAllNotes(headers).then((res)=>{
                console.log(res.data);
                commit("setNotes", res.data)
            }).catch((err)=>{
                console.log(err);
            })
          }).catch((err)=>{console.log(err);})
    },
    async ArchivedNotes({commit}){
    
            var loginData1 = JSON.parse(localStorage.getItem("loginData"));
            // console.log(loginData[0]._TKN);
            const headers = {
                'x-auth-token': loginData1[0]._TKN
            }
        console.log(headers);
      await ns.AllArchivedNotes(headers).then((res)=>{
        // var loginData = JSON.parse(localStorage.getItem("loginData"));
        // console.log(loginData[0]._TKN);
        // const headers = {
        //     'x-auth-token': loginData[0]._TKN
        // }
        console.log(res.data);
            commit("setNotes", res.data)
      }).catch((err)=>{console.log(err);})
        // ns.getAllNotes(headers)
            
        // console.log(res);
        
    }

}

const mutations={
    setNotes:(state, Notes) => (state.Notes = Notes),
}

export default{
    state, getters, actions, mutations
}