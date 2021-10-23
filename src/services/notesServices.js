
// let con = require("./constants.js");
// import con from './constants'
import axios from 'axios';
export default class notesServices{
    getAllNotes(headers){
       return axios.get("http://localhost:3001/users/notes/allnotes",{headers});
    }
    AddNewNote(NoteData, headers){
        return axios.post("http://localhost:3001/users/notes/newNote", NoteData,{headers})

    }
    getArchiveData(id, headers){
        // console.log(id,"noteeeeee:",NoteArc);
        return axios.get(`http://localhost:3001/users/notes/notes/${id}`, {headers})
    }
    ArchivedNote(id,NoteArc, headers){
        // console.log(id,"noteeeeee:",NoteArc);
        return axios.patch(`http://localhost:3001/users/notes/archiveNote/${id}`, NoteArc, {headers})
    }
    AllArchivedNotes(headers){
        return axios.get("http://localhost:3001/users/notes/archivedNotes", {headers})
    }
    DeleteNote(id, NoteDel, headers){
        return axios.patch(`http://localhost:3001/users/notes/deleteNote/${id}`,NoteDel, {headers})
    }
    AllDeletedNotes(headers){
        return axios.get(`http://localhost:3001/users/notes/deletedNotes`, {headers})
    }
    ChangingColor(id, color_data, headers){
        return axios.patch(`http://localhost:3001/users/notes/updateNote/${id}`, color_data, {headers})
    }
//     signup(sendingData){
//         return axios.post("/users/register",sendingData)
//     }
//     forgetpass(sendingData){
//                 return axios.post("/users/reset",sendingData)
//     }
//     resetpass(sendingData, headers){
//        return axios.patch("/users/reset_password",sendingData,{headers})

//     }
}
// module.exports ={notesServices};