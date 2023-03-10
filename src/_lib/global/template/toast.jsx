import React from 'react'
/* -------------------------------------------------------- Sync Component -- */
import Teleport from '@cpt/teleport-17.jsx'
/* -------------------------------------------------------- Toast -- */
const Index = () => (
	<Teleport name='toast'>
		<div id='jzer-toast' className='fix_lt wh tc dn' style={{zIndex:2000}} onClick={()=>{ 
			document.querySelector('#jzer-toast').style.display='none'
			clearTimeout(window.toastClear)
		 }}>
			<div className='fxmc wh xplr'>
				<p className='jzer-toast-msg r5px cf p10 f13' style={{background:'rgba(0,0,0,0.6)'}} onClick={ e => e.stopPropagation() }></p>
			</div>
		</div>
	</Teleport>
)

export default Index