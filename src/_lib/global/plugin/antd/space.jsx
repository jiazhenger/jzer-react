import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Space } from 'antd'
/* -------------------------------------------------------- Declare -- */
const { $config } = window
/* -------------------------------------------------------- 设置组件之间的间 -- */
const Index = props => <Space size={$config.btnSpace} { ...props }>{props.children}</Space>

export default Index