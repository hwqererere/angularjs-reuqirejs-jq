define(['jquery','ajax'], function  ($,ajax) {
	var  dataformat=function(data){
		var datainfo=data.result;
		var re=new Array();
		for(var i=0;i<datainfo.length;i++){
			re[i]={};
			re[i].pk=datainfo[i].pk;
			re[i].isDelete=datainfo[i].isDelete;
			re[i].companyPk=datainfo[i].companyPk;
			re[i].appId=datainfo[i].appId;
			re[i].appSecret=datainfo[i].appSecret;
			re[i].appName=datainfo[i].appName;
			re[i].callbackUrl=datainfo[i].callbackUrl;
			re[i].isActive=datainfo[i].isActive;
			re[i].authType=datainfo[i].authType;
		}
	    return re;
	}
	var data=function(page){//获取数据
		var url="http://192.168.11.119:6060/plugin/pc/auth/list";
		var da={};
		da.companyPk="999";
		da.pageSize="6";
		da.pageNo="1";
		da.operaterPk="";		
		var postdata=JSON.stringify(da);

		// var result=ajax.ajaxdata(url,postdata);
		var result={"data":{"result":[{"pk":"111","companyPk":"999","appId":"123","appSecret":"123456","appName":"test","callbackUrl":"http://www.baidu.com","isActive":true,"authType":"app"},{"pk":"222","companyPk":"999","appId":"123","appSecret":"123456","appName":"test","callbackUrl":"http://www.baidu.com","isActive":true,"authType":"app"},{"pk":"333","companyPk":"999","appId":"123","appSecret":"123456","appName":"test","callbackUrl":"http://www.baidu.com","isActive":true,"authType":"app"},{"pk":"444","companyPk":"999","appId":"123","appSecret":"123456","appName":"test","callbackUrl":"http://www.baidu.com","isActive":true,"authType":"app"},{"pk":"555","companyPk":"999","appId":"123","appSecret":"123456","appName":"test","callbackUrl":"http://www.baidu.com","isActive":true,"authType":"app"},{"pk":"666","companyPk":"999","appId":"123","appSecret":"123456","appName":"test","callbackUrl":"http://www.baidu.com","isActive":true,"authType":"app"}],"totalCount":20,"totalPage":"1"},"code":"S00000","msg":"成功"};
		var re={};
		if(result.code=="S00000"){
			re=result.data;
		}else{
			$msg=result.msg;
			console.log($msg);
		}
		return re;
	};
	var active=function(pk){//启动
		var url="http://192.168.11.119:6060/plugin_web/pc/auth/changeActivationStatus";
		var da={};
		da.pk=pk;
		da.operaterPk="";		
		var postdata=JSON.stringify(da);
		// var result=ajax.ajaxdata(url,postdata);
		var result={"data": "","code": "S00000","msg": "成功"}
		var re={};
		if(result.code=="S00000"){
			return true;
		}else{
			$msg=result.msg;
			console.log($msg);
		}		
	};
	var del=function(pk){//删除
		var url="http://192.168.11.119:6060/plugin_web/pc/auth/delete";
		var da={};
		da.pk=pk;
		da.operaterPk="";		
		var postdata=JSON.stringify(da);
		// var result=ajax.ajaxdata(url,postdata);
		var result={"data": "","code": "S00000","msg": "成功"}
		var re={};
		if(result.code=="S00000"){
			return true;
		}else{
			$msg=result.msg;
			console.log($msg);
		}		
	};
	var add_edit=function(data){
		var url="http://192.168.11.119:6060/plugin_web/pc/auth/delete";
		var da={};
		da.pk=data.pk;
		da.companyPk="999";
		da.operaterPk="";
		da.appId=data.appId;
		da.appSecret=data.appSecret;
		da.appName=data.appName;
		da.callbackUrl=data.callbackUrl;		
		var postdata=JSON.stringify(da);console.log(postdata);
		// var result=ajax.ajaxdata(url,postdata);
		var result={"data": "","code": "S00000","msg": "成功"}
		var re={};
		if(result.code=="S00000"){
			return true;
		}else{
			$msg=result.msg;
			console.log($msg);
		}	
	}
	return {
        data: data,
        active:active,
        del:del,
        add_edit:add_edit,
        dataformat:dataformat
        
    }
});



