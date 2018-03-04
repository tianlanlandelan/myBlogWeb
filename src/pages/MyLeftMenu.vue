<template>
    <el-menu    class="el-menu-vertical-demo" 
                @open="handleOpen" 
                @close="handleClose" 
                background-color="#545c64" 
                text-color="#fff" 
                active-text-color="#ffd04b">
        <el-submenu v-for="fatherMenu in leftMenuValue" :key="fatherMenu.name" v-bind:index="fatherMenu.value" >    
            <template slot="title">   
                <i class="el-icon-location"></i>  
                <span>{{fatherMenu.name}} </span>    
            </template>   
            <el-menu-item   v-for="menu in fatherMenu.children" :key="menu.name" 
                            style="min-width: 50px" 
                            v-bind:index="menu.value" 
                            @click="handleClick(menu.value,menu.name,menu.url)">
                <router-link style="color:#fff;text-decoration: none;" :to="menu.url">{{menu.name}}</router-link>
            </el-menu-item> 
        </el-submenu> 
    </el-menu>
</template>
<script>
/**
 * 左侧导航组件
 * 引用方式:<MyLeftMenu :left-menu-value="leftMenuValue"></MyLeftMenu>
 * 参数说明:    leftMenuValue:导航数据源,格式如：[{"name":"内容管理","value":"0","index":0,"children":[{"name":"文章管理","value":"1","url":"/main/a"},
     {"name":"评论管理","value":"2","url":"/main/a" },{"name":"分类管理","value":"3","url":"/main/a"},{"name":"标签管理","value":"4","url":"/main/a" }]},
    {"name":"用户管理","value":"10","index":0,"children":[{"name":"用户列表","value":"11","url":"/main/a"}]},
    {"name":"数据统计","value":"20","index":0,"children":[{"name":"访问量","value":"21","url":"/main/a" }]},
    {"name":"设置","value":"30","index":0,"children":[{"name":"博客设置","value":"31","url":"/main/a"}]}];
 */

export default {
    data: function () {
        return {
           
        }
    },
    props:['leftMenuValue'],
    methods:{
        handleOpen:function(key, keyPath) {
            console.log("handleOpen--",key, keyPath);
        },
        handleClose:function(key, keyPath) {
            console.log("handleClose--",key, keyPath);
        },
        handleClick:function(a,b,c) {
            console.log("handleClick--",a,b,c);
        }
    }
}
</script>
    