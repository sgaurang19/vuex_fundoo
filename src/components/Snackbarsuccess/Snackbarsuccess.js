
import { mapGetters, mapActions } from 'vuex'

export default{
    name: 'Menusuccess',
    computed: mapGetters(["returnMessagessuccess"]),
    methods: {
        ...mapActions(["removeNotificationsuccess"]),
    },
    updated(){
        setTimeout(()=>{
            this.removeNotificationsuccess()
        }, 5000)
    }
}