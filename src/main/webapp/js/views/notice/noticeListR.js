$(document).ready(function(){ 
	
	$("a[name='title']").on("click", function(e){
		fnDetail($(this)); 
	}); 
}); 

function fnCreate(){
	console.log('123');
	var comSubmit = new ComSubmit(); 
	comSubmit.setUrl("<c:url value='/notice/viewDetail.do' />");
	comSubmit.addParam("IDX", obj.parent().find("#IDX").val());
	comSubmit.submit();
} 

function fnDetail(obj){ 
	var comSubmit = new ComSubmit(); 
	comSubmit.setUrl("<c:url value='/notice/viewDetail.do' />"); 
	comSubmit.addParam("IDX", obj.parent().find("#IDX").val()); 
	comSubmit.submit(); 
}