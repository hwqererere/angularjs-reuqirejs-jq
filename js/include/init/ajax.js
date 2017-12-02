define(['jquery'], function  ($) {
	var ajaxdata=function(url,data){
		var re=AjaxActionFun(url,data);
	    return re;
	}
	function AjaxActionFun (url,data) {
		var port="";
        $.ajax({
            url: url,
            type: "POST",
            cache: false,
            contentType: "application/json",
            data: data,         
            dataType: "json",
            crossDomain: true,
            async:false,
            success: function(result) {
                port=result;
            },
            error:function(e){
            	alert("网络错误，请联系客服");                               
            },
            complete: function (XHR, TS) { XHR = null }
        });
        return port;
    }
	return {
        ajaxdata:ajaxdata      
    }
});



