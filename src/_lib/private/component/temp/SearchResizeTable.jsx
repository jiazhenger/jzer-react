import React from 'react'
/* -------------------------------------------------------- Declare -- */
const { $lazy, $, $fn } = window
/* -------------------------------------------------------- Async Component -- */
const Page = $lazy.load(()=>import('#tp/content/page-content.jsx'))
const Box = $lazy.load(()=>import('#tp/box/box.jsx'))
const SearchForm = $lazy.hook(()=>import('#cpt/form/search-form.jsx'))
const Table = $lazy.hook(()=>import('@antd/table/resizeable/index.jsx'))
/* -------------------------------------------------------- Page Component -- */
const Index = ({ page, box, search, table, height, className, style }, ref) => {
	const [ loading, setLoading ] = React.useState()
	const [ keys, setKeys ] = React.useState([])
	const tableRef = React.useRef()
	const searchRef = React.useRef()
	/* --------------------------- 搜索配置 --------------------------- */
	const searchConfig = $fn.hasObject(search) ?  {
		loading,
		onSubmit: option => $.ref(tableRef).search( option ),
		onReset : () => $.ref(tableRef).ref().reset(),
		...search
	} : null
	/* --------------------------- 表格配置 --------------------------- */
	const tableConfig = $fn.hasObject(table) ? {
		search,
		tableRef: () => $.ref(tableRef)?.ref?.(),
		searchRef: () => $.ref(searchRef)?.ref?.(),
		keys,
		onKeysChange: keys => setKeys(keys),
		...table,
		...(page?.perm ? { perm: page.perm  } : null),
		...(box?.perm ? { perm: box.perm  } : null),
		onLoading: v => setLoading(v),
	} : null
	/* --------------------------- 页面配置 --------------------------- */
	const pageConfig = $fn.hasObject(page) ? {
		// refresh:true,
		table: tableConfig,
		keys,
		contentClass:'plr10',
		loading,
		...page,
	} : null
		/* --------------------------- 盒子配置 --------------------------- */
	const boxConfig = $fn.hasObject(table) ? {
		table: tableConfig,
		keys,
		contentClass:'plr10',
		loading,
		...box
	} : null
	
	React.useImperativeHandle( ref, () => ({
		searchRef: () => $.ref(searchRef)?.ref?.(),
		tableRef: () => $.ref(tableRef)?.ref?.()
	}))
	
	const SearchTableComponent = (
		<>
			{ (search && !search.hide) && <SearchForm ref={searchRef} {...searchConfig} /> }
			{ table && <Table ref={tableRef} {...tableConfig} />}
		</>
	)
	
	if( page ){
		return <Page {...pageConfig}>{ SearchTableComponent }</Page>
	}else if( box ){
		return <Box {...boxConfig}>{ SearchTableComponent }</Box>
	}else{
		return <div className={`fv ex h ${$.css(className)}`} style={{height,...style}}>{ SearchTableComponent }</div>
	}
}
export default Index