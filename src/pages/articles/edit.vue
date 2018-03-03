<template>
    <div>
            <!--文章标题-->
            <el-row>
                <el-col :md="24">
                    <el-input type="text" id = "articleTitle" class="form-control" placeholder="标题：我们也曾年轻过" />
                </el-col>
            </el-row><!--文章标题-->
            <br>
            <el-row :gutter="10"><!--分类标签-->
                <el-col :md="16">
                    <el-row :gutter="10">
                        <el-col :md="4">
                            <el-select id = "articleType" placeholder="请选择文章分类">
                                <el-option label="前端开发" value="1"></el-option>
                                <el-option label="网站设计" value="2"></el-option>
                                <el-option label="后端开发" value="3"></el-option>
                                <el-option label="数据库开发" value="4"></el-option>
                                <el-option label="服务器维护" value="5"></el-option>
                            </el-select>
                        </el-col>
                        <el-col :md="20">
                            <MyAutoComp :data-list="list" :data-string="string" :data-return.sync="foo"></MyAutoComp>
                        </el-col>
                    </el-row>
                    <br>
                    <el-row>
                        <el-col :md="24">
                            <el-input type="textarea" :rows="2" 
                                placeholder="文章概要:可选，当不填写时，默认取文章内容前120字作为概要" >
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
                    <!--编辑器控制条-->
                    <div class="row form-group wangEditor1" id = "editor1"></div>
                    <!--内容编辑区-->
                    <div class="row form-group wangEditor" id = "editor2"></div>
                </el-col>
            </el-row><!--富文本编辑区-->

            <el-row><!--操作按钮-->
                <el-col :md="8">
                    <el-button type="primary" round>保存</el-button>
                </el-col>
                <el-col :md="8">
                    <el-button id = "insertArticle" @click="insert()" type="success" round>发布</el-button>
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

    

export default{
    data:function(){
        return{
           list:["ok",
                "Oracle",
                "Oracle 11g",
                "Oracle or Mysql",
                "origin",
                "oh",
                "Or",
                "Open"],
            foo:"a",
            string:null 
        }
    },
    components:{
        MyAutoComp
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
        console.log("aaaaa");
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      imgUploadSuccess(response){
        console.log("imgUploadSuccess",response);
      }
    },
    mounted() {
        var editor = new E("#editor1","#editor2");
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        editor.create()
      }
}
</script>

<style>

</style>