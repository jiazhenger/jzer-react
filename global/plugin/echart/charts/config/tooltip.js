const Index = option => {
	return {
		backgroundColor:'rgba(255,255,255,.9)',	// 背景颜色
		borderColor:'#E5E9F2',	// 边框颜色
		borderWidth:1,			// 边框宽度
		textStyle:{				// 字体样式
			color:'#555',
			fontSize:12,
			lineHeight:56
		},
		padding:8,
		...option
	}
}
export default Index