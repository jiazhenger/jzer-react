import React from 'react'
/* -------------------------------------------------------- Sync Component -- */
import Teleport from '@cpt/teleport-17'
/* -------------------------------------------------------- Declare -- */
const { $config } = window
/* -------------------------------------------------------- SVG 动画图标 -- */
const Loading = ({ color, size }) => (
    <svg width={size} height={size} viewBox='0 0 100 100'>
		<circle fill='none' stroke='#fff' strokeWidth='4' cx='50' cy='50' r='44' style={{opacity:0.6}}></circle>
		<circle fill='#fff' stroke={color || $config.mainColor} strokeWidth='3' cx='8' cy='54' r='6' transform='rotate(56.0809 50 48.6231)'>
			<animateTransform attributeName='transform' dur='2s' type='rotate' from='0 50 48' to='360 50 52' repeatCount='indefinite'></animateTransform>
	  	</circle>
	</svg>
)
/* -------------------------------------------------------- 数据加载效果 -- */
const Index = () => (
	<Teleport name='data-loading'>
		<div id='jzer-loading' className='fix_lt wh tc dn' style={{zIndex:1999}}>
			<div className='fxmc wh'>
				<div className='r8px' style={{background:'rgba(0,0,0,.8)',minWidth:'90px',padding:'8px 12px'}}>
					<div className='fxmc'><Loading size='60px' /></div>
					<div className='cf f12 lh20 mt5 jzer-loading-msg'></div>
				</div>
			</div>
		</div>
	</Teleport>
)

export default Index