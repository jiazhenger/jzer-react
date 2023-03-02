/* -------------------------------------------------------- Sync Component -- */
import Echart from './echart
/* -------------------------------------------------------- Function -- */
import Pie from './charts/pie.js'
import Line from './charts/line.js'
import Empty from '@antd/empty'
/* -------------------------------------------------------- Component -- */
const Index = ({ type, data, name, xdata, height=300 })=>{
	let option = {}
	if( type === 'pie'){
		option = Pie({data, name})
	}else if(type === 'line'){
		option = Line({data, xdata, name})
	}
	
	return (
		<div className='rel fxmc' style={{height}}>
			{
				window.$fn.hasArray(data) ? <Echart option={option} /> : <Empty data={[]} />
			}
		</div>
	)
}
	
export default Index