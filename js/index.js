//顶部广告

(function(){
	var oAdv = document.getElementById('top_advertising');
	var isAcc = tools.getClassName(oAdv,'isacc')[0];
	var oWw = document.documentElement.clientWidth || document.body.clientWidth;
	
	// window.onresize = function(){
	// 	console.log(1);
	// 	// var oWw = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
	// }
	// window.onresize = changWindow;
	// function changWindow(){
	// 	console.log(1);
	// 	var oWw = window.outerWidth;
	// 	// console.log(oWw);
	// }
	
	tools.addEvent(window,'resize',function(){
		oWw = document.documentElement.clientWidth || document.body.clientWidth;
	});
	var isClicks = true;
	isAcc.onclick = function(event){
		event = event || window.event;
		event.canselBubble = true;
		
		if(oWw <= 1215){
			if(this.style.top == '103px'){
				this.style.top = '86px';
			}
			if(oAdv.style.top == '-100px'){
				oAdv.style.top = '-83px';
			}
			if(isClicks){
				isClicks = false;
				this.title = '打开';
				this.style.top = '86px';
				oAdv.style.marginTop = '-83px';
				this.style.backgroundPosition = '-256px -160px';
			}
			else{
				isClicks = true;
				this.title = '关闭';
				this.style.top = '3px';
				oAdv.style.marginTop = 0;
				this.style.backgroundPosition = '-241px -145px';
			}
		}
		else{
			if(isClicks){
				isClicks = false;
				this.title = '打开';
				this.style.top = '103px';
				oAdv.style.marginTop = '-100px';
				this.style.backgroundPosition = '-256px -160px';
			}
			else{
				isClicks = true;
				this.title = '关闭';
				this.style.top = '3px';
				oAdv.style.marginTop = 0;
				this.style.backgroundPosition = '-241px -145px';
			}
		}
	}
	
})();

//头部导航下拉列表
(function(){
	var oSite = tools.getClassName(document,'site')[0];
	var oDown = tools.getClassName(oSite,'down')[0];
	var oDrop_Down = tools.getClassName(oSite,'drop_navigation')[0];
	var oCancel = tools.getClassName(oDrop_Down,'cancel')[0];
	var timeT = '';
	var timeT_Leave = '';
	// oDrop_Down.classList.add('according');
	// 1.mouseover与mouseenter
	// 不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件。
	// 只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件。
	// 2.mouseout与mouseleave
	// 不论鼠标指针离开被选元素还是任何子元素，都会触发 mouseout 事件。
	// 只有在鼠标指针离开被选元素时，才会触发 mouseleave 事件。
	
		oSite.onmouseenter = function(){
			
			timeT = setTimeout(function(){
				var oV = tools.getClassName(oSite,'xjt')[0];
				oV.style.transform = 'rotate(180deg)';
				
				oSite.classList.add('changeDrop');
				oSite.style.height = '36px';
				oSite.getElementsByTagName('a')[0].style.lineHeight = '32px';
				oDrop_Down.classList.add('according');
				oDrop_Down.style.display = 'block';
				tools.buffer(oDrop_Down,{height:242},8,5);
			},280);
		}
		oSite.onmouseleave = function(){
			clearTimeout(timeT);
			timeT_Leave = setTimeout(function(){
				var oV = tools.getClassName(oSite,'xjt')[0];
				oV.style.transform = 'rotate(0deg)';
				
				oSite.classList.remove('changeDrop');
				oSite.style.height = '35px';
				oSite.getElementsByTagName('a')[0].style.lineHeight = '35px';
				tools.buffer(oDrop_Down,{height:42},5,3,function(){
					oDrop_Down.classList.remove('according');
					oDrop_Down.style.display = 'none';
				});
			},280);
		}
		
		oCancel.onmouseenter = function(){
			this.style.transform = 'rotate(-90deg)';
		}
		oCancel.onmouseleave = function(){
			this.style.transform = 'rotate(90deg)';
		}
		oCancel.onclick = function(event){
			event = event || window.event;
			event.cancelBubble = true;
			oDrop_Down.classList.remove('according');
			oDrop_Down.style.display = 'none';
		}
		
})();

(function(){
	var oDrop_Ss = tools.getClassName(document,'drop_ss');
	// var oXjt = tools.getClassName(body,'xjt');
	// console.log(Array.isArray(oDrop_Ss));
	var timeT = '';
	var timeT_Leave = '';
	
	for(var i = 0; i < oDrop_Ss.length; i++){
		oDrop_Ss[i].index = i;
		oDrop_Ss[i].onmouseenter = function(){
			var str = this.index;
			timeT = setTimeout(function(){
				var oDrop_C = tools.getClassName(oDrop_Ss[str],'drop_c')[0];
				var oV = tools.getClassName(oDrop_Ss[str],'xjt')[0];
				oV.style.transform = 'rotate(180deg)';
				
				oDrop_Ss[str].classList.add('changeDrop');
				oDrop_Ss[str].style.height = '36px';
				oDrop_Ss[str].getElementsByTagName('a')[0].style.lineHeight = '32px';
				oDrop_C.classList.add('according');
				oDrop_C.style.display = 'block';
				if(oDrop_Ss[str].className.indexOf('yg') != -1){
					oDrop_Ss[str].getElementsByTagName('a')[0].style.lineHeight = '33px';
					oDrop_Ss[str].getElementsByTagName('a')[0].style.marginLeft = '-1px';
					tools.buffer(oDrop_C,{height:158},8,5);
				}
				else if(oDrop_Ss[str].className.indexOf('dd') != -1){
					oDrop_Ss[str].getElementsByTagName('a')[0].style.lineHeight = '33px';
					oDrop_Ss[str].getElementsByTagName('a')[0].style.marginLeft = '-1px';
					tools.buffer(oDrop_C,{height:127},8,5);
				}
				else if(oDrop_Ss[str].className.indexOf('sn') != -1){
					oDrop_Ss[str].getElementsByTagName('a')[0].style.lineHeight = '33px';
					oDrop_Ss[str].getElementsByTagName('a')[0].style.marginLeft = '-1px';
					tools.buffer(oDrop_C,{height:222},8,5);
				}
				else if(oDrop_Ss[str].className.indexOf('cc') != -1){
					oDrop_Ss[str].getElementsByTagName('a')[0].style.marginLeft = '-1px';
					oDrop_Ss[str].getElementsByTagName('a')[0].style.lineHeight = '20px';
					tools.buffer(oDrop_C,{height:402},8,5);
				}
				else{
					tools.buffer(oDrop_C,{height:124},8,5);
				}
			},280);
			
			
			oDrop_Ss[str].onmouseleave = function(){
				clearTimeout(timeT);
				timeT_Leave = setTimeout(function(){
					var oDrop_C = tools.getClassName(oDrop_Ss[str],'drop_c')[0];
					
					var oV = tools.getClassName(oDrop_Ss[str],'xjt')[0];
					oV.style.transform = 'rotate(0deg)';
					if(oDrop_Ss[str].className.indexOf('cc') != -1){
						oDrop_Ss[str].getElementsByTagName('a')[0].style.marginLeft = 0;
						oDrop_Ss[str].getElementsByTagName('a')[0].style.lineHeight = '21px';
					}
					else if(oDrop_Ss[str].className.indexOf('yg') != -1){
						oDrop_Ss[str].getElementsByTagName('a')[0].style.lineHeight = '35px';
						oDrop_Ss[str].getElementsByTagName('a')[0].style.marginLeft = 0;
					}
					else if(oDrop_Ss[str].className.indexOf('dd') != -1){
						oDrop_Ss[str].getElementsByTagName('a')[0].style.lineHeight = '35px';
						oDrop_Ss[str].getElementsByTagName('a')[0].style.marginLeft = 0;
					}
					else if(oDrop_Ss[str].className.indexOf('sn') != -1){
						oDrop_Ss[str].getElementsByTagName('a')[0].style.lineHeight = '35px';
						oDrop_Ss[str].getElementsByTagName('a')[0].style.marginLeft = 0;
					}
					else{
						oDrop_Ss[str].style.height = '35px';
						oDrop_Ss[str].getElementsByTagName('a')[0].style.lineHeight = '35px';
					}
					oDrop_Ss[str].classList.remove('changeDrop');
					tools.buffer(oDrop_C,{height:42},5,3,function(){
						oDrop_C.classList.remove('according');
						oDrop_C.style.display = 'none';
					});
				},280);
			}
			
		}
		
	}
	
	
})();

