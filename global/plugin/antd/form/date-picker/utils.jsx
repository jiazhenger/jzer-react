import $time from '@utils/time'
const Index = {
	disabledDate : ({ current, after, before, today, moment }) => {
		if( after ){
			const  hasToday = !(today !== false && today !== 0)
			if( typeof after === 'string' ){
				const now = moment(after) + (hasToday ? 8.64e7 : 0)
				return current && (current <= now)
			}else{
				const now = Date.now() - (hasToday ? 0 : 8.64e7)
				return current && (current <= now)
			}
		}
		if( before ){
			const hasToday = !(today !== false && today !== 0)
			if( typeof before === 'string' ){
				const now = moment(before) + (hasToday ? 0 : 8.64e7)
				return current && (current > now)
			}else{
				const now = Date.now() - (hasToday ? 8.64e7 : 0)
				return current && (current >= now)
			}
		}
	},
	onBefore(before, index){
		const { $fn } = window
		before = before.split(':')
		let stack = []
		if($fn.hasArray(before)){
			const s = [ 23, 59, 59 ]
			let t = +before[index]
			for(let i=s[index]; i>t; i--){
				stack.push(i)
			}
		}
		return stack
	},
	onAfter(after, index){
		const { $fn } = window
		after = after.split(':')
		let stack = []
		if($fn.hasArray(after)){
			let t = +after[index]
			for(let i=0; i< t; i++){
				stack.push(i)
			}
		}
		return stack
	},
	disabledTime({ after, before }){
		let time = ''
		if( typeof after === 'string' || typeof before === 'string' ){
			time = after || before
			if(time.length > 8){
				time = time.split(' ')
				time = time[1]
			}
		}else {
			time = $time.format(Date.now(), { t: 'hms' })
		}
		return {
			disabledHours: () => {
				if(after){
					return this.onAfter(time,0)
				}else if(before){
					return this.onBefore(time,0)
				}
			},
			disabledMinutes: () => {
				if(after){
					return this.onAfter(time,1)
				}else if(before){
					return this.onBefore(time,1)
				}
			},
			disabledSeconds: () => {
				if(after){
					return this.onAfter(time,2)
				}else if(before){
					return this.onBefore(time,2)
				}
			},
		}
	}
}

export default Index