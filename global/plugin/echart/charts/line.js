import Tooltip from './config/tooltip'

const Index = (option)=>{
	const opt = {
		data:[],
		name:'',
		...option
	}
	const { data, xdata,  } = opt
	
	if(!Array.isArray(data)){
		return {}
	}
	
	return {
		tooltip: {
	        trigger: 'axis',
	        ...Tooltip()
	    },
		grid: {
			top:'14%',
			left: '3%',
			right: '6%',
			bottom: '8%',
			containLabel: true
		},
	    legend: {
	    	data: data.map(v=>v.name), 	// 返回说明名称
	        orient: 'horizontal', 	// horizontal
	        x: 'center',
//	        align:'center',
        	right: 20,
        	top:10,
        	itemWidth:10,
        	itemHeight:10,
        	icon: 'circle',
        	itemGap:15,
        	textStyle:{
        		fontSize:12,
        		color:'#999'
        	},
	    },
	    color:['#3e4e88','#3fc1c9','#fce38a','#fc5185'],
		xAxis: {
			type: 'category',
			data: xdata,
			boundaryGap: false
		},
		yAxis: {
			type: 'value'
		},
	    series: data
	}
}
export default Index