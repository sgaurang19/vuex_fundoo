
import Searchbox from '../Searchbox/Searchbox.vue'
import { mapGetters, mapActions } from 'vuex'

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
    ,
    computed: mapGetters(["returnSideNav"]),
    methods: {
        ...mapActions(["sideNavSwitch"]),
        click_sideNavSwitch(){
            this.sideNavSwitch();
        }
    }

}