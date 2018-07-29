<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<%@ include file="/WEB-INF/include/include-header.jspf" %>
<script type="text/javascript" src="<c:url value='/js/noticeC.js'/>"></script>
</head>
<body>
    <form id="frm" name="frm" enctype="multipart/form-data">
        <table class="board_view">
            <colgroup>
                <col width="15%">
                <col width="*"/>
            </colgroup>
            <caption>게시글 작성</caption>
            <tbody>
                <tr>
                    <th scope="row">제목</th>
                    <td><input type="text" id="TITLE" name="TITLE" class="wdp_90"></input></td>
                </tr>
                <tr>
                    <td colspan="2" class="view_text">
                        <textarea rows="20" cols="100" title="내용" id="CONTENTS" name="CONTENTS"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
        <div id="fileDiv">
            <p>
                <input type="file" id="file" name="file_0">
                <a href="#this" class="btn" id="delete" name="delete">삭제</a>
            </p>
        </div>
         
        <br/><br/>
        <a href="#this" class="btn" id="addFile">파일 추가</a>
        <a href="#this" class="btn" id="write">작성하기</a>
        <a href="#this" class="btn" id="list">목록으로</a>
    </form>
     
    <%@ include file="/WEB-INF/include/include-body.jspf" %>
</body>
</html>