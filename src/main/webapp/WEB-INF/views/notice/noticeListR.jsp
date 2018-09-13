<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<title>Spring boot Notice</title>
<head>
<%@ include file="/WEB-INF/include/include-header.jspf" %>

</head>
<body>
<h2>게시판 목록</h2>
<form id="form" >
	<table class="table">
		<colgroup>
		<col width="30%"><col width="70%">
		</colgroup>
		<tbody>
		<tr>
			<%-- <th><spring:message code="lbl.title" text="#제목"/></th> --%>
			<td>
				<input type="text">
			</td>
		</tr>
		</tbody>
	</table>
</form>
<br><br>
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

<div class="btn-group" role="group" >
	<button id="exam001" type="button" class="btn btn-sky">exam01</button>
	<button id="exam002" type="button" class="btn btn-sky">exam02</button>
	<button id="exam003" type="button" class="btn btn-sky">exam03</button>
	<button id="exam004" type="button" class="btn btn-sky">exam04</button>
</div>

<%@ include file="/WEB-INF/include/include-js.jspf" %>
<script type="text/javascript" src="<%= request.getContextPath() + request.getRequestURI().replace("WEB-INF","js").replace(".jsp", ".js")%>"></script>

<%@ include file="/WEB-INF/include/include-body.jspf"%>

</body>
</html>

