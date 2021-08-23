import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import router from "@/router";
import "@/assets/style.css";
import appHeader from "@/components/Shared/appHeader";
import appBookmarkList from "@/components/Shared/appBookmarkList";
import appAxios from "./utils/appAxios";

const app = createApp(App);
app.component("appHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);

app.config.globalProperties.$appAxios = appAxios;
app.use(store);
app.use(router);
app.mount("#app");
