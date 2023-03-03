const onData = data => data.map( v => ({ ...v, label: v.label + ' - ' + v.value }))
export const modeData = onData([
	{ label:'添加', 		value:'add' },
	{ label:'删除', 		value:'del' },
	{ label:'修改', 		value:'mod' },
	{ label:'弹窗删除', 		value:'delPop' },
	{ label:'确认', 		value:'confirm' },
	{ label:'清空', 		value:'clear' },
	{ label:'上传', 		value:'upload' },
	{ label:'下载', 		value:'download' },
	{ label:'图片预览', 		value:'img' },
	{ label:'表格弹窗', 		value:'tableModal' },
	{ label:'表单弹窗', 		value:'modal' },
	{ label:'刷新', 		value:'refresh' },
	{ label:'返回', 		value:'back' },
])

export const wayData = onData([
	{ label:'提交数据', 		value:'post' },
	{ label:'拉取数据', 		value:'pull' },
	{ label:'删除数据', 		value:'del' },
])

export const formTypeData = onData([
	{ label:'文本框', 		value:'text' },
	{ label:'密码框', 		value:'password' },
	{ label:'数字', 		value:'number' },
	{ label:'文本域', 		value:'textarea' },
	{ label:'下拉选择', 		value:'select' },
	{ label:'选择树', 		value:'tree-select' },
	{ label:'复选框', 		value:'checkbox' },
	{ label:'多选框组', 		value:'checkbox-group' },
	{ label:'单选框组', 		value:'radio' },
	{ label:'上传', 		value:'upload' },
	{ label:'表格', 		value:'table' },
	{ label:'穿梭框', 		value:'transfer' },
	{ label:'日期', 		value:'date' },
	{ label:'日期范围', 		value:'date-range' },
])

export const controlsData = [
	{ title: '按钮名称', 	key: 'label' },
	{ title: '解盘触发键', 	key: 'code' },
	{ title: '按钮模式', 	key: 'mode', type:'select', data:modeData },
	{ title: '匹配名称', 	key: 'name' },
	{ title: '请求接口', 	key: 'api' },
	{ title: '接口请求方式', key: 'way', type:'select', data:wayData },
	{ title: '提交必选参数', 	key: 'abs', type:'switch' },
	{ title: '提交必选+可选参数', key: 'must', type:'switch' },
	{ title: '选择框联动', 	key: 'isKeys', type:'switch' },
	{ title: '镂空', 		key: 'ghost', type:'switch' },
	{ title: '按钮形状', 	key: 'shape'},
	{ title: '跳转指定路由', key: 'to'},
	{ title: '跳转子路由', 	key: 'toNext'},
	{ title: 'antd', 		key: 'antd', isObject:true, children: [
		{ title: '镂空', 	key: 'ghost', type:'switch' },
		{ title: '外链', 	key: 'href' }
	] },
]
export const objectData = [ { title: '参数名', key: 'label' }, { title: '参数值', key: 'value' } ] 		// { x:1, y:1 }
export const labelValueData = [ { title: '显示名称', key: 'label' }, { title: '参数值', key: 'value' } ]		//  { label:'', value:'' }
export const formData = [
	{ title: '显示名称', 	key: 'label' },
	{ title: '字段名称',		key: 'name' },
	{ title: '字段名称组',	key: 'names', isArrayGroup:1 },
	{ title: '元素类型', 	key: 'type', type:'select', data:formTypeData },
	{ title: '是否必选', 	key: 'r', type:'switch' },
	{ title: '默认值', 		key: 'value' },
	{ title: '一半宽度', 	key: 'half', type:'switch' },
	{ title: '自动宽度', 	key: 'full', type:'switch' },
	{ title: '自定义宽度', 	key: 'width' },
	
	{ title: '列表 api', 	key: 'api' },
	{ title: '字段 id', 	key: 'idStr' },
	{ title: '显示名称', 	key: 'nameStr' },
	{ title: '是否缓存', 	key: 'cache' },
	
	{ title: '值为布尔值', 	key: 'bool', type:'switch' },
	{ title: '列表数据', 	key: 'data', addData:labelValueData, isLabelValueData:true, isArray:true, isTwo:1, children:[] },
]

export const colsData = [
	{ title: '列标题', 		key: 'title' },
	{ title: '字段名称', 	key: 'dataIndex' },
	{ title: '宽度', 		key: 'width' },
	{ title: '排序', 		key: 'sorter', type:'switch' },
	{ title: '对齐方式', 	key: 'align' },
]