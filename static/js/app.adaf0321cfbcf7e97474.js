webpackJsonp([1,0],[function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=a(2),s=n(r),i=a(77),o=n(i),l=a(12),u=n(l),c=a(114),d=n(c),f=a(13),p=n(f);a(62),a(14);var v=a(61);s.default.use(d.default),s.default.use(v.Table),s.default.use(v.TableColumn),s.default.use(v.Row),s.default.use(v.Col),s.default.use(v.Input),s.default.use(v.Popover),s.default.use(v.Loading),s.default.use(v.Breadcrumb),s.default.use(v.BreadcrumbItem),s.default.use(v.Select),s.default.use(v.Option),s.default.use(v.Pagination),s.default.use(v.Dialog),s.default.use(v.Button),s.default.use(v.Form),s.default.use(v.FormItem),new s.default({el:"#root",router:u.default,store:p.default,created:function(){console.log("hi!xinlian!App start success!")},render:function(t){return t(o.default)}})},,,,,,,,,,,function(t,e,a){a(71);var n=a(1)(a(17),a(105),"data-v-45d523c9",null);t.exports=n.exports},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(2),s=n(r),i=a(115),o=n(i),l=a(91),u=n(l),c=a(94),d=n(c),f=a(93),p=n(f),v=a(92),_=n(v),m=a(89),h=n(m),b=a(87),g=n(b),y=a(86),x=n(y);s.default.use(o.default),e.default=new o.default({mode:"history",routes:[{path:"/",redirect:"/user/reg"},{path:"/user",redirect:"/user/reg",component:u.default,children:[{name:"usereg",path:"reg",component:d.default},{name:"usevip",path:"vip",component:p.default}]},{path:"/user-detail",name:"user-detail",component:_.default,redirect:"/user-detail/test-data",children:[{path:"test-data",name:"test-data",component:h.default},{path:"7timeReport",name:"7timeReport",component:g.default}]},{path:"/msg-reply",name:"msg-reply"},{path:"*",component:x.default},{path:"/404",name:"page404"}]})},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(116),s=n(r),i=a(2),o=n(i);o.default.use(s.default);var l={statisData:{}},u={setStatisData:function(t,e){t.statisData=e}},c={setStatisData:function(t,e){t.commit("setStatisData",e)}},d={getStatisData:function(t){return t.statisData}};e.default=new s.default.Store({state:l,mutations:u,getters:d,actions:c})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(76);n.setup({timeout:"300-1000"});var r={resuseregister:n.mock("http://api.xltest.cn/sryk/useregister","post",function(){return n.mock({"vipUserList|20":[{"index|+1":1,name:"@cname",account:/^1(3|4|5|7|8)\d{9}$/,sex:"@string('男女', 1)",address:"@county(true)",regtime:'@datetime("yyyy-MM-dd HH:mm:ss")',filereg:"@integer(0,9999)",lastlogin:"@integer(0,365)",uid:"@integer(0,999999)"}],pagination:{total:3e3,pageSize:20}})}),userStatisData:n.mock("http://api.xltest.cn/sryk/userStatisData","post",function(){return n.mock({statisData:{today:"@integer(0,9999)",week:"@integer(0,99999)",month:"@integer(0,999999)",total:"@integer(99999,9999999)"}})}),userdetail:n.mock("http://api.xltest.cn/sryk/user-detail","post",function(){return n.mock({avatersrc:"@image('60x60','#00405d','fff','avater')",name:"@cname",regtime:'@datetime("yyyy-MM-dd HH:mm:ss")',lastlogin:"@datetime(yyyy-MM-dd HH:mm:ss)",sex:"@string('男女', 1)",height:"@integer(145,199)",weight:"@integer(145,199)",address:"@county(true)",phone:/^1(3|4|5|7|8)\d{9}$/,birthday:"@datetime(yyyy-MM-dd)",waist:"@integer(50,200)"})}),testData:n.mock("http://api.xltest.cn/sryk/test-data","post",function(){return n.mock({"testData|30":[{tesTime:'@datetime("yyyy-MM-dd HH:mm:ss")',glycemic:"@float(1,10,2,2)",serialNum:"@integer(100000000,999999999)",uid:"@integer(10000,9999999)",timeType:"@integer(0,7)"}]})}),"7timeReport":n.mock("http://api.xltest.cn/sryk/7timeReport","post",function(){return n.mock({"time7Report|30":[{tesTime:'@datetime("yyyy-MM-dd HH:mm:ss")',text:"@csentence(50,260)"}]})})};e.default=r},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(84),s=n(r),i=a(78),o=n(i);e.default={name:"app",components:{elHeader:s.default,asideMenu:o.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"asidemenu"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navList",props:{routeList:{type:Object,required:!0},tag:{type:String,default:"li"}},data:function(){return{}},components:{},methods:function(){}}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(34),s=n(r);e.default={name:"statisticstable",data:function(){return{statisData:{}}},props:["api"],computed:{},watch:{$route:function(t,e){(0,s.default)(this.api).indexOf(this.$route.name)>-1&&this.fetchData()}},methods:{fetchData:function(){var t=this;this.$http({method:"post",url:this.api[this.$route.name],data:{}}).then(function(e){t.statisData=e.body.statisData})}},created:function(){this.fetchData()},beforeRouteEnter:function(t,e,a){}}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(11),s=n(r);e.default={name:"navMain",data:function(){return{title:"大翔集团",routeList:{"/organization":"机构","/doctor":"医生","/dl":"代理","/fx":"分销","/product":"商品","/device":"设备","/order":"订单","/ad":"广告端","/user":"用户","/statis":"统计"}}},components:{navList:s.default}}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(82),s=n(r);e.default={name:"nav-top",components:{qrCode:s.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"qrcode",data:function(){return{src:"/static/img/himqrcode.png",name:"老王"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"userAvater",props:["avaterSrc"],data:function(){return{}},mounted:function(){}}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(81),s=n(r),i=a(80),o=n(i);e.default={name:"elHeader",data:function(){return{}},components:{navTop:s.default,navMain:o.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mainLayout",props:{mainRootAdditionClass:{type:String,default:""},mainNavAdditionClass:{type:String,default:""}},data:function(){return{}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"page404"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"health-health-7timeReport",data:function(){return{tableData:[],loading:!0}},methods:{fetchData:function(){var t=this;this.$http({method:"POST",url:"http://api.xltest.cn/sryk/7timeReport",data:{uid:123}}).then(function(e){var a=e.body;console.log(a),t.tableData=a.time7Report,t.loading=!1})}},created:function(){this.fetchData()},beforeRouteEnter:function(t,e,a){a(function(t){})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"healthInfoNav",data:function(){return{}},props:["routeList"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"healthTestData",data:function(){return{loading:!0,tableData:[],timeTypeOption:[{value:0,label:"凌晨"},{value:1,label:"早餐前"},{value:2,label:"早晨后"},{value:3,label:"午餐前"},{value:4,label:"午餐后"},{value:5,label:"晚餐前"},{value:6,label:"晚餐后"},{value:7,label:"睡前"}]}},methods:{fetchData:function(){var t=this;this.$http({method:"POST",url:"http://api.xltest.cn/sryk/test-data",data:{uid:12}}).then(function(e){var a=e.body;console.log(a),t.tableData=a.testData,t.loading=!1})},glycemicFormatter:function(t,e){return t.glycemic+"mmol/L"}},created:function(){this.fetchData()},beforeRouteEnter:function(t,e,a){a(function(t){})}}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(83),s=n(r);e.default={name:"userDetailInfo",props:["userInfoData"],components:{userAvater:s.default}}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(79),s=n(r),i=a(11),o=n(i),l=a(85),u=n(l);e.default={name:"user",data:function(){return{routeList:{reg:"注册会员",vip:"星级会员"},statisApi:{usereg:"http://api.xltest.cn/sryk/userStatisData",usevip:"http://api.xltest.cn/sryk/userStatisData"}}},components:{mainLayout:u.default,navList:o.default,statisticsTable:s.default},methods:{},created:function(){},beforeRouteEnter:function(t,e,a){"usereg"===t.name,a(function(t){})}}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(90),s=n(r),i=a(88),o=n(i);e.default={name:"userDetail",data:function(){return{uid:0,userInfoData:{},back:"",routeList:{"test-data":"检测数据","7timeReport":"7次血糖评估报告",healthReport:"健康报告",server:"客服",doctorSuggest:"医生建议",hospitalRecord:"医院记录"}}},computed:{currentRoterName:{get:function(){return this.routeList[this.$route.name]}}},components:{userDetailInfo:s.default,healthInfoNav:o.default},methods:{fetchData:function(){var t=this;console.log(this.uid),this.$http({method:"POST",url:"http://api.xltest.cn/sryk/user-detail",data:{uid:this.uid}}).then(function(e){console.log(e.body),t.userInfoData=e.body})}},created:function(){},mounted:function(){console.log("userDeatil created!",this.uid)},beforeRouteEnter:function(t,e,a){a(function(a){console.log(a.$route.name),a.back=e.name?e.name:"usereg",a.uid=t.query.uid,a.fetchData()})},beforeDestroy:function(){console.log("没了")}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"uservip",data:function(){return{searchThis:"",tableData:[],loading:!0,currentHeight:550,pagination:{}}},components:{},methods:{search:function(t){console.log(t)},fetchData:function(t){var e=this;this.$http({method:"post",url:"http://api.xltest.cn/sryk/useregister",data:{uid:this.uid,page:t}}).then(function(t){var a=t.body;console.group("userVip"),e.tableData=a.vipUserList,e.pagination=a.pagination,e.loading=!1})},handleCurrentChange:function(t){this.loading=!0,this.fetchData(t)}},created:function(){this.fetchData()},mounted:function(){},beforeRouteEnter:function(t,e,a){a(function(t){console.groupEnd()})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"useregister",data:function(){return{uid:1,searchThis:"",tableData:[],loading:!0,currentHeight:550,pagination:{}}},components:{},methods:{fetchData:function(){var t=this;this.$http({method:"POST",url:"http://api.xltest.cn/sryk/useregister",data:{uid:this.uid}}).then(function(e){var a=e.body;t.tableData=a.vipUserList,t.pagination=a.pagination,t.loading=!1})},handleCurrentChange:function(t){this.loading=!0,this.fetchData(t)},search:function(t){}},created:function(){this.fetchData()},mounted:function(){},beforeRouteEnter:function(t,e,a){a(function(t){})}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,a){a(67);var n=a(1)(a(15),a(100),null,null);t.exports=n.exports},function(t,e,a){a(68);var n=a(1)(a(16),a(102),null,null);t.exports=n.exports},function(t,e,a){a(75);var n=a(1)(a(18),a(113),"data-v-efb1448a",null);t.exports=n.exports},function(t,e,a){var n=a(1)(a(19),a(97),null,null);t.exports=n.exports},function(t,e,a){var n=a(1)(a(20),a(107),null,null);t.exports=n.exports},function(t,e,a){a(70);var n=a(1)(a(21),a(104),"data-v-459ad677",null);t.exports=n.exports},function(t,e,a){a(74);var n=a(1)(a(22),a(112),null,null);t.exports=n.exports},function(t,e,a){a(63);var n=a(1)(a(23),a(95),null,null);t.exports=n.exports},function(t,e,a){a(66);var n=a(1)(a(24),a(99),null,null);t.exports=n.exports},function(t,e,a){var n=a(1)(a(25),a(101),null,null);t.exports=n.exports},function(t,e,a){var n=a(1)(a(26),a(106),null,null);t.exports=n.exports},function(t,e,a){a(72);var n=a(1)(a(27),a(110),"data-v-8196fc3e",null);t.exports=n.exports},function(t,e,a){var n=a(1)(a(28),a(108),null,null);t.exports=n.exports},function(t,e,a){a(69);var n=a(1)(a(29),a(103),"data-v-40afc668",null);t.exports=n.exports},function(t,e,a){var n=a(1)(a(30),a(109),null,null);t.exports=n.exports},function(t,e,a){a(64);var n=a(1)(a(31),a(96),"data-v-135a3a20",null);t.exports=n.exports},function(t,e,a){a(65);var n=a(1)(a(32),a(98),"data-v-184117de",null);t.exports=n.exports},function(t,e,a){a(73);var n=a(1)(a(33),a(111),"data-v-c320fa94",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("nav-top"),t._v(" "),a("div",{staticClass:"header-main"},[a("nav-main")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"userDetail-root"},[a("div",{staticClass:"main-container"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{name:t.back},replace:""}},[t._v("返回")]),t._v(" "),a("el-breadcrumb-item",[t._v(t._s(t.currentRoterName))])],1),t._v(" "),a("user-detail-info",{attrs:{"user-info-data":t.userInfoData}}),t._v(" "),a("div",{staticClass:"user-health-info-root"},[a("health-info-nav",{attrs:{routeList:t.routeList}}),t._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("keep-alive",[a("router-view")],1)],1)],1)],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"nav-main"},[a("div",{staticClass:"nav-bar"},[t._m(0),t._v(" "),a("nav-list",{attrs:{routeList:t.routeList,tag:"a"}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-title"},[t._v("\n            "+t._s(t.title)+"运管系统\n        ")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uservip-root"},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-input",{directives:[{name:"model",rawName:"v-model",value:t.searchThis,expression:"searchThis"}],attrs:{placeholder:"搜索用户或手机号"},domProps:{value:t.searchThis},on:{change:t.search,input:function(e){t.searchThis=e}}})],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],attrs:{data:t.tableData,stripe:"",height:"550","element-loading-text":"新联为您加载数据中",border:""}},[a("el-table-column",{attrs:{prop:"index",label:"序号",width:"90",sortable:"",fixed:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"用户",sortable:"",fixed:"left",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"account",label:"账号",fixed:"left",sortable:"",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"手机归属地",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址",width:"260"}}),t._v(" "),a("el-table-column",{attrs:{prop:"regtime",label:"注册时间",width:"200"},scopedSlots:{default:function(e){return[a("el-popover",{attrs:{trigger:"hover",placement:"right"}},[a("p",[t._v("开通档案"+t._s(e.row.filereg)+"天")]),t._v(" "),a("p",[t._v(t._s(e.row.lastlogin)+"天前登陆")]),t._v(" "),a("div",{slot:"reference"},[t._v("\n              "+t._s(e.row.regtime)+"\n          ")])])]}}}),t._v(" "),a("el-table-column",{attrs:{prop:"regfrom",label:"注册来源",width:"260"}}),t._v(" "),a("el-table-column",{attrs:{label:"链接设备",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"attention",label:"我的关注",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"attention",label:"关注我的",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{label:"详情",width:"75",prop:"uid",fixed:"right"},scopedSlots:{default:function(e){return[a("router-link",{attrs:{to:{name:"user-detail",query:{uid:e.row.uid}},replace:""}},[t._v("查看")])]}}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:{default:function(e){return[a("router-link",{attrs:{to:{name:"msg-reply",query:{uid:e.row.uid}}}},[t._v("在线帮助")])]}}})],1),t._v(" "),a("footer",[a("el-pagination",{attrs:{layout:"total,prev,pager,next,jumper",total:t.pagination.total,"page-size":t.pagination.pageSize},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-root",class:t.mainRootAdditionClass},[a("div",{staticClass:"nav2",class:t.mainNavAdditionClass.nav},[t._t("navList"),t._v(" "),t._t("other")],2),t._v(" "),a("transition",{attrs:{name:"slide",mode:"out-in"}},[a("keep-alive",[a("router-view")],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-header"),t._v(" "),a("main",{staticClass:"main-container"},[a("transition",{attrs:{name:"slide",mode:"out-in"}},[a("keep-alive",[a("router-view")],1)],1)],1),t._v(" "),a("aside-menu")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[a("h1",[t._v("404 not found")]),t._v(" "),a("h2",[t._v("找不到该页面")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",[a("span",{staticClass:"el-icon-menu"}),t._v(" "),a("p",[t._v("\n        全部菜单\n    ")]),t._v(" "),a("div",{staticClass:"miniMenu"},[a("div",{staticClass:"menuContent"},[a("ul",[a("li",[t._v("培训")]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("官网")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("平台宣传")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("代理指南")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("分销指南")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("医生指南")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("用户指南")])])]),t._v(" "),a("ul",{staticClass:"right"},[a("li",[t._v("服务")]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("代理服务")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("分销服务")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("绿色就医")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("用户服务")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("在线帮助")])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"user-info"},[a("div",{staticClass:"user-info-left"},[a("user-avater",{attrs:{"avater-src":t.userInfoData.avatersrc}}),t._v(" "),a("p",[t._v("注册时间："+t._s(t.userInfoData.regtime))]),t._v(" "),a("p",[t._v("最近一次登陆时间："+t._s(t.userInfoData.lastlogin))])],1),t._v(" "),a("div",{staticClass:"user-info-right"},[a("el-row",[a("el-col",{attrs:{span:9}},[a("span",[t._v("姓名：")]),t._v(" "),a("span",[t._v(t._s(t.userInfoData.name))])]),t._v(" "),a("el-col",{attrs:{span:9}},[a("span",[t._v("身高：")]),t._v(" "),a("span",[t._v(t._s(t.userInfoData.height)+"cm")])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:9}},[a("span",[t._v("性别：")]),t._v(" "),a("span",[t._v(t._s(t.userInfoData.sex))])]),t._v(" "),a("el-col",{attrs:{span:9}},[a("span",[t._v("体重：")]),t._v(" "),a("span",[t._v(t._s(t.userInfoData.weight)+"kg")])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:9}},[a("span",[t._v("出生日期：")]),t._v(" "),a("span",[t._v(t._s(t.userInfoData.birthday))])]),t._v(" "),a("el-col",{attrs:{span:15}},[a("span",[t._v("腰围：")]),t._v(" "),a("span",[t._v(t._s(t.userInfoData.waist))])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:9}},[a("span",[t._v("联系电话：")]),t._v(" "),a("span",[t._v(t._s(t.userInfoData.phone))])]),t._v(" "),a("el-col",{attrs:{span:15}},[a("span",[t._v("住址：")]),t._v(" "),a("span",[t._v(t._s(t.userInfoData.address))])])],1)],1)])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n    二维码\n    "),a("span",[a("img",{attrs:{src:t.src,alt:"二维码"}}),t._v(" "),a("p",[t._v("总代："+t._s(t.name))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[t._l(t.routeList,function(e,n){return["li"===t.tag?a("router-link",{attrs:{to:n,tag:"li"}},[a("a",{attrs:{href:""}},[t._v("\n                    "+t._s(e)+"\n                  ")])]):a("li",[a("router-link",{attrs:{to:n}},[t._v(t._s(e))])],1)]})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"health-test-date-root"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],attrs:{data:t.tableData,height:"550","element-loading-text":"新联为您加载数据中",border:""}},[a("el-table-column",{attrs:{prop:"tesTime",label:"发送时间",sortable:"",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"text",label:"发送内容"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"nav-top"},[a("ul",[a("li",[a("qr-code")],1),t._v(" "),t._m(0),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:""}},[t._v("修改密码")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:""}},[t._v("退出登录")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"health-test-date-root"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],attrs:{data:t.tableData,height:"500","element-loading-text":"新联为您加载数据中",border:""}},[a("el-table-column",{attrs:{prop:"tesTime",label:"检测时间",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"serialNum",label:"设备序号",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"glycemic",label:"血糖值",sortable:"",formatter:t.glycemicFormatter}}),t._v(" "),a("el-table-column",{attrs:{prop:"uid",label:"测试类型"},scopedSlots:{default:function(e){return[a("el-select",{directives:[{name:"model",rawName:"v-model",value:e.row.timeType,expression:"scope.row.timeType"}],domProps:{value:e.row.timeType},on:{input:function(t){e.row.timeType=t}}},t._l(t.timeTypeOption,function(t){return a("el-option",{attrs:{label:t.label,value:t.value}})}))]}}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main-layout",[a("nav-list",{attrs:{routeList:t.routeList},slot:"navList"}),t._v(" "),a("statistics-Table",{attrs:{api:t.statisApi},slot:"other"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"health-info-nav"},[a("ul",[t._l(t.routeList,function(e,n){return[a("router-link",{attrs:{to:n,tag:"li",replace:""}},[t._v(t._s(e))])]}),t._v(" "),a("li")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"useregister-root"},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-input",{directives:[{name:"model",rawName:"v-model",value:t.searchThis,expression:"searchThis"}],attrs:{placeholder:"搜索用户或手机号"},domProps:{value:t.searchThis},on:{change:t.search,input:function(e){t.searchThis=e}}})],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],attrs:{data:t.tableData,height:t.currentHeight,"element-loading-text":"新联为您加载数据中",border:""}},[a("el-table-column",{attrs:{prop:"index",label:"序号",width:"90",sortable:"",fixed:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"用户",fixed:"left",sortable:"",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"account",label:"账号",fixed:"left",sortable:"",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"手机归属地",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"70"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址",width:"260"}}),t._v(" "),a("el-table-column",{attrs:{label:"注册时间",width:"200"},scopedSlots:{default:function(e){return[a("p",[t._v("\n            "+t._s(e.row.regtime)+"\n          ")]),t._v(" "),a("p",[t._v("开通档案"+t._s(e.row.filereg)+"天")]),t._v(" "),a("p",[t._v(t._s(e.row.lastlogin)+"天前登陆")])]}}}),t._v(" "),a("el-table-column",{attrs:{prop:"regfrom",label:"注册来源",width:"260"}}),t._v(" "),a("el-table-column",{attrs:{prop:"attention",label:"我的关注",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"attention",label:"关注我的",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{label:"详情",width:"75",prop:"uid",fixed:"right"},scopedSlots:{default:function(e){return[a("router-link",{attrs:{to:{name:"user-detail",query:{uid:e.row.uid}}}},[t._v("查看")])]}}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120",fixed:"right"},scopedSlots:{default:function(e){return[a("el-button",{attrs:{size:"mini"}},[t._v("在线帮助")]),t._v(" "),a("el-button",{attrs:{size:"mini"}},[t._v("\n            更新资料\n          ")]),t._v(" "),a("el-button",{attrs:{size:"mini"}},[t._v("添加亲友")]),t._v(" "),a("el-button",{attrs:{size:"mini"}},[t._v("修改服务医生")])]}}})],1),t._v(" "),a("footer",[a("el-pagination",{attrs:{layout:"total,prev,pager,next,jumper",total:t.pagination.total,"page-size":t.pagination.pageSize},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-detail-avater"},[a("img",{attrs:{src:t.avaterSrc,alt:"用户头像",title:"用户头像"}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[t._m(0),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(t._s(t.statisData.today))]),t._v(" "),a("td",[t._v(t._s(t.statisData.week))]),t._v(" "),a("td",[t._v(t._s(t.statisData.month))]),t._v(" "),a("td",[t._v(t._s(t.statisData.total))])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("今天")]),t._v(" "),a("th",[t._v("本周")]),t._v(" "),a("th",[t._v("本月")]),t._v(" "),a("th",[t._v("总计")])])])}]}},,,,function(t,e){}]);