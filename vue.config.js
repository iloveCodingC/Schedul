module.exports = {
    publicPath:'./',
    devServer: {
        proxy:{
            "/api":{
                target:"http://112.74.58.188:8080",
                changeOrigin:true,
                ws:true,
                pathRewrite: {
                    '^/api': ''  // rewrite path
                }
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'components':'@/components',
                // 'common':'@common',
                'network':'@/network',
                'views':'@views'             
            }
        }
    },
}