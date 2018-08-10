$(document).ready(function(){
	fnRetrieve();
	formEvent();
	
});

function fnRetrieve(){ 
    var ajax = new ComAjax();
    
    var param = $("#form").serializeObject(); 

    ajax.url("/notice/retrieve.do");
    ajax.param(param);
    ajax.success(function(data){
    	$.each(data, function(key, obj){
    		$.each(obj, function(key, val){
    			$('#' + key).val(val);
    		});
    	});
    });
    ajax.call();
}

function viewList(){
	var form = new ComForm(); 
	form.url("/notice/viewList.do");
	form.submit();    
}
 
function fn_openBoardUpdate(){
    var idx = "${map.IDX}";
    var comSubmit = new ComSubmit();
    comSubmit.setUrl("<c:url value='/sample/openBoardUpdate.do' />");
    comSubmit.addParam("IDX", idx);
    comSubmit.submit();
}
function fn_downloadFile(obj){
    var idx = obj.parent().find("#IDX").val();
    var comSubmit = new ComSubmit();
    comSubmit.setUrl("<c:url value='/common/downloadFile.do' />");
    comSubmit.addParam("IDX", idx);
    comSubmit.submit();
}

//폼 이벤트
function formEvent(){
	// 목록
    $("#list").on("click", function(e){
        viewList();
    });
    
    // 수정
    $("#update").on("click", function(e){
        fn_openBoardUpdate();
    });
     
    // 파일
    $("a[name='file']").on("click", function(e){
        fn_downloadFile($(this));
    });
}