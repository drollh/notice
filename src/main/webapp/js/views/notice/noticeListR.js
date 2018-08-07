$(document).ready(function(){ 
	//fnRetrieve();
	//formEvent();

	console.log('jqGrid start');
	$("#jqGrid").jqGrid({
	   	url:'/notice/retrieve.do',
		datatype: "json",
	   	colNames:['NOTICE_ID','NOTICE_TITLE', 'NOTICE_CONTENT'],
	   	colModel:[
	   		{name:'NOTICE_ID',index:'NOTICE_ID', width:55},
	   		{name:'NOTICE_TITLE',index:'NOTICE_TITLE', width:90},
	   		{name:'NOTICE_CONTENT',index:'NOTICE_CONTENT', width:100},
	   	],
	   	rowNum:10,
	   	rowList:[10,20,30],
	   	pager: '#paging',
	   	sortname: 'NOTICE_ID',
	    viewrecords: true,
	    sortorder: "desc",
	    caption:"JSON Example"
	});
	jQuery("#jqGrid").jqGrid('navGrid','#paging',{edit:false,add:false,del:false});
	console.log('jqGrid end');
}); 

//작성
function fnRetrieve(){ 
    var ajax = new ComAjax();
    ajax.url("/notice/retrieve.do");
    ajax.success(function(data){
    	console.log(data.list);
    	});
    ajax.call();
}

//작성
function fnWrite(){ 
	var form = new ComForm(); 
	form.url("/notice/viewDetail.do");
	form.submit();
}

// 폼 이벤트
function formEvent(){
	// 작성 버튼
	$('#write').on("click", function(e){
		fnWrite(); 
	});
}

