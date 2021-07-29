const app = Vue.createApp({
  data() {
    return {
      fullName: "Tolga",
    };
  },
  methods: {
    updateValue(event) {
      this.fullName = event.target.value;
    },
  },
}).mount("#app");
