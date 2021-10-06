import {mapActions} from 'vuex';
// import Signup from '@/components/Addtodo.vue'
import Logo from '@/components/Logo/Logo.vue'
import Inputbox from '@/components/Inputbox/Inputbox.vue'

export default {
    components:{
        Logo,Inputbox
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
