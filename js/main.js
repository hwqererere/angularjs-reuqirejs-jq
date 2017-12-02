window.loading = {
    finish: function() {
        /* 保留个方法做一些加载完成后的处理，我实际的项目中会在这里结束加载动画 */
    },
    load: function() {
        require.config({  
	        paths : {  
	            "angular" : "lib/angular146",  
	            "route"   : "lib/angular-ui-router0215",
	            "jquery"  : "lib/jquery211",
	            "angular-sortable-view":"lib/angular-sortable-view",
	            "jquery-ui":"lib/jquery-ui.min",
	            "ng-sortable":"lib/ng-sortable",
	            "Sortable":'lib/Sortable',

	            "ajax"	  : "include/init/ajax",
	            "angularinit":"include/init/angularinit",

	            
	            "nav_mod":"include/model/Nav_model",
	            "auth_mod":"include/model/auth_mod",
	            "template_mod":"include/model/template_mod",
	            "appPlugin_mod":"include/model/appPlugin_mod",
	            "PcplugManage_mod":"include/model/PcplugManage_mod"
	        },  
	        shim : {  
	            "route" : {  
	                deps : ["angular"]  
	            }  
	        },
	        urlArgs: "bust=" + (new Date()).getTime()
	    });  
	    requirejs(["js/appRoute.js"],function(){  
	        angular.bootstrap(document.body, ['myapp'])  
	    });  
    }
};
window.loading.load();

