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
    data() {
      return {
        value: "",
        msg: this.placeholder,
        inputData: this.data
      };
    },
  };