/*
    配置当前这个项目用了哪些模块
    遵从AMD规范
    所有.js文件后缀都可以省略掉
*/
require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "nav":"nav"
    },
    shim:{
        // 设置依赖关系
        "jquery-cookie":["jquery"]
    }
})

require(["nav"],function(nav){
    nav.download();
    nav.banner();
    nav.newTab();
    nav.familyBanner();
    nav.topNavTab();
    nav.familyDownload();
    nav.popularityTab();
})
