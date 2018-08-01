$(document).ready(function(){ 
	
	$("a[name='title']").on("click", function(e){
		fnDetail($(this)); 
	}); 
}); 

function fnWrite(){
	var param = $('#form').serializeObject();
	
	var ajax = new gCallAjax();
	
	ajax.setUrl("/notice/viewDetail.do");
	ajax.setParam("{ viewID: '123' }");
	ajax.setCallback("fnCallBack");
	ajax.call();
} 

function fnDetail(obj){ 
	var comSubmit = new ComSubmit(); 
	comSubmit.setUrl("<c:url value='/notice/viewDetail.do' />"); 
	comSubmit.addParam("IDX", obj.parent().find("#IDX").val()); 
	comSubmit.submit(); 
}

function fnCallBack(){
}