(function(version){ 
	var ready = window.ready = function(fn){  
		if(document.addEventListener){
			document.addEventListener('DOMContentLoaded',function(){  
				document.removeEventListener('DOMContentLoaded',arguments.callee,false);  
				fn(); 
			},false);  
		}else if(document.attachEvent){
		   IEContentLoaded(window, fn);
		}
		function IEContentLoaded (w, fn) {
			var d = w.document, done = false,
			init = function () {
				if (!done) {
					done = true;
					fn();
				}
			};
			(function () {
				try {
					d.documentElement.doScroll('left');
				} catch (e) {
					setTimeout(arguments.callee, 50);
					return;
				}
				init();
			})();
			d.onreadystatechange = function() {
				if (d.readyState == 'complete') {
					d.onreadystatechange = null;
					init();
				}
			};
		}
	}

	ready(function(){
		var Sys = {
			ua: navigator.userAgent.toLowerCase(),
			ie: function () {
				return (s = this.ua.match(/msie ([\d.]+)/)) ? this.ie = s[1] : 0;
			}
		}
		var ie = parseInt(Sys.ie())
		if( (ie > 0 && ie<= version) || (document.documentMode != undefined && document.documentMode <= version)){
			var style = 'width:100%;height:100%;overflow:hidden;text-align:center;line-height:60px;text-align:center;display:block;background:#fff;position:absolute;left:0;top:0;color:#418cfd;font-size:30px;font-family:Microsoft YaHei;min-height:600px;min-width:500px;';
			var dStyle = 'padding-top:10%;padding-left:5%;padding-right:5%';
			var pStyle = 'margin-bottom:30px;';
			var body = document.getElementsByTagName('body')[0];
			document.getElementsByTagName('html')[0].style.cssText = "width:100%;height:100%;overflow:hidden" ;
			body.style.cssText = 'margin:0;padding:0;width:100%;height:100%;overflow:hidden;display:block';
			body.innerHTML = 	'<div style='+ style +'>'+ 
									'<div style='+ dStyle +'>'+ 
										'<p style='+ pStyle +'>温馨提示：</p>' +
										'<p style='+ pStyle +'>本网站支持 <span style="color:red;font-size:50px;font-style:italic;">谷歌、火狐、QQ、360、Edge</span> 等现代浏览器！</p>' +
										'<p style='+ pStyle +'>谢谢您对本网站的支持！</p>' + 
									'</div>' +
								'</div>';
			return false;
		}
	})
})(9)