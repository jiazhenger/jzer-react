import React from 'react'
import * as echarts from 'echarts'
/**
 * 图表
 * @return {Component}
 */
const Index = ({ option }) => {
	const ref = React.createRef()
	
	React.useEffect(()=>{
		let myEecharts
		if(option){
			const { current } = ref
			if(current){
				myEecharts = echarts.getInstanceByDom(current)
				if(myEecharts === undefined){ myEecharts = echarts.init(current) }
				myEecharts.setOption(option || {})
			}
		}else{
			return
		}
		
		myEecharts.resize()
		
		const resize = () =>  setTimeout(myEecharts.resize)
		
		window.addEventListener('resize', resize)
		
		return () =>  window.removeEventListener('resize', resize)
		
	},[option,ref])
	
	return <div ref={ref} className='abs_lt wh'></div>
}
export default Index