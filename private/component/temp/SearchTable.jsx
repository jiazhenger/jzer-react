import React from 'react'
/* -------------------------------------------------------- Declare -- */
const { $lazy, $, $fn } = window
/* -------------------------------------------------------- Async Component -- */
const Page = $lazy.load(()=>import('#tp/content/page-content'))
const Box = $lazy.load(()=>import('#tp/box/box'))
const SearchForm = $lazy.hook(()=>import('#cpt/form/search-form'))
const Table = $lazy.hook(()=>import('@antd/table'))
/* -------------------------------------------------------- Page Component -- */
const Index = ({ page, box, search, table, height, className, style, onTableRef }, ref) => {
	const [ loading, setLoading ] = React.useState()
	const [ keys, setKeys ] = React.useState(table?.row?.keys ?? [])
	const tableRef = React.useRef()
	const searchRef = React.useRef()
	/* --------------------------- 搜索配置 --------------------------- */
	const searchConfig = $fn.hasObject(search) ?  {
		loading,
		onSubmit: param => $.ref(tableRef).search( { param } ),
		onReset : () => $.ref(tableRef).reset(),
		...search
	} : null
	/* --------------------------- 表格配置 --------------------------- */
	const tableConfig = $fn.hasObject(table) ? {
		search,
		tableRef: () => $.ref(tableRef),
		searchRef: () => $.ref(searchRef)?.ref?.(),
		keys,
		onKeysChange: keys => setKeys(keys),
		...table,
		...(page?.perm ? { perm: page.perm  } : null),
		...(box?.perm ? { perm: box.perm  } : null),
		onLoading: v => setLoading(v),
		onRef:onTableRef
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
		tableRef: () => $.ref(tableRef)
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