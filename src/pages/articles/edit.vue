<template>
    <div>
            <!--文章标题-->
            <el-row>
                <el-col :md="24">
                    <el-input type="text" id = "articleTitle" class="form-control" placeholder="标题：我们也曾年轻过" v-model="articleInfo.title"/>
                </el-col>
            </el-row><!--文章标题-->
            <br>
            <el-row :gutter="10"><!--分类标签-->
                <el-col :md="16">
                    <el-row :gutter="10">
                        <el-col :md="4">
                            <el-select v-model="articleInfo.typeName" style="z-index:100;" placeholder="请选择文章分类">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            
                        </el-col>
                        <el-col :md="20">
                            <MyAutoComp v-model="autoCompData"></MyAutoComp>
                        </el-col>
                    </el-row>
                    <br>
                    <el-row>
                        <el-col :md="24">
                            <el-input type="textarea" :rows="2" 
                                placeholder="文章概要:可选，当不填写时，默认取文章内容前120字作为概要" v-model="articleInfo.outline">
                            </el-input>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :md="4">
                    <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="http://127.0.0.1:8080/common/upload"
                        :on-remove="handleRemove"
                        :on-success="imgUploadSuccess"
                        :auto-upload="false"
                        limit='1'
                        list-type="picture">
                        <el-button slot="trigger" size="small" type="primary">选择图片</el-button>
                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传不超过500kb的图片</div>
                    </el-upload>
                    
                </el-col>
                
            </el-row><!--分类标签-->
            <br>
            

            <el-row><!--富文本编辑区-->
                <el-col :md="24">
                    <div style="border: 1px solid #ccc;"  id = "editor1"></div>
                    <div style="min-height:400px;border-left: 1px  solid #ccc;border-right: 1px  solid #ccc;border-bottom: 1px  solid #ccc;"  id = "editor2"></div>
                </el-col>
            </el-row><!--富文本编辑区-->
            <br>
            <el-row><!--操作按钮-->
                <el-col :md="8">
                    <el-button type="primary" round>保存</el-button>
                </el-col>
                <el-col :md="8">
                    <el-button id = "insertArticle" @click="insert" type="success" round>发布</el-button>
                </el-col>
                <el-col :md="8">
                    <el-button type="info" round>定时发布</el-button>
                </el-col>
            </el-row><!--操作按钮-->

    </div>
</template>

<script>
import MyAutoComp from "../utils/MyAutoComp.vue"
import E from 'wangeditor'
import axios from "axios"
import config from "../../json/config.json"

    

export default{
    data:function(){
        return{//文章详情
            articleInfo:{},
            options: [{
                value: '1',
                label: '前端开发'
                }, {
                value: '2',
                label: '网站设计'
                }, {
                value: '3',
                label: '后端开发'
                }, {
                value: '4',
                label: '数据库开发'
                }, {
                value: '5',
                label: '服务器维护'
                }],
            //自动完成控件数据源
            autoCompData:{
                dataString:"null",
                dataList:["ok",
                "Oracle",
                "Oracle 11g",
                "Oracle or Mysql",
                "origin",
                "oh",
                "Or",
                "Open"]
            },
            //编辑器
            editor : new E("#editor1","#editor2"),
            //图片上传成功后服务器返回的图片路径
            imgUrl:null,
            //获取文章详情的url
            getInfoUrl:config.myConfig.hostUrl + config.myRequestUrl.articleInfo.getById,
            insertInfoUrl:config.myConfig.hostUrl + config.myRequestUrl.articleInfo.insert,
            
        }
    },
    components:{
        MyAutoComp
    },
    methods: {
      //上传图片
      submitUpload() {
        this.$refs.upload.submit();
      },
      //移除选中的图片
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      //图片上传成功的回调
      imgUploadSuccess(response){
        console.log("imgUploadSuccess",response.data[0]);
        imgUrl = response.data[0];
      },
      //发布文章
      insert(){
        //   console.log(this.editor.txt.text());
        console.log(this.articleInfo.title);
            axios({
                method:"post",
                url:this.insertInfoUrl,
                data:{
                            title:this.articleInfo.title,
                            content:this.editor.txt.html(),
                            outline:this.articleInfo.outline,
                            txtContent:this.editor.txt.text(),
                            typeId:this.articleInfo.typeId,
                            tagNames:this.articleInfo.tagNames,
                            imgUrl:this.articleInfo.imgUrl
                        }
            })
            .then(function(response){
                console.log(response.data.message);
            })
            .catch(function(error){
                console.log(error);
            })
      }
    },
    mounted() {
        //初始化编辑器
        this.editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
        this.editor.create();
        //加载文章信息
        let _this = this;
        console.log("id:",this.$route.params.id);
        axios.get(this.getInfoUrl
            ,{
                params:{"id":this.$route.params.id}
            })
            .then(function (response){
               
               _this.articleInfo = response.data.data[0];
               _this.editor.txt.html(_this.articleInfo.content);
               _this.autoCompData.dataString = _this.articleInfo.tagNames;
               console.log("000000000",_this.autoCompData.dataString);
          
            })
            .catch(function (error){
                console.log(error);
            });
      }
}
</script>

<style>

</style>