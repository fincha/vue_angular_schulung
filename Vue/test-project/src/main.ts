import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';


import HelloWorld from "./components/HelloWorld.vue";
import HelloWorld2 from "./components/HelloWorld2.vue";
import HelloWorld3 from "./components/HelloWorld3.vue";
import HelloWorld4 from "./components/HelloWorld4.vue";

Vue.config.productionTip = false;

// Vue.prototype.$db = firebase.database();
const routes = [
  { path: '/hello1', component: HelloWorld },
  { path: '/hello2', component: HelloWorld2 },
  { path: '/hello3', component: HelloWorld3 },
  { path: '/hello4', component: HelloWorld4 },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
