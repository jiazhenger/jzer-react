import { controlsData, objectData, formData, colsData } from '#cpt/create-template/utils/data'
const Index = [
	{
		title: '匹配路由',
		key: 'route'
	},
	{ 
		title: '页面配置',
		key: 'page',
		isObject: 1,
		children: [
			{ title: '标题', 			key: 'title' },
			{ title: '副标题', 			key: 'subTitle' },
			{ title: '样式', 			key: 'className' },
			{ title: '圆角样式', 		key: 'round' },
			{ title: '背景颜色样式', 	key: 'bgcolor' },
			{ title: '内容样式', 		key: 'contentClass' },
			{ title: '内容补白样式', 	key: 'paddingClass' },
			{ title: '是否滚动', 		key: 'scroll', 			type:'switch' },
			{ title: '显示返回', 		key: 'back', 			type:'switch' },
			{ title: '显示刷新', 		key: 'refresh', 		type:'switch' },
			{ title: '页头按钮组', 		key: 'controls', 		addData:controlsData, isArray:1, children: [] }
		]
	},
	{ 
		title: '搜索配置',
		key: 'search',
		isObject: 1,
		children: [
			{ title: '固定参数', 		key: 'query', addData:objectData, isObjectData:1, isTwo:1, isObject:1, children:[]},
			{ title: '默认参数', 		key: 'param', addData:objectData, isObjectData:1, isTwo:1, isObject:1, children:[]},
			{ title: '搜索元素', 		key: 'data',  addData:formData, isArray:1, children: [] },
		]
	},
	{
		title: '表格配置',
		key: 'table',
		isObject: 1,
		children: [
			{ title: '列表 api', 		key: 'api' },
			{ title: '添加 api', 		key: 'addApi' },
			{ title: '修改 api', 		key: 'modApi' },
			{ title: '删除 api', 		key: 'delApi' },
			{ title: '回显 api', 		key: 'infoApi' },
			{ title: '静态数据', 		key: 'data' },
			{ title: '是否分页', 		key: 'paging', type:'switch', value: 1 },
			{ title: '选框', 			key: 'row', isObject:1, children:[
				{ title:'单选框', 		key:'type', type:'switch' },
				{ title:'事件监听', 		key:'change' },
			]},
			{ title: '行配置', 			key: 'controls', isObject:1, children: [
				{ title: '列标题', 		key: 'title', value:'操作' },
				{ title: '对齐方式', 	key: 'align', value:'center' },
				{ title: '宽度', 		key: 'width', value: 150 },
				{ title: '操作按钮', 	key: 'data',  addData:controlsData, isArray:1, children: [] }
			] },
			{ title: '列配置', 			key: 'cols', addData:colsData, isArray:1, children: [] },
		]
	}
]

export default Index