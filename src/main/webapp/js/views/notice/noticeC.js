$(document).ready(function(){
	formEvent();
});

// 목록
function fnList(){
	var form = new ComForm(); 
	form.url("/notice/viewList.do");
	form.submit();    
}
 
// 저장
function fnSave(){
    var ajax = new ComAjax();
    
    var param = $("#form").serializeObject(); 

    console.log("호출 전")
    ajax.url("/notice/create.do");
    ajax.type("json");
    ajax.param(param);
    ajax.callback("fnSucc");
    ajax.call();
}
 
// 파일 추가
function fnAddFile(){
	var gfv_count = 1;
    var str = "<p><input type='file' name='file_"+(gfv_count++)+"'><a href='#this' class='btn' name='delete'>삭제</a></p>";
    $("#fileDiv").append(str);
    
    $("a[name='delete']").on("click", function(e){
        e.preventDefault();
        fn_deleteFile($(this));
    });
}

// 파일 삭제
function fnDelFile(obj){
    obj.parent().remove();
}

// aJax 성공
function fnSucc(){
	console.log('succ');
	console.log(data.params.noticeTitle);

}

//폼 이벤트
function formEvent(){
	//목록
	$("#list").on("click", function(e){ 
		e.preventDefault();
		fnList();
    });
	
    //작성
    $("#save").on("click", function(e){ 
        e.preventDefault();
        fnSave();
    });
    //파일 추가
    $("#addFile").on("click", function(e){ 
        e.preventDefault();
        fnAddFile();
    });
    
    //삭제
    $("#fileDel").on("click", function(e){ 
        e.preventDefault();
        fnDelFile($(this));
    });
}