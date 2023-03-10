export const onData = data => data.map( v => ({ ...v, label: v.label + ' - ' + v.value }))
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
	{ label:'输入范围', 		value:'input-range' },
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
	{ label:'日期范围分割', 	value:'date-range-split' },
	{ label:'自定义', 		value:'slot' },
])

export const controlsData = [
	{ title: '按钮名称', 	key: 'label' },
	{ title: '按钮模式', 	key: 'mode', type:'select', data:modeData },
	{ title: '解盘触发键', 	key: 'code' },
	{ title: '分组名称', 	key: 'name' },
	{ title: '请求接口', 	key: 'api' },
	{ title: '接口请求方式', key: 'way', type:'select', data:wayData },
	{ title: '提交必选参数', 	key: 'abs', type:'switch' },
	{ title: '提交必选+可选参数', key: 'must', type:'switch' },
	{ title: '选择框联动', 	key: 'isKeys', type:'switch' },
	{ title: '镂空', 		key: 'ghost', type:'switch' },
	{ title: '按钮形状', 	key: 'shape', type:'select', data:onData([{ label:'圆形', value:'circle' }, { label:'圆角', value:'round' }])},
	{ title: '跳转指定路由', key: 'to'},
	{ title: '跳转子路由', 	key: 'toNext'},
	{ title: '点击事件', 	key: 'click', type:'function' },
	{ title: 'antd', 		key: 'antd', isObject:true, children: [
		{ title: '镂空', 	key: 'ghost', type:'switch' },
		{ title: '外链', 	key: 'href' }
	] },
]
export const objectData = [ { title: '参数名', key: 'label' }, { title: '参数值', key: 'value' } ] 		// { x:1, y:1 }
export const labelValueData = [ { title: '显示名称', key: 'label' }, { title: '参数值', key: 'value' } ]		//  { label:'', value:'' }
export const labelWidthData = [
	{ label: '4 个字符', value: 's4' },
	{ label: '5 个字符', value: 's5' },
	{ label: '6 个字符', value: 's6' },
	{ label: '7 个字符', value: 's7' },
	{ label: '8 个字符', value: 's8' },
	{ label: '9 个字符', value: 's9' },
	{ label: '10 个字符', value: 's10' },
	{ label: '11 个字符', value: 's11' },
	{ label: '12 个字符', value: 's12' }
]
const dataPickerFormatData =[
	{label:'YYMMDD', value:0},
	{label:'YYMMDD HH:mm:ss', value:1},
	{label:'YYMMDD HH:mm', value:2}
]
const defaultRangeData = onData([
	{label:'1 天', value: '1-0-12'},
	{label:'7 天', value: '7-0-12'},
	{label:'前 2 天', value: '-2-09-12'},
])
export const formData = [
	{ title: '显示名称', 	key: 'label' },
	{ title: '字段名称',		key: 'name' },
	{ title: '字段名称组',	key: 'names', isArrayGroup:1 },
	{ title: '元素类型', 	key: 'type', type:'select', data:formTypeData },
	{ title: '是否必选', 	key: 'r', type:'switch' },
	{ title: '一半宽度', 	key: 'half', type:'switch' },
	{ title: '自动宽度', 	key: 'full', type:'switch' },
	{ title: '自定义宽度', 	key: 'width' },
	{ title: '是否换行', 	key: 'br', type:'switch' },
	{ title: '提示文字', 	key: 'p' },
	// switch
	{ title: '值为布尔值', 	key: 'bool', type:'switch' },
	// data-picker
	{ title: '渲染格式', 	key: 'format', type:'select', data: dataPickerFormatData },
	{ title: '默认值',		key: 'value' },
	{ title: '默认时间', 	key: 'defaultValue', type:'select', data: defaultRangeData },
	{ title: '开始时分秒',	key: 'start' },
	{ title: '结束时分秒',	key: 'start' },
	//
	{ title: '分组名称',		key: 'groupName' },
	{ title: '插入组件', 	key: 'slot', type:'jsx' },
	{ title: '改变事件', 	key: 'change', type:'function' },
	// checkbox list
	{ title: '列表 api', 	key: 'api' },
	{ title: '字段 id', 	key: 'idStr' },
	{ title: '显示名称', 	key: 'nameStr' },
	{ title: '是否缓存', 	key: 'cache' },
	{ title: '列表数据', 	key: 'data', addData:labelValueData, isLabelValueData:true, isArray:true, isTwo:1, children:[] },
]

export const colsData = [
	{ title: '列标题', 		key: 'title' },
	{ title: '字段名称', 	key: 'dataIndex' },
	{ title: '宽度', 		key: 'width' },
	{ title: '排序', 		key: 'sorter', type:'switch' },
	{ title: '对齐方式', 	key: 'align' },
	{ title: '自定义', 		key: 'render', type:'function' },
]