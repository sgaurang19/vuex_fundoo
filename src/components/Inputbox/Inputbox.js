export default {
    name: "Inputbox",
    props: {
      color: {
        type: String,
        default: "#1A73E8",
      },
      error: {
        type: String,
        default: "",
      },
      error_msg: {
        type: String,
        default: "",
      },
      vm:{
        type: String
      },
      label: {
        type: String,
        default: "",
      },
      alt: {
        type: String,
        default: "name",
      },
      inputtype: {
        type: String,
        default: "text",
      },
      placeholder: {
        type: String,
        default: " ",
      },
      idofInput: {
        type: String,
        default: " ",
      },
      nameofInput: {
        type: String,
        default: " ",
      },
    },
    data() {
      return {
        value: "",
        msg: this.placeholder,
        inputData: this.data
      };
    },
  };