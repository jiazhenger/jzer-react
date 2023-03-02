const Index = {
	// 表格配置
	table:{
		time: { width:140, align:'center' },
		sex: { width:60, align:'center' },
		phone: { width:90, align:'center' },
		email: { width:100 },
		name: { width:80 },
		money: { width:90, align:'center', slots: { customRender: 'money' } },	// 金额
		four: { width:68 },
		five: { width:80 },
		six: { width:90 },
		controls : { width:120, align:'center', fixed:'right' },
		bool: { width:80, align:'center', render: text => ( typeof text === 'boolean' ? text : Boolean(+text) ) ? '是' : '否' },
		state: (data, fields) => ({ render: text => window.$fn.getState(data, text, fields) })
	},
	getState(data, value, fields){
		const { nameStr = 'label', idStr = 'value' } = fields || {}
		const arr = data.filter( item => String(item[idStr]) === String(value) )
		return arr.length === 1 ? arr[0][nameStr] : '--'
	},
}

export default Index