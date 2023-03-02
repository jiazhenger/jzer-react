/* -------------------------------------------------------- antd -- */
import { notification } from 'antd'
/* -------------------------------------------------------- 消息提示 -- */
const Notice = ({ title='提示', msg, type='warning'  }) => notification[type]({	message: title, description: msg })
const Index = {
	warning: (msg, title) => Notice({ msg, title }),
	error: (msg, title) => Notice({ msg, title, type:'error'}),
	info: (msg, title) => Notice({ msg, title, type:'info'}),
	success: (msg, title) => Notice({ msg, title, type:'success'})
}
export default Index