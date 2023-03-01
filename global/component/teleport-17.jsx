import React from 'react'
import ReactDOM from 'react-dom'

class Index extends React.Component{
	// 挂载时执行
	componentDidMount( ){
		if(!this.props.isUpdate){ this.renderSubtree( ) }
	}
	// 获取指定 dom
	getNode = ( ) => {
		const { el } = this.props
		return  el ? document.querySelector( el ) : document.body
	}
	// 更新时执行
	componentDidUpdate( ){
		if(this.props.isUpdate){ this.renderSubtree( ) }
	}
	// 将要销毁时执行
	componentWillUnmount( ){
		this.el && this.getNode( ).removeChild(this.el) 	// 移出节点
	}
	// 添加节点
	retContainer = ( ) =>{
		if(!this.el){
			const node = document.createElement(this.props.tag || 'div')
			node.setAttribute('name',this.props.name ?? 'global') 			// 设置节点属性
			this.el = node
			this.getNode( ).appendChild(this.el)
		}
		return this.el
	}
	// 获取 children 内容
	retContent = ( ) =>  <>{ this.props.children }</>
	// 渲染到节点
	renderSubtree = ( ) => {
		ReactDOM.unstable_renderSubtreeIntoContainer(
			this,
			this.retContent( ),
			this.retContainer( ),
		)
	}
	
	render( ){ return null }
}

export default Index