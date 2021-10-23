// import axios from 'axios';
import notesService from '@/services/notesServices';
// import Deletednotes from '../../components/Deletednotes/Deletednotes';
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
    async UnArchivedNotewithID({commit}, id ){
        console.log(id,"with archive:");
        var loginData1 = JSON.parse(localStorage.getItem("loginData"));
            // console.log(loginData[0]._TKN);
            const headers = {
                'x-auth-token': loginData1[0]._TKN
            }
            let Unarchived = {
                "isArchive" : false
            }
        await ns.ArchivedNote(id, Unarchived, headers).then(async()=>{
            // var loginData = JSON.parse(localStorage.getItem("loginData"));
            // console.log(loginData[0]._TKN);
            // const headers = {
            //     'x-auth-token': loginData[0]._TKN
            // }
            await ns.AllArchivedNotes(headers).then((res)=>{
                // var loginData = JSON.parse(localStorage.getItem("loginData"));
                // console.log(loginData[0]._TKN);
                // const headers = {
                //     'x-auth-token': loginData[0]._TKN
                // }
                console.log(res.data);
                    commit("setNotes", res.data)
              }).catch((err)=>{console.log(err);})
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
        
    },
    async DeleteNoteWithID({commit}, id){
        var loginData1 = JSON.parse(localStorage.getItem("loginData"));
            // console.log(loginData[0]._TKN);
            const headers = {
                'x-auth-token': loginData1[0]._TKN
            }
            let isdeleted = {
                "isDeleted":true
            }
            
        await ns.DeleteNote(id, isdeleted, headers).then(async()=>{
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

    async UnDeleteNoteWithID({commit}, id){
        var loginData1 = JSON.parse(localStorage.getItem("loginData"));
            // console.log(loginData[0]._TKN);
            const headers = {
                'x-auth-token': loginData1[0]._TKN
            }
            let unisdeleted = {
                "isDeleted":false
            }
            
        await ns.DeleteNote(id, unisdeleted, headers).then(async()=>{
            // var loginData = JSON.parse(localStorage.getItem("loginData"));
            // console.log(loginData[0]._TKN);
            // const headers = {
            //     'x-auth-token': loginData[0]._TKN
            // }
            await ns.AllDeletedNotes(headers).then((res)=>{
                // var loginData = JSON.parse(localStorage.getItem("loginData"));
                // console.log(loginData[0]._TKN);
                // const headers = {
                //     'x-auth-token': loginData[0]._TKN
                // }
                console.log(res.data);
                    commit("setNotes", res.data)
            }).catch((err)=>{console.log(err);})
          }).catch((err)=>{console.log(err);})
    },

    async DeletedNotes({commit}){
    
        var loginData1 = JSON.parse(localStorage.getItem("loginData"));
        // console.log(loginData[0]._TKN);
        const headers = {
            'x-auth-token': loginData1[0]._TKN
        }
            console.log(headers);
        await ns.AllDeletedNotes(headers).then((res)=>{
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
    
    },
    async ChangeColor ({commit}, code){
        var loginData1 = JSON.parse(localStorage.getItem("loginData"));
        // console.log(loginData[0]._TKN);
        const headers = {
            'x-auth-token': loginData1[0]._TKN
        }
        const color_code={
            "color": code.code
        }
        await ns.ChangingColor(code.ID, color_code, headers).then(async()=>{
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
        
    }

}

const mutations={
    setNotes:(state, Notes) => (state.Notes = Notes),
}

export default{
    state, getters, actions, mutations
}