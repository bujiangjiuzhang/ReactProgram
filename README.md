## 启动项目
npm start

## 配置less
1.npm run eject将配置文件暴露出来；
2.在暴露出来的config文件中找到webpack.config.js
3.62行添加：
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

123行添加：
{loader: require.resolve('less-loader')}

502行添加：
 {
              test: lessRegex,
              exclude: lessModuleRegex,
              use: getStyleLoaders(
              {
                  importLoaders: 2,
                  sourceMap: isEnvProduction && shouldUseSourceMap,
              },
              'less-loader'
              ),
              sideEffects: true,
          },
          {
              test: lessModuleRegex,
              use: getStyleLoaders(
              {
                  importLoaders: 2,
                  sourceMap: isEnvProduction && shouldUseSourceMap,
                  modules: {
                  getLocalIdent: getCSSModuleLocalIdent,
                  },
              },
              'less-loader'
              ),
          },
4.添加less依赖：.yarn add less less-loader；

## 配置路由


## 使用ant design 
问题：antd样式不生效
处理：App.less全局引入antd的样式

## hooks的使用

## 虚拟列表
一般情况下列表的展示方式：分页加载
分页加载情况：
1.通过鼠标点击数据分页的页码进行操作；
2.滚动式加载，用户鼠标或者触摸板向下滚动一直加载下一页；

1.什么是虚拟列表？
虚拟列表是按需显示思路的一种实现，即虚拟列表是一种根据滚动容器元素（window对象）的可视区域（视觉可视区域）来渲染长列表数据中的某一部分的技术。虚拟列表是对长列表的一种优化方案。

2.为什么要使用虚拟列表？
对于不能使用分页加载数据的业务场景，长列表渲染出来耗时长；