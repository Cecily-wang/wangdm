define(["jquery"],function($){
    // 数据下载
    function download(){
        $.$.ajax({
            type: "get",
            url: "../data/list.json",
            success: function (result) {
                console.log(result);
            },
            error:function(msg){
                console.log(msg);
            }
        });


    return {
        download:download
    }
    }
})