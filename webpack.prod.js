var merge = require('webpack-merge');
var common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: ['./conf/conf.prod.js', './src/js/index.js'],
    mode: 'production'
});