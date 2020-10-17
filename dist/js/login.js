define(['jquery', "jquery-cookie"], function($){
    function loginSend(){
        $(".submit").click(function(){
            $.ajax({
                type: "post",
                url:"./php1/login.php",
                data: {
                    username:$(".username").val(),
                    password:$(".password").val()
                },
                success: function(result){
                    var obj = JSON.parse(result);
                    if(obj.code){
                        $(".wrap").find(".alert-danger").attr("class", "alert");
                    }else{
                        $(".wrap").find(".alert-danger").attr("class", "true");
                        //将已经登录的用户名存储在cookie中
                        $.cookie("username", obj.username, {
                            expires: 7
                        })
                    }
                   $(".wrap").show().find(".alerta").html(obj.msg);
                },
                error: function(msg){
                    console.log(msg);
                }
    
            })
        })
        
    }
    return {
        loginSend: loginSend
    }
})