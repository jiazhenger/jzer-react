import React, { Component } from 'react'
/* -------------------------------------------------------- Sync Component -- */
import PageLoading from '@tp/page-loading.jsx'
import LazyLoad from '@com/react/lazy/lazy-load.jsx'
/* -------------------------------------------------------- Async Component -- */
const NotFound 	= LazyLoad(()=>import('./404.jsx'))
/**
 * 异步加载路由组件
 * @param {Function}	importComponent 	# 引入组件 () => import()
 * @param {String}		path 				# 路径
 */
const Lazy = (importComponent, path) => {
	
	return class extends Component {
		
	   	state = {
	   		Component: () => <PageLoading/>
	   	}
	
	    async componentDidMount() {
			
			try{
				// importComponent().then(f => this.setState({ Component: f.default } ) )
				const { default: Component } = await importComponent(); this.setState({ Component })
			}catch(e){
				console.error(`组件不存在: ${path}.jsx`)
				this.setState({ Component: () =>  <NotFound isComponent /> })
			}
	    }
	    
		componentWillUnmount(){
			// this.setState = (state, callback) => { return }
			this.setState = (state, callback) => false
			window.$http?.stop?.()
		}
		
	    render() {
			
	        const { Component } = this.state
	
	        return Component ? <Component {...this.props} /> : null
			
	    }
	}
}

const Index = path => Lazy(() => import('@views/' + path), path)

export default Index