module.exports = {
    publicPath: process.env.VUE_APP_DOCUMENT_ROOT,
    productionSourceMap: false,
    css: {
        sourceMap: false
    },
    devServer: {
        watchOptions: {
            poll: 500
        }
    }
}