define(["jquery"], function ($) {
    // 数据下载
    function download() {
        $.ajax({
            type: "get",
            url: "../data/list.json",
            success: function (arr) {
                // alert(arr[1].list.txt);
                for (i = 0; i < arr.length; i++) {
                    var List = arr[i].list;
                    var node = $(`<div class="goodsListsWrap">
                    <div class="hhd">
                        <p class="txt">${arr[i].title}</p>
                        <p class="des">${arr[i].frontName}</p>
                    </div>
                    <ul class="itemList">
                    </ul>
                </div>`);
                    $(node).appendTo(".content");
                    for (j = 0; j < List.length; j++) {
                        $(`
                        <li class="item fl">
                            <div class="product-item">
                                <div class="hd">
                                    <a href="goodsDesc.html">
                                        <div class="products-pic"><img src="${List[j].img}" alt="">
                                        </div>
                                        <img src="../images/2dad30602ba21628d66abf9ee9bacb5f.png" alt=""
                                            class="jinqiu">
                                        <div class="prombanner prombanner-li1">
                                            <div class="promTitle">
                                                <div class="title"><span>限时购</span></div>
                                                <div class="subTitle"><span>¥299</span><span class="qi">起</span>
                                                </div>
                                            </div>
                                            <div class="promContent">10月13日 0点开抢</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="bd">
                                    <div class="prdtTags">
                                    </div>
                                    <h4>
                                        <a href="javascript:;">
                                           <p>${List[j].txt}</p>
                                        </a>
                                    </h4>
                                    <p class="price">
                                        <span class="retailPrice">
                                            <span>${List[j].price}</span>
                                            <span class="cut">${List[j].cutPrice}</span>
                                        </span>
                                    </p>
                                    <div class="description">
                                        <hr>
                                        <p class="des">${List[j].info}</p>
                                    </div>
                                </div>
                            </div>
                        </li>`).appendTo(node.find(".itemList"));
                    }
                }

            },
            error: function (msg) {
                console.log(msg);
            }
        });
    }

    // 商品列表页面轮播图
    function banner() {
        // 获取轮播图
        var oDiv = $(".banner .banner-c");

        // 获取小圆圈
        var aBtns = $(".banner .banner-circle div");

        // 下标
        var iNow = 0;
        // 定时器
        var timer = null;

        var aArrow = $(".banner button");

        aBtns.click(function () {
            iNow = $(this).index();
            tab();
            return false;
        })

        timer = setInterval(function () {
            iNow++;
            tab();

        }, 3000);

        // 切换函数
        function tab() {
            aBtns.removeClass("banner-circle-active").eq(iNow).addClass("banner-circle-active");
            // oDiv.animate({left:-1090*iNow},1000);
            if (iNow == aBtns.size()) {
                aBtns.eq(0).addClass("banner-circle-active");
            }
            oDiv.animate({
                left: -1090 * iNow
            }, 1000, function () {
                // 最后一张图片滚动完后判断
                if (iNow == aBtns.size()) {
                    iNow = 0;
                    oDiv.css("left", 0);
                }
            });
        }

        //添加移入移出
        $(".banner").mouseenter(function () {
            clearInterval(timer);
            aArrow.show();
        }).mouseleave(function () {
            clearInterval(timer);
            timer = setInterval(function () {
                iNow++;
                tab();
            }, 3000);
            aArrow.hide();
        })
        $(".banner-arrow-r").click(function () {
            iNow--;
            if (iNow < 0) {
                iNow = 2;
            }
            tab();
        })
        $(".banner-arrow-l").click(function () {
            iNow++;
            tab();
        })

    }
    


    return {
        download: download,
        banner: banner,
    }
})