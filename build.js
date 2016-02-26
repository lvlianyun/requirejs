({
    baseUrl: './js',//根目录配置
    paths: {
        jquery:'lib/jquery-1.12.0',
        angular:'lib/angular'
    },
    shim:{
        angular:{
            exports: 'angular'//angular　非ａｍｄ　模式　转为ａｍｄ　模式
        }
    },
    name: "main",
    out: "main-built.js"
})