/**
 * Created by yangkaile on 2018/2/3.
 * 自定义Vue组件
 */
Vue.component('my-component',{
    template: '<div>A custom component!</div>'
});
Vue.component('my-nav',{
    props:['titles'],
    template: '<el-row><el-col :xs="8" :sm="6" :md="4" :lg="4" v-for="title in titles" :key="title.type"><h2><a :href="title.href">{{title.text}}</a></h2></el-col></el-row>',

});

Vue.component('my-test',{
   props:['activeIndex'],
    template:'<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">'
               + '<el-menu-item index="1">处理中心</el-menu-item>'
               + '<el-submenu index="2">'
               + '<template slot="title">我的工作台</template>'
               + '<el-menu-item index="2-1">选项1</el-menu-item>'
               + '<el-menu-item index="2-2">选项2</el-menu-item>'
               + '<el-menu-item index="2-3">选项3</el-menu-item>'
               + '</el-submenu>'
               + '<el-menu-item index="3">订单管理{{activeIndex}}</el-menu-item>'
               + '</el-menu>',
    methods: {
        handleSelect: function(key, keyPath) {
            console.log(key, keyPath,"----",this.activeIndex);
        }
    }
});

