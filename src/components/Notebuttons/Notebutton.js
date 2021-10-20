import {mapActions} from 'vuex';

export default{
    name: 'NoteButtons',
    props: {
        Noteid: {
          type: String,
          
        },
    },
    data() {
        return {
         NOTE_ID : this.Noteid
        };
      },
    methods:{
        ...mapActions(["ArchivedNotewithID"]),
        ArchicedNoteBTN(note_id){
            const NoteID =note_id
            let archived = {
                "isArchive" : true
            }
            console.log(NoteID);
            this.ArchivedNotewithID(NoteID, archived).then((res)=>{
                console.log(res);
            }).catch((err)=>{
                console.log(err);
                });

        }
  
      }
}