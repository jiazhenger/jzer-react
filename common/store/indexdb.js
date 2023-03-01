/**
 * indexdb 离线存储 
 * 
 */
// ======================================================================================= 创建表
const dbName = 'db'
const dbNameVersion = 1
const DB = ()=> {
	let req = window.indexedDB.open(dbName, dbNameVersion);
	return new Promise((resolve, reject) => {
		req.onsuccess = e => {
			let db = e.target.result;
			let transaction = db.transaction(dbName,'readwrite'); 
			let store=transaction.objectStore(dbName);
			resolve(store);
			req = null;
		}
		req.onerror = e => {
			console.log(dbName + '数据库使用失败：' + e.srcElement.error.message);
			reject(e.message);
		}
		req.onupgradeneeded = e => {
			let db = e.target.result;
			if(!db.objectStoreNames.contains(dbName)){
			    db.createObjectStore(dbName);
			}
			console.log(dbName + ' 表创建成功');
		}
    })
}
// ======================================================================================= service
const Index = {
	// ====================================== 保存数据，
	// 如果不存在则添加，如果存在则覆盖，
	// 即可添加字符串，也可添加对象
	set(key, data){
		return DB().then( store => {
			try{
				let req = store.get(key);
				req.onsuccess = e => {
					store.put(data, key);
				}
				req.onerror = e => {
					console.log('存储数据到 indexdb 失败');
				}
				return true
			}catch(e){
				return false
			}
		})
	},
	// ====================================== 获取数据
	get(key){
		return new Promise((resolve, reject) => {
			DB().then( store => {
				try{
					let req = store.get(key);
					req.onsuccess = e => {
						resolve(e.target.result);
					}
					req.onerror = e => {
						console.log('获取 indexdb 数据失败');
					}
				}catch(e){
					resolve(null);
				}
			})
		});
	},
	// ====================================== 删除数据
	remove(key){
		DB().then( store => {
			let req = store.delete(key)
			req.onsuccess = e => {
				console.log('删除 indexdb 数据成功');
			}
			req.onerror = e => {
				console.log('删除 indexdb 数据失败');
			}
		});
	},
	async clear(){
		if(  window.indexedDB.databases ){
			const data = await window.indexedDB.databases()
			if(data.length > 0){
				window.indexedDB.deleteDatabase(dbName)
			}
		}else{
			window.indexedDB.deleteDatabase(dbName)
		}
	}
}
export default Index
