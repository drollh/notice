(function(window) {

var dr = { window:window, meta:{ contextPath:"" }, config:{} };
	
// form submit
/*dr.form  = function() {
	
	var f = {};
	var o = { $f:jQuery(f) };
	
    f.init = function()
    {
        o.url = null;
        o.params = null;

        return f;
    };
	
    f.url = function(url)
    {
        if (arguments.length == 0) {
            return o.url;
        }

        o.url = url;

        return f;
    };

    f.on = function(name, func)
    {
        o.$f.on(name, func);

        return f;
    };
    
	f.submit = function submit() {
		console.log("form :" + o.id);
		console.log("param : " + o.param);
		console.log("url : " + o.url);

		console.log("dd");
		$("#" + o.Id).attr('action', o.url).attr('method',"POST").submit();
		console.log("end");
	}
	
	return f;
};*/

// jQuery aJax 공통
dr.ajax = function() {
	var f = {};
	var o = { $f:jQuery(f) };
	
    f.url = function(url)
    {
        if (arguments.length == 0) {
            return o.url;
        }
        o.url = url;

        return f;
    };

    f.type = function(type)
    {
    	if (arguments.length == 0) {
    		return "POST";
    	}
    	o.type = type;
    	
    	return f;
    };
    
    f.async = function(async)
    {
    	if (arguments.length == 0) {
    		return true;
    	}
    	o.async = async;
    	
    	return f;
    };
    
    f.param = function(param)
    {
    	if (arguments.length == 0) {
    		return o.param;
    	}
    	o.param = JSON.stringify(param);
    	
    	return f;
    };
    
    f.dataType = function(dataType)
    {
    	if (arguments.length == 0) {
    		return "text"
    	}
    	o.dataType = dataType;
    	
    	return f;
    };
    
    f.contentType = function(contentType)
    {
    	if (arguments.length == 0) {
    		return "application/json; charset=UTF-8";
    	}
    	o.contentType = contentType;
    	
    	return f;
    };

    f.callback = function(callback)
    {
    	if (arguments.length == 0) {
    		return o.callback
    	}
    	o.callback = callback;
    	
    	return f;
    };
	
	f.execute = function call(){
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
	return f;
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

})(window);