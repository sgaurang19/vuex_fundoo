import {mapActions} from 'vuex';
import Logo from '@/components/Logo/Logo.vue'
import Inputbox from '@/components/Inputbox/Inputbox.vue'


// import Signup from '@/components/Addtodo.vue'
export default {
    components:{
        Logo, Inputbox
    },
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

