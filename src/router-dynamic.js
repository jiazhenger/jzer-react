const data = [
	{ title:'我的组件', name:'my', children:[
		{ title:'标题', path:'/my/title'},
		{ title:'页面', name:'page', children:[
			{ title:'滚动', url:'/my/page/scroll'},
			{ title:'不滚动', path:'/my/page/no-scroll' },
		]},
		{ title:'盒子', name:'box', children:[
			{ title:'基本格式', name:'box-base'},
			{ title:'弹性布局', name:'box-flex' },
		]},
		{ title:'缓存页面', name:'cache-router'},
		{ title:'子级目录', name:'child-router', exact:false},
	]},
	{ title:'Antd 组件', name:'antd', children:[
		{ title:'按钮', name:'button', children:[
			{ title:'Button', name:'button'},
			{ title:'Dropdown', name:'dropdown' },
		]},
		{ title:'Tabs', name:'tabs', children:[
			{ title:'Tabs 1', name:'tabs-1'},
			{ title:'Tabs 2', name:'tabs-2'},
			{ title:'Tabs 3', name:'tabs-3'},
		]},
	]},
	{ title:'表单提交', name:'form-submit', children:[
		{ title:'表单元素', name:'form'},
		{ title:'表单结构', name:'form-structure'},
		{ title:'加载模式', name:'form-loading'},
		{ title:'登录', name:'form-login'},
		{ title:'自定义', name:'my-form'},
		{ title:'横向表单', name:'form-x'},
	]},
	{ title:'搜索表单', name:'form-search', children:[
		{ title:'搜索表单模式', name:'form', children: [
			{ title:'基础模式', name:'base' },
			{ title:'页面模式', name:'page' },
			{ title:'盒子模式', name:'box' },
		]},
		{ title:'选择框', name:'row', children:[
			{ title:'多选联动', name:'checkbox' },
		]},
		{ title:'自定义搜索表单', name:'my-form' },
		{ title:'菜单管理', name:'menu' },
	]},
	{ title:'按钮操作', name:'controls-button', children:[
		{ title:'基本操作', name:'page' },
		{ title:'盒子上的按钮', name:'box' },
		{ title:'按钮权限', name:'permission', meta:{ permissions:['add'] } },
	]},
	{ title:'表格操作', name:'table', children:[
		{ title:'编辑表格', name:'table-edit' },
		{ title:'嵌套表格', name:'table-nest' },
	]},
	{ title:'弹窗操作', name:'modal', children:[
		{ title:'弹窗表单', name:'submit-modal', children: [
			{ title:'表单全局弹窗', name:'global' },
			{ title:'表单局部弹窗', name:'local' }
		] },
		{ title:'弹窗表格', name:'table-modal', children: [
			{ title:'表格全局弹窗', name:'global', url:'/modal/table-modal/global' },
			{ title:'表格局部弹窗', name:'local' }
		]},
		{ title:'自定义弹窗', name:'my-modal', children: [
			{ title:'全局弹窗', name:'global' },
			{ title:'局部弹窗', name:'local' }
		]},
		{ title:'图片预览', name:'image-modal', icon:'icon-workbench', children: [
			{ title:'全局弹窗', name:'global', icon:'icon-workbench' },
			{ title:'局部弹窗', name:'local', icon:'icon-workbench' }
		]},
		{ title:'自定义弹窗头', name:'my-modal-header' },
	]},
	{ title:'创建模板', name:'create-template', children: [
		{ title:'SearchTable', name:'SearchTable' },
	] },
]
const childRouter = {
	'cache-router': [
		{ title:'页面 a', name:'a', child:[
			{ title:'页面 b', name:'b' },
			{ title:'页面 c', name:'c' },
		] },
	]
}
const Index = {
	async getMenu( isLogin ){
		return await window.$.getDymaicMenu({
			childRouter,
			isLogin,
			data, 
			// api:'/menu',
		})
	}
}
export default Index