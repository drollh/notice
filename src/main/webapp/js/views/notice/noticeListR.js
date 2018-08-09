$(document).ready(function(){ 
	fnRetrieve();
	formEvent();
}); 

function fnRetrieve(){ 
	var grid = new ComGrid();
	// grid 뿌려질 id 현재 #로 고정 추후 selector 추가
	grid.id("jqGrid");
	// paging 뿌려질 id 현재 #로 고정 추후 selector 추가
	grid.pager("paging");
	// url
	grid.url("/notice/retrieve.do");
	// 위드 자동 조절 default:true 
   	grid.autoWidth(false);
	// 통신 방법 GET/POST default:POST
   	//grid.type("POST");
	// 데이터 타입 default:json > 외부 요청 시 jsonp로 변경
	//grid.dataType("json");
	// 그리드 header 양식 ['순번','제목', '내용']
   	grid.colNames(['순번','제목', '내용']);
   	// 그리드 매핑 및 포맷 
   	//	[
   	//	{name:'NOTICE_SEQ',index:'NOTICE_SEQ', width:80},
   	//  {name:'NOTICE_TITLE',index:'NOTICE_TITLE', width:150},
   	//  {name:'NOTICE_CONTENT',index:'NOTICE_CONTENT', width:300},
   	//	],
   	grid.colModel([ 
   					{name:'NOTICE_SEQ',index:'NOTICE_SEQ', width:80, formatter:'integer', sorttype:'integer'},
	   			 	{name:'NOTICE_TITLE',index:'NOTICE_TITLE', width:150},
	   			 	{name:'NOTICE_CONTENT',index:'NOTICE_CONTENT', width:300}
	   			 ]);
   	// 한 페이지에 보여줄 갯 수 
   	grid.rowNum(10); 
   	// loadOnce랑 scroll이랑 섞어서 뭐 하나본데 모름
   	//grid.rowTotal(5); 
   	// 한 페이지에 보여줄 갯 수를 조정 할 수 있는 바 default:[50,100,200]
   	grid.rowList([10,20,30]);
   	// sort id 
   	grid.sortName("NOTICE_SEQ");
   	// sort 순서 default:ASC
   	grid.sortOrder("DESC");
    // 그리드에 총 카운팅 유무 default:true
   	//grid.viewRecords(false)
    // 그리드에 표시될 타이틀
   	grid.caption("게시판");
    // 멀티 셀렉트 여부 default:false	
   	//grid.multiSelect(false);
   	// jsonReader로 controller에서 받은 object 명 및 페이지 토탈 등 설정
   	//grid.jsonReader({root:"gridListvv", page:2, total:40});
   	// grid option으로 edit, add, del 등 설정
   	//grid.options({edit:true, add:false, del:false});
   	// 첫 페이지만 볼지 여부 default:true >  true여야 다음 페이지 나옴
   	// grid.loadonce(true);
   	grid.call();
}

//작성
function fnWrite(){ 
	var form = new ComForm(); 
	form.url("/notice/viewDetail.do");
	form.submit();
}

// 폼 이벤트
function formEvent(){
	// 작성
	$('#write').on("click", function(e){
		fnWrite(); 
	});
	// 조회
	$('#retrieve').on("click", function(e){
		fnRetrieve(); 
	});
}

