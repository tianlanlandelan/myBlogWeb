import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'

import testA from './pages/child/a.vue'
import testB from './pages/child/b.vue'

Vue.use(ElementUI);
Vue.use(VueRouter);

var routes = [
  {path:"/a",component:testA},
  {path:"/b",component:testB},
  { path: '/', redirect: '/b' }
];

var router = new VueRouter({
  routes
});

new Vue({
  el:"#app",
  router:router,
  render: h => h(App)
});
