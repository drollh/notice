$(document).ready(function(){
	var params = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	
    for (var i = params.length-1; i >= 0; i--) {
        if (params[i].indexOf("=") != -1){
        	var param = params[i].split('=');
        	var key = param[0];
        	var value = param[1];
        	$('form').append('<input type="hidden" name="' +key +'" value="' + value + '" />');    	
        }
    }
	var frm = document.form;
	// "/"가 HTML 특문 "%2F" decode 해서 액션값으로
	frm.action = decodeURIComponent(frm.SRC.value);
	frm.target = "hiddenIfr";
	frm.submit();
});