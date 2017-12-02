define(['jquery','ajax'], function  ($,ajax) {
	function getport(i){
		var url="http://192.168.11.202:6060/";
		var port=new Array();
		//认证列表
		port[0]=url+"plugin/pc/auth/list";
		//启用或停用认证
		port[1]=url+"plugin/pc/auth/changeActivationStatus";
		//删除认证
		port[2]=url+"plugin/pc/auth/delete";
		//新增或修改认证
		port[3]=url+"plugin/pc/auth/save";

		var re=port[i]+"?loginCode="+sessionStorage.getItem("loginCode")+"&operatorPk="+sessionStorage.getItem("operatorPk");
		return re;
	}
	var  dataformat=function(data){
		var datainfo=data.result;
		console.log(datainfo);
		var re=new Array();
		for(var i=0;i<datainfo.length;i++){
			re[i]={};
			re[i].pk=datainfo[i].pk;
			re[i].appId=datainfo[i].appId;
			re[i].appSecret=datainfo[i].appSecret;
			re[i].appName=datainfo[i].appName;
			re[i].callbackUrl=datainfo[i].callbackUrl;
			re[i].isActive=datainfo[i].isActive;
			re[i].authType=datainfo[i].authType;
		}
	    return re;
	}
	var data=function(page,size){//获取数据
		var url=getport(0);
		var da={};
		da.companyPk=sessionStorage.getItem("companyPk");
		da.pageSize=size+"";
		da.pageNo=page+"";	
		var postdata=JSON.stringify(da);
		var result=ajax.ajaxdata(url,postdata);
		// var result={"data":{"result":[{"pk":"111","companyPk":"999","appId":"123","appSecret":"123456","appName":"test","callbackUrl":"http://www.baidu.com","isActive":false,"authType":"app"},{"pk":"222","companyPk":"999","appId":"123","appSecret":"123456","appName":"test","callbackUrl":"http://www.baidu.com","isActive":true,"authType":"app"},{"pk":"333","companyPk":"999","appId":"123","appSecret":"123456","appName":"test","callbackUrl":"http://www.baidu.com","isActive":true,"authType":"app"},{"pk":"444","companyPk":"999","appId":"123","appSecret":"123456","appName":"test","callbackUrl":"http://www.baidu.com","isActive":true,"authType":"app"},{"pk":"555","companyPk":"999","appId":"123","appSecret":"123456","appName":"test","callbackUrl":"http://www.baidu.com","isActive":true,"authType":"app"},{"pk":"666","companyPk":"999","appId":"123","appSecret":"123456","appName":"test","callbackUrl":"http://www.baidu.com","isActive":true,"authType":"app"}],"totalCount":20,"totalPage":"1"},"code":"S00000","msg":"成功"};
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
		var url=getport(1);
		var da={};
		da.pk=pk;
		var postdata=JSON.stringify(da);
		var result=ajax.ajaxdata(url,postdata);
		// var result={"data": "","code": "S00000","msg": "成功"}
		var re={};
		if(result.code=="S00000"){
			return true;
		}else{
			$msg=result.msg;
			console.log($msg);
		}		
	};
	var del=function(pk){//删除
		var url=getport(2);
		var da={};
		da.pk=pk;	
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
		var url=getport(3);
		var da={};
		da.pk=data.pk;
		da.appId=data.appId;
		da.appSecret=data.appSecret;
		da.appName=data.appName;
		da.callbackUrl=data.callbackUrl;		
		da.companyPk=sessionStorage.getItem("companyPk");
		var postdata=JSON.stringify(da);
		var result=ajax.ajaxdata(url,postdata);
		// var result={"data": "","code": "S00000","msg": "成功"}
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



