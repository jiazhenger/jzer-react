/* ====================================== api 配置  ====================================== */
const env = process.env.NODE_ENV === 'development';	// 是否为开发环境

// const exist = str => window.location.host.indexOf(str) >= 0

const _api = {
	dev : 'http://localhost:8083/api/',
	// dev : 'http://api.jiazhenger.com:8083/api/',
	release : 'http://localhost:8083/api/'
}
const api = ()=> env ? _api.dev : _api.release
/* ====================================== 全局变量配置  ====================================== */
const Index = {
	api,
	env, 								// 环境变量
	contentType		: 0,				// Content-type 数据传输类型
	idStr 			: 'value',
	nameStr 		: 'label',
	mainColor 		: '#4da1ff',		// 主要颜色
	// http
	isOnLyPostGet 	: false, 			// 是否只有 Post 、Get 两种请求
	postIdName 		: 'id', 			// 提交字段 id 名称
	pullIdName 		: 'id',				// 读取字段 id 名称
	noLoginCode 	: 201, 				// 未登录时 code
	loginExpireCode : 202, 				// 登录过期 code
	
	paging 			: {
		pageSize 	: 10, 				// 默认一页多少数据
		dataName: 'data', 				// 数据字段名
		pageSizeName: 'size', 			// 每页多少条数据
		pageNumName: 'page', 			// 当前页码
		totalItemsName: 'total_items', 	// 总共多少条数据
		totalPagesName: 'total_pages', 	// 总共多少页
		pageSizeOptions : ['10', '20', '50', '100', '200', '500', '1000'], 	// 分页模式
	},
	cache 			: true, 			// 是否开启数据缓存
	delWay 			: 'del', 			// 删除请求方式 del
	confirmWay 		: 'post', 			// 确认提交请求方式 put
	modWay 			: 'put', 			// 编辑提交请求方式 put
	delMul			: false,			// 表格删除是否为数组
	//
	pageMinWidth	: 1000,				// 页面最小宽度
	pageMinHeight	: 300,				// 页面最小高度
	//
	btnSpace 		:  8,				// 按钮之间的空隙
	// antd
	antd 			: {
		btnSize : {						// 按钮、表单高度
			mini:{ height: 24 },
			small:{ height: 28 },
			search: { height: 26 },
			submit: { height: 30 },
			middle:{ height: 34, fontSize: 14, minWidth: 90 },
			large:{ height: 40, fontSize: 18, minWidth: 120 }
		},
		table 		: {
			bordered: true
		}
	},
	// 自定义按钮名称
	btnName : {
		mod 	: '修改',
		del 	: '删除',
		delPop 	: '删除',
		back 	: '返回',
		add 	: '新建',
		refresh : '刷新',
		clear 	: '清空'
	},
	spaceX: 10				// 左右边距
}
module.exports = Index