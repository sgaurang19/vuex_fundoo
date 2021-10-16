
import { mapGetters, mapActions } from 'vuex'

export default{
    name: 'Menu',
    computed: mapGetters(["returnMessages"]),
    methods: {
        ...mapActions(["removeNotification"]),
    },
    updated(){
        setTimeout(()=>{
            this.removeNotification()
        }, 3000)
    }
}