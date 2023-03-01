import React from 'react'
import ReactDOM from 'react-dom'

class Index extends React.Component{
	componentDidMount( ){
		this.pop = document.createElement('div')
		this.pop.setAttribute('name', this.props.name ?? 'global')
		document.body.appendChild(this.pop)
		this.renderLayer()
	}

	componentDidUpdate() {
		this.renderLayer()
	}
	
	componentWillUnmount(){
		document.body.removeChild(this.pop)
	}
	// 将弹层渲染到 body下的 div 标签
	renderLayer(){
		ReactDOM.createRoot( this.pop ).render( this.props.children )
	}
	render( ){ return null }
}

export default Index