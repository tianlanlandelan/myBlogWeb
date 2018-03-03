<template>
<div>
    <div>
      <el-button @click="startHacking">Start</el-button>
    </div>
    <el-row>
      <el-col :md="24">
        <MyTopMenu></MyTopMenu>
      </el-col>
    </el-row>
    <el-row>
      <el-col :md="3">
        <MyLeftMenu :left-menu-value="leftMenuValue"></MyLeftMenu>
      </el-col>
      <el-col :md="10">
        <router-link to="/a">Go to Foo</router-link>
          <router-link to="/b">Go to Bar</router-link>
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
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