(function(){
	var oContent = tools.getClassName(document,'place_co');
	var oDrop_Place = tools.getClassName(document,'drop_place')[0];
	var oCity_Places = tools.getClassName(oDrop_Place,'city_places')[0];
	var oPlace_cc = tools.getClassName(oCity_Places,'place_cc')[0];
	var oSj = tools.getClassName(oDrop_Place,'triangle')[0];
	
	
	var oColls = tools.getClassName(document,'choose_place')[0];
	var oColl = oColls.getElementsByTagName('li');
	
	// document.getElementsByTagName()方法的返回值中取出某个特定的元素。一开始以为它的返回值是
	// 一个数组，结果，大错特错。它返回的是一个 dom 对象，可以遍历，有 length 属性，但不是数组。
	
	// console.log(Array.isArray(oColl));
	// console.log(oColl.length);
	// console.log(typeof oColl);
	// console.log(oColl);
	// console.log(Array.isArray([1,2,3]));
	
	var isAcc = false;
	// oDrop_Place.onclick = function(event){
	// 	event = event || window.event;
	// 	event.cancelBubble = true;
	// 	if(!isAcc){
	// 		this.classList.add('active_drop');
	// 		oCity_Places.style.display = 'block';
	// 		isAcc = true;
	// 	}
	// 	else{
	// 		this.classList.remove('active_drop');
	// 		oCity_Places.style.display = 'none';
	// 		isAcc = false;
	// 	}
	// }
	
	function drop(event){
		if(!isAcc){
			isAcc = true;
			event = event || window.event;
			event.cancelBubble = true;
			
			oSj.style.borderBottomColor = '#FA0';
			oSj.style.bottom = '12px';
			oSj.style.borderTopColor = 'transparent';
			
			oDrop_Place.classList.add('active_drop');
			oCity_Places.style.display = 'block';
		}
	}
	
	oDrop_Place.onclick = function(event){
		event = event || window.event;
		event.cancelBubble = true;
		drop();
	}
	
	
	
	oPlace_cc.onclick = function(event){
		event = event || window.event;
		event.cancelBubble = true;
		oSj.style.borderBottomColor = 'transparent';
		oSj.style.bottom = '6px';
		oSj.style.borderTopColor = '#bbb';
		
		oDrop_Place.classList.remove('active_drop');
		oCity_Places.style.display = 'none';
		isAcc = false;
	}
	
	
	// var window.isfocus = false;
	var oInput = tools.getClassName(document,'search_box')[0].getElementsByTagName('input')[0];
	var oSearch_History = tools.getClassName(document,'s_history')[0];
	document.onclick = function(){
		oSj.style.borderBottomColor = 'transparent';
		oSj.style.bottom = '6px';
		oSj.style.borderTopColor = '#bbb';
		
		oDrop_Place.classList.remove('active_drop');
		oCity_Places.style.display = 'none';
		isAcc = false;
		
		
		isfocus = false;
		oSearch_History.style.display = 'none';
		var rel = /^\s+$/.test(oInput.value)
		if(oInput.value == '' || rel){
			isfocus = false;
			oInput.value = '海尔爆款空调8折抢';
			oInput.style.color = '#BBBBBB';
		}
		
	}
	
	
	for(var i = 0; i < oColl.length; i++){
		oColl[i].index = i;
		oColl[i].onclick = function(event){
			event = event || window.event;
			event.cancelBubble = true;
			for(k = 0; k < oColl.length; k++){
				if(oColl[k].className.indexOf('active_choose') != -1){
					oColl[k].classList.remove('active_choose');
				}
			}
			for(var j = 0; j < oContent.length; j++){
				if(oContent[j].className.indexOf('active_place') != -1){
					oContent[j].classList.remove('active_place');
				}
			}
			oColl[this.index].classList.add('active_choose');
			oContent[this.index].classList.add('active_place');
		}
	}
	
	oCity_Places.onclick = function(event){
		event = event || window.event;
		event.cancelBubble = true;
	}
	
	// document.onmousedown = function(event){
	// 	event = event || window.event;
	// 	event.cancelBubble = true;
		
	// 	// return false;
	// }
})();

//搜索框历史-热搜
// (function(){
// 	var oSearch_History = tools.getClassName(document,'s_history')[0];
// 	var oHot_Cc = tools.getClassName(oSearch_History,'hot_cc')[0];
// 	var oInput = tools.getClassName(document,'search_box')[0].getElementsByTagName('input')[0];
	
// 	window.isfocus = false;
// 	oInput.onclick = function(event){
// 		event = event || window.event;
// 		event.cancelBubble = true;
// 		if(!isfocus){
// 			isfocus = true;
// 			oSearch_History.style.display = 'block';
// 			if(this.value == '海尔爆款空调8折抢'){
// 				this.value = '';
// 				this.style.color = '#000000';
// 			}
// 		}
// 	}
	
	
// 	isClick = true;
// 	if(isClick){
// 		isClick = false;
// 		oHot_Cc.onclick = function(event){
// 			event = event || window.event;
// 			event.cancelBubble = true;
// 			oSearch_History.style.display = 'none';
			
