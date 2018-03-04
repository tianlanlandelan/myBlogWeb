<template>
   <div>
       {{$route.params.id}}
    </div> 
</template>
<script>
import axios from "axios"
import config from "../../json/config.json"
export default {
  data:function(){
      return{
            getInfoUrl:config.myConfig.hostUrl + config.myRequestUrl.articleInfo.getById,
      }
  },
  mounted:function(){
      console.log("id:",this.$route.params.id);
        axios.get(this.getInfoUrl
            ,{
                params:{"id":this.$route.params.id}
            })
            .then(function (response){
               console.log( response.data.data);
            })
            .catch(function (error){
                console.log(error);
            });
  }
}
</script>

