/**
 * Created by yangkaile on 2018/2/3.
 * 自定义Vue组件
 */
Vue.component('my-component',{
    template: '<div>A custom component!</div>'
});
Vue.component('my-nav',{
    props:['titles'],
    template: '<el-row><el-col :xs="8" :sm="6" :md="4" :lg="4" v-for="title in titles" :key="title.type"><h2><a :href="title.href">{{title.text}}</a></h2></el-col></el-row>'

});

Vue.component('my-test',{
   props:['activeIndex'],
    template:'<el-menu :default-active="activeIndex" class="el-menu-demo" ' +
    'mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">'
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
/**
 * 自动完成组件
 * 使用了element ui的el-input组件后，js原有的onkeyup事件失效，于是只能采用在el-input组件外套用span标签解决
 * 引用方式  <my-auto-comp :data-list="list" :data-string="'aaa'" :data-return.sync="foo"></my-auto-comp>
 * 参数说明：data-list:可选项的数据源  data-string:初始化时输入框显示的值  data-return:组件返回的结果（最终在输入框显示的值）
 */
Vue.component('my-auto-comp',{
    props:['dataList',"dataString","dataReturn"],
    template:'<div><span v-on:keyup="keyup"><el-input type="text" v-model="dataStr" placeholder="添加标签，不同标签请用英文逗号隔开"  /></span>' +
    '<el-card class="box-card" :style="myClass"><div v-for="str in list" @click="click(str)" >{{str}}</div></el-card></div>',
    data: function () {
        return {
            dataStr: this.dataString,
            dataBase:this.dataList,
            list:new Array(),
            myClass:{
                display:"none"
            }
        }
    },
    methods:{
        keyup:function () {
            this.$emit('update:dataReturn', this.dataStr);
            this.list = new Array();
            var str = this.dataStr.trim();
            if(str == "" || str.lastIndexOf(";")+1 == str.length) {
                this.myClass.display = "none";
                return;
            }
            if(str.lastIndexOf(";") != -1){
                str = str.substring(str.lastIndexOf(";")+1);
            }
            str = str.toLocaleLowerCase();
            for(var index in this.dataBase){
                var data = this.dataBase[index];
                if(data.toLocaleLowerCase().indexOf(str) != -1){
                    this.list.push(data);
                }
            }
            if(this.list != null && this.list.length > 0){
                this.myClass.display = "block";
            }else{
                this.myClass.display = "none";
            }
        },
        click:function (str) {
            if(this.dataStr.lastIndexOf(";") != -1){
                this.dataStr = this.dataStr.substring(0,this.dataStr.lastIndexOf(";") + 1) + str + ";";
            }else{
                this.dataStr = str + ";";
            }
            this.$emit('update:dataReturn', this.dataStr);
            var index = this.list.indexOf(str);
            if(index > -1){
                this.list.splice(index,1);
            }

        }
    }
});
