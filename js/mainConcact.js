/**
 * Created by lvly on 2016/1/27.
 */
require.config({
    /*baseUrl: './js',*///根目录配置*/ //没有配置 则默认为data-main 所在文件夹 的路径
    paths: {
        jquery:'lib/jquery-1.12.0',
        angular:'lib/angular'
    },
    shim:{
        angular:{
            exports: 'angular'//angular　非ａｍｄ　模式　转为ａｍｄ　模式
        }
    }

});


//text 是requirejs 的插件 用了加载文本
require(['../service/service'],function(service){
     // dateUtil.toString();
    console.info(service.eat());


});