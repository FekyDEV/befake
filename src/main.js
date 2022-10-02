import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import VueClipboard from "vue3-clipboard";
import VueGtag from "vue-gtag";
import store from "./store";
// import Home from "./pages/Home.vue";

// import { createRouter, createWebHistory } from "vue-router";

// import { createStore } from "vuex";
// const routes = [
//   { path: "/", component: Home },
//   // { path: "/graph", component: Graph },
// ];
// const router = createRouter({
//   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//   history: createWebHistory(),
//   routes, // short for `routes: routes`
// });

// const store = createStore({
//   state() {
//     return {
//       loggedIn: localStorage.getItem("token") ? true : false,
//     };
//   },
//   mutations: {
//     logout(state) {
//       localStorage.clear();
//       state.loggedIn = false;
//     },
//     login(state) {
//       state.loggedIn = true;
//     },
//   },
//   actions: {
//     login({ commit }, j) {
//       localStorage.setItem("phone", j.phone);
//       localStorage.setItem("token", j.token);
//       localStorage.setItem("refreshToken", j.refreshToken);
//       localStorage.setItem("expiration", j.expiration);
//       commit("login");
//     },
//   },
// });
const app = createApp(App);
app.use(store);
app.use(router);
app.use(
  VueGtag,
  {
    config: { id: "G-ZJ1LQLNXRG" },
  },
  router
);
app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
});
app.mount("#app");
