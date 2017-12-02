define(['angular','jquery','template_mod','angularinit'], function (angular,$,template_mod,angularinit) {
    return function template_Controller($scope,$sce){
      function defaultlistshow(){
            var list= template_mod.data(1,20);
            $scope.datalist=template_mod.dataformat(list);
            angularinit.page1($scope,1,20,list.totalCount);
      }
      defaultlistshow();
      angularinit.defaultwindow($scope);
      angularinit.defaultwindow2($scope);
      $scope.templateName="";
      $scope.t_templateName="开户通知";
      $scope.templateSummary="客户已成功开户。\n请及时跟进。".replace(/\r\n/gi,'<br/>');
      var templateParams=new Array();
      templateParams[0]={};
      templateParams[0].paramKey="客户名称";
      templateParams[0].paramValue="Bobe";
      templateParams[1]={};
      templateParams[1].paramKey="开户时间";
      templateParams[1].paramValue="2017-11-11";
      $scope.templateParams=templateParams;
      var detailTypelist=new Array(); 
      detailTypelist[0]={};
      detailTypelist[0].id="customerDetail";
      detailTypelist[0].title="客户详情";
      detailTypelist[1]={};
      detailTypelist[1].id="chatDetail";
      detailTypelist[1].title="对话详情";
      $scope.detailTypelist=detailTypelist;
      $scope.detail_Typelist=detailTypelist[0].id;
      $scope.detail_Typelist_i=0;
      $scope.addkeylink=true;

      $scope.keyword=new Array();
      $scope.keyword[0]={};
      $scope.keyword[0].paramKey="field0";
      $scope.keyword[0].paramValue="";

      $scope.pk="";
      $scope.window_add=function(){
            $scope.window_title="添加模板";
      }
      $scope.detailTypeSelect=function(data){
            $scope.detail_Typelist=data;
      }
      $scope.redl=function(i){
            if(i==0){
                  return false;
            }else{
                  return true;
            }
      }
      $scope.addkeyword=function(){
            var keywordlist=$scope.keyword;
            if(keywordlist.length<5){
                  var obj={};
                  obj.paramKey="field"+keywordlist.length-1;
                  obj.paramValue="";
                  keywordlist.push(obj);

                  $scope.keyword=keywordlist;
                  if(keywordlist.length==5){
                        $scope.addkeylink=false;
                  }
            }
      }
      $scope.delkey=function(index){
            var keywordlist=$scope.keyword;
            var j=0;
            var newarr=new Array();
            for(var i=0;i<keywordlist.length;i++){
                  if(index!=i){
                        newarr[j]={};
                        newarr[j].paramKey="field"+j;
                        newarr[j].paramValue=keywordlist[i].paramValue;
                        j++;
                  }      
            }
            $scope.keyword=newarr;
            $scope.addkeylink=true;
      }
      $scope.keychange=function(index){
            var keyword=$scope.keyword;
            for(var i=0;i<keyword.length;i++){
                  if(index==i){
                        keyword[i].paramValue=$("#templeteKey").find("input[type=text]").eq(index).val();
                  }
            }
			
            $scope.keyword=keyword;
      }
      $scope.edit=function(pk){
            $scope.pk=pk;
            var getinfo=template_mod.getinfo(pk);
            var templateinfo=getinfo.templateInfo;
            $scope.templateName=templateinfo.templateName;
            $scope.keyword=getinfo.templateParams;
        
            if(getinfo.templateInfo.detailType==$scope.detailTypelist[0].id){
                  $scope.detail_Typelist=$scope.detailTypelist[0].id;
                  $scope.detail_Typelist_i=0;
                  
            }else{
                  $scope.detail_Typelist=$scope.detailTypelist[1].id;
                  $scope.detail_Typelist_i=1;
            }

            // console.log($scope.detail_Typelist);
            $scope.window=true;
      }
      $scope.save=function(){
            var postdata={};            
            postdata.templateName=$scope.templateName;
			console.log($scope.detail_Typelist);
            postdata.detailType=$scope.detail_Typelist.id;
            postdata.templateParams=$scope.keyword;
			console.log($scope.keyword)
            postdata.pk=$scope.pk;
            console.log(postdata);
            var sub=template_mod.add_edit(postdata);
            if(sub){
                  $scope.window=false;
            }
            defaultlistshow();
      }
      $scope.getdel=function(pk){
            $scope.window2=true;
            $scope.delpk=pk;
      }
      $scope.del=function(){
            var sub=template_mod.del($scope.delpk);
            if(sub){
                   defaultlistshow();
                   $scope.delpk="";
            }
           $scope.cancel2();
      }
    };
    
});