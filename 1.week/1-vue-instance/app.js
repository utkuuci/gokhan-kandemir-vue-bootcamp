const app = Vue.createApp({
  data() {
    return {
      title: "Vue.js Bootcamp 1.gun",
      content: "Lorem ispum dolor sit amet",
      eduflow: {
        title: "Siteye Git",
        target: "_blank",
        url: "https://eduflow.kablosuzkedi.com",
      },
      owner: "Muzaffer Tolga Yakar",
      coords: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    changeTitle(text) {
      this.title = text;
    },
    updateCoords(event) {
      this.coords = {
        x: event.x,
        y: event.y,
      };
    },
  },
}).mount("#app");
