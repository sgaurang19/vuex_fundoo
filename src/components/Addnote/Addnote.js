export default{
    name: 'NewNote',
    data(){
        return{
            newNoteBoolean: true
        }
    },
    methods: {
        newNoteSwitch(){
            this.newNoteBoolean = !this.newNoteBoolean
        }
    },
    components:{
        
    }
} 