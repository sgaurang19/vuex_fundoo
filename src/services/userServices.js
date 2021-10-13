
// let con = require("./constants.js");
import con from './constants'
import axios from 'axios';
export default class userServices{
    Login(sendingData){
       return axios.post(con.LOGIN,sendingData);
    }
    signup(sendingData){
        return axios.post("/users/register",sendingData)
    }
    forgetpass(sendingData){
                axios.post("/users/reset",sendingData).then(()=> {
                    
                    // window.location.href = "http://localhost:8080/resetpassword";
                }).catch(()=>{
                    console.log("error");
                })
    }
    resetpass(sendingData, headers){
       return axios.patch("/users/reset_password",sendingData,{headers})

    }
}
// module.exports ={userServices};