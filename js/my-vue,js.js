/**
 * Created by yangkaile on 2018/2/3.
 * 自定义Vue组件
 */
Vue.component('my-component',{
    template: '<div>A custom component!</div>'
});
Vue.component('my-nav',{
    props:['titles'],
    template: '<el-row><el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="title in titles" :key="title.type"><h2><a :href="title.href">{{title.text}}</a></h2></el-col></el-row>',

});


