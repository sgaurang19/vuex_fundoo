
import Searchbox from '../Searchbox/Searchbox.vue'
import { mapGetters, mapActions } from 'vuex'

export default{
    name: 'DashboardHeader',
    components:{
        Searchbox,
    },
    props:{
        logo_txt:{
            type: String,
            // default: "Keep"
        }
    },
    data(){
        return{
            logo_text : this.logo_txt
        }
    },
    mounted(){
        var loginData = JSON.parse(localStorage.getItem("loginData"));
        if(loginData == null){
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