import React from 'react'
/* -------------------------------------------------------- antd -- */
import { ConfigProvider } from 'antd'
import locale from 'antd/lib/locale/zh_CN'
import 'moment/locale/zh-cn'
/* -------------------------------------------------------- 国际化：汉化语言 -- */
const Index = ({ children }) => <ConfigProvider locale={locale}>{children}</ConfigProvider>

export default Index