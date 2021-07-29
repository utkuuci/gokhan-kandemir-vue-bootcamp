const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {},
  computed: {
    getCounterResult() {
      console.log("counter 1 calisti");
      return this.counter > 5 ? "BUYUK" : "KUCUK";
    },
    getCounter2Result() {
      console.log("counter 2 calisti");
      return this.counter2 > 5 ? "BUYUK" : "KUCUK";
    },
  },
  watch: {
    counter(newValue, oldValue) {
      console.log(oldValue, "=>", newValue);
    },
    getCounterResult(newValue, oldValue) {
      console.log(oldValue, "=>", newValue);
    },
  },
}).mount("#app");
