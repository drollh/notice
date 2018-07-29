var gfv_count = 1;

$(document).ready(function(){
	//목록
	$("#list").on("click", function(e){ 
    e.preventDefault();
    fn_openBoardList();
    });
	
    //작성
    $("#write").on("click", function(e){ 
        e.preventDefault();
        fn_insertBoard();
    });
    //파일 추가
    $("#addFile").on("click", function(e){ 
        e.preventDefault();
        fn_addFile();
    });
    
    //삭제
    $("a[name='delete']").on("click", function(e){ 
        e.preventDefault();
        fn_deleteFile($(this));
    });
});
 
function fn_openBoardList(){
    var comSubmit = new ComSubmit();
    comSubmit.setUrl("<c:url value='/sample/openBoardList.do' />");
    comSubmit.submit();
}
 
function fn_insertBoard(){
    var comSubmit = new ComSubmit("frm");
    comSubmit.setUrl("<c:url value='/sample/insertBoard.do' />");
    comSubmit.submit();
}
 
function fn_addFile(){
    var str = "<p><input type='file' name='file_"+(gfv_count++)+"'><a href='#this' class='btn' name='delete'>삭제</a></p>";
    $("#fileDiv").append(str);
    
    $("a[name='delete']").on("click", function(e){
        e.preventDefault();
        fn_deleteFile($(this));
    });
}
 
function fn_deleteFile(obj){
    obj.parent().remove();
}
