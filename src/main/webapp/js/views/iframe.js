$(document).ready(function(){
	var url = window.location.href
	console.log(url);
	var idx = url.indexOf("?");
	var params = url.substr(idx + 1).split('&');
	
	console.log(params);
	
    for (var i = params.length-1; i >= 0; i--) {
        if (params[i].indexOf("=") != -1){
        	var key = params[i].substr(0, params[i].indexOf("="));
        	var value = params[i].substr(params[i].indexOf("=") + 1);
        	$('form').append('<input type="hidden" name="' +key +'" value="' + value + '" />');    	
        }
    }
	var frm = document.form;
	// "/"가 HTML 특문 "%2F" decode 해서 액션값으로
	frm.action = decodeURIComponent(frm.SRC.value);
	frm.target = "hiddenIfr";
	frm.submit();
});