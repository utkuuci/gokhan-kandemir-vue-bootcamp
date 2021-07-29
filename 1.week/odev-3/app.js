const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    result() {
      return this.value === 33 ? "Tamamlandi" : "Tamamlanmadi :(";
    },
  },
  watch: {
    result() {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    },
  },
}).mount("#exercise");
