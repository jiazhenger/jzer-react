/* ====================================== 页面加载效果  ====================================== */
import React from 'react'
/* -------------------------------------------------------- Sync Component -- */
import Teleport from '@cpt/teleport-17'
/* -------------------------------------------------------- 页面加载组件 -- */
const Index = ()=>(
	<Teleport name='page-loading'>
		<div className='loading-wraper'>
			<div>
				<dl className='loading-circle'>
					<dd><i></i><i></i><i></i><i></i></dd>
					<dd><i></i><i></i><i></i><i></i></dd>
					<dd><i></i><i></i><i></i><i></i></dd>
				</dl>
			</div>
		</div>
	</Teleport>
)

export default Index