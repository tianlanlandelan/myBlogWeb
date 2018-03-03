<template>
<div>
    <el-row >
      <el-col :md="24">
        <MyTopMenu></MyTopMenu>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :md="3">
        <MyLeftMenu :left-menu-value="leftMenuValue"></MyLeftMenu>
      </el-col>
      <el-col :md="20">
        <br>
        <router-view></router-view>
      </el-col>
    </el-row>
</div>
  
</template>
<script>
import jsonData from "../json/database.json"     //数据源
import MyTopMenu from './MyTopMenu.vue'   //顶部导航菜单
import MyLeftMenu from './MyLeftMenu.vue' //左侧功能菜单


export default {
  data:function(){
    return{
        leftMenuValue:jsonData.leftMenuValue
    }
  },
  components:{
    MyTopMenu,
    MyLeftMenu
  },
  methods: {
  
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
