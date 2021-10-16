// import {mapActions} from 'vuex';
// import Signup from '@/components/Addtodo.vue'
// import axios from 'axios';
import Logo from '@/components/Logo/Logo.vue'
import Inputbox from '@/components/Inputbox/Inputbox.vue'
// import Snacks from '@/components/Snackbar/Snackbar.vue'
import useVuelidate from '@vuelidate/core';
import { required , email, helpers} from '@vuelidate/validators';
import { reactive, computed } from 'vue';
import userService from '@/services/userServices';
const us = new userService();
// const userService = require('../../services/userServices')
import { mapActions } from 'vuex'

export default {
    setup(){
        const state = reactive({
            username:'',
            password:'',
        });

        const rules = computed(()=>{
            return{
                username: { required: helpers.withMessage(" must be required", required)
                     , email: helpers.withMessage(" must be valid email", email)
                    },
                password : { required }

            }
        });
        const v$ = useVuelidate(rules, state);
        return {
            state,v$,
        }
    },
   
    components:{
        Logo,Inputbox,
    },
    data(){
        // userdetails: [];
        return{

        }
    },
   
    methods:{
        // ...mapActions(["addNotification"]),
        ...mapActions(["addNotification"]),
         login(){

            this.v$.$validate()
            if(!this.v$.$error){
                // alert("form submitted")
                let sendingData = {
                    
                    "email": this.state.username,
                    "pass": this.state.password
                    // password: setPass

                }
                try{
                us.Login(sendingData).then((resp)=>{
                    let newData ={}

                    newData._TKN = resp.data.message
                    var loginData = JSON.parse(localStorage.getItem("loginData"));
                    
                    loginData = [newData];
    
                    if(loginData != null){
                        console.log("ente");
                        this.$router.push('/keep')
                    }
                    else{
                        // this.addNotification("Login failed")
                        this.$router.push('/login')
    
                    }
                    console.log("ls");
                    localStorage.setItem("loginData", JSON.stringify(loginData));
                    // this.$router.push('/keep')
                    console.log("ls complete");
                }).catch(()=>{
                    // alert("error")
                    console.log("failed");
                    this.addNotification("Login failed")

                })
                }
                catch(err){
                    console.log(err);
                    this.addNotification("Login failed")
                }

                
            }
            else{
                this.addNotification("Login failed")
                // alert("error")
            }
        }
    },
    
}
