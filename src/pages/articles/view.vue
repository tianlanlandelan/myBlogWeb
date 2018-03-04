<template>
   <div>
       <div><h1 style="color:#303133;">{{articleInfo.title}}</h1></div>
        <el-row>
            <el-col :md="6">
                {{articleInfo.sendTimeStr}}
            </el-col>
            <el-col :md="6">
                {{articleInfo.typeName}}
            </el-col>
        </el-row>
        <div  v-html="articleInfo.content"></div>
    </div> 
</template>
<script>
import axios from "axios"
import config from "../../json/config.json"
export default {
  data:function(){
      return{
            getInfoUrl:config.myConfig.hostUrl + config.myRequestUrl.articleInfo.getById,
            articleInfo:null
      }
  },
  mounted:function(){
      let _this = this;
      console.log("id:",this.$route.params.id);
        axios.get(this.getInfoUrl
            ,{
                params:{"id":this.$route.params.id}
            })
            .then(function (response){
               console.log( response.data.data[0]);
               _this.articleInfo = response.data.data[0];
            })
            .catch(function (error){
                console.log(error);
            });
  }
}
</script>

