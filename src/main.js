import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import './lib/js/wangEditor'

import testA from './pages/child/a.vue'
import testB from './pages/child/b.vue'
import mainVue from "./pages/main.vue"
import ArticleEdit from './pages/articles/edit.vue'

Vue.use(ElementUI);
Vue.use(VueRouter);

var routes = [
  { path: '/', redirect: '/home' },
  { path:"/a",component:testA},
  { path:"/b",component:testB},
  { path:"/home",component:mainVue,
      children:[
        { path:"ArticleEdit",component:ArticleEdit},
        { path:"b",component:testB}
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
