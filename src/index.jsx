import React from 'react'
import ReactDOM from 'react-dom'
// import reportWebVitals from './reportWebVitals'
/* -------------------------------------------------------- Global -- */
import '@css/public.css'
import '@com/global'
import '$project/style/page.less'
/* -------------------------------------------------------- 入口组件 -- */
import App from './App'
/* -------------------------------------------------------- 启动 -- */
const root = document.getElementById('app-root')
//17
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, root)
ReactDOM.render(<App />, root)
// 18
// ReactDOM.createRoot(root).render(<React.StrictMode><App /></React.StrictMode>)
// ReactDOM.createRoot(root).render(<App />)
/* -------------------------------------------------------- Version -- */
root.setAttribute('version', ReactDOM.version)
/* -------------------------------------------------------- 关闭初始加载 -- */
document.body.removeChild(document.getElementById('app-loading'))
/* -------------------------------------------------------- 测量性能 -- */
// reportWebVitals()