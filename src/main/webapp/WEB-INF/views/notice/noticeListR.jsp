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
<form id="form">
	<table class="table">
		<colgroup>
			<col width="10%" />
			<col width="60%" />
			<col width="10%" />
			<col width="20%" />
		</colgroup>
		<thead>
			<tr>
				<th scope="col">글번호</th>
				<th scope="col">제목</th>
				<th scope="col">조회수</th>
				<th scope="col">작성일</th>
			</tr>
		</thead>
		<tbody>
			<c:choose>
				<c:when test="${fn:length(list) > 0}">
					<c:forEach items="${list }" var="row">
						<tr>
							<td>${row.IDX }</td>
							<td class="title">${row.TITLE }
								<input type="hidden" id="IDX" value="${row.IDX }"></td>
							<td>${row.HIT_CNT }</td>
							<td>${row.CREA_DTM }</td>
						</tr>
					</c:forEach>
				</c:when>
				<c:otherwise>
					<tr>
						<td colspan="4">조회된 결과가 없습니다.</td>
					</tr>
				</c:otherwise>
			</c:choose>
		</tbody>
	</table>
	<br />

<div class="btn-group" role="group" >
	<button id="write" type="button" class="btn btn-green">글쓰기</button><script>
		$(this).on("click", function(e){
			fnWrite(); 
		});
	</script>
</div>
	<%@ include file="/WEB-INF/include/include-body.jspf"%>
</form>

</body>
</html>

