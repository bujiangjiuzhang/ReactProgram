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