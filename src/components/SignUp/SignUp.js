import {mapActions} from 'vuex';
// import Signup from '@/components/Addtodo.vue'
export default {
    data(){
        // userdetails: [];
        return{
            userdata:{
                "fname":'',
                "lname":'',
                "username":'',
                "pass":'',
                "cpass":''
            }
        }
    },
    methods:{
        ...mapActions(["adduser"]),
        adduser1(){
            this.adduser(this.userdata)
        }
    }
    
}

