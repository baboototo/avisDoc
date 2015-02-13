
$(document).ready(function(){
	createMenuHtml();
	createFileDownLoadDropdownHtml();
	
	initEvent();
});

/**
 * AJ렌터카 개발 가이드 메뉴 HTML 생성
 */
function createMenuHtml(){
	
	var menuDataObj = createMenuJsonData();
	var html = "";
	
	$.each(menuDataObj, function(idx, menuData){
		
		if(menuData.subMenu == undefined){
			
			var beforeHtml = "";
			if(menuData.menuIcon == "fa-info"){
				beforeHtml = "&nbsp;";
			}
				
			html+='<li>'
				+ '	<a href="'+ menuData.menuUrl +'">'
				+ '		'+ beforeHtml +'<i class="fa '+ menuData.menuIcon +'"></i>&nbsp;&nbsp;&nbsp;'+ menuData.menuTitle
				+ '	</a>'
				+ '</li>';
		}else{
			html+='<li>'
				+ '	<a href="#">'
				+ '		<i class="fa '+ menuData.menuIcon +'"></i>&nbsp;&nbsp;&nbsp;'+ menuData.menuTitle +'<span class="fa arrow"></span>'
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
 * AJ렌터카 개발 가이드 참고문서 HTML 생성
 */
function createFileDownLoadDropdownHtml(){
	var html= '<a class="dropdown-toggle" data-toggle="dropdown" href="#">'
			+ '		<i class="fa fa-user fa-download"></i>  <i class="fa fa-caret-down"></i>'
			+ '</a>'
			+ '<ul class="dropdown-menu dropdown-messages">'
			+ '		<li>'
			+ '			<a href="./downloadFile/IBSheetHTML.zip">'
			+ '				<div>'
			+ '					<strong><i class="fa fa-file-zip-o"></i> IBSheetHTML 개발자가이드 </strong>'
			+ '				</div>'
			+ '				<div>'
			+ '					IBSheet 개발자 가이드 문서 (PDF,CHM)'
			+ '				</div>'
			+ '			</a>'
			+ '		</li>'
			+ '		<li class="divider"></li>'
			+ '		<li>'
			+ '			<a href="./downloadFile/IBChartHTML.zip">'
			+ '				<div>'
			+ '					<strong><i class="fa fa-file-zip-o"></i> IBChartHTML 개발자가이드 </strong>'
			+ '				</div>'
			+ '				<div>'
			+ '					IBChart 개발자 가이드 문서 (PDF,CHM)'
			+ '				</div>'
			+ '			</a>'
			+ '		</li>'
			+ '		<li class="divider"></li>'
			+ '		<li>'
			+ '			<a href="./downloadFile/IBMDITabHTML.zip">'
			+ '				<div>'
			+ '					<strong><i class="fa fa-file-zip-o"></i> IBMDITabHTML 개발자가이드 </strong>'
			+ '				</div>'
			+ '				<div>'
			+ '					IBMDITab 개발자 가이드 문서 (PDF,CHM)'
			+ '				</div>'
			+ '			</a>'
			+ '		</li>'
			+ '		</li>'
			+ '		<li class="divider"></li>'
			+ '		<li>'
			+ '			<a href="./downloadFile/AJ_Templates.zip">'
			+ '				<div>'
			+ '					<strong><i class="fa fa-file-zip-o"></i> Eclipse HTML/JSP Templates </strong>'
			+ '				</div>'
			+ '				<div>'
			+ '					화면 HTML구성 및 특정 HTML 태그를 사용할 수 있도록 설정된 Eclipse 템플릿 파일 '
			+ '				</div>'
			+ '			</a>'
			+ '		</li>'
			+ '		<li class="divider"></li>'
			+ '		<li>'
			+ '			<a href="./downloadFile/com.avis.converter_1.0.0.20140902.jar">'
			+ '				<div>'
			+ '					<strong><i class="fa fa-file-zip-o"></i> Eclipse Plug-In </strong>'
			+ '				</div>'
			+ '				<div>'
			+ '					AS-IS 또는 TO-BE JSP파일의 특정소스을 로그로 추출하는 Eclipse 플러그인'
			+ '				</div>'
			+ '			</a>'
			+ '		</li>'
			+ '</ul">';
	
	$("#fileDownLoadDropdown").html(html);
}

/**
 * AJ렌터카 개발 가이드 메뉴데이터
 * @returns {Array}
 */
function createMenuJsonData(){
	var menuDataObj = [
					{
					   	menuTitle: 	"&nbsp;&nbsp;개발가이드",
					   	menuIcon: 	"fa-info",
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
	       	        	          {subTitle: "DataSet / TrSet", 		subUrl: "dataDataSet.html"}
//	       	        	          , {subTitle: "TrSet", 		subUrl: "dataTrSet.html"}
	       	        	          , {subTitle: "Grid", 			subUrl: "dataGrid.html"}
	       	        	          ]
	       	        }
	       	        , {
	       	        	menuTitle: 	"API",
	       	        	menuIcon: 	"fa-gear",
	       	        	subMenu: [
	       	        	          {subTitle: "DATASET", 		subUrl: "apiDataSet.html"}
	       	        	          , {subTitle: "TRSET", 		subUrl: "apiTrSet.html"}
	       	        	          , {subTitle: "IBSheet", 		subUrl: "apiIBSheet.html"}
	       	        	          , {subTitle: "IBChart", 		subUrl: "apiIChart.html"}
	       	        	          , {subTitle: "IBMDITab", 		subUrl: "apiIBMDITab.html"}
	       	        	          ]
	       	        }
	       	        , {
	       	        	menuTitle: 	"UTIL",
	       	        	menuIcon: 	"fa-wrench",
	       	        	subMenu: [
	       	        	          {subTitle: "Eclipse HTML Template", 	subUrl: "utilHtml.html"}
	       	        	          , {subTitle: "Eclipse Template", 		subUrl: "utilJsp.html"}
	       	        	          , {subTitle: "Eclipse Plug-In", 		subUrl: "utilPlugIn.html"}
	       	        	          ]
	       	        }
	       			
	       	];
	return menuDataObj
}

/**
 * 이벤트
 */
function initEvent(){
	
	/** 클릭 이벤트 */
	$(document).on("click", ".btn-default-new", function(e){
		// 클릭한 버튼의 name 가져오기
		var nameVal = $(this).attr("name");
		// nameVal에 해당하는 id의 html 값 가져오기
		var htmlVal = $('#' + nameVal).html();
		
		// htmlVal 값에서 해당 기호를 특수문자로 변경
		var text = htmlVal.replace(/(&lt;)/g, '<').replace(/(&gt;)/g, '>');
		
		/** IE 처리 */
		if(window.clipboardData){
		    // 클립보드에 문자열 복사
		    window.clipboardData.setData('text', text);
		    
		    alert("복사 되었습니다.");
		    
		/** 비IE 처리 */    
		} else {                    
		    window.prompt ("클립보드 복사 : Ctrl + C", text);  
		}
	}); 
}