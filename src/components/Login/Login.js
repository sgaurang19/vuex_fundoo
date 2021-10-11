// import {mapActions} from 'vuex';
// import Signup from '@/components/Addtodo.vue'
import axios from 'axios';
import Logo from '@/components/Logo/Logo.vue'
import Inputbox from '@/components/Inputbox/Inputbox.vue'
import useVuelidate from '@vuelidate/core';
import { required , email, helpers} from '@vuelidate/validators';
import { reactive, computed } from 'vue';

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
        Logo,Inputbox
    },
    data(){
        // userdetails: [];
        return{
            
       
            
               
          
        }
    },
   
    methods:{
        login(){
            this.v$.$validate()
            if(!this.v$.$error){
                // alert("form submitted")
                let sendingData = {
                    
                    "email": this.state.username,
                    "pass": this.state.password
                    // password: setPass

                }
                axios.post("http://localhost:3001/users/login",sendingData).then((resp)=> {
                    console.log("success");
                    console.log(resp.data);
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
