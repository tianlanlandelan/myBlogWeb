import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'

import testA from './pages/child/a.vue'
import testB from './pages/child/b.vue'
import mainVue from "./pages/main.vue"

Vue.use(ElementUI);
Vue.use(VueRouter);

var routes = [
  { path: '/', redirect: '/main' },
  {path:"/a",component:testA},
  {path:"/b",component:testB},
  {path:"/main",component:mainVue,
    children:[
      {path:"a",component:testA},
      {path:"b",component:testB}
    ]
  }
  
];

var router = new VueRouter({
  mode:"history",
  routes:routes
});

new Vue({
  el:"#app",
  router:router,
  render: h => h(App)
});
