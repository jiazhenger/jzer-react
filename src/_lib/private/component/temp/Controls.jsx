import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
/* -------------------------------------------------------- Sync Function -- */
import ControlsUtils from '#cpt/utils/controls'
/* -------------------------------------------------------- Declare -- */
const { $lazy, $fn, $, $config } = window
/* -------------------------------------------------------- Async Component -- */
const Button = $lazy.load(()=>import('@antd/button.jsx'))
const Dropdown = $lazy.load(()=>import('@antd/dropdown.jsx'))
const Popconfirm = $lazy.load(()=>import('@antd/popconfirm.jsx'))
const Upload = $lazy.hook(()=>import('@antd/form/upload/index.jsx'))
const Space = $lazy.load(()=>import('@tp/space.jsx'))
/* -------------------------------------------------------- 按钮组配置 -- */
const Index = props => {
	let { data, className, style, size='small', align='end', loading, refresh, back, table, isTable, keys } = props
	const history = useHistory()
	
	const [result, setResult] = useState(data)
	
	useEffect(()=>setResult( data ), [data]) // eslint-disable-line
	
	useEffect(()=>{
		setResult( data => {
			if( refresh ){ data = [...data, { mode:'refresh' } ] } 	// 刷新
			if( back ){ data = [...data, { mode:'back' } ] }		// 返回
			return data
		})
	}, [ ])  // eslint-disable-line
	
	const onClick = option => ControlsUtils({ option, history, tableConfig: table })
	const setDisabled = useCallback(({ mode, disabled, isKeys }) => {
		if( $fn.getResult(props.disabled) ){
			return true
		}else{
			if( ['del','delPop'].includes(mode) && !isTable ){ isKeys = 1 }
			if( isKeys && table?.row ){
				let { tableRef } = table
				if( tableRef ){
					if( keys?.length === 0 ){
						return true
					}else{
						return $fn.getResult(disabled, { keys, rows:tableRef().rows } )
					}
				}
			}else{
				return $fn.getResult(disabled)
			}
		}
	}, [keys])  // eslint-disable-line
	
	return $fn.hasArray( result ) ? (
			<Space align={align} className={className} style={style}>
				{
					result.map(( v, i ) => {
						if( !$fn.hasObject( v )) return null
						let { hide, mode, label, ghost, show } = v
						v.label = label ? label : $config.btnName[mode]
						if( isTable ){
							v.ghost = ghost ?? true
						}else{
							v.ghost = $fn.isBoolean( ghost ) ? ghost : (['del', 'delPop', 'back', 'refresh', 'clear'].includes(mode) ? true : ghost)
						}
						
						const disabled = setDisabled(v)
						
						// hide = $fn.getResult(hide)
						// show = $fn.getResult(show)
						
						if( hide ) return null
						if( show === false ){ return null }
						
						if( mode === 'delPop' ){
							const title = v.msg ?? `确认${v.label}此数据？`
							return (
								<Popconfirm title={ title } onConfirm={ onClick.bind(null,v) } key={i}>
									<Button size={size} loading={loading} {...v} disabled={disabled}/>
								</Popconfirm>
							)
						}else if( mode === 'dropdown'){
							return <Dropdown size={size} loading={loading} {...v} disabled={disabled}  key={i} onClick={onClick}/>
						}else if( mode === 'upload' && v.api){
							return <Upload listType='button' showUploadList={false} loading={loading} {...v}  key={i}/>
						}else if( mode === 'div' ){
							return <div {...v} key={i}>{$.cpt(v.slot)}</div>
						}else if( mode === 'ex' ){
							return <div className='ex' {...v} key={i}>{$.cpt(v.slot)}</div>
						}else{
							if( v.slot ){
								return <React.Fragment key={i}>{$.cpt(v.slot)}</React.Fragment>
							}
							return <Button size={size} loading={loading} {...v} disabled={disabled} key={i} onClick={onClick.bind(null,v)}/>
						}
					})
				}
			</Space>
	) : null
}
export default Index