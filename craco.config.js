/* ====================================== 自定义 webpack 配置  ====================================== */
const cracoLess = require('craco-less')
const TerserPlugin = require('terser-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')
const resolve = dir => require('path').join(__dirname,dir)

const config = require('./src/config')

process.env.GENERATE_SOURCEMAP = false; // 关闭 css sourceMap 打包

module.exports = {
	webpack: {
		alias : {
			'@' 		: resolve('src'),
			'@assets' 	: resolve('src/assets'),
			'@css' 		: resolve('src/assets/css'),
			'@img' 		: resolve('src/assets/images'),
			'@js' 		: resolve('src/assets/js'),
				
			'@com'		: resolve('src/_pub/common'),
			'@utils' 	: resolve('src/_pub/common/utils'),
				
			'@cpt'		: resolve('src/_pub/global/component'),
			'@tp'		: resolve('src/_pub/global/template'),
			'@plugin'	: resolve('src/_pub/global/plugin'),
			
			'@el' 		: resolve('src/_pub/global/plugin/element'),
			'@antd' 	: resolve('src/_pub/global/plugin/antd'),
			'@echart'	: resolve('src/_pub/global/plugin/echart'),
			
			'#private' 	: resolve('src/_pub/private'),
			'#cpt'		: resolve('src/_pub/private/component'),
			'#tp' 		: resolve('src/_pub/private/template'),
			'#plugin'	: resolve('src/_pub/private/plugin'),
			'#frame'	: resolve('src/_pub/private/frame'),
			
			'$project'	: resolve('src/project'),
			'$cpt'		: resolve('src/project/component'),
			'$tp' 		: resolve('src/project/template'),
			'$frame' 	: resolve('src/project/frame'),
			'$plugin' 	: resolve('src/project/plugin'),
			
			'@views'	: resolve('src/views'),
			'@pages' 	: resolve('src/pages')
		},
		plugins: [
			new TerserPlugin({
				terserOptions: {
					ecma: undefined,
					warnings: false,
					parse: {},
					compress: {
						drop_console: process.env.NODE_ENV === 'production', 						// 生产环境下移除控制台所有的内容
						drop_debugger: false, 														// 移除断点
						pure_funcs: process.env.NODE_ENV === 'production' ? ['console.log'] : '', 	// 生产环境下移除console
					}
				}
			}),
			// 配置全局 less 变量，不需要在使用的地方导入了
			new InterpolateHtmlPlugin({ 'DATE': Date.now() })
		]
	},
	babel:{
		plugins:[
			//第一个 style 为 true ,需要配置 craco-less 一起才能生效
			['import', { libraryName: 'antd', libraryDirectory: 'es', style: true } ],
			//第二种 style 为 css ,不需要 craco-less
			// ['import', { libraryName: 'antd', libraryDirectory: 'es', style: "css" }],
			// 装饰器 TypeScript
			['@babel/plugin-proposal-decorators', { legacy: true }]
		]
	},
	plugins: [
		{
			plugin: cracoLess,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: { 
							'@primary-color'		: config.mainColor,					// 主要颜色
							'@link-color'			: '#095097',						// 链接颜色
							'@success-color'		: '#52c41a',						// 成功颜色
							'@warning-color'		: '#faad14',						// 警告色
							'@error-color'			: '#f5222d',						// 错误色
							'@heading-color'		: 'rgba(0, 0, 0, 0.85)',			// 标题色
							'@text-color'			: 'rgba(0, 0, 0, 0.65)',			// 主文本色
							'@text-color-secondary'	: 'rgba(0, 0, 0, 0.45)',			// 次文本色
							'@disabled-color'		: 'rgba(0, 0, 0, 0.25)',			// 失效色
							'@border-color-base'	: '#d9d9d9',						// 边框色
							'@font-size-base'		: '12px',							// 主字号
							'@border-radius-base'	: '4px',							// 组件/浮层圆角
							'@box-shadow-base'		: '0 2px 8px rgba(0, 0, 0, 0.15)',	// 浮层阴影
						},
						javascriptEnabled: true,
						//配置全局less 变量，不需要在使用的地方导入了
						globalVars: {
							hack: `true; @import '~@/variable.less';`
						}
					}
				}
			}
		}
	]
}