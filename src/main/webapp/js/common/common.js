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

function dComSubmit(opt_formId) {
	this.formId = fnIsNull(opt_formId) == true ? "commonForm" : opt_formId;
	this.url = "";
	
	if (this.formId == "commonForm") {
		$("#commonForm")[0].reset();
	}
	
	this.url = function url(url) {
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

// form submit
var ComForm = function() {
	
	var f = {};
	var o = { $f:jQuery(f), id:"commonForm", method:"POST" };
	
	if(o.id == "commonForm"){
		console.log("chk");
		$("#commonForm")[0].reset();	
	}
	
    f.id = function(id)
    {
        if (arguments.length == 0) {
        	return o.id;
        }

        o.id = id;

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

    f.method = function(method)
    {
    	if (arguments.length == 0) {
    		return o.method;
    	}
    	
    	o.method = method;
    	
    	return f;
    };

    f.param = function(key, value)
    {
        if (arguments.length == 2) {
        	$("#" + o.id).append($("<input type='hidden' name='" + key + "' id='" + key + "' value='" + value + "' >"));
        }
        return f;
    };
    
	f.submit = function submit() {
		var frm = $("#" + o.id)[0];
		
		frm.action = o.url;
		frm.method = "POST";
		frm.submit();
	}
	
	return f;
};

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

// jQuery aJax 공통
var ComAjax = function () {
	var f = {};
	var o = { $f:jQuery(f), type:"POST", async:true, dataType:"json", contentType:"application/json; charset=UTF-8"};
	
    f.url = function(url)
    {
        o.url = url;

        return f;
    };

    f.type = function(type)
    {
    	o.type = type;
    	
    	return f;
    };
    
    f.async = function(async)
    {
    	o.async = async;
    	
    	return f;
    };
    
    f.param = function(param)
    {
    	o.param = JSON.stringify(param);
    	
    	return f;
    };
    
    f.dataType = function(dataType)
    {
    	o.dataType = dataType;
    	
    	return f;
    };
    
    f.contentType = function(contentType)
    {
    	o.contentType = contentType;
    	
    	return f;
    };

    f.before = function(before)
    {
    	o.before = before;
    	
    	return f;
    };
    
    f.success = function(success)
    {
    	o.success = success;
    	
    	return f;
    };
	
	f.call = function call(){
		$.ajax({
			url      	: o.url,   
			type     	: o.type,  
			async    	: o.async,
			data    	: o.param,
			dataType 	: o.dataType,
			contentType : o.contentType,
			// Type: Function( jqXHR jqXHR, PlainObject settings )
			beforeSend:function() {
				if(!fnIsNull(o.before)){
					if(typeof(o.before) == "function"){
						o.before();
					}
					else {
						eval(o.before + "();");
					}
				}
			},
			// Type: Function( jqXHR jqXHR, String textStatus, String errorThrown )
			error: function (xhr, status, errorThrown){
				alert("aJax 통신 오류 : " + xhr.status + " : " + status + " : " + errorThrown);
			},

			// Type: Function( Anything data, String textStatus, jqXHR jqXHR )
			success : function(data, status, xhr) {
				if(status == "success" && xhr.status == 200){
					if(typeof(o.success) == "function"){
						o.success(data);
					}
					else {
						eval(o.success + "(data);");
					}
				}
			}
		});
	};
	return f;
};

// jqGrid 공통
var ComGrid = function () {
	var f = {};
	var o = { $f:jQuery(f), type:"POST", dataType:"json", rowNum:10
			, rowList:[50,100,200], viewRecords:true, autoWidth:true, multiSelect: false
			, colNames:[], colModel:[], options:{ edit:true, add:false, del:false }
			, sortOrder:"ASC", jsonReader:{root:"gridList", page:1, total:50}
			, loadonce:true
			};
	
	f.id = function(id)
	{
		o.id = "#" + id;
		
		return f;
	};
	
	f.url = function(url)
	{
		o.url = url;
		
		return f;
	};
	
	f.type = function(type)
	{
		o.type = type;
		
		return f;
	};
	
	f.dataType = function(dataType)
	{
		o.dataType = dataType;
		
		return f;
	};

	f.rowNum = function(rowNum)
	{
		o.rowNum = rowNum;
		
		return f;
	};
	
	f.rowTotal = function(rowTotal)
	{
		o.rowTotal = rowTotal;
		
		return f;
	};
	
	f.rowList = function(rowList)
	{
		o.rowList = rowList;
		
		return f;
	};
	
	f.pager = function(pager)
	{
		o.pager = "#" + pager;
		
		return f;
	};

	f.viewRecords = function(viewRecords)
	{
		o.viewRecords = viewRecords;
		
		return f;
	};
	
	f.autoWidth = function(autoWidth)
	{
		o.autoWidth = autoWidth;
		
		return f;
	};
	
	f.width = function(width)
	{
		o.width = width;
		
		return f;
	};

	f.height = function(height)
	{
		o.height = height;
		
		return f;
	};

	f.multiSelect = function(multiSelect)
	{
		o.multiSelect = multiSelect;
		
		return f;
	};

	f.colNames = function(colNames)
	{
		if ($.type(colNames) === "array") {
			o.colNames = colNames;
		}
		
		return f;
	};
	
	f.colModel = function(colModel)
	{
		if ($.type(colModel) === "array") {
			o.colModel = colModel;
		}
		
		return f;
	};

	f.options = function(options)
	{
		if ($.type(jsonReader) === "object") {
        	o.options = options;
        }
		
		return f;
	};

	f.jsonReader = function(jsonReader)
	{
        if ($.type(jsonReader) === "object") {
        	o.jsonReader = jsonReader;
        }

        return f;
	};

	f.sortName = function(sortName)
	{
		o.sortName = sortName;
		
		return f;
	};

	f.sortOrder = function(sortOrder)
	{
		o.sortOrder = sortOrder;
		
		return f;
	};

	f.caption = function(caption)
	{
		o.caption = caption;
		
		return f;
	};
	
	f.loadonce= function(loadonce)
	{
		o.loadonce = loadonce;
		
		return f;
	};
	
    f.complete = function(complete)
    {
    	o.complete = complete;
    	
    	return f;
    };
    
	f.call = function call(){
		$(o.id).jqGrid({
		   	url:o.url,
		   	autowidth: o.autoWidth,
		   	mtype : o.type,
			datatype: o.dataType,
		   	colNames: o.colNames,
		   	colModel: o.colModel, 
		   	rowNum: o.rowNum,
		   	rowTotal: o.rowTotal,
		   	rowList: o.rowList,
		   	pager: o.pager,
		   	sortname: o.sortName,
		   	sortorder: o.sortOrder,
		    viewrecords: o.viewRecords,
		    caption: o.caption,
		    multiselect: o.multiSelect,
			jsonReader : o.jsonReader,
			loadonce:o.loadonce,
		    loadComplete:function(data){
		    	$(o.id).jqGrid('navGrid', o.pager, o.options);
		    	if(!fnIsNull(o.complete)){
					if(typeof(o.complete) == "function"){
						o.complete(data);
					}
					else {
						eval(o.complete + "(data);");
					}		    		
		    	}
		    },
		    loadError: function (xhr, status, errorThrown) {
		    	console.log("grid 오류 : " + xhr.status + " : " + status + " : " + errorThrown);
	        },
		    
		});
		
	};
	return f;
};

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