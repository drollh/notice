// null check
function fnIsNull(str) {
	if (str == null) return true;
	if (str == "NaN") return true;
	if (new String(str).valueOf() == "undefined") return true;
	
	var chkStr = new String(str);
	
	if (chkStr.valueOf() == "undefined") return true;
	if (chkStr == null) return true;
	if (chkStr.toString().length == 0) return true;
	
	return false;
}

// form submit
function ComSubmit(opt_formId) {
	this.formId = fnIsNull(opt_formId) == true ? "commonForm" : opt_formId;
	this.url = "";
	
	if (this.formId == "commonForm") {
		$("#commonForm")[0].reset();
	}
	
	this.setUrl = function setUrl(url) {
		this.url = url;
	}
	
	this.addParam = function addParam(key, value) {
		$("#" + this.formId).append(
				$("<input type='hidden' name='" + key + "' id='" + key
						+ "' value='" + value + "' >"));
	}
	
	this.submit = function submit() {
		var frm = $("#" + this.formId)[0];
		frm.action = this.url;
		frm.method = "post";
		frm.submit();
	}
}

// jQuery aJax 공통
function callAjax(form){
	var o = {};
	
	o.url = "";
    o.type = "POST";
    o.async = true;
    o.param = "";
    o.dataType = "json";
    o.contentType = "application/json; charset=UTF-8";

    
    o.setUrl = function setUrl(url){
    	o.url = url;
    };

    o.setType = function setType(type){
        o.type = type;
    };
    
    o.setAsync = function setAsync(async){
    	o.async = async;
    };
    
    o.setParam = function setParam(param){
    	o.param = JSON.stringify(param)
    };
    
    o.setDataType = function setDataType(dataType){
    	o.dataType = dataType;
    };
    
    o.setContentType = function setContentType(contentType){
    	o.contentType = contentType;
    };
    
    
    o.setCallback = function setCallback(callBack){
        fv_ajaxCallback = callBack;
    };
     
    o.ajax = function ajax(){
        $.ajax({
            url : o.url,   
            type : o.type,  
            async : o.async,
            data : o.param,
            dataType : o.dataType,
            contentType : o.contentType,
            // Type: Function( jqXHR jqXHR, PlainObject settings )
            beforeSend:function() {},
            // Type: Function( jqXHR jqXHR, String textStatus, String errorThrown )
            error: function (xhr, status, thrownError){},
            // Type: Function( Anything data, String textStatus, jqXHR jqXHR )
            success : function(data, status) {
                if(typeof(fv_ajaxCallback) == "function"){
                    fv_ajaxCallback(data);
                }
                else {
                    eval(fv_ajaxCallback + "(data);");
                }
            }
        });
    };
}
/*$.ajax({

	beforeSend: function() {
		datagrid1.showWait(true);
	},
	error: function (xhr, ajaxOptions, thrownError){
		if (xhr.status == 901) {
			alert("세션이 끊겼습니다. 로그인 후 다시 사용하세요.");
			window.location.href = "/main.do";
		} else {
			alert("시스템 오류 : "+xhr + " : " + ajaxOptions + " : " + thrownError);
		}
	},
	success: function(json) {

	}*/

(function($){
	$.fn.serializeObject = function () {
		var result = {};
		var extend = function (i, element) {
			var node = result[element.name];
			if ('undefined' !== typeof node && node !== null) {
				if ($.isArray(node)) {
					node.push(element.value);
				} else {
					result[element.name] = [node, element.value];
				}
			} else {
				result[element.name] = element.value;
			}
		};

		$.each(this.serializeArray(), extend);
		return result;
	};
})(jQuery);

/*jQuery.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};*/