// 			var rel = /^\s+$/.test(oInput.value);
// 			//也可以 var rel = /^[ ]+$/.test(oInput.value);
// 			if(oInput.value == '' || rel){
// 				isfocus = false;
// 				oInput.value = '海尔爆款空调8折抢';
// 				oInput.style.color = '#BBBBBB';
// 			}
// 		}
// 	}
// 	else{
// 		isClick = true;
// 		oSearch_History.style.display = 'block';
// 	}
	
	
	
// })();

(function(){
	var oInputs = tools.getClassName(document,'search_input');
	var oC_History = tools.getClassName(document,'s_history');
	var oHot_Cc = tools.getClassName(document,'hot_cc');
	
	// var isClick = true;
	for(var i = 0; i < oInputs.length; i++){
		oInputs[i].index = i;
		oInputs[i].onclick = function(event){
			var str = this.index;
			event = event || window.event;
			event.cancelBubble = true;
			oC_History[str].style.display = 'block';
			if(this.value == '海尔爆款空调8折抢'){
				this.value = '';
			}
			document.onclick = function(){
				for(var i = 0; i < oC_History.length; i++){
					oC_History[i].style.display = 'none';
				}
				var rel = /^\s+$/g;
				if(oInputs[str].value == ''){
					oInputs[str].value = '海尔爆款空调8折抢';
				}
				else if(rel.test(oInputs[str].value)){
					oInputs[str].value = '海尔爆款空调8折抢';
				}
			}
			
			for(var k = 0; k < oHot_Cc.length; k++){
				oHot_Cc[k].onclick = function(){
					for(var i = 0; i < oC_History.length; i++){
						oC_History[i].style.display = 'none';
					}
					var rel = /^\s+$/g;
					if(oInputs[str].value == ''){
						oInputs[str].value = '海尔爆款空调8折抢';
					}
					else if(rel.test(oInputs[str].value)){
						oInputs[str].value = '海尔爆款空调8折抢';
					}
				}
			}
		}
	}
	
	for(var j = 0; j < oC_History.length; j++){
		oC_History[j].onclick = function(event){
			event = event || window.event;
			event.cancelBubble = true;
		}
	}
})();

(function(){
	var oUl = tools.getClassName(document,'menu_center')[0];
	var oLi = oUl.getElementsByTagName('li');
	var oF_Sub = tools.getClassName(document,'menu_focus');
	
	for(var i = 0; i < oLi.length; i++){
		oLi[i].index = i;
		oLi[i].onmouseenter = function(){
			var str = this.index;
			var oFocus = tools.getClassName(oLi[str],'menu_focus')[0];
			var time_T = setTimeout(function(){
				tools.buffer(oFocus,{top:30,opacity:100},13,22);
			},100);
			this.onmouseleave = function(){
				clearTimeout(time_T);
				tools.buffer(oFocus,{top:38,opacity:0},12,22);
			}
		}
	}
	
})();


(function(){
	var oRight_Lb = tools.getClassName(document,'right_center')[0];
	var oRight_Ul = oRight_Lb.getElementsByTagName('ul')[0];
	var oRight_Lis = oRight_Ul.getElementsByTagName('li');
	var oRight_Li = oRight_Ul.getElementsByTagName('li')[0];
	var timers = '';
	var iNow=1;
	var oLi_Height = parseInt(getStyle(oRight_Li,'height'));
	oRight_Ul.innerHTML += '<li><a href="javascript:;"><i>[热门]</i>商务人士的移动伴侣 VivoBook14深度评测</a></li><li><a href="javascript:;"><i>[热门]</i>新车上路，三步教你打造舒适汽车环境</a></li><li><a href="javascript:;"><i>[热门]</i>常吃这3种食物 可以去除体内湿气</a></li>'
	
	// uni();
	timers = setInterval(uni,5000);
	function uni(){
		clearInterval(timers);
		tools.uniform(oRight_Ul,{top:-(iNow*oLi_Height*3)},500,7,function(){
			timers = setInterval(uni,5000);
			if(iNow == 2){
				oRight_Ul.style.top = 0;
				iNow = 1;
			}
			else{
				iNow++;
			}
		})
	}
	
	
	oRight_Lb.onmouseenter = function(){
		clearInterval(timers);
	}
	oRight_Lb.onmouseleave = function(){
		timers = setInterval(uni,5000);
	}
	
	function getStyle(obj,attr){
		if(window.getComputedStyle){
			return getComputedStyle(obj,false)[attr];
		}
		else{
			return obj.currentStyle[attr];
		}
	}
})();


//轮播中块广告栏
(function(){
	var oMc_Center = tools.getClassName(document,'mc_center')[0];
	var oNo_Hover = tools.getClassName(oMc_Center,'no_hover')[0];
	var oIs_Hover = tools.getClassName(oMc_Center,'is_hover')[0];
	var oNo_List = oNo_Hover.getElementsByTagName('li');
	var oIs_List = tools.getClassName(oIs_Hover,'ishover_bg');
	var oClosed = tools.getClassName(oIs_Hover,'closed');
	var oPut = tools.getClassName(oIs_Hover,'put');
	var oWw = document.documentElement.clientWidth || document.body.clientWidth;
	tools.addEvent(window,'resize',function(){
		oWw = document.documentElement.clientWidth || document.body.clientWidth;
	});
	var timeT = '';
	var timeT_Close = '';
	// var isEnter = true;
	for(var i = 0; i < oNo_List.length; i++){
		oNo_List[i].index = i;
		oNo_List[i].onmouseenter = function(){
			var str = this.index;
			timeT = setTimeout(function(){
				oNo_Hover.style.display = 'none';
				oNo_Hover.style.opacity = 0;
				clearStyle();
				oIs_Hover.style.display = 'block';
				oIs_Hover.style.opacity = '1';
				oClosed[str].style.display = 'none';
				oPut[str].style.display = 'block';
				if(oWw >= 1215){
					oPut[str].style.width = '655px';
				}
				else{
					oPut[str].style.width = '455px';
				}
				
				for(var j = 0; j < oClosed.length; j++){
					oClosed[j].index = j;
					oClosed[j].onmouseenter = function(){
						var str = this.index;
						timeT_Close = setTimeout(function(){
							clearStyle();
							oClosed[str].style.display = 'none';
							oPut[str].style.display = 'block';
							if(oWw >= 1215){
								tools.buffer(oPut[str],{width:655},7,28);
							}
							else{
								tools.buffer(oPut[str],{width:455},7,28);
							}
						},300);
						oClosed[str].onmouseleave = function(){
							clearTimeout(timeT_Close);
						}
					}
				}
			},300);
			oNo_List[this.index].onmouseleave = function(){
				clearTimeout(timeT);
			}
		}
	}
	oMc_Center.onmouseleave = function(){
		oIs_Hover.style.display = 'none';
		oNo_Hover.style.display = 'block';
		// oNo_Hover.style.opacity = 1;
		tools.buffer(oNo_Hover,{opacity:100},3,20);
	}
	
	
	function clearStyle(){
		for(var i = 0; i < oClosed.length; i++){
			oClosed[i].style.display = 'block';
		}
		for(var j = 0; j < oPut.length; j++){
			oPut[j].style.display = 'none';
			oPut[j].style.width = 0;
		}
	}
})();

