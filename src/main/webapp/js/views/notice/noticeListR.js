$(document).ready(function(){ 
	formEvent();
}); 

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
	
	// 상세 - 추후 그리드
	$("a[name='title']").on("click", function(e){
		fnDetail($(this)); 
	});
}

