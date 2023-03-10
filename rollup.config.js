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
				{ useESModules: true /**, corejs: 3  */ },
			],
		]
	}),
	alias({
		resolve: ['.jsx', '.js'],
		entries: [
			{ find: '@', 		replacement: resolve('src') }, // 将 @ 识别为 ./src 目录
			{ find: '@css', 	replacement: resolve('src/assets/css') },
			{ find: '@img', 	replacement: resolve('src/assets/images') },
			{ find: '@js', 		replacement: resolve('src/assets/js') },
						
			{ find: '@com', 	replacement: resolve('src/_pub/common') },
			{ find: '@utils', 	replacement: resolve('src/_pub/common/utils') },
						
			{ find: '@cpt', 	replacement: resolve('src/_pub/global/component') },
			{ find: '@tp', 		replacement: resolve('src/_pub/global/template') },
			{ find: '@plugin', 	replacement: resolve('src/_pub/global/plugin') },
						
			{ find: '@el' , 	replacement: resolve('src/_pub/global/plugin/element') },
			{ find: '@antd', 	replacement: resolve('src/_pub/global/plugin/antd') },
			{ find: '@echart', 	replacement: resolve('src/_pub/global/plugin/echart') },
						
			{ find: '#private', replacement: resolve('src/_pub/private') },
			{ find: '#cpt', 	replacement: resolve('src/_pub/private/component') },
			{ find: '#tp', 		replacement: resolve('src/_pub/private/template') },
			{ find: '#plugin', 	replacement: resolve('src/_pub/private/plugin') },
			{ find: '#frame', 	replacement: resolve('src/_pub/private/frame') },
						
			{ find: '$project', replacement: resolve('src/project') },
						
			{ find: '@views', 	replacement: resolve('src/views') },
			{ find: '@pages', 	replacement: resolve('src/pages') }
		],
	}),
]

const input = ([
	'src/_pub/common/global.js'
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
			'react',
			'react-dom',
			'react-router',
			'react-is',
			'classnames',
			'antd',
			'@ant-design',
			'@babel',
			'@ctrl',
			'rc-util',
			'axios',
			'echarts',
			'project',
			'node_modules/**'
		]
	}
]