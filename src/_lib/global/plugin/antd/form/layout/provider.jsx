import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Form } from 'antd'
/* -------------------------------------------------------- 提交多个表单 -- */
const Index = ({ children, onSubmit }) => (
	<Form.Provider
		onFormFinish = { (name, { values }) => {
			onSubmit?.({ [name]: values })
		}}
	>
		{ children }
	</Form.Provider>
)

export default Index