const app = Vue.createApp({
  data() {
    return {
      value: "",
      value2: "",
    };
  },
  methods: {
    showAlert() {
      alert("魔鬼浪");
    },
  },
}).mount("#exercise");
