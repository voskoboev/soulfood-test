import "../node_modules/normalize.css/normalize.css";
import "@/assets/styles/main.styles.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import AppButton from "@/components/UI/AppButton/AppButton.vue";

const app = createApp(App);

app.use(createPinia());
app.component("AppButton", AppButton);

app.mount("#app");
