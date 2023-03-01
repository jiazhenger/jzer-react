/* -------------------------------------------------------- antd -- */
import { Modal } from 'antd'
/* -------------------------------------------------------- 确认弹窗 -- */
const Index = ({ title='提示', msg='确认删除？',  okText, cancelText='取消', onOk='确认', onCancel, type='confirm', closable=false, width }) => {
	const modal = Modal[type]({
		title,
		content:msg,
		cancelText,
		onOk,
		centered: false,
		closable,
		className: 'confirm',
		width,
		onCancel: close => {
			if(window.$fn.hasObject(close)) return
			onCancel && onCancel()
			close && close()
		}
	})
	window.modal = modal
	return modal
}
export default Index