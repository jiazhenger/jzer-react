import React from 'react'
/* -------------------------------------------------------- Declare -- */
const { $lazy  } = window
/* -------------------------------------------------------- Async Component -- */
const Button = $lazy.load(()=>import('@antd/button.jsx'))
/* -------------------------------------------------------- 按钮组配置 -- */
const Index = () => {
	
	const onTest = () => {
		
		let api = window.location.origin
		let hash = window.location.hash
		hash = hash.replace('#/main','/src/views')
		api = api + hash + '.jsx'
		
		fetch(api).then( res => {
			const { status, ok } = res
			if(status === 200 && ok === true){
				res.text( ).then( data => {
					if(typeof data === 'string'){
						data = data.split('\n')
						window.$modalRef().open({
							title:'源码',
							full:1,
							controls:{
								ok:{hide:1}
							},
							slot: (
								<div className='code-list'>
									<dl className='code-number'>
										{
											data.map((v,i)=> <dt key={i}>{i+1}</dt>)
										}
									</dl>
									<dl className='code-content'>
										{
											data.map((v,i)=> <dd key={i}>{v}</dd>)
										}
									</dl>
								</div>
							)
						})
					}
				})
			}
		})
		
		
	}
	
	return (
		<>
			<div className='abs_rb' style={{right:10,bottom:10, zIndex:100}}>
				<Button danger shape='circle' size={60} width={60} label='源码' onClick={onTest} />
			</div>
		</>
	)
}
export default Index