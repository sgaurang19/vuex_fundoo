// import {mapActions} from 'vuex';
// import Signup from '@/components/Addtodo.vue'
import axios from 'axios';

import Logo from '@/components/Logo/Logo.vue'
import Inputbox from '@/components/Inputbox/Inputbox.vue'
import useVuelidate from '@vuelidate/core';
import { required ,email, helpers} from '@vuelidate/validators';
import { reactive, computed } from 'vue';


export default {
    setup(){
        const state = reactive({
            
            user:{
               
                username:'',
                


            }
        });

        const rules = computed(()=>{
            return{
                user:{
                   
                    username: { required: helpers.withMessage(" must be required", required)
                              , email: helpers.withMessage(" must be valid email", email)
                        },
                   
                }
            }
        });
        const v$ = useVuelidate(rules, state);
        return {
            state,v$,
        }
    },
   
    components:{
        Logo,Inputbox
    },
    data(){
        // userdetails: [];
        
        return{
            
            showpass: false,
            
               
          
        }
    },
   
    methods:{
        forgetpassword(){
            this.v$.$validate()
            if(!this.v$.$error){
                // alert("form submitted")
                let sendingData = {
                    
                    "email": this.state.user.username,
                    
                    
                    // password: setPass

                }
                console.log(sendingData);
                axios.post("http://localhost:3001/users/reset",sendingData).then(()=> {
                    
                    // window.location.href = "http://localhost:8080/resetpassword";
                }).catch(()=>{
                    console.log("error");
                })
            }
            else{
                // alert("error")
            }
        }
    },
    
}
