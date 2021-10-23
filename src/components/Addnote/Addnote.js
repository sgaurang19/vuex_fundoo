import { mapActions } from "vuex";
export default{
    name: 'NewNote',
    props:{
        color:{
            type: String,
            default: '#fff'
        }
    },
    data(){
        return{
            newNoteBoolean: true
        }
    },
    methods: {
        ...mapActions( ["AddNOte"],),
        newNoteSwitch(){
            this.newNoteBoolean = !this.newNoteBoolean
        },
        newNote(){
            if((this.title != null) && (this.desc != null) ){
                this.NewNote();
                this.title="";
                this.desc="";
                this.color="#fff"

                this.newNoteSwitch()
            }
            else{
                this.newNoteSwitch()

            }
        },
        changeColorNote(code){
            this.color = code
            console.log(this.color);
        },
        NewNote(){
            
            const NoteData={
              "title" : this.title.toString(),
              "desc" : this.desc.toString() ,
              "color" : this.color
            }
    
            this.AddNOte(NoteData)
          }
    },
    updated(){

    },
    components:{
        
    }
} 