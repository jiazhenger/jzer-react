/* ====================================== toast  ====================================== */
import React from 'react'
// ===================================================================== 
const Index = ({ width,height, color })=>(
	<svg width={width || '10px'} height={height||'15px'} viewBox='0 0 10 18'>
	    <desc>Created with Sketch.</desc>
	    <defs></defs>
	    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
	        <polyline id='Path-3' stroke={color||'#CFD2D5'} strokeWidth='1.5' transform='translate(4.941320, 9.000000) scale(-1, 1) rotate(-360.000000) translate(-4.941320, -9.000000) ' points='8.88263925 1 1 9 8.88263925 17'></polyline>
	    </g>
	</svg>
)
export default Index