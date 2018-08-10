<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<%@ include file="/WEB-INF/include/include-header.jspf" %>
</head>
<%@ include file="/WEB-INF/include/include-js.jspf" %>
<script type="text/javascript" src="<%= request.getContextPath() + request.getRequestURI().replace("WEB-INF","js").replace(".jsp", ".js")%>"></script>
<body>
<h2>게시글 작성</h2>
<form id="form" class="form-control" enctype="multipart/form-data">
    <table class="table-bordered" >
        <colgroup>
			<col width="20%" />
			<col width="80%" />
        </colgroup>
        <tbody>
            <tr>
                <th>제목</th>
                <td>
                	<input type="text" id="NOTICE_TITLE" name="NOTICE_TITLE"></input>
                </td>
            </tr>
            <tr>
            	<th>내용</th>
                <td>
                    <textarea rows="10" cols="60" id="NOTICE_CONTENT" name="NOTICE_CONTENT"></textarea>
                </td>
            </tr>
        </tbody>
    </table>
    <div id="fileDiv">
		<input type="file" id="file" name="file_0">
		<button type="button" class="btn btn-red" id="fileDel" >삭제</button>
    </div>
    
    <button type="button" class="btn btn-orange" id="addFile" >파일 추가</button>
    <div class="btn-group" role="group">
		<button type="button" class="btn btn-green" id="save" >저장</button>
		<button type="button" class="btn btn-blue"	id="list" >목록</button>
	</div>
</form>

<%@ include file="/WEB-INF/include/include-body.jspf"%>

</body>
</html>