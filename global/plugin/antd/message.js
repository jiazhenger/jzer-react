/* -------------------------------------------------------- antd -- */
import { message } from 'antd'
/* -------------------------------------------------------- 全局配置 -- */
message.config({ top: '40%', duration:1 })
/* -------------------------------------------------------- 销毁 -- */
window.addEventListener('mousedown', e =>{
	const { className } = e.target
	if( typeof className === 'string' && !className.includes('ant-message-notice-content')){
		message.destroy()
	}
})

let clear 

const timeout =  f => {
	clearTimeout(clear)
	clear = setTimeout(f)
}
/* -------------------------------------------------------- 消息提示 -- */
const Index = {
	success(msg, delay){
		timeout(()=>message.success(msg, delay))
	},
	error(msg, delay= 3){
		timeout(()=>message.error(msg, delay))
	},
	info(msg, delay){
		timeout(()=>message.info(msg, delay))
	},
	warning(msg, delay){
		timeout(()=>message.warning(msg, delay))
	},
	warn(msg, delay){
		timeout(()=>message.warn(msg, delay))
	},
	loading(msg, delay){
		timeout(()=>message.loading(msg, delay))
	}
}
export default Index