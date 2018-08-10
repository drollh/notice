<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<%@ include file="/WEB-INF/include/include-header.jspf" %>
</head>
<%@ include file="/WEB-INF/include/include-js.jspf" %>
<script type="text/javascript" src="<%= request.getContextPath() + request.getRequestURI().replace("WEB-INF","js").replace(".jsp", ".js")%>"></script>
<body>
<h2>게시글 상세</h2>
<form id="form" class="form-control" enctype="multipart/form-data">
	<input id="NOTICE_ID" name="NOTICE_ID" type="hidden" value="${noticeId }"/>
	
    <table class="table-bordered" >
        <colgroup>
            <col width="15%"/>
            <col width="35%"/>
            <col width="15%"/>
            <col width="35%"/>
        </colgroup>
        <tbody>
            <tr>
                <th>글 번호</th>
                <td><input type="text" id="NOTICE_SEQ" readOnly></input>
                <th>조회수</th>
                <td><input type="text" id="RETRIEVE_CNT" readOnly></input>
            </tr>
            <tr>
                <th>작성자</th>
                <td><input type="text" id="CRE_USER" readOnly></input>
                <th>작성시간</th>
                <td><input type="datetime" id="CRE_DATE" readOnly></input>
            </tr>
            <tr>
                <th>제목</th>
                <td colspan="3"><input type="text" id="NOTICE_TITLE" name="NOTICE_TITLE" readOnly></input>
                </td>
            </tr>
            <tr>
	            <th>내용</th>
                <td colspan="3">
                	<textarea rows="10" cols="60" id="NOTICE_CONTENT" name="NOTICE_CONTENT" readOnly></textarea>
                </td>
            </tr>
            <tr>
                <th>첨부파일</th>
                <td colspan="3">
                    <c:forEach var="row" items="${list }">
                    	<p>
                        <input type="hidden" id="IDX" value="${row.IDX }">
                        <a href="#this" name="file">${row.ORIGINAL_FILE_NAME }</a>
                        (${row.FILE_SIZE }kb)
                        </p>
                    </c:forEach>
                </td>
            </tr>
        </tbody>
    </table>

    <div class="btn-group" role="group">
		<button type="button" class="btn btn-green" id="update" >수정</button>
		<button type="button" class="btn btn-blue"	id="list" >목록</button>
	</div>
</form>

    <%@ include file="/WEB-INF/include/include-body.jspf" %>
</body>
</html>