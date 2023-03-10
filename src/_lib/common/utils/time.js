const formatNumber = function(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}
const join = function(arr,split){
	return arr.map(formatNumber).join(split)
}
const _ = {
	full: function(time){
		var date = new Date(time);
	    return {
	    	year : date.getFullYear(),
	     	month : date.getMonth() + 1,
	    	day : date.getDate(),
	    	h : date.getHours(),
	   		m : date.getMinutes(),
	    	s : date.getSeconds(),
	    }
	},
	format: function(time,option){
		var opt = { s:'-', l:'en', t:'ymd', ...option }
		var str = null
        var date = null
        if(typeof time === 'string'){
            date = this.getTime(time)
        }else if(time instanceof Date){
            date = time.getTime()
        }else{
			date = time
		}

		if(date){
			var t = this.full(date);
			switch(opt.t){
				case 'full':
					str = join([t.year,t.month,t.day],opt.s) + ' ' + join([t.h,t.m,t.s],':')
					break;
				case 'ymd-last':
					const hm = opt.custom ? join([t.h,t.m,t.s],':') : '23:59:59'
					str = join([t.year,t.month,t.day],opt.s) + ' ' + hm
					break;
				case 'ymd-hm':
					str = join([t.year,t.month,t.day],opt.s) + ' ' + join([t.h,t.m],':')
					break;
				case 'ymd':
					str = opt.l === 'zh' ? t.year+'年'+t.month+'月'+t.day+'日' : join([t.year,t.month,t.day],opt.s)
					break;
				case 'hms':
					str = join([t.h,t.m,t.s],':')
					break;
				case 'hm':
					str = join([t.h,t.m],':')
					break;
				default:
					break;
			}
		}
		return str
	},
	getTime(time){
		return time ? new Date(time).getTime() :  new Date().getTime()
	},
	// 获取当前时间
	getNow(){
		return this.format(this.getTime(), { t:'full'})
	},
	// 获取时间段
	duration: {
		// 时长 1 天，当天 0 点， 到晚上 12 点
		'1-0-12' : ()=>{
			const dur = 1000 * 60 * 60 * 24
			const now = _.getTime()
			return [_.format( now ) + ' 00:00:00', _.format(now + dur) + ' 23:59:59']
		},
		// 前两天
		'-2-09-12' : ()=>{
			const dur = 1000 * 60 * 60 * 24 * 2
			const now = _.getTime()
			return [_.format( now - dur ) + ' 09:00:00', _.format(now) + ' 23:59:59']
		},
		// 时长 7 天，当天 0 点， 到晚上 12 点
		'7-0-12' : ()=>{
			const dur = 1000 * 60 * 60 * 24 * 7
			const now = _.getTime()
			return [_.format( now ) + ' 00:00:00', _.format(now + dur) + ' 23:59:59']
		}
	}
}
export default _