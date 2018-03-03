<template>
    <div>
            <!--文章标题-->
            <el-row>
                <el-col :md="24">
                    <el-input type="text" id = "articleTitle" class="form-control" placeholder="标题：我们也曾年轻过" />
                </el-col>
            </el-row><!--文章标题-->

            <el-row><!--分类标签-->
                <el-col :md="6">
                    <el-select id = "articleType" placeholder="请选择分类" value="1">
                        <el-option label="前端开发" value="1"></el-option>
                        <el-option label="网站设计" value="2"></el-option>
                        <el-option label="后端开发" value="3"></el-option>
                        <el-option label="数据库开发" value="4"></el-option>
                        <el-option label="服务器维护" value="5"></el-option>
                    </el-select>
                </el-col>
                <el-col :md="18">
                    <MyAutoComp :data-list="list" :data-string="string" :data-return.sync="foo"></MyAutoComp>
                </el-col>
            </el-row><!--分类标签-->

            <el-row><!--概要、缩略图-->
                <el-col :md="14">
                    <span><strong>文章概要</strong>（可选，当不填写时，默认取文章内容前120字作为概要）</span>
                    <textarea id = "articleOutline" class="form-control my_textarea"></textarea>
                </el-col>
                <el-col :md="10">
                    <el-row>
                        <el-col :md="12">
                            <form id = "imgUploadForm" enctype="multipart/form-data" method="post" action="http://127.0.0.1:8080/common/upload">
                                <span><strong>文章缩略图</strong>（可选）</span>
                                <input type="file" name="file" accept="image/*" class="form-group" id="imgSelectBtn"/>
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="submit" value="上 传" class="form-control  btn-primary btn-group-sm"/>
                                    </div>
                                    <div class="col-md-6">
                                        <span id = "imgUnUploadMessage">图片尚未上传</span>
                                        <span id = "imgUploadMessage">上传成功</span>
                                    </div>
                                </div>
                            </form>
                        </el-col>
                        <el-col :md="12">
                            <img class="my_img" src="" id = "imgPre">
                        </el-col>
                    </el-row>
                </el-col>
            </el-row><!--概要、缩略图-->

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
    }
}
</script>

<style>

</style>