const resolve = dir => require('path').join(__dirname,dir)

const babel = require('@rollup/plugin-babel')
const alias = require('@rollup/plugin-alias')
const terser = require('@rollup/plugin-terser')
const commonjs = require('rollup-plugin-commonjs')
const typescript = require('rollup-plugin-typescript2')
// 可使用 `import {module} from './file'` 替换 `import {module} from './file/index.js`
const { nodeResolve } = require('@rollup/plugin-node-resolve')
// 支持读取json文件
const json = require('@rollup/plugin-json')

const plugins = [
	nodeResolve(),
	commonjs(),
	// typescript(),
	terser(),
	json(),
	babel({
		babelHelpers:'runtime', 			// 使 plugin-transform-runtime 生效。减少代码体积 bundled
		presets: ['@babel/preset-env'],
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		exclude: 'node_modules/**',		// 排除依赖 只编译我们的源代码
		plugins: [
			[
				'@babel/plugin-transform-runtime',
				// { useESModules: true /**, corejs: 3  */ },
			],
		]
	}),
	alias({
		resolve: ['.jsx', '.js', '...'],
		entries: [
			{ find: '@', 		replacement: resolve('src') }, // 将 @ 识别为 ./src 目录
			{ find: '@css', 	replacement: resolve('src/assets/css') },
			{ find: '@img', 	replacement: resolve('src/assets/images') },
			{ find: '@js', 		replacement: resolve('src/assets/js') },
						
			{ find: '@com', 	replacement: resolve('src/_lib/common') },
			{ find: '@utils', 	replacement: resolve('src/_lib/common/utils') },
						
			{ find: '@cpt', 	replacement: resolve('src/_lib/global/component') },
			{ find: '@tp', 		replacement: resolve('src/_lib/global/template') },
			{ find: '@plugin', 	replacement: resolve('src/_lib/global/plugin') },
						
			{ find: '@el' , 	replacement: resolve('src/_lib/global/plugin/element') },
			{ find: '@antd', 	replacement: resolve('src/_lib/global/plugin/antd') },
			{ find: '@echart', 	replacement: resolve('src/_lib/global/plugin/echart') },
						
			{ find: '#private', replacement: resolve('src/_lib/private') },
			{ find: '#cpt', 	replacement: resolve('src/_lib/private/component') },
			{ find: '#tp', 		replacement: resolve('src/_lib/private/template') },
			{ find: '#plugin', 	replacement: resolve('src/_lib/private/plugin') },
			{ find: '#frame', 	replacement: resolve('src/_lib/private/frame') },
						
			{ find: '$project', replacement: resolve('src/project') },
						
			{ find: '@views', 	replacement: resolve('src/views') },
			{ find: '@pages', 	replacement: resolve('src/pages') }
		],
	}),
]

const input = ([
	'src/_lib/common/global.js',
	'src/_lib/common/login/clearCache.js',
	'src/_lib/common/login/login.js',
	'src/_lib/common/login/logout.js',
	// utils
	'src/_lib/common/utils/copy.js',
	'src/_lib/common/utils/cryptojs.js',
	'src/_lib/common/utils/download.js',
	'src/_lib/common/utils/encrypt.js',
	'src/_lib/common/utils/isColor.js',
	'src/_lib/common/utils/moment.js',
	'src/_lib/common/utils/platform.js',
	'src/_lib/common/utils/proxy.js',
	'src/_lib/common/utils/save-file.js',
	'src/_lib/common/utils/time.js',
	'src/_lib/common/utils/unique.js',
	'src/_lib/common/utils/upload.js',
	'src/_lib/common/utils/upload-show-excel.js',
	// @cpt
	'src/_lib/global/component/tree/index.jsx',
	'src/_lib/global/component/suspense.jsx',
	'src/_lib/global/component/teleport-18.jsx',
	// @antd
	'src/_lib/global/plugin/antd/form/layout/provider.jsx',
	'src/_lib/global/plugin/antd/table/resizeable/index.jsx',
	'src/_lib/global/plugin/antd/backTop.jsx',
	'src/_lib/global/plugin/antd/image.jsx',
	'src/_lib/global/plugin/antd/loading.jsx',
	'src/_lib/global/plugin/antd/menu.jsx',
	'src/_lib/global/plugin/antd/notification.js',
	'src/_lib/global/plugin/antd/space.jsx',
	'src/_lib/global/plugin/antd/tabs.jsx',
	'src/_lib/global/plugin/antd/timeline.jsx',
	//
	'src/_lib/global/template/content.jsx',
	'src/_lib/global/template/data-loading.jsx',
	'src/_lib/global/template/image.jsx',
	'src/_lib/global/template/link.jsx',
	'src/_lib/global/template/page-loading.jsx',
	'src/_lib/global/template/scroll.jsx',
	'src/_lib/global/template/space.jsx',
	'src/_lib/global/template/style.jsx',
	'src/_lib/global/template/text.jsx',
	'src/_lib/global/template/toast.jsx',
	// @private
	'src/_lib/private/component/create-template/SearchTable/index.jsx',
	'src/_lib/private/component/temp/Controls.jsx',
	'src/_lib/private/component/temp/FormModal.jsx',
	'src/_lib/private/component/temp/ImageModal.jsx',
	'src/_lib/private/component/temp/SearchResizeTable.jsx',
	'src/_lib/private/component/temp/SearchTable.jsx',
	'src/_lib/private/component/temp/TableModal.jsx',
	
	'src/_lib/private/component/form-element/img-code.jsx',
	'src/_lib/private/component/form-element/phone-code.jsx',
	'src/_lib/private/component/form-element/select-content.jsx',
	
	'src/_lib/private/component/tabs/tabs-menu.jsx',
	'src/_lib/private/component/check-code.jsx',
	// 
	'src/_lib/private/frame/radio-menu/frame-complex.jsx',
	'src/_lib/private/frame/radio-menu/frame-easy.jsx',
]).map(v => resolve(v))

module.exports =  [
	{
		input,
		output: {
			dir:resolve('dist'),
			format: 'esm'
		},
		preserveModules: true,
		plugins,
		external: [
			id => /\/__expample__|main.tsx/.test(id), // 组件的本地测试文件，不希望被打包。
			'@ant-design',
			'@babel',
			'@ctrl',
			'react',
			'react-dom',
			'react-router',
			'react-router-dom',
			'react-cache-router',
			'react-is',
			'antd',
			'moment',
			'axios',
			'echarts',
			'classnames',
			'xlsx', 
			'clsx', 
			'virtuallist-antd', 'react-draggable', 'react-resizable',
			'crypto-js',
			'rc-pagination',
			'rc-picker',
			'rc-util',
			'node_modules/**'
		]
	}
]