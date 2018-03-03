<template>
    <div>
        <span v-on:keyup="keyup">
        <el-input type="text" v-model="dataStr" placeholder="添加标签，不同标签请用英文逗号隔开"  />
        </span>
        <el-card class="box-card" :style="myClass">
            <div v-for="str in list" :key="str" @click="click(str)" >{{str}}</div>
        </el-card>
    </div>
</template>
<script>
export default {
  props:['dataList',"dataString","dataReturn"],
  data: function () {
        return {
            dataStr: this.dataString,
            dataBase:this.dataList,
            list:new Array(),
            myClass:{
                display:"none"
            }
        }
    },
  methods:{
        keyup:function () {
            this.$emit('update:dataReturn', this.dataStr);
            this.list = new Array();
            var str = this.dataStr.trim();
            if(str == "" || str.lastIndexOf(";")+1 == str.length) {
                this.myClass.display = "none";
                return;
            }
            if(str.lastIndexOf(";") != -1){
                str = str.substring(str.lastIndexOf(";")+1);
            }
            str = str.toLocaleLowerCase();
            for(var index in this.dataBase){
                var data = this.dataBase[index];
                if(data.toLocaleLowerCase().indexOf(str) != -1){
                    this.list.push(data);
                }
            }
            if(this.list != null && this.list.length > 0){
                this.myClass.display = "block";
            }else{
                this.myClass.display = "none";
            }
        },
        click:function (str) {
            if(this.dataStr.lastIndexOf(";") != -1){
                this.dataStr = this.dataStr.substring(0,this.dataStr.lastIndexOf(";") + 1) + str + ";";
            }else{
                this.dataStr = str + ";";
            }
            this.$emit('update:dataReturn', this.dataStr);
            var index = this.list.indexOf(str);
            if(index > -1){
                this.list.splice(index,1);
            }

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


