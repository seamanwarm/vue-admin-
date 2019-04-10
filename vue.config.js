const path = require('path')
function resolve (dir){
  return path.join(__dirname,dir)
}
module.exports = {
    publicPath: "",
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined,
    devServer: {
        port: 8080, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                  target: 'http://192.168.2.118:8080/mylover/api/',
                  ws: true,
                  changeOrigin: true
            },
        },  // 配置多个代理
    },
    chainWebpack : config => {
      config.resolve.alias
          .set("@",resolve("src"))
    }
}
