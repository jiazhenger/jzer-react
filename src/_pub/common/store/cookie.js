/* ====================================== sessionStorage 本地存储  ====================================== */
import $fn from '@com/fn'
const Index = {
	// 设置 cookie
	set(name, value, days){
		let day = days || 0;
		if(day !== 0){     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
			let expires = day * 24 * 60 * 60 * 1000;
			let date = new Date(+new Date()+expires);
			document.cookie = name + "=" + escape(JSON.stringify(value)) + ";expires=" + date.toUTCString();
		}else{
			document.cookie = name + "=" + escape(JSON.stringify(value));
		}
	},
	get(key) {
		let getCookie = document.cookie.replace(/[ ]/g,'');//把[ ] 换成 '' 
        //通过';'分割成数组
        let resArr = getCookie.split(';');
        let res;
        
        for (let i = 0; i < resArr.length; i++) {
            let arr = resArr[i].split('=');
            //判断传入key是否找到存储对应的val
            if (arr[0] === key){
                res = arr[1];
                break;
            }
        }
        
        if($fn.isNotEmpty(res)){
        	return JSON.parse(unescape(res));
        }
        
        return null;
	},
	// 删除 cookie
	remove(name){ this.setCookie(name, ' ', -1) }
}
export default Index