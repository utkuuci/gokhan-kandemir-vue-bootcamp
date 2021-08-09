const app = Vue.createApp({
  data() {
    return {
      value: "",
      value2: "",
    };
  },
  methods: {
    showAlert() {
      alert("魔鬼狼");
    },
  },
}).mount("#exercise");
