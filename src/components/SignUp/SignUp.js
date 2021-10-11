// import {mapActions} from 'vuex';
// import Signup from '@/components/Addtodo.vue'
import axios from 'axios';

import Logo from '@/components/Logo/Logo.vue'
import Inputbox from '@/components/Inputbox/Inputbox.vue'
import useVuelidate from '@vuelidate/core';
import { required , alpha, email, minLength, sameAs, helpers} from '@vuelidate/validators';
import { reactive, computed } from 'vue';

export default {
    setup(){
        const state = reactive({
            
            user:{
                firstname:'',
                lastname:'',
                username:'',
                password:'',
                confirm:'',


            }
        });

        const rules = computed(()=>{
            return{
                user:{
                    firstname:{
                        required: helpers.withMessage(" must be required", required),                     
                        alpha: helpers.withMessage(' should have only alphabet characters', alpha), 
                        minLength: helpers.withMessage(' should have atleast 3 characters', minLength(3))
                    },
                    lastname:{
                        required: helpers.withMessage(" must be required", required),                    
                        alpha: helpers.withMessage(' should have only alphabet characters', alpha), 
                        minLength: helpers.withMessage(' should have atleast 3 characters', minLength(3))
                    },
                    username: { required: helpers.withMessage(" must be required", required)
                              , email: helpers.withMessage(" must be valid email", email)
                        },
                    password : { 
                        required: helpers.withMessage(" must be required", required),
                        minLength: helpers.withMessage(' should have 8 characters or more ', minLength(8))
                     },
                    confirm:{
                        required: helpers.withMessage(" must be required", required),
                        sameAs: helpers.withMessage(' password didn’t match.', sameAs(state.user.password)) 
                    }
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
            showSnackbar: false,
            position: 'left',
            duration: 4000,
            isInfinity: false
               
          
        }
    },
   
    methods:{
        signup(){
            this.v$.$validate()
            if(!this.v$.$error){
                // alert("form submitted")
                let sendingData = {
                    "firstName": this.state.user.firstname,
                    "lastName": this.state.user.lastname,
                    "email": this.state.user.username,
                    "mobile": 1234567890,
                    "pass": this.state.user.password
                }
                axios.post("http://localhost:3001/users/register",sendingData).then(()=> {
                    console.log("success");
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
