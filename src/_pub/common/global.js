/* ====================================== api 配置  ====================================== */
import Config 	from '@/config'
import Fn 		from './fn'
import Http 	from './http'
import React 	from './react'
import Lazy 	from './react/lazy'

window.$fn 		= Fn
window.$config 	= Config
window.$http 	= Http
window.$lazy 	= Lazy
window.$ 		= React