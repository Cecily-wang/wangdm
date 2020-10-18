define(["jquery"],function($){
    function registerSend(){
        $(".wrap .submit").click(function(){
            $.ajax({
                type:"post",
                url:"../php1/register.php",
                data:{
                    username:$(".register-item").eq(0).val(),
                    password:$(".register-item").eq(1).val(),
                    repassword:$(".register-item").eq(2).val(),
                    createTime:(new Date()).getTime()
                },
                success:function(result){
                    //  alert(result);
                    var obj = JSON.parse(result);
                    if(obj.code){
                        $(".register").find(".alert-danger").addClass("alert");
                    }else{
                        $(".register").find(".alert-danger").addClass("true");
                        // setTimeout(function(){
                        //     location.assign("login.html");
                        // }, 1000);
                    }
                    $(".register").find(".alert-danger").show();
                    $(".register").find(".alert-danger").html(obj.message);
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