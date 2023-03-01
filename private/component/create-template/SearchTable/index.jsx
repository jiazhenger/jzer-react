import React from 'react'
/* -------------------------------------------------------- Sync Component -- */
import data from './data'
/* -------------------------------------------------------- Declare -- */
const { $lazy } = window
/* -------------------------------------------------------- Async Component -- */
const CreateTemplate = $lazy.load(()=>import('#cpt/create-template'))
const SearchTable = window.$lazy.hook(()=>import('#cpt/temp/SearchTable'))
/* -------------------------------------------------------- Page Component -- */
const Index = () => <CreateTemplate data={data} component={ props => <SearchTable {...props}/>} />
export default Index