
import Searchbox from '../Searchbox/Searchbox.vue'

export default{
    name: 'DashboardHeader',
    components:{
        Searchbox,
    },
    mounted(){
        var loginData = JSON.parse(localStorage.getItem("loginData"));
        if(loginData != null){
            this.$router.push('/keep')
        }
        else{
            this.$router.push('/login')
        
        }
    }
}