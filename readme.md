# 简介
封装各种Cesium组件

# 如何使用

```shell
npm run build
```
会在dist目录下生成一个gy.cesium.min.js文件，引入即可

必须在Cesium.js之后引入

# 更新日志

**2020-10-14**

初始化项目
添加图层加载

**2020-10-15**

添加指北针组件


# package.json
1. webpack //构建工具；
2. webpack-cli //webpack命令行工具；
3. webpack-dev-server //webpack开发服务器；
4. typescript //ts编译器；
5. ts-loader //ts加载器、用于在webpack中编译ts文件；
6. html-webpack-plugin //webpakc中html插件，用于自动创建html文件；
7. clean-webpack-plugin //webpack中的清除插件，用于每一次构建时都清理打包目录下的文件。
8. @babel/core // babel的核心工具
9. @babel/preset-evn //babel预设环境
10. babel-loader //babel在webpack中的加载器
11. core-js //用来把JS的新语法转成低版本的JS语法，兼容老版本的浏览器
