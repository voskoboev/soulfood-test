import "../node_modules/normalize.css/normalize.css";
import "@/assets/styles/main.scss";

import { createApp } from "vue";
import App from "@/App.vue";
import AppButton from "@/components/UI/AppButton/AppButton.vue";
import AppCheckbox from "@/components/UI/AppCheckbox/AppCheckbox.vue";
import AppInput from "@/components/UI/AppInput/AppInput.vue";
import AppSelect from "@/components/UI/AppSelect/AppSelect.vue";

const app = createApp(App);

app.component("AppButton", AppButton);
app.component("AppCheckbox", AppCheckbox);
app.component("AppInput", AppInput);
app.component("AppSelect", AppSelect);

app.mount("#app");
