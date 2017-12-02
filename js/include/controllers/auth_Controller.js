define(['angular','jquery','auth_mod','angularinit'], function (angular,$,auth_mod,angularinit) {
    return function auth_Controller($scope){
        var list= auth_mod.data(1,6);
        $scope.datalist=auth_mod.dataformat(list);
        angularinit.page1($scope,1,6,list.totalCount);
        angularinit.defaultwindow($scope);
      	angularinit.defaultwindow2($scope);
      	$
      	$scope.changePageSize=function(data){
      		var list= auth_mod.data(1);
	        $scope.datalist=auth_mod.dataformat(list);
	        angularinit.page1($scope,1,data,list.totalCount);
      	}
      	$scope.frash=function(page){
      		var list= auth_mod.data(0);
	        $scope.datalist=auth_mod.dataformat(list);
	        angularinit.page1($scope,page,6,list.totalCount);
      	}
      	$scope.active=function(active){
      		if(active){
      			return "checkbox checked";
      		}else{
      			return "checkbox unchecked";
      		};
      	};
      	$scope.activeclick=function(pk){
      		var returnmod=auth_mod.active(pk);
      		var datalist=$scope.datalist;
      		for(var i=0;i<datalist.length;i++){
      			if(datalist[i].pk==pk){      				
      				if(returnmod){
      					if(datalist[i].isActive){
	      					datalist[i].isActive=false;
	      				}else{
	      					datalist[i].isActive=true;
	      				}
      				}      				
      			}
      		}
      		$scope.datalist=datalist;      		
      	};
      	$scope.tip=false;
      	$scope.showtip=function(){
      		$scope.tip=true;
      	};
      	$scope.hidetip=function(){
      		$scope.tip=false;
      	};
      	$scope.delpk;
      	$scope.getdel=function(pk){
      		$scope.delpk=pk;
      	};
      	$scope.del=function(){
      		var pk=$scope.delpk;
      		var delkey=auth_mod.del(pk);
      		if(delkey){
      			var datalist=$scope.datalist;
      			var re=new Array();
      			var j=0;
	      		for(var i=0;i<datalist.length;i++){
	      			if(datalist[i].pk!=pk){
	      				re[j]=datalist[i];	
	      				j++;	
	      			}
	      		}
	      		$scope.cancel2();
	      		$scope.delpk="";
	      		$scope.datalist=re;
      		}
      	}
      	$scope.window_add=function(){
      		$scope.window_title="添加认证";
      		$scope.pk="";
      		$scope.appName="";
      		$scope.appId="";
      		$scope.appSecret="";
      		$scope.callbackUrl="";      		
      	}
      	$scope.window_edit=function(pk,appName,appId,appSecret,callbackUrl){
      		$scope.window_title="编辑认证";
      		$scope.pk=pk;
      		$scope.appName=appName;
      		$scope.appId=appId;
      		$scope.appSecret=appSecret;
      		$scope.callbackUrl=callbackUrl; 
      	}
            $scope.save=function(){
                  var da={};
                  da.pk=$scope.pk;
                  da.appId=$scope.appId;
                  da.appSecret=$scope.appSecret;
                  da.appName=$scope.appName;
                  da.callbackUrl=$scope.callbackUrl;
                  var savekey=auth_mod.add_edit(da);
                  if(savekey){
                        $scope.cancel();
                  }
            }
      	

    };
    
});