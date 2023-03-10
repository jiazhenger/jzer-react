import React from 'react'
/* -------------------------------------------------------- Sync Component -- */
import data from './data'
/* -------------------------------------------------------- Declare -- */
const { $lazy } = window
/* -------------------------------------------------------- Async Component -- */
const CreateTemplate = $lazy.load(()=>import('#cpt/create-template/index.jsx'))
const SearchTable = window.$lazy.hook(()=>import('#cpt/temp/SearchTable.jsx'))
/* -------------------------------------------------------- Page Component -- */
const Index = ({option}) => <CreateTemplate option={option} data={data} component={ props => <SearchTable {...props}/>} />
export default Index