//轮播左侧商品类别选项条
(function(){
	var oMain = document.getElementById('main_content');
	var oMc_Left = tools.getClassName(document,'mc_left')[0];
	var oChoose_List = tools.getClassName(oMc_Left,'out_li');
	var oText = tools.getClassName(oMc_Left,'choose_ul')[0].getElementsByTagName('a');
	var oChoose_Content = tools.getClassName(oMc_Left,'left_sonlist');
	var timeT = '';
	
	for(var i = 0; i < oChoose_List.length; i++){
		oChoose_List[i].index = i;
		oChoose_List[i].onmouseenter = function(){
			var str = this.index;
			timeT = setTimeout(function(){
		
				oChoose_List[str].classList.add('outli_Change');
				
				for(var c = 0; c < oChoose_Content.length; c++){
					oChoose_Content[c].style.display = '';
				}
				oChoose_Content[str].style.display = 'block';
				
				var oTop = document.documentElement.scrollTop || document.body.scrollTop;
				if(oTop < 1300){
					var oM_Top = oMain.getBoundingClientRect().top;
					if(oM_Top < 0){
						var move_distance = Math.abs(Math.floor(oM_Top));
						oChoose_Content[str].style.top = move_distance + 'px';
					}
					else{
						oChoose_Content[str].style.top = 0;
					}
				}
				else{
					oChoose_Content[str].style.top = 0;
				}
				
				
				var oTexts = oChoose_List[str].getElementsByTagName('a');
				for(var j = 0; j < oTexts.length; j++){
					oTexts[j].index = j;
					oTexts[j].style.color = '#333';
					oTexts[j].onmouseenter = function(){
						if(oTexts[this.index].parentNode.style.backgroundColor == '#FFF'){
							for(var k = 0; k < oTexts.length; k++){
								oTexts[k].style.color = '#333';
							}
						}
						oTexts[this.index].style.color = '#F60';
						oTexts[this.index].onmouseleave = function(){
							oTexts[this.index].style.color = '#333';
						}
					}
				}
			},29);
			
			// oChoose_List[str].onmouseleave = function(){
			// 	clearTimeout(timeT);
			// }
			
		};
		oChoose_List[i].onmouseleave = function(){
			clearTimeout(timeT);
			oChoose_List[this.index].classList.remove('outli_Change');
			var oTexts = oChoose_List[this.index].getElementsByTagName('a');
			for(var j = 0; j < oTexts.length; j++){
				oTexts[j].style.color = '#FFF';
			}
		};
	};
	
	for(var n = 0; n < oChoose_Content.length; n++){
		oChoose_Content[n].index = n;
		oChoose_Content[n].onmouseenter = function(){
			oChoose_List[this.index].classList.add('outli_Change');
			var oTexts = oChoose_List[this.index].getElementsByTagName('a');
			for(var j = 0; j < oTexts.length; j++){
				oTexts[j].index = j;
				oTexts[j].style.color = '#333';
				oTexts[j].onmouseenter = function(){
					for(var k = 0; k < oTexts.length; k++){
						oTexts[k].style.color = '#333';
					}
					oTexts[this.index].style.color = '#F60';
					oTexts[this.index].onmouseleave = function(){
						oTexts[this.index].style.color = '#333';
					}
				}
			}
		}
		oChoose_Content[n].onmouseleave = function(){
			oChoose_List[this.index].classList.remove('outli_Change');
			var oTexts = oChoose_List[this.index].getElementsByTagName('a');
			for(var j = 0; j < oTexts.length; j++){
				oTexts[j].index = j;
				oTexts[j].style.color = '#FFF';
			}
		}
		
	}
	
	oMc_Left.onmouseleave = function(){
		for(var i = 0; i < oChoose_Content.length; i++){
			oChoose_Content[i].style.display = 'none';
		}
	}
	
})();


//轮播代码
(function(){
	var oMain_shuffing = tools.getClassName(document,'main_shuffling')[0];
	var oPrev = tools.getClassName(oMain_shuffing,'main_prev')[0];
	var oNext = tools.getClassName(oMain_shuffing,'main_next')[0];
	var oPoints = tools.getClassName(oMain_shuffing,'div_points')[0].getElementsByTagName('li');
	var oUl = tools.getClassName(oMain_shuffing,'ul_images')[0];
	var oImgs = oUl.getElementsByTagName('li');
	var timers = '';
	var timeT = '';
	var iCur = 0;
	var isClick = true;
	
	timers = setInterval(goNext,5000);
	function goNext(){
		clearInterval(timers);
		if(iCur == oImgs.length - 1){
			iCur = 0;
		}
		else{
			iCur++;
		}
		clearStyle();
		changePoints();
		oImgs[iCur].style.display = 'block';
		if(iCur == 1){
			oUl.style.backgroundColor = 'rgb(168, 4, 29)';
		}
		else if(iCur == 2){
			oUl.style.backgroundColor = 'rgb(214, 35, 39)';
		}
		else if(iCur == 3){
			oUl.style.backgroundColor = 'rgb(73, 29, 176)';
		}
		else if(iCur == 4){
			oUl.style.backgroundColor = 'rgb(241, 83, 80)';
		}
		else if(iCur == 5){
			oUl.style.backgroundColor = 'rgb(72, 58, 207)';
		}
		else if(iCur == 6){
			oUl.style.backgroundColor = 'rgb(255, 54, 44)';
		}
		else if(iCur == 7){
			oUl.style.backgroundColor = 'rgb(187, 30, 39)';
		}
		tools.uniform(oImgs[iCur],{opacity:100},99,6,function(){
			clearInterval(timers);
			if(isClick){
				timers = setInterval(goNext,5000);
				isClick = true;
			}
			else{
				isClick = true;
			}
		});
	};
	
	function goPrev(){
		clearInterval(timers);
		if(iCur == 0){
			iCur = oImgs.length - 1;
		}
		else{
			iCur--;
		}
		clearStyle();
		changePoints();
		oImgs[iCur].style.display = 'block';
		tools.uniform(oImgs[iCur],{opacity:90},89,6,function(){
			clearInterval(timers);
			if(isClick){
				timers = setInterval(goNext,5000);
				isClick = true;
			}
			else{
				isClick = true;
			}
			// timers = setInterval(goNext,5000);
			// isClick = true;
		});
	}
	
	oNext.onclick = function(){
		if(isClick){
			isClick = false;
			goNext();
		}
	};
	oPrev.onclick = function(){
		if(isClick){
			isClick = false;
			goPrev();
		}
	};
	
	for(var i = 0; i < oPoints.length; i++){
		oPoints[i].index = i;
		oPoints[i].onmouseenter = function(){
			var arr = [];
			arr.push(this.index);
			timeT = setTimeout(function(){
				clearInterval(timers);
				clearStyle();
				var nowIndex = arr[0];
				oPoints[nowIndex].classList.add('active_point');
				oImgs[nowIndex].style.display = 'block';
				tools.uniform(oImgs[nowIndex],{opacity:90},89,6,function(){
					timers = setInterval(goNext,5000);
					isClick = true;
					iCur = nowIndex;
				});
			},300);
			oPoints[this.index].onmouseleave = function(){
				clearTimeout(timeT);
				clearInterval(timers);
			}
		};
	};
	
	
	oMain_shuffing.onmouseenter = function(){
		clearInterval(timers);
		oPrev.style.display = 'block';
		oNext.style.display = 'block';
		oMain_shuffing.onmouseleave = function(){
			clearInterval(timers);
			timers = setInterval(goNext,5000);
			oPrev.style.display = 'none';
			oNext.style.display = 'none';
		}
	};
	
	oPrev.onmouseenter = function(){
		timers = setInterval(goNext,5000);
	};
	oPrev.onmouseleave = function(){
		clearInterval(timers);
	};
	
	oNext.onmouseenter = function(){
		timers = setInterval(goNext,5000);
	};
	oNext.onmouseleave = function(){
		clearInterval(timers);
	};
	
	function changePoints(){
		oPoints[iCur].classList.add('active_point');
	}
	
	function clearStyle(){
		for(var i = 0; i < oImgs.length; i++){
			oImgs[i].style.opacity = 0;
			oImgs[i].style.display = 'none';
		}
		for(var j = 0; j < oPoints.length; j++){
			// oPoints[j].classList.remove('active_point');
			var rel = RegExp('\\bactive_point\\b','g');
			if(rel.test(oPoints[j].className)){
				oPoints[j].classList.remove('active_point');
			}
		}
	}
	
})();

