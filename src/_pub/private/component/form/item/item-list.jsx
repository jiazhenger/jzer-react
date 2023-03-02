import React from 'react'
/* -------------------------------------------------------- Declare -- */
const { $lazy, $fn, $, $config } = window
/* -------------------------------------------------------- Async Component -- */
const FormItem = $lazy.load(()=>import('@antd/form/layout/item'))
const Input = $lazy.load(()=>import('@antd/form/input'))
const Select = $lazy.load(()=>import('@antd/form/select'))
const Checkbox = $lazy.load(()=>import('@antd/form/checkbox'))
const CheckboxGroup = $lazy.load(()=>import('@antd/form/checkbox-group'))
const Switch = $lazy.load(()=>import('@antd/form/switch'))
const Radio = $lazy.load(()=>import('@antd/form/radio'))
const Transfer = $lazy.load(()=>import('@antd/form/transfer'))
const DatePicker = $lazy.load(()=>import('@antd/form/date-picker'))
const Upload = $lazy.hook(()=>import('@antd/form/upload'))
// tree
const TreeSelect = $lazy.load(()=>import('@antd/tree/tree-select'))
// 自定义
const Table = $lazy.hook(()=>import('@antd/table'))
const SelectContent = $lazy.load(()=>import('#cpt/form-element/select-content'))
let clear
/* -------------------------------------------------------- 按钮组配置 -- */
const Index = ({
	className, 			/** @param {Boolean}			# 盒子 className */
	style, 				/** @param {Boolean}			# 盒子 style */
	data, 				/** @param {String}				# 列表数据 */
	mb=20, 				/** @param {Number}				# 间距 */
	disabled, 			/** @param {Boolean}			# 禁用 */
	readOnly, 			/** @param {Boolean}			# 只读 */
	colon,				/** @param {Boolean}			# 是否有冒号 */
	size='small',		/** @param {String}				# 元素大小 */
	paddingClass, 		/** @param {String}				# 内容补白 */
	onChanged, 			/** @param {Event}				# 元素改变时执行 */
	onInit, 			/** @param {Event}				# 初始化 */
	x, 					/** @param {Boolean}			# 是否横向 */
	width,				/** @param {Number}				# 全部默认宽度 */
	cache=$config.cache,/** @param {Boolan}				# 是否缓存 */
	form, 				/** @param {Object}				# 存储值 */
	submit, 			/** @param {Object}				# 额外值 */
	formRef, 			/** @param {Object}				# formRef */
	expose, 			/** @param {Object}				# 暴露方法 */
	listData,			/** @param {Object}				# 回显数据 */
	ctrlMode,			/** @param {Object}				# 模式 */
	nowrap, 			/** @param {Boolean}			# 是否换行排列 */
	// search
	gapX=8, 			/** @param {Component}			# 横向间距 */
	gapY=5,				/** @param {Component}			# 纵向间距 */
	isSearch 			/** @param {Boolean}			# 是否是搜索表单 */
}) => {
	let gapStyle = x ? { gap:`${gapY}px ${gapX}px` } : null
	React.useEffect(()=>{
		if(onInit){
			clear = setTimeout(onInit ,200)
			return () => clearTimeout(clear)
		}
	},[])  // eslint-disable-line
	return (
		<div className={` ${nowrap ? 'fx' : 'fxw'} ${$.css(paddingClass)} ${$.css(className)}`} style={{...gapStyle, ...style}}>
			{
				$fn.hasArray( data ) && data.map((v,i)=>{
					let { 
						label, _label, type, hide, name, ml, el, param, domRef, suffix, antd,
						sname, api, nameStr, idStr, table, click, mode, height, setName, data, change, mul,
						format, rules,
						bool,
						after, before, today, start, end, 	// 日期
					 } = v
					label = label ?? _label
					// 元素属性
					el = {
						label, name, size, form, formRef, mul, domRef, suffix, antd,
						disabled: disabled || v.disabled,
						readOnly: readOnly || v.readOnly,
						out: 1,
						onChanged: change ? value => change({ ...value, formRef, ref:expose }) : null,
						...el
					}
					cache = $fn.isNotEmpty(v.cache) ? v.cache : cache
					const apiElement = { data, setName, cache, param, submit, sname, api, nameStr, idStr, ...el  }
					
					let elWidth = null
					
					if(isSearch){
						if(['password','textarea','number', 'tree-select', 'select','date', 'date-range'].includes( type ) || !type){
							elWidth = v.width ?? width
						}
					}
					if( $fn.isNotEmpty( hide ) ){
						hide = $fn.getResult(hide)
						if(hide) return null
					}
					
					let Component = <Input width={elWidth} {...el} />
					
					let isSelect = ['tree-select', 'select'].includes( type )
					let itemLabel = _label ? '' : label
					// width
					let itemWidth = v.width ?? '100%'
					if(v.half){ itemWidth = '50%' }
					if( isSearch || x ){ itemWidth = 'auto'	}
					// type
					switch(type){
						case 'select':
							Component = <Select width={elWidth} {...apiElement} />
							break
						case 'tree-select':
							Component = <TreeSelect width={elWidth} {...apiElement} />
							break;
						case 'checkbox-group':
							Component = <CheckboxGroup {...apiElement} />
							break;
						case 'checkbox':
							v.colon = false;
							itemLabel = ml ? '' : ' '
							Component = <Checkbox {...el} />
							break;
						case 'switch':
							Component = <Switch {...el} />
							break;
						case 'radio':
							Component = <Radio {...apiElement} {...el} bool={bool}/>
							break;
						case 'upload':
							el = { mode, click, api, fileType:v.fileType, ...el}
							Component = <Upload {...el} />
							break;
						case 'date':
							const dateWidth = v.width ? v.width : ( !format ? elWidth : 154 )
							el = { format, after, before, today, start, end, width:dateWidth, ...el}
							Component = <DatePicker {...el} />
							break;
						case 'date-range':
							const rangeWidth = v.width ? v.width : ( !format ? 200 : 305 )
							el = { format, after, before, today, start, end, type, width:rangeWidth, ...el}
							Component = <DatePicker {...el} />
							break;	
						case 'transfer':
							el = { height, ...apiElement}
							Component = <Transfer {...el} />
							break;
						case 'table':
							Component = <Table {...table}/>
							break;
						case 'select-content':
							el = { mode, click, ...el}
							Component = <SelectContent {...el} />
							break;
						default:
							if( v.slot ){
								Component = $fn.isFunction(v.slot) ? v.slot({...el, value:listData?.[name], data:listData}) : v.slot
							}else{
								if( ctrlMode === 'list' ){
									Component = <div>{ listData?.[name] }</div>
								}else{
									if( ['password','textarea','number'].includes( type )){
										Component = <Input width={elWidth} {...el} type={type} />
									}
								}
							}
							break;
					}
					
					if(x){
						mb = 0
						switch(type){
							case 'data-range':
								break
							default:
								break;
						}
					}
					//
					const required = { required: !v.disabled && v.r, message:  isSelect  ? '请选择' + label : '请输入' + label }
					let _rules = [ required ]
					if($fn.hasArray(rules)) _rules = [ required, ...rules ]
					if($fn.hasObject(rules)) _rules = [ required, rules ]
					// item 属性
					const item = {
						label: itemLabel,
						name,
						width:itemWidth,
						mt: v.mt,
						mb: v.mb ?? mb,
						ml: v.ml,
						mr: v.mr,
						colon: v.colon ?? colon,
						className: `jzer-item-${ type ?? 'text' }`,
						rules: _rules
					}
					return (
						<React.Fragment key={i}>
							{ v.br && <div className='w'></div> }
							{
								v.rightSlot ? <div className={'fx'} style={{width:itemWidth}}><FormItem {...item} width='100%'>{ Component }</FormItem>{v.rightSlot}</div> : <FormItem {...item}>{ Component }</FormItem>
							}
						</React.Fragment>
					)
				})
			}
		</div>
	)
}
export default Index