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
                <router-link :to="menu.url">{{menu.name}}</router-link>
            </el-menu-item> 
        </el-submenu> 
    </el-menu>
</template>
<script>
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
    