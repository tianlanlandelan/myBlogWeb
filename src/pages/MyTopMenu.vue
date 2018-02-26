<template>
    <el-row style="color: #fff;background-color: #545c66;padding: 10px;"> 
        <el-col :md="18"> 
            后端管理  
        </el-col> 
        <el-col :md="2">  
            <el-badge :value="12" class="item"> <el-button size="small">评论</el-button > </el-badge>   
        </el-col> 
        <el-col :md="2">  
            <el-badge :value="3" class="item"> <el-button size="small">回复</el-button>  </el-badge> 
        </el-col> 
        <el-col :md="2" > 
            <el-popover ref="popover1" placement="bottom" width="100" trigger="hover" > 
                <div><i class="el-icon-tickets"></i> My Profile</div> 
                <div><i class="el-icon-circle-close-outline"></i> Log Out</div>   
            </el-popover> 
            <el-button v-popover:popover1 size="small">马面</el-button> 
        </el-col>     
    </el-row>
</template>

<script>
module.exports={
    data:function(){
        return{
            
        }
    }
}
</script>

<style>

</style>