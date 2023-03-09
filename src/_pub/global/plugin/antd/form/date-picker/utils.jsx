import $time from '@utils/time'
const Index = {
	disabledDate : ({ current, after, before, today, moment }) => {
		const hasToday = today !== false && today !== 0
		if( after ){
			if( typeof after === 'string' ){
				const now = moment(after) + (hasToday ? 0 : 8.64e7)
				return current ? current < now : current <= now
			}else{
				const now = Date.now() - (hasToday ? 8.64e7 : 0)
				return current && (current <= now)
			}
		}
		if( before ){
			if( typeof before === 'string' ){
				const now = moment(before) + (hasToday ? 8.64e7 : 0 )
				return current ? current >= now : current > now
			}else{
				const now = Date.now() - (hasToday ? 0 : 8.64e7)
				return current && (current >= now)
			}
		}
	},
	onBefore(before, index){
		const { $fn } = window
		let stack = []
		if(before.includes(':')){
			before = before.split(':')
			if($fn.hasArray(before)){
				const s = [ 23, 59, 59 ]
				let t = +before[index]
				for(let i=s[index]; i>t; i--){
					stack.push(i)
				}
			}
		}
		return stack
	},
	onAfter(after, index){
		const { $fn } = window
		let stack = []
		if(after.includes(':')){
			after = after.split(':')
			
			if($fn.hasArray(after)){
				let t = +after[index]
				for(let i=0; i< t; i++){
					stack.push(i)
				}
			}
		}
		
		return stack
	},
	disabledTime({ after, before }){
		let time = ''
		if( typeof after === 'string' || typeof before === 'string' ){
			time = after || before
			if( time && time.length > 8){
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