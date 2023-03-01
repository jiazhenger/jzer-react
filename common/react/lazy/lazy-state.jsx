import React, { Component } from 'react'
/**
 * 异步加载有状态组件
 * @param {Function}	importComponent 	# 引入组件 () => import()
 * @param {Integer} 	delay				# 延迟毫秒数
 */
const Index = (importComponent, delay) => {
	
	return class My extends Component {
		
		state = { Component: null }
		
		myRef = React.createRef( )
		
		setComponent = Component => {
			Component = React.forwardRef(Component)
			this.setState({ Component }, () => { this.props.onRef?.(this.myRef.current); My.ref = this.myRef.current })
		}
		
		async componentDidMount() {
			
			// importComponent().then(f => this.setState({ Component: f.default }, ()=> this.props.onRef?.(this.myRef.current) ) )
			
			const { default: Component } = await importComponent();
			
			if(delay){
				this.clear = setTimeout(()=>this.setComponent( Component ),500)
			}else{
				this.setComponent( Component )
			}
		}
		
		componentWillUnmount(){
			if(this.clear){ clearTimeout(this.clear) }
			// this.setState = (state, callback) => { return }
			this.setState = (state, callback) => false
		}
		
		render() {
			const { Component } = this.state
			return Component ? <Component ref={this.myRef} {...this.props}/> : null
		}
	}
}

export default Index