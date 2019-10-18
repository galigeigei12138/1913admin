# 1913admin
项目搭建：
布局方式：100% + 栅格（媒体查询）
0-980 页面宽度 保持 980 不变 产生滚动条
1980-》 页面保持1980不变  两边有余白
980-1990 百分比
0-980-1980-max
0-780-1280-1680-1980-2440 
主程搭建架构
1.预处理语言 less sass stylus  unit
   将config下 webpack.config.js 里的sass 全改成less
   npm install less  less-loader
   样式冲突
   1.BEM命名法 保证类名不重复  组件名-功能名-具体名称  Banner-Swiper-item
   2.css in js  不能使用预处理语言
   3.样式模块化 ？
2.ui框架
  antd
  antd 和less 
  将less的版本从3版本降低到2.7.3  npm install less@2.7.3
  按需引入
  1. 安装插件 npm  install babel-plugins-import
  2. webpack.config.js babel-loader ['import',{ "libraryName": "antd", style: true }],
3.公有插件
  redux
  router
  axios 拦截器
  webStorage
  react-loadable

4.页面文件目录
5.指定开发规范
6.公有组件
7.公有模块

##### 路由懒加载


### 登录注册功能描述
1.前端数据验证 （用户名重复 用户名密码格式合法）
2.单点登录
3.7天免登录
4.后端交互
5.token鉴权 
6.权限保存
7.手机验证码
8.图片验证码 
9.滑动图片验证码