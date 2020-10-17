console.log("加载成功");

// 引入当前页面要用的模块
require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "nav":"nav",
        "goodsDesc":"goodsDesc"
    },
    shim:{
        // 设置依赖关系
        "jquery-cookie":["jquery"]
    }
})

require(["nav","goodsDesc"],function(nav,goodsDesc){
    nav.topNavTab(); 
    nav.topNavDownload();
    goodsDesc.zoom();
})