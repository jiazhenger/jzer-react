import moment from 'moment'

const Index = {
	format(time,option){
		let opt = { s:'-', l:'en', t:'ymd', ...option }
		
		let f = opt.l === 'zh' ? 'YYYY年MM月DD日' : `YYYY${opt.s}MM${opt.s}DD`
		
		let str = f
		
		if(typeof time === 'number' || time instanceof Object){
			switch(opt.t){
				case 'full':
					str = f + ' HH:mm:ss';
					break;
				case 'ymd':
					str = f;
					break;
				case 'hms':
					str = 'HH:mm:ss';
					break;
				case 'hm':
					str = 'HH:mm';
					break;
				default:
					break;
			}
			return moment(time).format(str)
		}else{
			return null
		}
	},
	formats(time,option){
		let opt = { s:'-', l:'en', t:'full', ...option }
		return {
			full: this.format(time,{...opt,t:'full'}),
			ymd: this.format(time,{...opt,t:'ymd'}),
			hms: this.format(time,{...opt,t:'hms'}),
			hm: this.format(time,{...opt,t:'hm'}),
		}
	},
	getTime(time){
		return time ? new Date(time).getTime() :  new Date().getTime()
	},
	time(time,t){
		if(time){
			return this.format(time,{t})
		}else{
			return null
		}
	}
}

export default Index