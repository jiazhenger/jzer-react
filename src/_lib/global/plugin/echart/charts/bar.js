import Tooltip from './config/tooltip'
const Index = (option)=>{
	const opt = {
		data:[], 		// y轴数字
		xdata:[],		// x轴名称
		...option
	}
	const data = opt.data
	const xdata = opt.xdata
	const  min = 0
	const  max = Math.max.apply(null,data)
	
	// 单个柱状配置
	const barConfig = {
		type:'bar',
        barWidth: 30, 		// 宽度
        stack: 'stack',
        color:window.$fn.color,
        label: {
            normal: {
                show: true,
                position: 'top',
                color:'#999'
            }
       	},
	}
	return {
		legend: null,
	    tooltip:{
			trigger: 'axis',
			...Tooltip()
		},
	    grid:{
            right:20,
            left:20,
            top:30,
            bottom:15,
            containLabel:true,
        },
	    xAxis: {
	    	type: 'category',
	    	data: xdata,
	    	axisTick:{
            	show:false
            },
            axisLine:{
                lineStyle:{
                    color:'#BFC5D1'
                }
           	},
           	axisLabel:{
           		interval:0,
           		fontSize:12,
       			color:'#333',
           	},
	    },
	    yAxis: {
	    	axisTick:false,
	        axisLine:{
                show:false
           	},
           	axisLabel:{
           		fontSize:15,
           		color:'#333',
           	},
           	splitLine:{
           		lineStyle:{
                    color:'#ddd',
                    type:'dahsed'
                }
           	},
           	min:min,
	        max:max,
	    },
	    series: [
	        { data: data, ...barConfig },
	    ]
	}
}
export default Index