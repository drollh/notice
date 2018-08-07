<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<title>Spring boot Notice</title>
<head>
<%@ include file="/WEB-INF/include/include-header.jspf" %>
</head>
<%@ include file="/WEB-INF/include/include-js.jspf" %>
<script type="text/javascript" src="<%= request.getContextPath() + request.getRequestURI().replace("WEB-INF","js").replace(".jsp", ".js")%>"></script>
<body>
<h2>게시판 목록</h2>
<!-- <form id="form" class="form-control">
	<table class="table">
		<colgroup>
		</colgroup>
		<thead>
		</thead>
		<tbody>
		</tbody>
	</table>
</form> -->

<div>
<table id="jqGrid">

</table>
</div>

<div id="paging">

</div>

<div class="btn-group" role="group" >
	<button id="retrieve" type="button" class="btn btn-black">조회</button>
	<button id="write" type="button" class="btn btn-green">글쓰기</button>
</div>

<%@ include file="/WEB-INF/include/include-body.jspf"%>

</body>
</html>

