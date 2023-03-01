import Tooltip from './config/tooltip'

const Index = (option)=>{
	const opt = {
		data:[],
		name:'',
		...option
	}
	const { data, name } = opt
	if(!Array.isArray(data)){
		return {}
	}
	return {
		tooltip: {
	        trigger: 'item',
	        formatter: '{a} <br/>{b}: {c} ({d}%)',
	        ...Tooltip()
	    },
	    legend: {
	    	data: data.map(v=>v.name), 	// 返回说明名称
	        orient: 'horizontal', 	// horizontal
	        x: 'center',
//	        align:'center',
        	right: 20,
        	bottom:10,
        	itemWidth:10,
        	itemHeight:10,
        	icon: 'circle',
        	itemGap:15,
        	textStyle:{
        		fontSize:12,
        		color:'#999'
        	},
	    },
	    color:['#fd5f00','#1890FF','#FDE789'],
	    series: [
	        {
	            name:name,
	            type:'pie',
	            radius: ['30%', '70%'],
	            avoidLabelOverlap: false,
				// roseType: 'area',
				label: {
					show: true,
					formatter: params=>`${params.name}【${params.value}】`,
					fontSize: '16',
					fontWeight: 'bold',
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
	            data:data
	        }
	    ]
	}
}
export default Index