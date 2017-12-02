define(['angular','jquery','appPlugin_mod','angularinit','Sortable'], function (angular,$,appPlugin_mod,angularinit,Sortable) {
  return function appPlugin_Controller($scope){
     function defaultlistshow(){
        var list= appPlugin_mod.data();
        $scope.apppluglist=list;
        box(1);
	    $scope.pk="";
	    $scope.pluginName="";
	    $scope.pageTitle="";
	    $scope.msgUrl="";
	    $scope.pageUrl="";
	    $scope.summary="";
	    $scope.pageCanTransferParam="1";
	    $scope.msgCanTransferParam=1;
	    $scope.pramtype="directReference";
	    $scope.canPush="1";
      $scope._draggable=false;

      (function(){var byId=function(id){return document.getElementById(id)},loadScripts=function(desc,callback){},console=window.console;Sortable.create(byId("multi"),{animation:150,draggable:".tile",handle:".tile__name"});[].forEach.call(byId("multi").getElementsByClassName("tile__list"),function(el){Sortable.create(el,{group:"photo",animation:150})})})();




      }
      function box(i){
      	if(i==1){
      		$scope.box1show=true;
      		$scope.box2show=false;
      		$scope.box3show=false;
      		$scope.pluginType="pushMsg";
          return true;
      	}else if(i==2){
      		$scope.box1show=false;
      		$scope.box2show=true;
      		$scope.box3show=false;
      		$scope.pluginType="jumpPage";
          return true;
      	}else if(i==3){
      		$scope.box1show=false;
      		$scope.box2show=false;
      		$scope.box3show=true;
      		$scope.pluginType="jumpTemplate";
          return true;
      	}
        return false;
      }
      defaultlistshow();
      angularinit.defaultwindow($scope);
		  angularinit.defaultwindow2($scope);
      $scope.box=function(i){
      	box(i);
      };
      
      
      $scope.draggable=function(){
        if($scope._draggable){
          $scope._draggable=false;
        }else{
          $scope._draggable=true;
        }
      }
      $scope.edit=function(pk){
      	edit(pk);
      }
      function edit(pk){
      	var apppluginfo=appPlugin_mod.getinfo(pk);
      	$scope.pk=pk;
      	$scope.pluginName=apppluginfo.pluginName;
      	if(apppluginfo.pluginType=="pushMsg"){
      		box(1);
      	}else if(apppluginfo.pluginType=="jumpPage"){
      		box(2);
      	}else if(apppluginfo.pluginType=="jumpTemplate"){
      		box(3);
      	}
      	$scope.pageTitle=apppluginfo.pageTitle;
      	$scope.msgUrl=apppluginfo.msgUrl;

      	$scope.pageUrl=apppluginfo.pageUrl;
    		$scope.summary=apppluginfo.summary;
    		$scope.msgCanTransferParam=apppluginfo.msgCanTransferParam;
    		$scope.pageCanTransferParam=apppluginfo.pageCanTransferParam;
    		$scope.pramtype=apppluginfo.pramtype;
    		$scope.canPush=apppluginfo.canPush;
      }
      $scope.boxcheck=function(key){
        if(key==$scope.pluginType){
          return true;
        }else{
          return false;
        }
      }
      $scope.pagepram=function(bool){
      		$scope.pageCanTransferParam=bool;
      }
      $scope.msgCanTransferParam_c=function(p){
      		$scope.msgCanTransferParam=p;
      }
      $scope.msgCanTransferParam_d=function(p){
        if($scope.msgCanTransferParam==p){
          return true;
        }else{
          return false;
        }
      }
      $scope.pramtype_c=function(p){
      	$scope.pramtype=p;
      }
      $scope.pramtype_d=function(p){
        if($scope.pramtype==p){
          return true;
        }else{
          return false;
        }
      }
      $scope.canPush_c=function(p){
      	$scope.canPush=p;
      }
      $scope.canPush_d=function(p){
        if($scope.canPush==p){
          return true;
        }else{
          return false;
        }
      }

      $scope.del=function(){
      	var sub=appPlugin_mod.del($scope.pk);
            if(sub){
                   defaultlistshow();
                   $scope.pk="";
            }
           $scope.cancel2();
      }
      $scope.chose=function(pk){
      	$scope.savepk=pk;
      }
      $scope.save=function(){
      	var pk="";
      	if($scope.pk!=""){
      		pk=$scope.savepk;
      	}
      	edit($scope.savepk);
      	$scope.pk=pk;
      	$scope.savepk="";
      	$scope.cancel();
      }
      $scope.add_edit=function(){
        var da={};
        da.pk=$scope.pk;
        da.canPush=$scope.canPush;
        da.dataInterface=$scope.dataInterface;
        da.msgCanTransferParam=$scope.msgCanTransferParam;
        da.msgParamTransferMethod=$scope.msgParamTransferMethod;
        da.msgUrl=$scope.msgUrl;
        da.pageCanTransferParam=$scope.pageCanTransferParam;
        da.pageTitle=$scope.pageTitle;
        da.pageUrl=$scope.pageUrl;
        da.pluginIoc=$scope.pluginIoc;
        da.pluginName=$scope.pluginName;
        da.pluginStatus=$scope.pluginStatus;
        da.pluginType=$scope.pluginType;
        da.summary=$scope.summary;
        da.title=$scope.title;
        var key=appPlugin_mod.add_edit(da);
        if(key){
          defaultlistshow();
        }
      }
      $scope.sor=function(){
        var sor=$("#tile").find("input");
        console.log(sor[1].value);
        var sorarr=new Array();
        for(var i=0;i<sor.length;i++){
          sorarr[i]={};
          sorarr[i].pk=sor[i].value;
          sorarr[i].sortNum=(i-0+1)+"";
        }
        console.log(sorarr);
        appPlugin_mod.sort(sorarr);
        defaultlistshow();
      };
      $scope.publish=function(){
        if($scope.pk!=""){
          appPlugin_mod.sort(sorarr);
          defaultlistshow();
        }
      };
  }



      
      
   
});