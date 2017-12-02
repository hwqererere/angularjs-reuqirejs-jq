define(['jquery','ajax'], function  ($,ajax) {
	var  dataformat=function(data){
		var datainfo=data.result;
		var re=new Array();
		for(var i=0;i<datainfo.length;i++){
			re[i]={};
			re[i].pk=datainfo[i].pk;
			re[i].pluginIoc=datainfo[i].pluginIoc;
			re[i].pluginName=datainfo[i].pluginName;
			re[i].pluginStatus=datainfo[i].pluginStatus;
			re[i].pluginType=datainfo[i].pluginType;
			re[i].sortNum=datainfo[i].sortNum;			
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
		var result={"code":"S00000","data":[{"pk":"1","pluginIoc":"images/icon1.jpg","pluginName":"插件1","pluginStatus":"unpublished","pluginType":"pushMsg","sortNum":2},{"pk":"2","pluginIoc":"images/icon1.jpg","pluginName":"插件2","pluginStatus":"published","pluginType":"jumpPage","sortNum":1},{"pk":"3","pluginIoc":"images/icon1.jpg","pluginName":"插件3","pluginStatus":"published","pluginType":"jumpTemplate","sortNum":3},{"pk":"1","pluginIoc":"images/icon1.jpg","pluginName":"插件1","pluginStatus":"unpublished","pluginType":"pushMsg","sortNum":2},{"pk":"2","pluginIoc":"images/icon1.jpg","pluginName":"插件2","pluginStatus":"published","pluginType":"jumpPage","sortNum":1},{"pk":"3","pluginIoc":"images/icon1.jpg","pluginName":"插件3","pluginStatus":"published","pluginType":"jumpTemplate","sortNum":3},{"pk":"1","pluginIoc":"images/icon1.jpg","pluginName":"插件1","pluginStatus":"unpublished","pluginType":"pushMsg","sortNum":2},{"pk":"2","pluginIoc":"images/icon1.jpg","pluginName":"插件2","pluginStatus":"published","pluginType":"jumpPage","sortNum":1},{"pk":"3","pluginIoc":"images/icon1.jpg","pluginName":"插件3","pluginStatus":"published","pluginType":"jumpTemplate","sortNum":3}],"msg":"成功"};
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
		var result={"code":"S00000","data":{"canPush":1,"coverUrl":"封面","dataInterface":"跳转模版页面的数据接口","msgCanTransferParam":1,"msgParamTransferMethod":"directReference","msgUrl":"发送消息的地址","pageCanTransferParam":0,"pageTitle":"页面标题","pageUrl":"跳转页面的地址","pk":"1","pluginIoc":"images/icon1.jpg","pluginName":"插件名称1","pluginStatus":"unpublished","pluginType":"pushMsg","sortNum":2,"summary":"摘要","title":"标题"},"msg":"成功"};
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



