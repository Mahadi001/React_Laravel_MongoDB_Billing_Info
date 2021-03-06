require("./bootstrap");
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import App from "./components/App.vue";

import store from "./store.js";

new Vue({
    render: h => h(App),
    el: "#app",
    store: store
});
