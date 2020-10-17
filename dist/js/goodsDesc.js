define(["jquery", "jquery-cookie"], function ($) {
    function zoom() {
        var aMarks = $(".zoom").find("#mark");
        var aBigs = $(".zoom").find("#big");
        // console.log(aMarks);

        $(".slide-list li").mouseenter(function(){
            $(this).addClass("slide-active").siblings().removeClass("slide-active");
            var index = $(this).index();
            $(".picsWrap .zoom").eq(index).show().siblings().hide();
            
            $(".picsWrap .zoom").mouseenter(function(){
                aMarks.show();
                aBigs.show();
            })
            $(".picsWrap .zoom").mouseleave(function(){
                aMarks.hide();
                aBigs.hide();
            })
            $(".picsWrap .zoom").mousemove(function(ev){
                var l = ev.pageX - $(this).offset().left - 100;
                l = Math.max(0, l);
                l = Math.min(l, 228);
                var t = ev.pageY - $(this).offset().top - 100;
                t = Math.max(0, t);
                t = Math.min(t, 228);
                aMarks.css({
                    left: l,
                    top: t
                })
                $(".zoom #big img").css({
                                left: -2 * l,
                                top: -2 * t
                            })
                            
            })
        })
    }

    return {
        zoom: zoom

    }
})