console.log("加载成功");

// 引入当前页面要用的模块
require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "nav":"nav",
        "goodsList":"goodsList"
    },
    shim:{
        // 设置依赖关系
        "jquery-cookie":["jquery"]
    }
})

require(["nav","goodsList"],function(nav,goodsList){
    // nav.download();
    // nav.banner();
    nav.topNavTab(); 
    nav.topNavDownload();
    // 加载商品数据
    goodsList.download();
    goodsList.banner();
})