// 顶部导航栏和banner
define(["jquery"], function ($) {
    function download() {
        // 数据下载
        $.ajax({
            type: "get",
            url: "../data/nav.json",
            success: function (result) {
                // alert(result);
                for (var i = 0; i < result.length; i++) {
                    $(` <a href="javascript:;">
                            <img src="${result[i].img}" alt="">
                        </a>`).appendTo(".banner");
                    var node = $(`
                                    <div></div>
                                  `);
                    if (i == 0) {
                        node.addClass("banner-circle-active");
                    }
                    node.appendTo(".banner .banner-circle");
                }

            },
            error: function (msg) {
                console.log(msg);
            }
        })
        topNavDownload();
    }


    function banner() {
        var iNow = 0; //当前显示的图片下标
        var aImgs = null; //记录图片
        var aBtns = null; //记录小圆圈

        var timer = setInterval(function () {
            iNow++;
            tab();
        }, 2000);


        //封装切换函数
        function tab() {
            if (!aImgs) {
                aImgs = $(".banner").find("a");
            }
            if (!aBtns) {
                aBtns = $(".banner .banner-circle").find("div");
            }
            if (iNow == 7) {
                iNow = 0;
            }

            // 图片切换
            aImgs.hide().css("opacity", 0.2).eq(iNow).show().animate({
                opacity: 1
            }, 500);
            // 小圆圈切换
            aBtns.removeClass("banner-circle-active").eq(iNow).addClass("banner-circle-active");
        }
        // 添加鼠标移入移出
        $(".banner-arrow .banner-arrow-l,.banner-arrow .banner-arrow-r,.banner").mouseenter(function () {
            clearInterval(timer);
        }).mouseleave(function () {
            clearInterval(timer);
            timer = setInterval(function () {
                iNow++;
                tab();
            }, 2000);
        })

        // 小圆圈切换对应图片 事件委托
        $(".banner .banner-circle").on("click", "div", function () {
            iNow = $(this).index();
            tab();
        })

        // 上一张下一张切换
        $(".banner-arrow-r").click(function () {
            iNow--;
            if (iNow < 0) {
                iNow = 6;
            }
            tab();
        })
        $(".banner-arrow-l").click(function () {
            iNow++;
            tab();
        })

    }

    // 顶部导航
    function topNavDownload() {
        $.ajax({
            url: "../data/data.json",
            success: function (result) {
                var cateList = result.data.cateList;
                // alert(cateList.length);
                for (var i = 0; i < cateList.length; i++) {
                    var node = $(`<li class="header-tab-li header-tab-li-2">
                    <a href="list.html">${cateList[i].name}</a>
                    <div class="header-subTab header-subTab-1" style="display:none;">
                    <ul></ul>
                    </div>
                    </li>`);
                    $(node).insertBefore(".header-tab-li-3");

                    // 取出当前这个选项的子节点
                    var subCateGroupList = cateList[i].subCateGroupList;
                    // 通过循环创建下方的每一个数据
                    node.find("div.header-subTab-1").addClass("header-subTab-col"+i);
                    for (j = 0; j < subCateGroupList.length; j++) {
                        var categoryList = cateList[i].subCateGroupList[j].categoryList;
                        
                            var newLi = $(`<li class="header-subTab-col"><div class="header-subTab-div1">${subCateGroupList[j].name}</div></li>`);
                            newLi.appendTo(node.find("div.header-subTab ul"));
                            
                        for(k=0;k<categoryList.length;k++){
                            $(`
                        <a href="javascript:;">
                        <img src="${categoryList[k].bannerUrl}" alt="">
                        <p>${categoryList[k].name}</p>               
                    </a>`).appendTo(newLi);
                        }
                    }

                }
            },
            error: function (msg) {
                console.log(msg);
            }
        })
    }

    // 给顶部导航添加选项卡操作
    function topNavTab() {
        // 事件委托
        $(".header-tab").on("mouseenter",".header-tab-li-2",function(){
            $(this).addClass("header-subTab-active");
            $(this).find("div.header-subTab-1").show();
            // $("div.header-subTab-1").show();
        });
        $(".header-tab").on("mouseleave",".header-tab-li-2",function(){
            $(this).removeClass("header-subTab-active");
            $(this).find("div.header-subTab-1").hide();
            // $("div.header-subTab-1").hide();
        });

    }

    function newTab(){
        var newPro = $(".products-content").find(".product-item");
        newPro.eq(0).mouseenter(function(){
            newPro.eq(0).find(".products-pic").find("img").attr("src","../images/newProducts-1.2.png");
        }).mouseleave(function(){
            newPro.eq(0).find(".products-pic").find("img").attr("src","../images/newProducts-1.1.png");
            
        })
        newPro.eq(1).mouseenter(function(){
            newPro.eq(1).find(".products-pic").find("img").attr("src","../images/newProducts-2.2.png");
        }).mouseleave(function(){
            newPro.eq(1).find(".products-pic").find("img").attr("src","../images/newProducts-2.1.png");
            
        })
        newPro.eq(2).mouseenter(function(){
            newPro.eq(2).find(".products-pic").find("img").attr("src","../images/newProducts-3.2.png");
        }).mouseleave(function(){
            newPro.eq(2).find(".products-pic").find("img").attr("src","../images/newProducts-3.1.png");
            
        })
        newPro.eq(3).mouseenter(function(){
            newPro.eq(3).find(".products-pic").find("img").attr("src","../images/newProducts-4.2.png");
        }).mouseleave(function(){
            newPro.eq(3).find(".products-pic").find("img").attr("src","../images/newProducts-4.1.png");
            
        })
    }

    function popularityTab(){
        // $(".popularity-c .popularity-toplist").find(".rexiao").click(function(){
        //     $(".popularity-container .aaa").show();
        // })
        console.log($(".aaa"));
        $(".popularity-c .popularity-toplist .rexiao").click(function(){
            $(".aaa").show();
            $(".bbb").hide();
        })
        $(".popularity-c .popularity-toplist .tuijian").click(function(){
            $(".aaa").hide();
            $(".bbb").show();
        })
    }
    function familyDownload() {
        // 数据下载
        $.ajax({
            type: "get",
            url: "../data/nav.json",
            success: function (result) {
                // alert(result);
                for (var i = 0; i < result.length; i++) {
                    $(` <a href="javascript:;">
                            <img src="${result[i].img}" alt="">
                        </a>`).appendTo(".family-banner .banner");
                    var node = $(`
                                    <div></div>
                                  `);
                    if (i == 0) {
                        node.addClass("banner-circle-active");
                    }
                    node.appendTo(".family-banner .banner .banner-circle");
                }

            },
            error: function (msg) {
                console.log(msg);
            }
        })
        familyBanner();
    }

    function familyBanner() {
        var iNow = 0; //当前显示的图片下标
        var aImgs = null; //记录图片
        var aBtns = null; //记录小圆圈

        var timer = setInterval(function () {
            iNow++;
            tab();
        }, 2000);


        //封装切换函数
        function tab() {
            if (!aImgs) {
                aImgs = $(".family-banner").find("a");
            }
            if (!aBtns) {
                aBtns = $(".family-banner .banner-circle").find("div");
            }
            if (iNow == 7) {
                iNow = 0;
            }

            // 图片切换
            aImgs.hide().css("opacity", 0.2).eq(iNow).show().animate({
                opacity: 1
            }, 500);
            // 小圆圈切换
            aBtns.removeClass("banner-circle-active").eq(iNow).addClass("banner-circle-active");
        }
        // 添加鼠标移入移出
        $(".family-banner .banner-arrow .banner-arrow-l,.family-banner .banner-arrow .banner-arrow-r,.family-banner").mouseenter(function () {
            clearInterval(timer);
        }).mouseleave(function () {
            clearInterval(timer);
            timer = setInterval(function () {
                iNow++;
                tab();
            }, 2000);
        })

        // 小圆圈切换对应图片 事件委托
        $(".family-banner .banner-circle").on("click", "div", function () {
            iNow = $(this).index();
            tab();
        })

        // 上一张下一张切换
        $(".family-banner .banner-arrow-r").click(function () {
            iNow--;
            if (iNow < 0) {
                iNow = 6;
            }
            tab();
        })
        $(".family-banner .banner-arrow-l").click(function () {
            iNow++;
            tab();
        })

    }

    return {
        download: download,
        banner: banner,
        topNavTab:topNavTab,
        topNavDownload:topNavDownload,
        newTab:newTab,
        familyBanner:familyBanner,
        familyDownload:familyDownload,
        popularityTab:popularityTab
    }
})