(function(){
	var oOut_All = tools.getClassName(document,'flash_Lbottom')[0];
	var oUl = oOut_All.getElementsByTagName('ul')[0];
	var oLi = oUl.getElementsByTagName('li');
	var oPrev = tools.getClassName(oOut_All,'flb_prev')[0];
	var oNext = tools.getClassName(oOut_All,'flb_next')[0];
	
	var oLi_width = parseInt(tools.getStyle(oLi[0],'width'));
	var oLi_Length = oLi.length;
	oUl.style.width = oLi_width*oLi_Length + 'px';
	
	var timers = '';
	var iCur = 0;
	var isClick = true;
	timers = setInterval(goNext,10000);
	function goNext(){
		clearInterval(timers);
		if(isClick){
			isClick = false;
			clearInterval(timers);
			iCur+=4;
			tools.buffer(oUl,{left:-iCur*oLi_width},10,18,function(){
				timers = setInterval(goNext,10000);
				isClick = true;
				if(iCur == oLi_Length - 4){
					oLi[0].style.position = 'relative';
					oLi[0].style.left = oLi_Length * oLi_width + 'px';
					oLi[1].style.position = 'relative';
					oLi[1].style.left = oLi_Length * oLi_width + 'px';
					oLi[2].style.position = 'relative';
					oLi[2].style.left = oLi_Length * oLi_width + 'px';
					oLi[3].style.position = 'relative';
					oLi[3].style.left = oLi_Length * oLi_width + 'px';
				}
				if(iCur == oLi_Length){
					oLi[0].style.position = 'static';
					oLi[1].style.position = 'static';
					oLi[2].style.position = 'static';
					oLi[3].style.position = 'static';
					iCur = 0;
					oUl.style.left = 0;
				}
			})
		}
	};
	function goPrev(){
		if(isClick){
			isClick = false;
			clearInterval(timers);
			if(iCur == 0){
				oLi[oLi_Length - 4].style.position = 'absolute';
				oLi[oLi_Length - 4].style.left = -4 * oLi_width + 'px';
				oLi[oLi_Length - 3].style.position = 'absolute';
				oLi[oLi_Length - 3].style.left = -3 * oLi_width + 'px';
				oLi[oLi_Length - 2].style.position = 'absolute';
				oLi[oLi_Length - 2].style.left = -2 * oLi_width + 'px';
				oLi[oLi_Length - 1].style.position = 'absolute';
				oLi[oLi_Length - 1].style.left = -1 * oLi_width + 'px';
			}
			iCur-=4;
			tools.buffer(oUl,{left:-iCur*oLi_width},10,18,function(){
				timers = setInterval(goNext,10000);
				isClick = true;
				if(iCur == -4){
					oLi[oLi_Length - 4].style.position = 'static';
					oLi[oLi_Length - 3].style.position = 'static';
					oLi[oLi_Length - 2].style.position = 'static';
					oLi[oLi_Length - 1].style.position = 'static';
					oUl.style.left = -(oLi_Length - 4) * oLi_width + 'px';
					iCur = oLi_Length - 4;
				}
			})
		}
	}
	
	oNext.onclick = goNext;
	oPrev.onclick = goPrev;
	
	oOut_All.onmouseenter = function(){
		clearInterval(timers);
		oPrev.style.display = 'block';
		oNext.style.display = 'block';
		this.onmouseleave = function(){
			clearInterval(timers);
			timers = setInterval(goNext,10000);
			oPrev.style.display = 'none';
			oNext.style.display = 'none';
		}
	}
	
})();

(function(){
	var oOut_All = tools.getClassName(document,'flash_Rbottom')[0];
	var oOut_Img = tools.getClassName(oOut_All,'falsh_RImg')[0];
	var oOut_Btn = tools.getClassName(oOut_All,'falsh_RBtn')[0];
	var oImgs = oOut_Img.getElementsByTagName('li');
	var oBtns = oOut_Btn.getElementsByTagName('li');
	
	var timers = '';
	var iCur = 0;
	
	for(var i = 0; i < oBtns.length; i++){
		oBtns[i].index = i;
		oBtns[i].onmouseenter = function(){
			iCur = this.index;
			clearInterval(timers);
			clearStyle();
			oImgs[this.index].classList.add('flash_active');
			timers = setInterval(goNext,3000);
		}
	}
	
	timers = setInterval(goNext,3000);
	function goNext(){
		iCur++;
		if(iCur == 3){
			iCur = 0;
		}
		clearStyle();
		oImgs[iCur].classList.add('flash_active');
	}
	
	function clearStyle(){
		for(var i = 0; i < oImgs.length; i++){
			oImgs[i].classList.remove('flash_active');
		}
	}
})();

