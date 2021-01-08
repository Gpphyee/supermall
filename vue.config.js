module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                '@':'src',
                'assets':'@/asset',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            
            }
        }
    }
}