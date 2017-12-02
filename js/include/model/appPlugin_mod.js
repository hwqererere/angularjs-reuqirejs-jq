define(['jquery','ajax'], function  ($,ajax) {
	function getport(i){
		var url="http://192.168.11.202:6060/";
		var port=new Array();
		//插件列表
		port[0]=url+"plugin/pc/appPlugin/list";
		//插件详情
		port[1]=url+"plugin/pc/appPlugin/detail";
		//删除插件
		port[2]=url+"plugin/pc/appPlugin/delete";
		//新增或修改插件
		port[3]=url+"plugin/pc/appPlugin/save";
		//发布插件
		port[4]=url+"plugin/pc/appPlugin/publish";
		//排序插件
		port[5]=url+"plugin/pc/appPlugin/sort";
		//上传图片
		port[6]=url+"plugin/pc/appPlugin/uploadPicture";

		var re=port[i]+"?loginCode="+sessionStorage.getItem("loginCode")+"&operatorPk="+sessionStorage.getItem("operatorPk");
		return re;
	}
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
		var url=getport(0);
		var da={};
		da.companyPk=sessionStorage.getItem("companyPk");
		var postdata=JSON.stringify(da);
		var result=ajax.ajaxdata(url,postdata);
		// var result={"code":"S00000","data":[{"pk":"1","pluginIoc":"images/icon1.jpg","pluginName":"插件1","pluginStatus":"unpublished","pluginType":"pushMsg","sortNum":2},{"pk":"2","pluginIoc":"images/icon1.jpg","pluginName":"插件2","pluginStatus":"published","pluginType":"jumpPage","sortNum":1},{"pk":"3","pluginIoc":"images/icon1.jpg","pluginName":"插件3","pluginStatus":"published","pluginType":"jumpTemplate","sortNum":3},{"pk":"1","pluginIoc":"images/icon1.jpg","pluginName":"插件1","pluginStatus":"unpublished","pluginType":"pushMsg","sortNum":2},{"pk":"2","pluginIoc":"images/icon1.jpg","pluginName":"插件2","pluginStatus":"published","pluginType":"jumpPage","sortNum":1},{"pk":"3","pluginIoc":"images/icon1.jpg","pluginName":"插件3","pluginStatus":"published","pluginType":"jumpTemplate","sortNum":3},{"pk":"1","pluginIoc":"images/icon1.jpg","pluginName":"插件1","pluginStatus":"unpublished","pluginType":"pushMsg","sortNum":2},{"pk":"2","pluginIoc":"images/icon1.jpg","pluginName":"插件2","pluginStatus":"published","pluginType":"jumpPage","sortNum":1},{"pk":"3","pluginIoc":"images/icon1.jpg","pluginName":"插件3","pluginStatus":"published","pluginType":"jumpTemplate","sortNum":3}],"msg":"成功"};
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
		var url=getport(1);
		var da={};
		da.pk=pk;	
		var postdata=JSON.stringify(da);
		var result=ajax.ajaxdata(url,postdata);
		// var result={"code":"S00000","data":{"canPush":1,"coverUrl":"封面","dataInterface":"跳转模版页面的数据接口","msgCanTransferParam":1,"msgParamTransferMethod":"directReference","msgUrl":"发送消息的地址","pageCanTransferParam":0,"pageTitle":"页面标题","pageUrl":"跳转页面的地址","pk":"1","pluginIoc":"images/icon1.jpg","pluginName":"插件名称1","pluginStatus":"unpublished","pluginType":"pushMsg","sortNum":2,"summary":"摘要","title":"标题"},"msg":"成功"};
		var re={};
		if(result.code=="S00000"){
			re=result.data;
		}else{
			$msg=result.msg;
			console.log($msg);
		}
		return re;
	}
	
	var del=function(pk){//删除
		var url=getport(2);
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
	
	var add_edit=function(data){
		var url=getport(3);
		var da={};
		da.pk=data.pk;
		if(da.pk==""){
			da.companyPk=sessionStorage.getItem("companyPk");
		}
		da.canPush=data.canPush;
		da.dataInterface=data.dataInterface;
		da.msgCanTransferParam=data.msgCanTransferParam;
		da.msgParamTransferMethod=data.msgParamTransferMethod;
		da.msgUrl=data.msgUrl;
		da.pageCanTransferParam=data.pageCanTransferParam;
		da.pageTitle=data.pageTitle;
		da.pageUrl=data.pageUrl;
		da.pluginIoc=data.pluginIoc;
		da.pluginName=data.pluginName;
		da.pluginStatus=data.pluginStatus;
		da.pluginType=data.pluginType;
		da.summary=data.summary;
        da.title=data.title;
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
	var publish=function(pk){
		var url=getport(4);
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
	var sort=function(arr){console.log(arr);
		var url=getport(5);
		var postdata=JSON.stringify(arr);
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
        publish:publish,
        del:del,
        sort:sort,
        add_edit:add_edit,
        dataformat:dataformat,
        getinfo:getinfo
        
    }
});