(function(){
	var oAll = tools.getClassName(document,'tf_Lcontent')[0];
	var oUl = tools.getClassName(oAll,'tf_Lcul')[0];
	var oLi = oUl.getElementsByTagName('li');
	var oPoints = tools.getClassName(oAll,'tf_points')[0].getElementsByTagName('span');
	var oPrev = tools.getClassName(oAll,'tf_prev')[0];
	var oNext = tools.getClassName(oAll,'tf_next')[0];
	
	var oLi_L = oLi.length;
	var oLi_W = parseInt(tools.getStyle(oLi[0],'width'));
	var oLi_M = parseInt(tools.getStyle(oLi[0],'marginLeft')) * 2;
	var oLi_Tw = oLi_W + oLi_M;
	oUl.style.width = (oLi_L * oLi_Tw) + 'px';
	
	var timers = '';
	var iCur = 0;
	var isClick = true;
	
	oAll.onmouseenter = function(){
		clearInterval(timers);
		oPrev.style.display = 'block';
		oNext.style.display = 'block';
		this.onmouseleave = function(){
			timers = setInterval(goNext,5000);
			oPrev.style.display = 'none';
			oNext.style.display = 'none';
		}
	}
	
	timers = setInterval(goNext,5000);
	function goNext(){
		if(isClick){
			isClick = false;
			iCur++;
			if(iCur == oLi_L){
				oLi[0].style.position = 'relative';
				oLi[0].style.left = (oLi_L * oLi_Tw) + 'px';
			}
			changePoints();
			tools.buffer(oUl,{left:-iCur*oLi_Tw},10,18,function(){
				if(iCur == oLi_L){
					oUl.style.left = 0;
					oLi[0].style.position = 'static';
					iCur = 0;
				}
				isClick = true;
			});
		}
	}
	function goPrev(){
		if(isClick){
			isClick = false;
			iCur--;
			if(iCur == -1){
				oLi[oLi_L - 1].style.position = 'relative';
				oLi[oLi_L - 1].style.left = -(oLi_L * oLi_Tw) + 'px';
			}
			changePoints();
			tools.buffer(oUl,{left:-iCur*oLi_Tw},10,18,function(){
				if(iCur == -1){
					oUl.style.left = -((oLi_L - 1) * oLi_Tw) + 'px';
					oLi[oLi_L - 1].style.position = 'static';
					iCur = oLi_L - 1;
				}
				isClick = true;
			});
		}
	}
	
	oNext.onclick = goNext;
	oPrev.onclick = goPrev;
	
	for(var i = 0; i < oPoints.length; i++){
		oPoints[i].index = i;
		var timeT = '';
		oPoints[i].onmouseenter = function(){
			var str = this.index;
			timeT = setTimeout(function(){
				iCur = str;
				changePoints();
				tools.buffer(oUl,{left:-iCur*oLi_Tw},10,18);
			},150);
			this.onmouseleave = function(){
				clearTimeout(timeT);
			}
		}
	}
	
	function changePoints(){
		clearStyle();
		if(iCur == -1){
			oPoints[oLi_L - 1].classList.add('tf_Pactive');
		}
		else if(iCur == oLi_L){
			oPoints[0].classList.add('tf_Pactive');
		}
		else{
			oPoints[iCur].classList.add('tf_Pactive');
		}
	}
	
	function clearStyle(){
		for(var i = 0; i < oPoints.length; i++){
			oPoints[i].classList.remove('tf_Pactive');
		}
	}
	
	
})();

(function(){
	var oAll = tools.getClassName(document,'tf_Rlbout')[0];
	var oUl = tools.getClassName(oAll,'tf_Rlb ')[0];
	var oLi = tools.getClassName(oUl,'main_ul');
	var oPoints = tools.getClassName(oAll,'points')[0].getElementsByTagName('li');
	var oPrev = tools.getClassName(oAll,'tf_Rprev')[0];
	var oNext = tools.getClassName(oAll,'tf_Rnext ')[0];
	var oLi_L = oLi.length;
	var oLi_W = parseInt(tools.getStyle(oLi[0],'width'));
	var oLi_M = parseInt(tools.getStyle(oLi[0],'marginLeft')) * 2;
	var oLi_Tw = oLi_W + oLi_M;
	oUl.style.width = oLi_L * oLi_Tw + 'px'; 
	
	var timers = '';
	var iCur = 0;
	var isClick = true;
	
	oAll.onmouseenter = function(){
		oPrev.style.display = 'block';
		oNext.style.display = 'block';
	}
	
	function goNext(){
		if(isClick){
			isClick = false;
			iCur++;
			if(iCur == 2){
				oLi[0].style.position = 'relative';
				oLi[0].style.left = oLi_L * oLi_Tw + 'px';
			}
			changePoints();
			tools.buffer(oUl,{left:-iCur*oLi_Tw},10,18,function(){
				if(iCur == 2){
					oUl.style.left = 0;
					oLi[0].style.left = 0;
					iCur = 0;
				}
				isClick = true;
			});
		}
	};
	function goPrev(){
		if(isClick){
			isClick = false;
			iCur--;
			if(iCur == -1){
				oLi[oLi_L - 1].style.position = 'relative';
				oLi[oLi_L - 1].style.left = -(oLi_L * oLi_Tw) + 'px';
			}
			changePoints();
			tools.buffer(oUl,{left:-iCur*oLi_Tw},10,18,function(){
				if(iCur == -1){
					oUl.style.left = -oLi_Tw + 'px';
					oLi[oLi_L - 1].style.position = 'static';
					iCur = oLi_L - 1;
				}
				isClick = true;
			});
		}
	}
	
	
	oNext.onclick = goNext;
	oPrev.onclick = goPrev;
	
	
	for(var i = 0; i < oPoints.length; i++){
		oPoints[i].index = i;
		var timeT = '';
		oPoints[i].onmouseenter = function(){
			var str = this.index;
			timeT = setTimeout(function(){
				oPoints[str].classList.add('tf_Rpactive');
				iCur = str;
				changePoints();
				tools.buffer(oUl,{left:-iCur*oLi_Tw},10,18);
			},150);
			this.onmouseleave = function(){
				clearTimeout(timeT);
			}
		}
	}
	
	function changePoints(){
		clearStyle();
		if(iCur == oLi_L){
			oPoints[0].classList.add('tf_Rpactive');
		}
		else if(iCur == -1){
			oPoints[oLi_L - 1].classList.add('tf_Rpactive');
		}
		else{
			oPoints[iCur].classList.add('tf_Rpactive');
		}
	}
	function clearStyle(){
		for(var i = 0; i < oPoints.length; i++){
			oPoints[i].classList.remove('tf_Rpactive');
		}
	}
	
})();


