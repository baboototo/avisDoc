
$(document).ready(function(){
	createMenuHtml();
});

/**
 * AJ렌터카 개발 가이드 메뉴 HTML 생성
 */
function createMenuHtml(){
	
	var menuDataObj = createMenuJsonData();
	var html = "";
	
	$.each(menuDataObj, function(idx, menuData){
		
		if(menuData.subMenu == undefined){
			html+='<li>'
				+ '	<a href="'+ menuData.menuUrl +'">'
				+ '		<i class="fa fa-dashboard '+ menuData.menuIcon +'"></i>&nbsp;&nbsp;&nbsp;'+ menuData.menuTitle
				+ '	</a>'
				+ '</li>';
		}else{
			html+='<li>'
				+ '	<a href="#">'
				+ '		<i class="fa fa-bar-chart-o '+ menuData.menuIcon +'"></i>&nbsp;&nbsp;&nbsp;'+ menuData.menuTitle +'<span class="fa arrow"></span>'
				+ '	</a>'
				+ '	<ul class="nav nav-second-level">';
			
			$.each(menuData.subMenu, function(jdx, subMenuData){
				html+='    <li>'
					+ '        <a href="'+ subMenuData.subUrl  +'">'+ subMenuData.subTitle +'</a>'
					+ '    </li>'
			});
			
			html+='	</ul>';
				+ '</li>';
		}
		
	});
	
	$("#side-menu").html(html);
}

/**
 * AJ렌터카 개발 가이드 메뉴데이터
 * @returns {Array}
 */
function createMenuJsonData(){
	var menuDataObj = [
					{
					   	menuTitle: 	"개발가이드",
					   	menuIcon: 	"fa-desktop",
					   	menuUrl:	"index.html"
					   	
					}
	       	        , {
	       	        	menuTitle: 	"화면구성",
	       	        	menuIcon: 	"fa-desktop",
	       	        	subMenu: [
	       	        	          {subTitle: "JSP", 			subUrl: "viewJsp.html"}
	       	        	          , {subTitle: "JavaScript", 	subUrl: "viewJavaScript.html"}
	       	        	          , {subTitle: "HTML", 			subUrl: "viewHtml.html"}
	       	        	          ]
	       	        }
	       	        , {
	       	        	menuTitle: "데이터구조",
	       	        	menuIcon: 	"fa-database",
	       	        	subMenu: [
	       	        	          {subTitle: "DataSet", 		subUrl: "dataDataSet.html"}
	       	        	          , {subTitle: "TrSet", 		subUrl: "dataTrSet.html"}
	       	        	          , {subTitle: "Grid", 			subUrl: "dataGrid.html"}
	       	        	          ]
	       	        }
	       	        , {
	       	        	menuTitle: 	"API",
	       	        	menuIcon: 	"fa-fa-database",
	       	        	subMenu: [
	       	        	          {subTitle: "DataSet", 		subUrl: "apiDataSet.html"}
	       	        	          , {subTitle: "TrSet", 		subUrl: "apiTrSet.html"}
	       	        	          , {subTitle: "IBSheet", 		subUrl: "apiIBSheet.html"}
	       	        	          , {subTitle: "IBChart", 		subUrl: "apiIChart.html"}
	       	        	          , {subTitle: "IBTab", 		subUrl: "apiIBTab.html"}
	       	        	          ]
	       	        }
	       	        , {
	       	        	menuTitle: 	"UTIL",
	       	        	menuIcon: 	"fa-recycle",
	       	        	subMenu: [
	       	        	          {subTitle: "HTML Template", 		subUrl: "utilHtml.html"}
	       	        	          , {subTitle: "JSP Template", 		subUrl: "utilJsp.html"}
	       	        	          , {subTitle: "Eclipse Plug-In", 	subUrl: "utilPlugIn.html"}
	       	        	          ]
	       	        }
	       			
	       	];
	return menuDataObj
}