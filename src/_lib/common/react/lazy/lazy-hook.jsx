import React, { Component } from 'react'
/**
 * 异步加载 Hooks 组件
 * @param {Function}	importComponent 	# 引入组件 () => import()
 * @param {Integer} 	delay				# 延迟毫秒数
 */
const Index = (importComponent, option) => {
	const { m, d } = option ?? {}
	return class My extends Component {
		
		state = { Component: null }
		
		myRef = React.createRef( )
		
		setComponent = Component => {
			Component = React.forwardRef(Component)
			Component = m === 0 ? Component : React.memo(Component)
			this.setState({ Component }, () => { this.props.onRef?.(this.myRef.current); My.ref = this.myRef.current })
		}
		
		async componentDidMount() {
			// importComponent().then(f => this.setState({ Component: React.forwardRef(f.default) }, ()=> this.props.onRef?.(this.ref.current) ) )
			
			const { default: Component } = await importComponent(); 
			
			if(d){
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