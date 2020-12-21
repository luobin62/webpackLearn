//生产环境
const uglifyjswebpackplugin=require('uglifyjs-webpack-plugin')
const webpackmerge=require('webpack-merge')
const baseconfig=require('./base.config.js')
module.exports=webpackmerge(baseconfig,{
  plugins:[
    uglifyjswebpackplugin()//对打包的js文件进行丑化
  ]
})