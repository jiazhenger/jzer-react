import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Upload } from 'antd'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons'
/* -------------------------------------------------------- Utils -- */
import Utils from './utils'
/* -------------------------------------------------------- Declare -- */
const { $lazy, $fn, $config } = window
/* -------------------------------------------------------- Async Component -- */
const Button = $lazy.load(()=>import('@antd/button.jsx'))
/* -------------------------------------------------------- 回到顶部 -- */
const Index = ({ 
	className,						/** @param {String}				# 盒子 className */
	name, 							/** @param {String}				# name */
	label,							/** @param {String}				# 标签名 */
	children,						/** @param {Component}			# slot */
	fileName,						/** @param {Component}			# 上传文件名 */
	//
	value,							/** @param {Number}				# 值 */
	disabled,						/** @param {Boolan}				# 禁用 */
	loading,						/** @param {Boolan}				# 加载 */
	// 获取值
	onChange,						/** @param {Event}				# 有 Form 时值改变时执行 */
	onChanged,						/** @param {Event}				# 值改变时执行 */
	//
	out,							/** @param {Number}				# 在外部设置 value 值 */
	fileType='img',					/** @param {String}				# 上传文件类型 */
	max=20,							/** @param {String}				# 最大文件大小 M */
	mul,							/** @param {Boolan}				# 是否多选 */
	showUploadList=true,			/** @param {Boolan}				# 是否显示进度条 */
	//
	api='upload',					/** @param {String}				# 请求接口 api */
	param, 							/** @param {Object}				# 上传参数 */
	btnText='上传文件', 				/** @param {String}				# 按钮名称 */
	size, 							/** @param {String}				# 按钮尺寸 */
	listType='picture-card', 		/** @param {String}				# 模式 */
	// 自定义扩展
	antd = {},						/** @param {Object}				# antd */
	btn = {},
}, ref)=> {
	const [ fileList, setFileList ] = React.useState([])
	const [ load, setLoad ] = React.useState( loading )
	const [ img, setImg ] = React.useState( )
	
	const isImg = listType === 'picture-card'
	
	// const setFileListData = value => { if(showUploadList){ setFileList(value) } }
	const setFileListData = React.useCallback(value => setFileList(value), [ ])
	
	React.useEffect(()=> {
		if( mul ){ 
			setFileListData( Utils.getFileList(value) )
		}else{
			setImg($fn.hasArray( value ) ? value[0] : value)
		}
	}, [ value ]) // eslint-disable-line
	
	const onUpload = ({ file, fileList }) => {
		let { status, response } = file
		
		if( status === 'uploading' ){		// 正在上传
			setFileList(fileList)
			setLoad(true)
		}else if( status === 'done' ){		// 上传完成
			let { data, msg, code } = response ?? {}
			// 上传成功
			if( code === 200 ){
				$fn.msg.success('上传成功')
				if(fileType === 'img'){
					let value = null
					setFileListData( d => {
						let list = []
						// 多图上传
						if( mul ){
							data = Utils.getFileList( data, file )
							data = [ ...d, ...data ].map((v,i) => ({ ...v, uid: v.url }))	// 重新定义 uid
							list = data.filter( v => v.url )								// 将有 url 的数据过滤出来
							value = list.map( v => v.url )
						}else{
							data = Utils.getFileList( data )
							list = isImg ? [] : data
							if( $fn.hasArray( data )){
								const { url } = data[0]
								value = url
							}
						}
						return list
					} )
								
					if( !mul ){ setImg(value) }
					
					const result = name ? { model: {[name]: value} } : null
					
					onChanged?.({ value, label, name, ...result  })
					
					onChange?.( value )
				}else{
					onChanged?.( data )
					onChange?.( data )
					setLoad(false)
				}
			}else if(code === $config.noLoginCode || code === $config.LoginExpireCode){
				$fn.msg.error( msg )
				setTimeout(() => $fn.go('/login'), 200 )
			}else{
				$fn.msg.error( msg ?? '文件上传失败')
				setFileListData( v => v.filter(v => v.url) )
			}
			setLoad(false)
		}else if( status === 'removed' ){	// 上传移除
			
		}else if( status === 'error' ){		// 上传出错
			$fn.msg.error(`${file.name} 文件上传失败!`)
			setFileListData( v => v.filter(v => v.url) )
	    	setLoad(false)
	    }	
	}
	
	// 上传之前判断
	const onBeforeUpload = file => {
		const delay = 5
		const type = Utils.getType(file.type)
		if($fn.hasArray(fileType)){
			let isOk = []
			let msg = ''
			fileType.forEach((v,i)=>{
				msg += (i === fileType.length-1) ? type[v].msg : type[v].msg + '、'
				if(type[v].bool){
					isOk.push(0)
				}
			})
			if (isOk.length === 0) {
				$fn.msg.warning(`仅允许上传${msg}!`, delay)
			}
			return isOk.length !== 0
		}else{
			if(fileType === 'excel'){
				const isOk = type.excel.bool;
				if (!isOk) {
					$fn.msg.warning(`仅允许上传${type.excel.msg}!`, delay)
				}
				return isOk
			}else if( fileType === 'img'){
				const isOk = type.img.bool;
				if (!isOk) {
					$fn.msg.warning(`仅允许上传${type.img.msg}!`, delay)
				}
				const isLt2M = file.size / 1024 / 1024 < max;
				if (!isLt2M) {
					$fn.msg.warning(`图片必必须小于 20M!`, delay)
				}
				return isOk && isLt2M
			}else if( fileType === 'any'){
				return true
			}else{
				$fn.msg.warning(`未允许的上传文件类型`, delay)
				return false
			}
		}
	}
	
	const PlusComponent = () => loading ? <LoadingOutlined className='f30' /> : <PlusOutlined className='f30'/>
	
	// React.useImperativeHandle( ref, () => ({
		
	// }))
	if( !mul && isImg){
		showUploadList = false
	}
	if( !fileName ){
		fileName = mul ? 'files[]' : 'file'
	}
	antd = {
		className,
		fileList,
		name: fileName,
		action: $config.api() + api,
		listType,
		multiple: mul,
		data: param,
		disabled: disabled || loading,
		headers: {
			Authorization: $fn.getToken(),
		},
		beforeUpload: onBeforeUpload,
		showUploadList,
		onChange: onUpload,
		onPreview: ({ url }) => {
			if(/\.(gif|jpg|jpeg|png|GIF|JPEG|JPG|PNG)$/.test(url)){
				window.$imageModalRef().open({ src :url })
			}else{
				window.open( url )
			}
		},
		onRemove: file => {
			let value
			setFileListData( v => {
				const index = v.indexOf(file);
				const list = v.slice();
				list.splice(index, 1)
				value = list.map(v => v.url)
			})
			
			if( !antd.multiple ){ value = null }
			
			const result = name ? { model: {[name]: value} } : null
			
			onChanged?.({ value, label, name, ...result  })
			onChange?.( value )
		},
		...antd
	}
	return (
		<Upload {...antd}>
			{
				isImg ? (
					antd.multiple ? <PlusComponent/> : (
						<>
							{img ? <img src={img} alt='上传图片' style={{ maxWidth: '100%',display:'inline-block' }} /> : <PlusComponent/>}
							{ (load && img) && <div className='abs_lt i10 fxmc' style={{width:104,height:104,background:'rgba(0,0,0,.2)'}}><LoadingOutlined style={{color:$config.mainColor, fontSize:30}} /></div> }
						</>
					)
				) : (
					<Button stop={false} loading={load} disabled={disabled} mode='upload' size={size} {...btn}>
						<span>{btnText}</span>
					</Button>
				)
			}
		</Upload>
	)
}

export default Index