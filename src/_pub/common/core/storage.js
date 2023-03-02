/* ====================================== 本地存储配置  ====================================== */
import Store from '../store/storage'
import IndexDB from '../store/indexdb'
const Storage = Store(window.localStorage)
const Session = Store(window.sessionStorage)
const Index = {
	// 存储与获取数据
	session(name,data){
		return arguments.length <= 1 ? Session.get(name) : Session.set(name,data)
	},
	// 移除数据
	sessionRemove(name){ Session.remove(name) },
	// 清除全部
	sessionClear(){ Session.clear() },
	// 获取用户信息
	getUser(){
		const user = this.local('user')
		return this.hasObject(user) ? user : { }
	},
	// localStorage 存储
	local(name,data){
		return arguments.length <= 1 ? Storage.get(name) : Storage.set(name,data)
	},
	localRemove(name){ Storage.remove(name) },
	localClear(){ Storage.clear() },
	// IndexDB
	async indexDB(name,data){
		return arguments.length <= 1 ? await IndexDB.get(name) : IndexDB.set(name,data)
	},
	indexDBRemove(name){ IndexDB.remove(name) },
	indexDBClear(){ IndexDB.clear() }
}

export default Index