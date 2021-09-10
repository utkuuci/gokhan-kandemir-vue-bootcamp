import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
// import AddSection from "./components/AddSection.vue";
// import TodoList from "./components/TodoList.vue";

const app = createApp(App);

// app.component("AddSection", AddSection);
// app.component("TodoList", TodoList);
app.mount("#app");
