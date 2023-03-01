// ÅÐ¶ÏÆ½Ì¨
const Index = (androidCallback,iosCallback,pcCallback) => {
	const u = navigator.userAgent
	const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
	const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
	
	androidCallback && androidCallback()
	iosCallback && iosCallback()
	pcCallback && pcCallback()
	
	return {
		isAndroid,
		isIos,
		isPc: !isMobile
	}
}
export default Index