(function(){
	var oFlash_Time = tools.getClassName(document,'flash_time')[0];
	var oHours = tools.getClassName(oFlash_Time,'hours')[0];
	var oMinutes = tools.getClassName(oFlash_Time,'minutes')[0];
	var oSeconds = tools.getClassName(oFlash_Time,'seconds')[0];
	
	abc(2,59,60);
	function abc(hours,minutes,seconds){
		var timers = '';
		timers = setInterval(function(){
			seconds--;
			if(seconds == 0){
				seconds = 60;
				minutes--;
				if(minutes == 0){
					minutes = 60;
					hours--;
					if(hours == 0){
						return;
					}
				}
			}
			// var oHours = tools.getClassName(oFlash_Time,'hours')[0];
			if(hours < 10){
				oHours.innerText = "0" + hours;
			}
			else{
				oHours.innerHTML = hours;
			}
			if(minutes < 10){
				oMinutes.innerHTML = '0' + minutes;
			}
			else{
				oMinutes.innerHTML = minutes;
			}
			if(seconds < 10){
				oSeconds.innerHTML = '0' + seconds;
			}
			else{
				oSeconds.innerHTML = seconds;
			}
			
		},1000);
	}
})();

// (function(){
// 	var oTitle = tools.getClassName(document,'tf_RcTitle')[0];
// 	var oTl_Ul = oTitle.getElementsByTagName('ul')[0];
// 	var oTitle_List = oTitle.getElementsByTagName('li');
// 	var oTl_Width = parseInt(tools.getStyle(oTitle_List[0],'width'));
// 	var oTl_outW = parseInt(tools.getStyle(oTitle_List[0],'marginLeft'))*2;
// 	var oTL_trueW = oTl_Width + oTl_outW;
// 	var oTl_Length = oTitle_List.length;
// 	var oContent = tools.getClassName(document,'out_div');
	
// 	for(var i = 0; i < oTitle_List.length; i++){
// 		oTitle_List[i].index = i;
// 		oTitle_List[i].onclick = function(){
// 			var iCur = this.index;
// 			var str = parseInt(tools.getStyle(oTl_Ul,'left'));
// 			// var str_r = parseInt(tools.getStyle(oTl_Ul,'right'));
// 			clearStyle();
// 			oTitle_List[iCur].classList.add('tf_cur');
// 			oContent[iCur].style.display = 'block';
// 			if(str > -272 && str <= 0){
// 				if(iCur >= 3){
// 					str -= oTL_trueW * 2;
// 					tools.buffer(oTl_Ul,{left:str},6,22,function(){
// 						alert(str);
// 					});
// 				}
// 			}
// 		}
// 	}
	
// 	function clearStyle(){
// 		for(var i = 0; i < oContent.length; i++){
// 			oContent[i].style.display = 'none';
// 		}
// 		for(var j = 0; j < oTitle_List.length; j++){
// 			oTitle_List[j].classList.remove('tf_cur');
// 		}
// 	}
// })();



(function(){
	var oAll = tools.getClassName(document,'tf_Rcontent')[0];
	var oTitle = tools.getClassName(oAll,'tf_RcTitle')[0];
	var oUl = oTitle.getElementsByTagName('ul')[0];
	var oLi = oUl.getElementsByTagName('li');
	var oContent = tools.getClassName(oAll,'out_div');
	var oLi_L = oLi.length;
	var oLi_W = parseInt(tools.getStyle(oLi[0],'width'));
	var oLi_M = parseInt(tools.getStyle(oLi[0],'marginLeft')) * 2;
	var oLi_Tw = oLi_W + oLi_M;
	
	for(var i = 0; i < oLi.length; i++){
		oLi[i].index = i;
		var iCur = 0;
		var now = 0;
		var oM = 0;
		oLi[i].onclick = function(){
			oM = parseInt(tools.getStyle(oUl,'left'));
			var str = this.index;
			// iCur -= 2;
			clearStyle();
			oLi[str].classList.add('tf_cur');
			oContent[str].style.display = 'block';
			if(str >= 1 && str <= oLi_L - 2){
				// iCur = str - 1;
				// iCur -= 2;
				iCur = -(str - 1);
				if(oM == 0 || oM <= -2){
					if(str < now){
						// iCur = 0;
						// iCur += iCur;
						iCur = -(str - 1);
						if(str == 2){
							iCur = 0;
						}
						// console.log(iCur);
						tools.buffer(oUl,{left:iCur*oLi_Tw},6,22,function(){
							now = str;
						});
					}
					else if(str == now){
						return;
					}
					else{
						tools.buffer(oUl,{left:iCur*oLi_Tw},6,22,function(){
							now = str;
						});
					}
				}
			}
		}
	}
	
	
	function clearStyle(){
		for(var i = 0; i < oLi.length; i++){
			oLi[i].classList.remove('tf_cur');
		}
		for(var j = 0; j < oContent.length; j++){
			oContent[j].style.display = 'none';
		}
	}
	
})();

//锚点过渡
// (function(){
// 	var oAnchor = document.getElementById('anchor');
// 	var oLi = oAnchor.getElementsByTagName('li');
// 	var oContent = tools.getClassName(document,'partition');
// 	// var oS_Top = document.documentElement.scrollTop || document.body.scrollTop;
// 	for(var i = 0; i < oLi.length; i++){
// 		oLi[i].index = i;
// 		oLi[i].onclick = function(){
// 			for(var j = 0; j < oContent.length; j++){
// 				var oC_Scope = oContent[j].getAttribute('scope');
// 				var oL_Scope = oLi[this.index].getAttribute('scope');
// 				if(oL_Scope == oC_Scope){
// 					var oTop = parseInt(oContent[j].getBoundingClientRect().top);
// 					console.log(oTop);
// 					document.documentElement.scrollTop = document.body.scroll = oTop;
// 				}
// 			}
// 		}
// 	}
	
// })();

