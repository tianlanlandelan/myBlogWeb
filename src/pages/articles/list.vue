<template>
    <div>
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'title', order: 'descending'}"
            >
            <el-table-column prop="title" label="标题" sortable></el-table-column>
            <el-table-column prop="typeName" label="类型" sortable></el-table-column>
            <el-table-column prop="sendTimeStr" label="发布时间" sortable></el-table-column>
            <el-table-column label="测试">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="bottom">
                    <el-button type="success" round size="mini" @click="showInfo(scope.row.id)">查看</el-button>
                    <el-button type="warning" round size="mini" @click="editInfo(scope.row.id)">修改</el-button>
                    <el-button type="danger"  round size="mini"><router-link style="color:#000;text-decoration: none;" to="/home/ArticleEdit">删除</router-link></el-button>
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">操作:{{ scope.row.id}}</el-tag>
                    </div>
                    </el-popover>
                </template>
                </el-table-column>
        </el-table>  
    </div>
</template>

<script>
import axios from "axios"
import config from "../../json/config.json"

    

export default{
    data:function(){
        return{
            getListUrl:config.myConfig.hostUrl + config.myRequestUrl.articleInfo.getAll,
            tableData: null
        }
    },
    components:{
      
    },
    methods:{
        showInfo(id){
            console.log("showInfo",id);
            this.$router.push("/home/ArticleView/" + id);
        },
        editInfo(id){
            console.log("editInfo",id);
            this.$router.push("/home/ArticleEdit/" + id);
        }   
    },
    mounted:function(){ /*加载文章列表*/
        let _this = this;
            console.log("getArticleList:",this.getListUrl);
            axios.get(this.getListUrl
            ,{
            })
            .then(function (response){
               _this.tableData = response.data.data;
            })
            .catch(function (error){
                console.log(error);
            });
    }
}
</script>

<style>

</style>