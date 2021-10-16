
// let con = require("./constants.js");
import con from './constants'
import axios from 'axios';
export default class notesServices{
    getAllNotes(headers){
       return axios.post(con.ALL_NOTES,{headers});
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
module.exports ={notesServices};