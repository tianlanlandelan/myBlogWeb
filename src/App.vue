<template>
  <div id="app">

    <!-- <img src="./assets/logo.png">
    <div>
      <el-button @click="startHacking">Start</el-button>
    </div> -->
    <el-row>
      <el-col :md="24">
        <MyTopMenu></MyTopMenu>
      </el-col>
    </el-row>
    <el-row>
      <el-col :md="3">
        <MyLeftMenu :left-menu-value="leftMenuValue"></MyLeftMenu>
      </el-col>
    </el-row>

  </div>
</template>

<script>
var leftMenuValue = [
    {"name":"内容管理","value":"0","index":0,"children":[
        {"name":"文章管理","value":"1","url":"http://www.baidu.com"
        },
        {"name":"评论管理","value":"2","url":"http://www.baidu.com"
        },
        {"name":"分类管理","value":"3","url":"http://www.baidu.com"
        },
        {"name":"标签管理","value":"4","url":"http://www.baidu.com"
        }
    ]},
    {"name":"用户管理","value":"10","index":0,"children":[
        {"name":"用户列表","value":"11","url":"http://www.baidu.com"
        }
    ]},
    {"name":"数据统计","value":"20","index":0,"children":[
        {"name":"访问量","value":"21","url":"http://www.baidu.com"
        }
    ]},
    {"name":"博客设置","value":"30","index":0,"children":[
        {"name":"博客设置","value":"31","url":"http://www.baidu.com"
        }
    ]}
    ];

import MyTopMenu from './pages/MyTopMenu.vue'
import MyLeftMenu from './pages/MyLeftMenu.vue'


export default {
  data:function(){
    return{
        leftMenuValue:leftMenuValue
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
