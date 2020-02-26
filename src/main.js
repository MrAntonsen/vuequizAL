import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue } from "bootstrap-vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./routes.js";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({ routes });
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
