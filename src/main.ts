import { createApp } from "vue";
import App from "./App.vue";

// 这是全局样式文件，必须要引入，否则会有样式丢失
import "element-plus/dist/index.css";

const app = createApp(App);

app.mount("#app");