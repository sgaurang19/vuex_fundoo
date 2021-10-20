import {mapGetters, mapActions} from 'vuex';
import Icons from '@/components/Notebuttons/Notebutton.vue'


export default {
    name: "Inputbox",
    props: {
      color: {
        type: String,
        default: "#1A73E8",
      },
      Notes_text:{
          type: String
      }
    },
    components:{
        Icons
    }
    ,
    data() {
      return {
        value: "",
        msg: this.placeholder,
        inputData: this.data
      };
    },
    methods:{
      ...mapActions(["ArchivedNotes"]),
      

    },
    created(){
        this.ArchivedNotes();
    },
    computed:
      mapGetters(["allNotes"]),
  };