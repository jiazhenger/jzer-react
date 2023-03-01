import React, { Component } from 'react'
/**
 * 异步加载有状态组件
 * @param {Function}	importComponent 	# 引入组件 () => import()
 */
const Index = (importComponent, option) => {
	const { m } = option ?? {}
	return class extends Component {
		
		state = { Component: null }
		
		async componentDidMount() {
			
			// importComponent().then(f => this.setState({ Component: f.default } ) )
			
			const { default: Component } = await importComponent()
			
			this.setState({ Component: m === 0 ? Component : React.memo(Component) } )
		}
		
		componentWillUnmount(){
			// this.setState = (state, callback) => { return }
			this.setState = (state, callback) => false
		}
		
		render() {
			const { Component } = this.state
			return Component ? <Component {...this.props}/> : null
		}
	}
}

export default Index