$(document).ready(function(){
	// 목록
    $("#list").on("click", function(e){
        e.preventDefault();
        fn_openBoardList();
    });
    
    // 수정
    $("#update").on("click", function(e){
        e.preventDefault();
        fn_openBoardUpdate();
    });
     
    // 파일
    $("a[name='file']").on("click", function(e){
        e.preventDefault();
        fn_downloadFile($(this));
    });
});
 
function fn_openBoardList(){
    var comSubmit = new ComSubmit();
    comSubmit.setUrl("<c:url value='/sample/openBoardList.do' />");
    comSubmit.submit();
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