import {mapGetters, mapActions} from 'vuex';
import Icons from '@/components/Notebuttons/Notebutton.vue'


export default {
    name: "Inputbox",
    props: {
      color: {
        type: String,
        default: "#fff",
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
      ...mapActions(["getAll_Notes", "AddNOte"]),
      
      

    },
    created(){
        this.getAll_Notes();
    },
    computed:
      mapGetters(["allNotes"]),
  };