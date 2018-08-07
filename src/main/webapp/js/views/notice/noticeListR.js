$(document).ready(function(){ 
	fnRetrieve();
	formEvent();
}); 

//작성
function fnRetrieve(){ 
	console.log('jqGrid start');
	$("#jqGrid").jqGrid({
		 jsonReader : {
		      root:"list",
		      //page: "currpage",
		      //total: "totalpages",
		      //records: "totalrecords"
		   },
	   	url:'/notice/retrieve.do',
	   	mtype : 'post',
		datatype: "json",
	   	colNames:['순번','제목', '내용'],
	   	colModel:[
	   		{name:'NOTICE_SEQ',index:'NOTICE_SEQ', width:80},
	   		{name:'NOTICE_TITLE',index:'NOTICE_TITLE', width:150},
	   		{name:'NOTICE_CONTENT',index:'NOTICE_CONTENT', width:300},
	   	],
	   	rowNum:10,
	   	rowTotal:50,
	   	rowList:[10,20,30],
	   	pager: '#paging',
	   	sortname: 'NOTICE_ID',
	    viewrecords: true,
	    //sortorder: "desc",
	    caption:"게시판",
	});
	jQuery("#jqGrid").jqGrid('navGrid','#paging',{edit:false,add:false,del:false});
	console.log('jqGrid end');
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

