define(['jquery','ajax'], function  ($,ajax) {
	function getport(i){
		var url="http://192.168.11.202:6060/";
		var port=new Array();
		//查询模版列表
		port[0]=url+"plugin/pc/templateInfo/list";
		//查询模版详情
		port[1]=url+"plugin/pc/templateInfo/detail";
		//删除模版
		port[2]=url+"plugin/pc/templateInfo/delete";
		//新增或修改模版
		port[3]=url+"plugin/pc/templateInfo/save";

		var re=port[i]+"?loginCode="+sessionStorage.getItem("loginCode")+"&operatorPk="+sessionStorage.getItem("operatorPk");
		return re;
	}
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
	var data=function(page,size){//获取数据
		var url=getport(0);
		var da={};
		da.companyPk=sessionStorage.getItem("companyPk");
		da.pageSize=size+"";
		da.pageNo=page+""; 
		var postdata=JSON.stringify(da);
		var result=ajax.ajaxdata(url,postdata);
		// var result={"code":"S00000","data":{"result":[{"fieldNameStr":"客户名称，开户时间","pk":"999","templateName":"开户通知"},{"fieldNameStr":"客户名称，开户时间","pk":"999","templateName":"开户通知"},{"fieldNameStr":"客户名称，开户时间","pk":"999","templateName":"开户通知"},{"fieldNameStr":"客户名称，开户时间","pk":"999","templateName":"开户通知"},{"fieldNameStr":"客户名称，开户时间","pk":"999","templateName":"开户通知"},{"fieldNameStr":"客户名称，开户时间","pk":"999","templateName":"开户通知"}],"totalCount":"20","totalPage":"1"},"msg":"成功"};
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
		// var result={"code":"S00000","data":{"templateInfo":{"detailType":"chatDetail","pk":"999","templateName":"模板名称","templateSummary":"测试内容90ki","templateTitle":"模板标题"},"templateParams":[{"paramKey":"field1","paramValue":"字段1"},{"paramKey":"field2","paramValue":"字段2"},{"paramKey":"field3","paramValue":"字段3"}]},"msg":"测试内容oa97"};
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
		if(data.pk==""){
			da.companyPk=sessionStorage.getItem("companyPk");
		}else{
			da.companyPk="";
		}
		da.templateName=data.templateName;
        da.detailType=data.detailType;
        var arr=new Array();
		console.log(data);
        for(var i=0;i<data.templateParams.length;i++){

        	arr[i]={};
        	arr[i].paramKey="field"+(i+1);
        	arr[i].paramValue=data.templateParams[i].paramValue;
        }
        da.templateParams=arr;	
		var postdata=JSON.stringify(da);
		console.log(da);

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
        del:del,
        add_edit:add_edit,
        dataformat:dataformat,
        getinfo:getinfo
        
    }
});



