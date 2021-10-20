import { mapActions } from "vuex";
export default{
    name: 'NewNote',
    data(){
        return{
            newNoteBoolean: true
        }
    },
    methods: {
        ...mapActions( ["AddNOte"]),
        newNoteSwitch(){
            this.newNoteBoolean = !this.newNoteBoolean
        },
        newNote(){
            if((this.title != null) && (this.desc != null) ){
                this.NewNote();
                this.title="";
                this.desc="";

                this.newNoteSwitch()
            }
            else{
                this.newNoteSwitch()

            }
        },
        NewNote(){
            
            const NoteData={
              "title" : this.title.toString(),
              "desc" : this.desc.toString() 
            }
    
            this.AddNOte(NoteData)
          }
    },
    components:{
        
    }
} 