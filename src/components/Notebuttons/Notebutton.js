import {mapActions} from 'vuex';

export default{
    name: 'NoteButtons',
    props: {
        Noteid: {
          type: String,
          
        },
        RouteActive:{
          type: String
        }
    },
    data() {
        return {
         NOTE_ID : this.Noteid,
         RouteNameActive: this.RouteActive
        };
      },
    methods:{
        ...mapActions(["ArchivedNotewithID","UnArchivedNotewithID", "DeleteNoteWithID","UnDeleteNoteWithID", "ChangeColor"]),
        ArchicedNoteBTN(note_id){
            const NoteID =note_id
            
            console.log(NoteID);
            this.ArchivedNotewithID(NoteID).then((res)=>{
                console.log(res);
            }).catch((err)=>{
                console.log(err);
                });

        },
        UnArchicedNoteBTN(note_id){
          const NoteID =note_id
          
          console.log(NoteID);
          this.UnArchivedNotewithID(NoteID).then((res)=>{
              console.log(res);
          }).catch((err)=>{
              console.log(err);
              });

        },
        
        DeleteNote(note_id){

          const NoteID =note_id
            console.log(NoteID);
            this.DeleteNoteWithID(NoteID).then((res)=>{
                console.log(res);
            }).catch((err)=>{
                console.log(err);
                });
        },
        
        UnDeleteNote(note_id){

          const NoteID =note_id
            console.log(NoteID);
            this.UnDeleteNoteWithID(NoteID).then((res)=>{
                console.log(res);
            }).catch((err)=>{
                console.log(err);
                });
        }
        ,
        changeColor(code, note_ID){
          // console.log(note_ID);
          let data_color={
            code : code,
            ID : note_ID
          }
          console.log(data_color.ID);
          this.ChangeColor(data_color).then((res)=>{
              console.log(res);
            }).catch((err)=>{
              console.log(err);
            });

        }
  
      }
}