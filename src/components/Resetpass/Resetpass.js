// import {mapActions} from 'vuex';
// import Signup from '@/components/Addtodo.vue'
import Logo from '@/components/Logo/Logo.vue'
import Inputbox from '@/components/Inputbox/Inputbox.vue'
// import axios from 'axios';
import useVuelidate from '@vuelidate/core';
import { required , helpers, sameAs, minLength} from '@vuelidate/validators';
import { reactive, computed } from 'vue';
import userService from '@/services/userServices';
const us = new userService();




export default {
    setup(){
        const state = reactive({
            reset:{
                n_password:'',
                n_confirm:'',

            }
        });

        const rules = computed(()=>{
            return{
                reset:{
                    n_password : { 
                        required: helpers.withMessage(" must be required", required),
                        minLength: helpers.withMessage(' should have 8 characters or more ', minLength(8))
                    },
                    n_confirm:{
                        required: helpers.withMessage(" must be required", required),
                        sameAs: helpers.withMessage(' password didn’t match.', sameAs(state.reset.n_password)) 
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
            
       
            
               
          
        }
    },
   
    methods:{
        resetpass(){
            this.v$.$validate()
            if(!this.v$.$error){
                console.log(this.$route.params.token);
                // alert("form submitted")
                let sendingData = {
                    
                    
                    "pass": this.state.reset.n_password
                    // password: setPass

                }
                const headers = {
                    'x-auth-token': this.$route.params.token
                }
                us.resetpass(sendingData, headers).then(()=>{
                    alert("password updated successfully! please login again");
                    // location.href="http://localhost:8080/login";
                    this.$router.push('/login')
                }).catch((err)=>{console.log("Error"+err);})
               
                
                
            }
            else{
                // alert("error")
            }
        }
    },
    
}

// {{$route.params.token}}