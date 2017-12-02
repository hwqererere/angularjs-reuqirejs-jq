define(function  () {
	var navdata=function(){
		var nav=new Array();
		var navlist=sessionStorage.getItem("navdata");
		var navobj=JSON.parse(navlist);

        var navarr=new Array();
        for(var i=0;i<navobj.length;i++){
            nav[i]={};
		    nav[i].id=i;
		    nav[i].title=navobj[i].displayName;
		    nav[i].icon="icon-zs";
		    nav[i].link=navobj[i].url;
        }

	    /*nav[0]={};
	    nav[0].id="0";
	    nav[0].title="知识认证";
	    nav[0].icon="icon-zs";
	    nav[0].link="Knowledge_authentication";
	    
	    二级菜单样例数据
	    nav[0].child=new Array();
	    nav[0].child[0]={};
	    nav[0].child[0].id="00";
	    nav[0].child[0].title="认证管理";
	    nav[0].child[0].link="/authManage";
	    nav[0].child[1]={};
	    nav[0].child[1].id="00";
	    nav[0].child[1].title="模板管理";
	    nav[0].child[1].link="/tempManage"; 
	 二级菜单代码
	    <div class="nav-bar-title-plug">
	                <div class="nav-bar-title-plug-title"><span>{{navplustitle}}</span></div>
	                <ul id="nav-bar-plus">
	                    <li ng-repeat="item in navdataplus" ng-class="navselect($index,navplusel,'navplus')" ><a href="{{item.link}}">{{item.title}}{{$index}}{{navplusel}}</a></li>
	                    
	                </ul>
	            </div>

	       
	    nav[1]={};
	    nav[1].id="1";
	    nav[1].title="模板管理";
	    nav[1].icon="icon-mb";
	    nav[1].link="templetManage";
	    nav[2]={};
	    nav[2].id="2";
	    nav[2].title="app插件管理";
	    nav[2].icon="icon-app";
	    nav[2].link="AppplugManage";*/
	    return nav;
	}
	return {
        navdata: navdata      
        
    }
});