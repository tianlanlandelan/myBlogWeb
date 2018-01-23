/**
 * Created by yangkaile on 2018/1/21.
 */
var autoCompDatabase = [
    "ok",
    "Oracle",
    "Oracle 11g",
    "Oracle or Mysql",
    "origin",
    "oh",
    "Or",
    "Open"
];

$(function(){
    $("#autoCompSelect").hide();
    /**
     * 输入框文字变化后的操作
     * 1.
     */
    $("#autoCompInput").keyup(function () {
        var dataSelect = new Array();
        var str = $(this).val().trim();
        if(str == "" || str.lastIndexOf(";")+1 == str.length) {
            $("#autoCompSelect").hide();
            return;
        }
        if(str.lastIndexOf(";") != -1){
            str = str.substring(str.lastIndexOf(";")+1);
            console.log(str);
        }
        str = str.toLocaleLowerCase();
        for(var index in autoCompDatabase){
            var data = autoCompDatabase[index];
            if(data.toLocaleLowerCase().indexOf(str) != -1){
                dataSelect.push(data);
            }
        }
        if(dataSelect != null && dataSelect.length > 0){
            vueSelect.datas = dataSelect;
            $("#autoCompSelect").show();
        }else{
            $("#autoCompSelect").hide();
        }
    });
    $("#autoCompInput").blur(function () {
        window.setTimeout(function () {
            $("#autoCompSelect").hide()
        },100);
    });
});
var vueSelect = new Vue({
    el:"#autoCompSelect",
    data:{
        datas:[]
    },
    methods:{
        liClick:function (data) {
            var title = $("#autoCompInput").val().trim();
            if(title.lastIndexOf(";") != -1){
                title = title.substring(0,title.lastIndexOf(";") + 1) + data + ";";
            }else{
                title = data + ";";
            }
            $("#autoCompInput").val(title);
            var index = autoCompDatabase.indexOf(data);
            if(index > -1){
                autoCompDatabase.splice(index,1);
            }
            $("#autoCompSelect").hide();
        }
    }
});