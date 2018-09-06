<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<%@ include file="/WEB-INF/include/include-header.jspf" %>
</head>
<%@ include file="/WEB-INF/include/include-js.jspf" %>
<script type="text/javascript" src="<%= request.getContextPath() + request.getRequestURI().replace("WEB-INF","js").replace(".jsp", ".js")%>"></script>
<body>
<form name="form" method="post">
</form>

<iframe id="iframe" class="iframe100" name="hiddenIfr"> </iframe>

<%@ include file="/WEB-INF/include/include-body.jspf" %>
</body>
</html>