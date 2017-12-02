define(['angularinit'], function  () {
    var getcompanyPk=function(){
        return "999";
    }
    var page1=function($scope,pageNo,pageSize,pageCount){ 
        var allpage=parseInt(pageCount/pageSize);
        if(pageCount%pageSize) {
            allpage++;
        }
        
        var prewPage=parseInt(pageNo)-1;
        var nextPage=parseInt(pageNo)+1;
        if(prewPage<=0){
            prewPage=0;
        }else if(nextPage>=allpage){
            nextPage=allpage;
        }
        $scope.prewPage=prewPage;
        $scope.nextPage=nextPage;

        var pageshow=new Array();
        if(allpage<5){
            var j=0;
            for(var i=1;i<=allpage;i++){
                pageshow[j]=i;
                j++;
            }
        }else if((pageNo+5)>=allpage){
            var j=0;
            for(var i=(allpage-4);i<=allpage;i++){
                pageshow[j]=i;
                j++;
            }
        }else{
            var j=0;
            for(var i=(pageNo-2);i<=(pageNo+2);i++){
                pageshow[j]=i;
                j++;
            }
        }
        $scope.pageshow=pageshow;
        var pageSizeSelect=new Array(pageSize,pageSize*2,pageSize*4);
        $scope.pageSizeSelect=pageSizeSelect;
        $scope.pagesel=function(i){
            if(pageNo==i){
                return "pagesel";
            }
        }
    }


	var defaultwindow=function($scope){
        $scope.window=false;
        $scope.cancel=function(){
            $scope.window=false;
        }
        $scope.openwindow=function(){
            $scope.window=true;
        }
    };
    var defaultwindow2=function($scope){
        $scope.window2=false;
        $scope.cancel2=function(){
            $scope.window2=false;
        }
        $scope.openwindow2=function(){
            $scope.window2=true;
        }
    };
    
    
	return {
        defaultwindow:defaultwindow,
        defaultwindow2:defaultwindow2,
        page1:page1,
        getcompanyPk:getcompanyPk
    }
});



