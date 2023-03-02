import React from 'react'
import Empty from '@antd/antd-empty'
import { PlusCircleOutlined, MinusCircleOutlined, CheckOutlined } from '@ant-design/icons'
// ===================================================================== declare
const { $fn, $config } = window
const { mainColor } = config

const recursion = (data, open, childStr, idStr, ids) => {
	$fn.hasArray(data) && data.forEach(( (v,i) => {
		const child = v[childStr]
		v.open = open
		if($fn.hasArray(child)){
			recursion(child,open, childStr, idStr, ids)
		}else{
			v.checked = false
			ids.forEach( m =>{
				if(v[idStr] === m ){
					v.checked = true
				}
			})
		}
		if($fn.hasArray(child)){
			const hasChecked = child.some(v=>v.checked)
			const hasOpen = child.some(v=>v.open)
			if(hasChecked) v.open = true
			if(hasOpen) v.open = true
		}
	}))
	
	return data
}

const Tree = props => {
	const { nameStr, idStr, childStr, isChild, onClick, open, index, show, isFirst, ids } = props
	const [ data, setData ] = React.useState([])
	
	const layerAstyle = isChild ? {marginLeft:'2em'} : null
	
	React.useEffect(()=>{
		const rs = props.data
		if(isFirst){
			let m = recursion(rs, open, childStr, idStr, ids)
			setData([...m])
		}else{
			setData([...rs])
		}
		
	},[ props.data, open, childStr, isFirst, idStr, ids ])
	// 展开收缩控制，并选择对应对数
	const onChange = (e,v) => {
		e.stopPropagation();
		if($fn.hasArray(v[childStr])){
			v.open = !v.open
		}else{
			v.checked = !v.checked
			onClick && onClick(v)
		}
		setData([...data])
	}
	
	return (
		<ul style={{ display: ( show ? 'block' : 'none' ) }}>
			{
				$fn.hasArray(data) && data.map((v,i)=> {
					return (
						<li 
							key			= { i } 
							className	= 'cp' 
							style		= { layerAstyle }
							index		= { index }
							onClick		= { e => { onChange(e, v) } } 
						>
							<div className='fxm tap' style={{padding:'5px 10px'}}>
								{
									$fn.hasArray(v[childStr]) && (
										v.open ? <MinusCircleOutlined style={{color:mainColor}} /> : <PlusCircleOutlined />
									)
								}
								<span className='ml5 ex'>{v[nameStr]}</span>
								{
									!$fn.hasArray(v[childStr]) && v.checked  && <CheckOutlined style={{color:mainColor}} />
								}
							</div>
							{
								$fn.hasArray(v[childStr]) ? 
									<Tree 
										{...props}
										data		= { v[childStr] } 
										nameStr		= { nameStr } 
										idStr		= { idStr } 
										childStr	= { childStr }
										open		= { v.open }
										show		= { v.open }
										index		= { index + '-' + i }
										isFirst		= { false }
										isChild
									/> : null
							}
						</li>
					)
				})
			}
		</ul>
	)
}
// ===================================================================== toast
export default class extends React.Component{
	state = {
		ids:[]
	}
	keys = []
	
	getSelect(){
		return this.keys
	}

	onClick = v => {
		const { idStr, onChange } = this.props
		const iStr = idStr || 'id'
		if(v.checked){
			this.keys.push(v)
			this.keys = Array.from(new Set(this.keys))
		}else{
			this.keys.forEach((m,i)=>{
				if(m[iStr] === v[iStr]){
					this.keys.splice(i,1)
				}
			})
		}
		onChange && onChange(this.keys)
	}
	
	clear = () => {
		this.keys = []
		$fn.refresh(this)
	}
	
	setDefaultKeys = ids => {
		this.setState({ ids })
	}
	
	render(){
		const { data, className, idStr, nameStr, childStr, open, loading } = this.props
		const { key, ids } = this.state
		const openX = open === undefined ? false : open
		const iStr = idStr || 'id'
		const nStr = nameStr || 'name'
		return (
			<section className={`${className||''}`}>
				<Empty data={data} loading={loading} height='200px'>
					<Tree data={data} ids={ids} onClick={this.onClick} nameStr={nStr} idStr={iStr} childStr={childStr} index={0} open={openX} key={key} show={true} isFirst />
				</Empty>
			</section>
		)
	}
}