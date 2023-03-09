const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()

const resolve = dir => require('path').join(__dirname,dir)

module.exports = {
	mode: 'production',	// development为开发环境，production为生产环境
	entry:  {
		'common/global': resolve('./src/_pub/common/global.js'),
		'common/http': resolve('./src/_pub/common/http.js'),
		'common/fn': resolve('./src/_pub/common/fn.js'),
		
		'common/login/login': resolve('./src/_pub/common/login/login.js'),
		'common/login/logout': resolve('./src/_pub/common/login/logout.js'),
		
		// utils
		'common/utils/copy': resolve('./src/_pub/common/utils/copy.js'),
		'common/utils/cryptojs': resolve('./src/_pub/common/utils/cryptojs.js'),
		'common/utils/encrypt': resolve('./src/_pub/common/utils/encrypt.js'),
		'common/utils/download': resolve('./src/_pub/common/utils/download.js'),
		'common/utils/isColor': resolve('./src/_pub/common/utils/isColor.js'),
		'common/utils/platform': resolve('./src/_pub/common/utils/platform.js'),
		'common/utils/proxy': resolve('./src/_pub/common/utils/proxy.js'),
		'common/utils/save-file': resolve('./src/_pub/common/utils/save-file.js'),
		'common/utils/time': resolve('./src/_pub/common/utils/time.js'),
		'common/utils/unique': resolve('./src/_pub/common/utils/unique.js'),
		'common/utils/upload': resolve('./src/_pub/common/utils/upload.js'),
		// 'common/utils/upload-show-excel': resolve('./src/_pub/common/utils/upload-show-excel.js'),
		// global
		'global/plugin/echart/': resolve('./src/_pub/global/plugin/echart/echart.jsx'),
		// antd
		'global/plugin/antd/table': resolve('./src/_pub/global/plugin/antd/table/index.jsx'),
		// global form
		'global/plugin/antd/form/layout/form': resolve('./src/_pub/global/plugin/antd/form/layout/form.jsx'),
		'global/plugin/antd/form/layout/item': resolve('./src/_pub/global/plugin/antd/form/layout/item.jsx'),
		'global/plugin/antd/form/layout/provider': resolve('./src/_pub/global/plugin/antd/form/layout/provider.jsx'),
		
		'global/plugin/antd/form/upload': resolve('./src/_pub/global/plugin/antd/form/upload/index.jsx'),
		'global/plugin/antd/form/date-picker': resolve('./src/_pub/global/plugin/antd/form/date-picker/index.jsx'),
		'global/plugin/antd/form/checkbox': resolve('./src/_pub/global/plugin/antd/form/checkbox.jsx'),
		'global/plugin/antd/form/checkbox-group': resolve('./src/_pub/global/plugin/antd/form/checkbox-group.jsx'),
		'global/plugin/antd/form/input': resolve('./src/_pub/global/plugin/antd/form/input.jsx'),
		'global/plugin/antd/form/radio': resolve('./src/_pub/global/plugin/antd/form/radio.jsx'),
		'global/plugin/antd/form/select': resolve('./src/_pub/global/plugin/antd/form/select.jsx'),
		'global/plugin/antd/form/switch': resolve('./src/_pub/global/plugin/antd/form/switch.jsx'),
		'global/plugin/antd/form/transfer': resolve('./src/_pub/global/plugin/antd/form/transfer.jsx'),
		
		// global template
		'global/template/content': resolve('./src/_pub/global/template/content.jsx'),
		'global/template/data-loading': resolve('./src/_pub/global/template/data-loading.jsx'),
		'global/template/page-loading': resolve('./src/_pub/global/template/page-loading.jsx'),
		'global/template/image': resolve('./src/_pub/global/template/image.jsx'),
		'global/template/link': resolve('./src/_pub/global/template/link.jsx'),
		'global/template/scroll': resolve('./src/_pub/global/template/scroll.jsx'),
		'global/template/space': resolve('./src/_pub/global/template/space.jsx'),
		'global/template/style': resolve('./src/_pub/global/template/style.jsx'),
		'global/template/text': resolve('./src/_pub/global/template/text.jsx'),
		'global/template/toast': resolve('./src/_pub/global/template/toast.jsx'),
		// private
		'private/component/create-template/index': resolve('./src/_pub/private/component/create-template/index.jsx'),
		'private/component/create-template/SearchTable/index': resolve('./src/_pub/private/component/create-template/SearchTable/index.jsx'),
		'private/component/form/search-form': resolve('./src/_pub/private/component/form/search-form.jsx'),
		'private/component/form/submit-form': resolve('./src/_pub/private/component/form/submit-form.jsx'),
		'private/component/form-element/img-code': resolve('./src/_pub/private/component/form-element/img-code.jsx'),
		'private/component/form-element/phone-code': resolve('./src/_pub/private/component/form-element/phone-code.jsx'),
		'private/component/form-element/select-content': resolve('./src/_pub/private/component/form-element/select-content.jsx'),
		
		'private/component/temp/Controls': resolve('./src/_pub/private/component/temp/Controls.jsx'),
		'private/component/temp/FormModal': resolve('./src/_pub/private/component/temp/FormModal.jsx'),
		'private/component/temp/ImageModal': resolve('./src/_pub/private/component/temp/ImageModal.jsx'),
		'private/component/temp/SearchResizeTable': resolve('./src/_pub/private/component/temp/SearchResizeTable.jsx'),
		'private/component/temp/SearchTable': resolve('./src/_pub/private/component/temp/SearchTable.jsx'),
		'private/component/temp/TableModal': resolve('./src/_pub/private/component/temp/TableModal.jsx'),
		
		'private/frame/router': resolve('./src/_pub/private/frame/router.jsx'),
		'private/frame/radio-menu/frame-complex': resolve('./src/_pub/private/frame/radio-menu/frame-complex.jsx'),
		'private/frame/radio-menu/frame-easy': resolve('./src/_pub/private/frame/radio-menu/frame-easy.jsx'),
		
		'private/template/box/box': resolve('./src/_pub/private/template/box/box.jsx'),
		'private/template/content/page-content': resolve('./src/_pub/private/template/content/page-content.jsx'),
		'private/template/title/title': resolve('./src/_pub/private/template/title/title.jsx'),
	},
	output: {
		path: resolve('./dist'),					// 打包后的文件存放的地方
		// filename:'[name].js',					// 打包后输出文件的文件名
		libraryTarget: 'commonjs',
		libraryExport: 'default',
		clean: true
	},
	plugins: [ cleanPlugin ],
	// devtool: 'source-map',					// 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
	resolve: {
		alias : {
			'@' 		: resolve('src'),
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
			
			'@views'	: resolve('src/views'),
			'@pages' 	: resolve('src/pages')
		},
	    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					// 开启Bable缓存
					cacheDirectory: true,
					// 关闭缓存的压缩
					cacheCompression: false,
					// 减少代码体积
					plugins: ['@babel/plugin-transform-runtime'],
					// 
					babelrc: false,
					presets: [require.resolve('babel-preset-react-app')],
				 } 
			}
		],
	},
	// 压缩
	optimization:{
		// js文件分割打包
		splitChunks:{
			chunks: 'all', // 对所有模块镜像分割
		}
	}
}