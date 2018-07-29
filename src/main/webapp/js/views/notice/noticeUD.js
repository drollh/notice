var gfv_count = '${fn:length(list)+1}'; 
$(document).ready(function(){ 
	$("#list").on("click", function(e){ 
		//목록으로 버튼 
		e.preventDefault(); 
		fn_openBoardList(); 
	}); 
	$("#update").on("click", function(e){ 
		//저장하기 버튼 
		e.preventDefault(); 
		fn_updateBoard(); 
	}); 
	$("#delete").on("click", function(e){
		//삭제하기 버튼
		e.preventDefault(); 
		fn_deleteBoard(); 
	});
	$("#addFile").on("click", function(e){ 
		//파일 추가 버튼 
		e.preventDefault(); 
		fn_addFile(); 
	});
	$("a[name^='delete']").on("click", function(e){ 
		//삭제 버튼 
		e.preventDefault(); 
		fn_deleteFile($(this)); 
	}); 
}); 
function fn_openBoardList(){ 
	var comSubmit = new ComSubmit(); 
	comSubmit.setUrl("<c:url value='/sample/openBoardList.do' />"); 
	comSubmit.submit(); 
} 
function fn_updateBoard(){
	var comSubmit = new ComSubmit("frm"); 
	comSubmit.setUrl("<c:url value='/sample/updateBoard.do' />"); 
	comSubmit.submit(); 
} 
function fn_deleteBoard(){ 
	var comSubmit = new ComSubmit(); 
	comSubmit.setUrl("<c:url value='/sample/deleteBoard.do' />"); 
	comSubmit.addParam("IDX", $("#IDX").val()); 
	comSubmit.submit(); 
} 
function fn_addFile(){ 
	var str = "<p>" + "<input type='file' id='file_"+(gfv_count)+"' name='file_"+(gfv_count)+"'>"
			+ "<a href='#this' class='btn' id='delete_"+(gfv_count)+"' name='delete_"+(gfv_count)+"'>삭제</a>" + "</p>"; 
	$("#fileDiv").append(str); 
	$("#delete_"+(gfv_count++)).on("click", function(e){ 
		//삭제 버튼 
		e.preventDefault(); 
		fn_deleteFile($(this)); 
	}); 
} 
function fn_deleteFile(obj){ 
	obj.parent().remove();
} 
