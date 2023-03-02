const exist = str => window.location.host.indexOf(str) >= 0

const reportUrl_1 = 'http://reports.norsonmed.com:8900/reviewer?update=1&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzeXN0ZW0iLCJpYXQiOjE2MzcwMjc0MDMsImV4cCI6NDc0NzQyNzQwMywibmJmIjoxNjM3MDI3NDAzLCJzdWIiOiJub3Jzb24tcHJldmlldyIsImp0aSI6Ii05OTk5OTkifQ.xhNTfmwudvLwaUfcKxme_lR4XU2E88-yWwtPVU-G2MY'
const reportUrl_2 = 'http://reports.norsonmed.com:8300?update=1'

const data = {
	asyn	: { type:0, name:'异步版', api:'http://mapi.norsonmed.com:802/api/', 		host:'mapi.norsonmed.com/', 		reportUrl: reportUrl_2 },
	dev 	: { type:0, name:'开发版', api:'http://mapi.norsonmed.com/api/', 			host:'mapi.norsonmed.com:8400', reportUrl: reportUrl_2 }, 
	test 	: { type:1, name:'测试版', api:'http://test.norsonmed.com:890/api/', 		host:'test.norsonmed.com', 		reportUrl: reportUrl_2 },
	pre 	: { type:3, name:'预发布', api:'http://prelis.norsonmed.com:8900/api/', 		host:'prelis.norsonmed.com', 	reportUrl: reportUrl_2 },
	preview : { type:2, name:'预览版', api:'http://preview.norsonmed.com:8900/api/', 	host:'preview.norsonmed.com', 	reportUrl: reportUrl_1 },
	release : { type:2, name:'正式版', api:'http://lis.norsonmed.com:8900/api/', 		host:'lis.norsonmed.com', 		reportUrl: reportUrl_1},
}

let config = data.pre

if( exist('localhost') || exist('127.0.0.1') ){					// 开发环境
	config = data.dev		
}else{						// 打包环境
	for( let i in data ){
		const host = data[i].host
		if( exist( host ) ){ config = data[i] }
	}
}

window.globalConfig = config