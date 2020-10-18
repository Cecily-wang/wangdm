define(["jquery"],function($){
    function loginSend(){
        $(".wrap .submit").click(function(){
            $.ajax({
                type:"post",
                url:"../php1/login.php",
                data:{
                    username:$(".register-item").eq(0).val(),
                    password:$(".register-item").eq(1).val()
                },
                success:function(result){
                    //  alert(result);
                    var obj = JSON.parse(result);
                    if(obj.code){
                        $(".register").find(".alert-danger").addClass("alert");
                    }else{
                        $(".register").find(".alert-danger").addClass("true");
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
        loginSend:loginSend
    }
})