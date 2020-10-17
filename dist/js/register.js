define(["jquery"],function($){
    function registerSend(){
        $(".submit").click(function(){
            $.ajax({
                type:"post",
                url:"./php1/register.php",
                data:{
                    username:$(".username").val(),
                    password:$(".password").val(),
                    repassword:$(".repassword").val(),
                    createTime:(new Date()).getTime()
                },
                success:function(result){
                     // alert(result);
                    var obj = JSON.parse(result);
                    if(obj.code){
                        $(".wrap").find(".alert-danger").attr("class", "alert");
                    }else{
                        $(".wrap").find(".alert-danger").attr("class", "true");
                        // setTimeout(function(){
                        //     location.assign("login.html");
                        // }, 1000);
                    }
                    $(".wrap").show().find(".alerta").html(obj.message);
                },
                error:function(msg){
                    console.log(msg);
                }
            })
        }) 
    }



    return{
        registerSend:registerSend
    }
})