(function(){
	var oAnchor = document.getElementById('anchor');
	var oBtns = oAnchor.getElementsByTagName('li');
	var oRoll = tools.getClassName(document,'roll');
	var oContent = tools.getClassName(document,'partition');
	var oSi_getTop = tools.getClassName(document,'si_gettop')[0];
	var oTop_nav = document.getElementById('noTop_nav');
	var oBody = document.documentElement || document.body;
	var oMaxScroll;
	// var timers = '';
	var isClick = true;
	
	oMax();
	function oMax(){
		var oSee = oBody.clientHeight;
		//Element.scrollHeight 这个只读属性是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。
		oMaxScroll = oBody.scrollHeight - oSee;
	}
	
	// window.onresize = function(){
	// 	oMax();
	// }
	
	tools.addEvent(window,'resize',function(){
		oMax();
	});
	
	// window.addEventListener('resize',function(){
	// 	console.log(1);
	// },false);
	
	
	
	oSi_getTop.onclick = function(){
		for(var i = 0; i < oContent.length; i++){
			var oSi_Scope = oContent[i].getAttribute('scope');
			if(this.getAttribute('scope') == oSi_Scope){
				var oSi_Top = oContent[i].offsetTop;
				var times = setInterval(function(){
					var oNow_Top = oBody.scrollTop;
					Math.ceil(oNow_Top);
					var iSpeed = (oSi_Top - oNow_Top) / 7;
					iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
					if(oNow_Top == oSi_Top){
						clearInterval(times);
					}
					oBody.scrollTop = oNow_Top + iSpeed;
				},20);
			}
		}
	}
	
	for(var i = 0; i < oBtns.length; i++){
		// oBtns[i].index = i;
		oBtns[i].onclick = function(){
			if(isClick){
				isClick = false;
				for(var j = 0; j < oContent.length; j++){
					var oC_Scope = oContent[j].getAttribute('scope');
					var oB_Scope = this.getAttribute('scope');
					if(oB_Scope == oC_Scope){
						var oNow_C = oContent[j];
						
						var timers = setInterval(function(){
							var oTop = oBody.scrollTop;
							oTop = Math.ceil(oTop);
							// console.log(oTop);
							
							var iSpeed = (oNow_C.offsetTop - oTop) / 7;
							iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
							
							if(oTop == oNow_C.offsetTop){
								clearInterval(timers);
								isClick = true;
							}
							
							oBody.scrollTop = oTop + iSpeed;
							if(oTop == oMaxScroll){		//特殊处理,当滚动的内容无法完全滚动完时,处于页面的最底部,清除定时器
								clearInterval(timers);
								oBody.scrollTop=oMaxScroll-1;	//下次计算速度的时候,当前值等于就等于最大滚动距离,仍然会执行该语句块,所以判断完后改变下滚动条的位置
								isClick = true;
							}
						},22);
					}
				}
			}
		}
	}
	
	
	
	tools.addEvent(window,'scroll',function(){
		var oTop = document.documentElement.scrollTop || document.body.scrollTop;
		var oScope = '';
		
		if(oTop >= oMaxScroll - 300 || oTop <= 628){
			oAnchor.style.display = 'none'
		}
		else{
			oAnchor.style.display = 'block'
		}
		if(oTop >= 1300){
			oTop_nav.style.display = 'block';
		}
		else{
			oTop_nav.style.display = 'none';
		}
			
		for(var i = 0; i < oContent.length; i++){
			if(oTop >= oContent[i].offsetTop - 220){
				oScope = oContent[i].getAttribute('scope');
			}
		}
	
	
		if(oTop < oContent[1].offsetTop){
			// oRoll[0].classList.add('an_active');
			oRoll[0].className = 'an_active';
		}
		else{
			for(var j = 0; j < oRoll.length; j++){
				if(oRoll[j].getAttribute('scope') != oScope){
					// oRoll[j].classList.remove('an_active');
					oRoll[j].className = '';
				}
				else{
					// oRoll[j].classList.add('an_active');
					oRoll[j].className = 'an_active';
				}
			}
		}
		// if(oTop == oMaxScroll){
		// 	// clearInterval(timers);
		// 	oBody.scrollTop=oMaxScroll-0.1;
		// 	// isClick = true;
		// }
	})
})();

(function(){
	var oNt_car = tools.getClassName(document,'nT_shopcar')[0];
	var oNt_Cc = tools.getClassName(oNt_car,'nt_dropcar')[0];
	var oNt_indc = tools.getClassName(oNt_Cc,'nt_indc')[0];
	var oNt_jt = tools.getClassName(oNt_car,'nt_jt')[0];
	var timeT = '';
	
	oNt_car.onmouseenter = function(){
		var oA = this.getElementsByTagName('a')[0];
		timeT = setTimeout(function(){
			oA.style.borderColor = '#ddd';
			oNt_Cc.style.display = 'block';
			oNt_Cc.style.border = 'solid 1px #ddd';
			tools.buffer(oNt_indc,{height:401},6,22);
			tools.buffer(oNt_Cc,{height:402},6,22);
		},280);
		
		this.onmouseleave = function(){
			clearTimeout(timeT);
			oA.style.borderColor = '#fff';
			oNt_Cc.style.border = 'none';
			oNt_indc.style.height = 0;
			tools.buffer(oNt_Cc,{height:0},6,22,function(){
				oNt_Cc.style.display = 'none';
			});
		}
	}
})();


(function(){
	var oNt_In = tools.getClassName(document,'nT_in ')[0];
	var oMenu_type = tools.getClassName(oNt_In,'menu_left')[0];
	var oMc_Left = tools.getClassName(document,'mc_left')[0];
	var oChose = tools.getClassName(oMc_Left,'choose_ul')[0];
	var oChose_Li = oChose.getElementsByTagName('li');
	var oL_sonList = tools.getClassName(oMc_Left,'left_sonlist');
	// var oNtIn_M = parseInt(tools.getStyle(oNt_In,'marginLeft'));
	// console.log(oNtIn_M);	//NAN
	var oNtIn_M = 165;
	
	tools.addEvent(window,'resize',function(){
		oNtIn_M = parseInt(tools.getStyle(oNt_In,'marginLeft'));
		// console.log(oNtIn_M);	//NAN
		oMc_Left.style.left = oNtIn_M + 'px';
	});
	
	var isClick = true;
	oMenu_type.onclick = function(){
		if(isClick){
			isClick = false;
			oMc_Left.style.position = 'fixed';
			oMc_Left.style.top = '50px';
			oMc_Left.style.left = oNtIn_M + 'px';
		}
		else{
			isClick = true;
			oMc_Left.style.position = 'absolute';
			oMc_Left.style.top = 0;
			oMc_Left.style.left = 0;
		}
	}
	
	tools.addEvent(window,'scroll',function(){
		var oTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(oTop < 1300){
			oMc_Left.style.position = 'absolute';
			oMc_Left.style.top = 0;
			oMc_Left.style.left = 0;
		}
	})
	
	
})();

// oMc_Left.style.position = 'fixed';
// 			oMc_Left.style.top = '50px';
// 			oMc_Left.style.left = oNtIn_M + 'px';
			
// 			oMc_Left.onmouseenter = function(){
// 				for(var i = 0; i < oL_sonList.length; i++){
// 					oL_sonList[i].index = i;
// 					oL_sonList[i].onmouseleave = function(){
// 						for(var j = 0; j < oChose_Li.length; j++){
// 							oChose_Li[j].classList.remove('outli_Change');
// 							var oA = oChose_Li[j].getElementsByTagName('a');
// 							for(var k = 0; k < oA.length; k++){
// 								oA[k].style.color = '#FFFFFF';
// 							}
// 						}
// 						var timeTT = setTimeout(function(){
// 							oMc_Left.style.position = 'absolute';
// 							oMc_Left.style.top = 0;
// 							oMc_Left.style.left = 0;
// 						},1000);
// 						for(var m = 0; m < oChose_Li.length; m++){
// 							oChose_Li[m].onmouseenter = function(){
// 								clearTimeout(timeTT);
// 							}
// 						}
						
// 					}
// 				}
// 			}