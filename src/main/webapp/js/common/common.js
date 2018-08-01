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
function gCallAjax(){
	var o = {};
	
	o.url = "";
    o.type = "POST";
    o.async = true;
    o.param = "";
    o.dataType = "text";
    o.contentType = "application/json; charset=UTF-8";
    o.callback = "";
    
    this.setUrl = function setUrl(url){
    	o.url = url;
    };

    this.setType = function setType(type){
        o.type = type;
    };
    
    this.setAsync = function setAsync(async){
    	o.async = async;
    };
    
    this.setParam = function setParam(param){
    	o.param = JSON.stringify(param);
    	//o.param = param;
    };
    
    this.setDataType = function setDataType(dataType){
    	o.dataType = dataType;
    };
    
    this.setContentType = function setContentType(contentType){
    	o.contentType = contentType;
    };
    
    this.setCallback = function setCallback(callBack){
        o.callback = callBack;
    };
     
    console.log(o.param);
    this.call = function call(){
        $.ajax({
            url      	: o.url,   
            type     	: o.type,  
            async    	: o.async,
            data    	: o.param,
            dataType 	: o.dataType,
            contentType : o.contentType,
            // Type: Function( jqXHR jqXHR, PlainObject settings )
            beforeSend:function(data) {
            	
            },
            // Type: Function( jqXHR jqXHR, String textStatus, String errorThrown )
            error: function (xhr, status, thrownError){
        		if (xhr.status == 901) {
        			alert("세션이 끊겼습니다. 로그인 후 다시 사용하세요.");
        			window.location.href = "/main.do";
        		} else {
        			alert("시스템 오류 : "+xhr + " : " + status + " : " + thrownError);
        		}            	
            },
            
            // Type: Function( Anything data, String textStatus, jqXHR jqXHR )
            success : function(data, status) {
                if(typeof(o.callback) == "function"){
                	o.callback(data);
                }
                else {
                    eval(o.callback + "(data);");
                }
            }
        });
    };
    console.log(o.param);
}

// serializeObject
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