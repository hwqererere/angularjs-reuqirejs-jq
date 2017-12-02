define(["jquery","nav_mod","route"],function($,nav_mod){  
    var myApp = angular.module('myapp', ['ui.router']); 
    myApp.controller('navctrl',function ($scope,$location) {
            nav=nav_mod.navdata();
            $scope.navsel=0;
            for(var i=0;i<nav.length;i++){
                if(("/"+nav[i].link)==$location.url()){
                    $scope.navsel=i;
                }
            }            
            $scope.navplustitle=nav[0].title;
            $scope.navdata=nav;
            $scope.navdataplus=nav[0].child;
            $scope.navplusel=0;
            

            $scope.navbarset=function(){
                require(['jquery'], function ($){
                    if($(".nav-bar-title").hasClass("navshow")){
                        $(".nav-bar-title").removeClass("navshow");
                        $("#inner").removeClass("inner-navshow");
                        $("#inner").addClass("inner");
                    }else{
                        $(".nav-bar-title").addClass("navshow");
                        $("#inner").addClass("inner-navshow");
                        $("#inner").removeClass("inner");
                    }
                });      
            };
            $scope.navselect=function(index,sel,type){
                if(index==sel){
                    if(type=="nav"){
                        $scope.navsel=sel;
                        $scope.navdataplus=nav[sel].child;
                        return "current-bg";
                    }else if(type=="navplus"){
                        console.log(index+"|"+sel+"|"+type);
                        $scope.navplusel=sel;
                        return "current";
                    }
                    
                }
            };
            $scope.navselclick=function(index){
                $scope.navsel=index;
            }
        });
    
    myApp.config(function ($stateProvider,$controllerProvider, $urlRouterProvider) { 

        var navlist=sessionStorage.getItem("navdata");
        var navobj=JSON.parse(navlist);

        var navarr=new Array();
        for(var i=0;i<navobj.length;i++){
            navarr[i]=navobj[i].url;
        }
        $urlRouterProvider.when("", navarr[0]); 
        for(var i=0;i<navarr.length;i++){
            $stateProvider.state(navarr[i], {  
                url: "/"+navarr[i],  
                templateUrl: "include/"+navarr[i]+".html",
                resolve:{
                    delay : ctrlRegister(navarr[i]+'_Controller',['js/include/controllers/'+navarr[i]+'_Controller.js'])
                }
            });
        }
        function ctrlRegister (ctrlName, ctrlModule) {
                return function ($q) {
                    var defer = $q.defer();
                    require(ctrlModule, function (controller) {

                        $controllerProvider.register(ctrlName, controller);

                        defer.resolve();
                    });
                    return defer.promise;
                }
            }
       /* angular.forEach(navobj, function(v) {
            var _url=v;
            var _templateUrl="include/"+v+".html";
            var _controller=v+"_Controller";
            var _link="js/include/controllers/"+_Controller+".js";
            $stateProvider  
              .state(v.url, {  
                url: _url,
                templateUrl:_templateUrl,  
                resolve: {  
                  delay: ctrlRegister(_controller,[_link] )  
                }  
              });  
          });  


  
        
        
        /*
        var urls = ['news-1' ,'news-2', 'news-3'];  
  
      angular.forEach(urls, function(v) {  
        $stateProvider  
          .state(v, {  
            url: '/' + v,  
            views: {  
              'aboutBody': { templateUrl: templateBasePath + v }  
            }  
          });  
      });  

        */
        
       
        /*
        $stateProvider  
            .state(navarr[0], {  
                url: "/"+navarr[0],  
                templateUrl: "include/"+navarr[0]+".html",
                controller:navarr[0]+"_Controller",
                resolve:{
                    delay : ctrlRegister(navarr[0]+'_Controller',['js/include/controllers/'+navarr[0]+'_Controller.js'])
                }
            })  
            .state("templetManage", {  
                url:"/templetManage",  
                templateUrl: "include/templetManage.html",
                resolve:{
                    delay:ctrlRegister('TempletManage_Controller',['js/include/controllers/TempletManage_Controller.js'])
                }
            }) 
            .state("PcplugManage", {  
                url:"/PcplugManage",  
                templateUrl: "include/PcplugManage.html",
                resolve:{
                    delay:ctrlRegister('PcplugManage_Controller',['js/include/controllers/PcPlugManage_Controller.js'])
                }  
            })  
             .state("AppplugManage", {  
                url:"/AppplugManage",  
                templateUrl: "include/AppplugManage.html",
                resolve:{
                    delay:ctrlRegister('AppplugManage_Controller',['js/include/controllers/AppPlugManage_Controller.js'])
                }  
            }); */
            

    });  
    return myApp;  
});  