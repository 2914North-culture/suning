var tools = {
	getStyle:function(obj,attr){
		if(window.getComputedStyle){
			return getComputedStyle(obj,false)[attr];
		}
		else{
			return obj.currentStyle[attr];
		}
	},
	getClassName:function(oParent,name){
		var oAll = oParent.getElementsByTagName('*');
		var arr = [];
		var rel = RegExp('\\b'+name+'\\b','g');
		for(var i = 0; i < oAll.length; i++){
			if(rel.test(oAll[i].className)){
				arr.push(oAll[i]);
			}
			// if(oAll[i].className.indexOf(name) != -1){
			// 	arr.push(oAll[i]);
			// }
		}
		return arr;
	},
	addEvent:function(obj,event,fn){
		if(obj.addEventListener){
			obj.addEventListener(event,fn,false); 
		}
		else{
			obj.attachEvent('on'+event,fn);
		}
	},
	buffer:function(obj,json,speed_Scale,time_Scale,callback){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var isStop =  true;
			for(var attr in json){
				//获取当前值
				var iCur = 0;
				if(attr == 'opacity'){
					iCur = parseInt(getStyle(obj,attr)*100);
				}
				else{
					iCur = parseInt(getStyle(obj,attr));
					
				}
				//获取速度(目标值-当前值/num)
				// var iCur = parseInt(getStyle(obj,attr));
				var iSpeed = (json[attr] - iCur) / speed_Scale;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				// obj.style[attr] = iCur + iSpeed + 'px';
				//改变值
				var current = iCur + iSpeed;
				
				if(attr == 'opacity'){
					obj.style.opacity = current/100;
					obj.style.filter = 'alpha(opacity='+(current/100)+')';
				}
				else if(attr == 'zIndex'){
					obj.style.zIndex = current;
				}
				//通过以下方式获得的transform值是一个矩阵的数据格式,需要转换,类似获取颜色返回的rgb值
				// else if(attr == 'transform'){
				// 	obj.style.transform ='rotate('+current+'deg)';
				// }
				else{
					obj.style[attr] = current + 'px';
				}
				if(json[attr] !== current){
					isStop = false;
				}
			}
			if(isStop){
				clearInterval(obj.timer);
				callback && callback();
			}
		},time_Scale)
		
		function getStyle(obj,attr){
			if(window.getComputedStyle){
				return getComputedStyle(obj,false)[attr];
			}
			else{
				return obj.currentStyle[attr];
			}
		}
	},
	uniform:function(obj,json,speed_ratio,timeCal,callback){
		clearInterval(obj.timer);
		for(var oSIcur in json){
			if(oSIcur == 'opacity'){
				var start_Icur = parseInt(getStyle(obj,oSIcur)*100);
			}
			else{
				var start_Icur = parseInt(getStyle(obj,oSIcur));
			}
		}
		obj.timer = setInterval(function(){
			var isStop = true;
			for(var attr in json){
				if(attr == 'opacity'){
					var iCur = parseInt(getStyle(obj,attr)*100);
				}
				else{
					var iCur = parseInt(getStyle(obj,attr));
				}
				// var iSpeed = speed;
				// if(iCur > json[attr]){
				// 	iSpeed = -speed;
				// }
				
				var iSpeed = (json[attr] - start_Icur) / speed_ratio;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				
				if(iCur !== json[attr]){
					isStop = false;
				}
				if(Math.abs(iCur - json[attr]) < Math.abs(iSpeed)){
					if(attr == 'opacity'){
						obj.style[attr] = json[attr]/100;
					}
					else{
						obj.style[attr] = json[attr] + 'px';
					}
				}
				else{
					if(attr == 'opacity'){
						obj.style.opacity = (iCur + iSpeed)/100;
						obj.style.filter = 'alpha(opacity='+(iCur + iSpeed)/100+')';
					}
					else{
						obj.style[attr] = (iCur + iSpeed) + 'px';
					}
				}
				
			}
			if(isStop){
				clearInterval(obj.timer);
				callback && callback();
			}
			
		},timeCal);
		
		function getStyle(obj,attr){
			if(window.getComputedStyle){
				return getComputedStyle(obj,false)[attr];
			}
			else{
				return obj.currentStyle[attr];
			}
		}
	},
	place:function(obj,del){
		var oRect = obj.getBoundingClientRect();
		var rect_del = oRect[del];
		return rect_del;
	}
}