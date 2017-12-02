define(['jquery','ajax'], function  ($,ajax) {
	var  dataformat=function(data){
		var datainfo=data.result;
		var re=new Array();
		for(var i=0;i<datainfo.length;i++){
			re[i]={};
			re[i].pk=datainfo[i].pk;
			re[i].fieldNameStr=datainfo[i].fieldNameStr;
			re[i].templateName=datainfo[i].templateName;			
		}
	    return re;
	}
	var data=function(page){//获取数据
		var url="http://192.168.11.119:6060/plugin/pc/templateInfo/list";
		var da={};
		da.companyPk="999";
		da.pageSize="6";
		da.pageNo="1"; 
		da.operaterPk="";		
		var postdata=JSON.stringify(da);
		// var result=ajax.ajaxdata(url,postdata);
		var result={"code":"S00000","data":{"result":[{"fieldNameStr":"客户名称，开户时间","pk":"999","templateName":"开户通知"},{"fieldNameStr":"客户名称，开户时间","pk":"999","templateName":"开户通知"},{"fieldNameStr":"客户名称，开户时间","pk":"999","templateName":"开户通知"},{"fieldNameStr":"客户名称，开户时间","pk":"999","templateName":"开户通知"},{"fieldNameStr":"客户名称，开户时间","pk":"999","templateName":"开户通知"},{"fieldNameStr":"客户名称，开户时间","pk":"999","templateName":"开户通知"}],"totalCount":"20","totalPage":"1"},"msg":"成功"};
		var re={};
		if(result.code=="S00000"){
			re=result.data;
		}else{
			$msg=result.msg;
			console.log($msg);
		}
		return re;
	};
	var getinfo=function(pk){
		var url="http://192.168.11.119:6060/plugin_web/pc/auth/changeActivationStatus";
		var da={};
		da.pk=pk;
		da.operaterPk="";		
		var postdata=JSON.stringify(da);
		// var result=ajax.ajaxdata(url,postdata);
		var result={"code":"S00000","data":{"templateInfo":{"detailType":"chatDetail","pk":"999","templateName":"模板名称","templateSummary":"测试内容90ki","templateTitle":"模板标题"},"templateParams":[{"paramKey":"field1","paramValue":"字段1"},{"paramKey":"field2","paramValue":"字段2"},{"paramKey":"field3","paramValue":"字段3"}]},"msg":"测试内容oa97"};
		var re={};
		if(result.code=="S00000"){
			re=result.data;
		}else{
			$msg=result.msg;
			console.log($msg);
		}
		return re;
	}
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
		da.companyPk=data.companyPk;
		da.templateName=data.templateName;
        da.detailType=data.detailType;
        da.templateParams=data.templateParams;
        da.pk=data.pk;	
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
	}
	return {
        data: data,
        active:active,
        del:del,
        add_edit:add_edit,
        dataformat:dataformat,
        getinfo:getinfo
        
    }
});



