import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Popconfirm } from 'antd'
/* -------------------------------------------------------- 按钮上的提示 -- */
const Index = ({ children, title, onConfirm }) => <Popconfirm title={title} onConfirm={onConfirm}>{children}</Popconfirm>

export default Index