webpackJsonp([3],{"+cgv":function(t,e){},"38CD":function(t,e,a){t.exports=a.p+"static/img/article.00788e4.jpg"},"3f40":function(t,e){},"4Lxt":function(t,e){},"4qOc":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(t){a("ffSu")},null,null).exports,o=a("/ocq"),r=a("NYxO"),c={name:"index",data:function(){return{articles:[],formdata:{email:"",password:""}}},computed:Object(r.b)(["userinfo"]),components:{Header:function(){return a.e(0).then(a.bind(null,"teIl"))},Footer:function(){return a.e(1).then(a.bind(null,"mzkE"))}},methods:{jumptoread:function(t){this.$router.push({path:"/read",query:{id:t}})},getarticles:function(){var t=this;this.$axios.get("/article").then(function(e){console.log(e),(e.data.code=200)&&(t.articles=e.data.data)})},loginout:function(){var t=this;this.$axios.get("/loginout").then(function(e){200==e.data.code?(t.$message.success({message:e.data.msg}),t.$store.commit("CHANGEUSERINFO",{userdata:{avatar:"",username:"",desc:""}})):(t.$message.error(e.data.msg),t.$store.commit("CHANGEUSERINFO",{userdata:{avatar:"",username:"",desc:""}}))})},jump:function(){this.$router.push("/login")},loginbtn:function(){var t=this;this.$axios.post("/login",this.formdata).then(function(e){console.log(e),200==e.data.code?(t.$store.commit("CHANGEUSERINFO",e.data.userdata),t.$message.success({message:e.data.msg})):t.$message.error(e.data.msg)})}},created:function(){this.getarticles()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"indexwraper"},[a("Header"),t._v(" "),a("section",{staticClass:"bodysection w1170 ma60"},[a("div",{staticClass:"bodyheader claerfix"},[a("div",{staticClass:"lunbo"}),t._v(" "),a("div",{staticClass:"login"},[t.userinfo.username?a("div",{staticClass:"islogin"},[a("div",{staticClass:"imges"},[a("img",{attrs:{src:t.userinfo.avatar,width:"100%",height:"100%",alt:""}})]),t._v(" "),a("div",{staticClass:"username"},[a("span",[t._v(t._s(t.userinfo.username))])]),t._v(" "),a("div",{staticClass:"nobtn"},[a("el-button",{on:{click:t.loginout}},[t._v("注销登录")])],1)]):a("div",{staticClass:"nologin"},[a("el-form",{attrs:{model:t.formdata}},[a("el-form-item",[a("el-input",{attrs:{type:"email",placeholder:"邮箱"},model:{value:t.formdata.email,callback:function(e){t.$set(t.formdata,"email",e)},expression:"formdata.email"}})],1),t._v(" "),a("el-form-item",[a("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.formdata.password,callback:function(e){t.$set(t.formdata,"password",e)},expression:"formdata.password"}})],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.loginbtn}},[t._v("登录")]),t._v(" "),a("el-button",{staticClass:"btn",on:{click:t.jump}},[t._v("去注册")])],1)],1)],1)])]),t._v(" "),a("div",{staticClass:"articles claerfix"},[a("ul",t._l(t.articles,function(e){return a("li",{key:e._id,staticClass:"articleitem",on:{click:function(a){t.jumptoread(e._id)}}},[a("div",{staticClass:"avatarimg"},[e.avatar?a("img",{attrs:{src:e.avatar.avatar,alt:""}}):t._e()]),t._v(" "),a("div",{staticClass:"articlemessage"},[a("p",[a("span",{staticClass:"username"},[t._v(t._s(e.avatar.username))]),t._v(" "),a("span",[t._v("|")]),t._v(" "),a("span",{staticClass:"fenlei"},[t._v(t._s(e.title))])]),t._v(" "),a("p",{staticClass:"minddlemeessage"},t._l(e.classes,function(e){return a("span",{key:e},[t._v(t._s(e))])})),t._v(" "),a("p",{staticClass:"rating"},[a("span",[t._v("回复："+t._s(e.anser))]),t._v(" "),a("span",[t._v("阅读："+t._s(e.rasting))]),t._v(" "),a("span",[t._v("喜欢："+t._s(e.likenum))])])]),t._v(" "),a("div",{staticClass:"content"},[a("p",[t._v(t._s(e.contentext))])])])}))])])],1)},staticRenderFns:[]};var d=a("VU/8")(c,l,!1,function(t){a("zCkA")},"data-v-019cd91a",null).exports,u=a("mtWM"),m=a.n(u),v={name:"login",data:function(){return{obj:{token:""},formdata:{avatar:"",username:"",meail:"",password:"",desc:""}}},methods:{singup:function(){var t=this;this.formdata.email?this.formdata.password&&this.formdata.password.length<5?this.$message.error("密码不合法"):this.$axios.post("/singup",this.formdata).then(function(e){200==e.data.code?(t.$message.success({message:"注册成功,去登录吧"}),t.$router.push("/")):t.$message.error("邮箱已经被注册了！")}):this.$message.error("email必须填")},handleAvatarSuccess:function(t,e){this.formdata.avatar=t.url},gettoken:function(){var t=this;m.a.get("http://upload.yaojunrong.com/getToken").then(function(e){console.log(e),t.obj.token=e.data.data})}},created:function(){this.gettoken()},components:{Header:function(){return a.e(0).then(a.bind(null,"teIl"))},Footer:function(){return a.e(1).then(a.bind(null,"mzkE"))}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"singupbody"},[a("Header"),t._v(" "),a("div",{staticClass:"loginwraper ma60"},[a("div",{staticClass:"avatarimg"},[a("el-upload",{staticClass:"avatar-uploader",attrs:{data:t.obj,action:"https://upload-z1.qiniup.com","show-file-list":!1,"on-success":t.handleAvatarSuccess}},[t.formdata.avatar?a("img",{staticClass:"avatar",attrs:{src:t.formdata.avatar}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),a("i",[t._v("用户头像")])],1),t._v(" "),a("el-form",{attrs:{model:t.formdata}},[a("el-form-item",[a("el-input",{attrs:{type:"username",placeholder:"用户名"},model:{value:t.formdata.username,callback:function(e){t.$set(t.formdata,"username",e)},expression:"formdata.username"}})],1),t._v(" "),a("el-form-item",[a("el-input",{attrs:{type:"email",placeholder:"邮箱"},model:{value:t.formdata.email,callback:function(e){t.$set(t.formdata,"email",e)},expression:"formdata.email"}})],1),t._v(" "),a("el-form-item",[a("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.formdata.password,callback:function(e){t.$set(t.formdata,"password",e)},expression:"formdata.password"}})],1),t._v(" "),a("el-form-item",[a("el-input",{attrs:{type:"textarea",placeholder:"签名"},model:{value:t.formdata.desc,callback:function(e){t.$set(t.formdata,"desc",e)},expression:"formdata.desc"}})],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"btn",attrs:{type:"success"},on:{click:t.singup}},[t._v("注册")])],1)],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(v,f,!1,function(t){a("4Lxt")},"data-v-238e90ee",null).exports,h=(a("3f40"),a("4qOc"),a("+cgv"),a("G0J2")),g=a("GH0r");h.Quill.register("modules/ImageExtend",g.a);var _={name:"write",components:{Header:function(){return a.e(0).then(a.bind(null,"teIl"))},quillEditor:h.quillEditor},methods:{getconten:function(){var t=this;this.fordata.contentext=this.fordata.contentext.substring(0,200)+"...",this.fordata.id=this.$store.state.userinfo._id,console.log(this.fordata),this.$axios.post("/article",this.fordata).then(function(e){200==e.data.code?(t.$message.success({message:e.data.msg+"正在前往首页"}),setTimeout(function(){return t.$router.push("/")},800)):t.$confirm(e.data.msg+"即将前往登录页面，是否保存文本","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"保存",cancelButtonText:"放弃修改"}).then(function(){t.$store.commit("SAVECONTENT",t.fordata),t.$message({type:"info",message:"保存修改,正在前往登录页面"}),setTimeout(function(){return t.$router.push("/")},500)}).catch(function(e){t.$message({type:"info",message:"取消保存正在前往登录页面"}),setTimeout(function(){return t.$router.push("/")},500)})})},onEditorChange:function(t){t.quill,t.html;var e=t.text;this.fordata.contentext=e}},created:function(){var t=this;this.$axios.get("/class").then(function(e){console.log(e),t.classes=e.data.classes}),this.$store.state.contentext&&(this.$store.state.userinfo._id=this.$store.state.contentext.id)?this.fordata=this.$store.state.contentext:this.fordata={id:"",title:"",classes:[],content:"",contentext:""}},data:function(){return{ti:"",classes:[],fordata:{id:"",title:"",classes:[],content:"",contentext:""},editorOption:{modules:{ImageExtend:{loading:!0,name:"img",action:"https://qiniv.com",response:function(t){return t.info}},toolbar:{container:g.c,handlers:{image:function(){g.b.emit(this.quill.id)}}}}}}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"writenote"},[a("Header"),t._v(" "),a("section",{staticClass:"writewrpaer w1170 ma60"},[a("div",{staticClass:"writeinner"},[a("div",[a("h3",[t._v("标题")]),t._v(" "),a("el-input",{attrs:{type:"text",placeholder:"标题"},model:{value:t.fordata.title,callback:function(e){t.$set(t.fordata,"title",e)},expression:"fordata.title"}})],1),t._v(" "),a("div",{staticClass:"markden"},[a("div",{staticClass:"quill-wrap"},[a("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},on:{change:function(e){t.onEditorChange(e)}},model:{value:t.fordata.content,callback:function(e){t.$set(t.fordata,"content",e)},expression:"fordata.content"}})],1)]),t._v(" "),a("div",[a("div",{staticClass:"artivlefenlei"},[a("span",[t._v("分类：")]),t._v(" "),a("el-checkbox-group",{attrs:{size:"medium"},model:{value:t.fordata.classes,callback:function(e){t.$set(t.fordata,"classes",e)},expression:"fordata.classes"}},t._l(t.classes,function(e){return a("el-checkbox-button",{key:e._id,staticClass:"item",attrs:{label:e.name}},[t._v(t._s(e.name))])}))],1),t._v(" "),a("div",[a("el-button",{attrs:{type:"primary"},on:{click:t.getconten}},[t._v("发布")])],1)])])])],1)},staticRenderFns:[]};var b=a("VU/8")(_,C,!1,function(t){a("ewbH")},"data-v-8e2eca18",null).exports,w={name:"read",data:function(){return{ishow:!1,show3:!1,articleid:"",articl:{},artview:[],comments:"",isloading:!1}},components:{Header:function(){return a.e(0).then(a.bind(null,"teIl"))}},methods:{getariticl:function(t){var e=this;this.$axios.get("/article/art/"+t).then(function(t){e.articl=t.data.data})},removearticle:function(){var t=this;this.$confirm("此操作将永久删除该文章, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios.delete("/article/art/"+t.articleid).then(function(e){t.$message({type:"success",message:e.data.msg}),setTimeout(function(){return t.$router.push("/")},1e3)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},changerasting:function(){this.$axios.get("/article/rasting/"+this.articleid).then(function(t){})},infocus:function(t){this.ishow=!0},onblure:function(t){this.comments?this.ishow=!0:this.ishow=!1},getarticleview:function(){var t=this;this.$axios.get("/articleview/"+this.articleid).then(function(e){t.artview=e.data.data})},gitviews:function(){var t=this;this.isloading=!0,this.$axios.post("/articleview",{commonts:this.comments,articleid:this.articleid}).then(function(e){200==e.data.code?t.$axios.get("/article/anser/"+t.articleid).then(function(e){200==e.data.code&&(t.isloading=!1,t.ishow=!1,t.$message.success({message:"发布成功！"}),t.getariticl(t.articleid),t.getarticleview(),t.comments="")}):(t.$message.error(e.data.msg),t.isloading=!1)})},changelikenum:function(){var t=this;this.$axios.put("/addlike/"+this.$store.state.userinfo._id,{articleid:this.articleid}).then(function(e){if(200==e.data.code){var a=0==e.data.com?1:-1;t.$axios.get("/article/likenum/"+t.articleid,{num:a}).then(function(e){200==e.data.code&&t.getariticl(t.articleid)})}})}},created:function(){this.articleid=this.$route.query.id,this.getariticl(this.articleid),this.changerasting(),this.getarticleview()}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"readarticle"},[a("Header"),t._v(" "),a("section",{staticClass:"articlewraper w1170 ma60"},[a("div",{staticClass:"inner"},[a("div",{staticClass:"nav"},[t.articl.avatar?a("div",{staticClass:"userimg"},[a("img",{attrs:{src:t.articl.avatar.avatar,width:"100%",height:"100%",alt:""}})]):t._e(),t._v(" "),a("div",{staticClass:"usermessage"},[a("p",[t._v("author: "),t.articl.avatar?a("span",[t._v(t._s(t.articl.avatar.username))]):t._e()]),t._v(" "),a("p",[t._v("desc: "),t.articl.avatar?a("span",[t._v(t._s(t.articl.avatar.desc))]):t._e()])]),t._v(" "),a("div",{staticClass:"other"},[a("span",{staticClass:"anser common"}),t._v(" "),a("el-badge",{staticClass:"item",attrs:{value:t.articl.anser}},[a("el-button",{attrs:{size:"small"}},[t._v("评论")])],1),t._v(" "),a("span",{staticClass:"rating common"}),t._v(" "),a("el-badge",{staticClass:"item",attrs:{value:t.articl.rasting}},[a("el-button",{attrs:{size:"small"}},[t._v("阅读")])],1),t._v(" "),a("span",{staticClass:"like common"}),t._v(" "),a("el-badge",{staticClass:"item",attrs:{value:t.articl.likenum}},[a("el-button",{attrs:{size:"small"},on:{click:t.changelikenum}},[t._v("喜欢")])],1),t._v(" "),a("div",{staticClass:"editarticle"},[a("el-button",{on:{click:function(e){t.show3=!t.show3}}},[t._v("编辑")]),t._v(" "),a("div",{staticStyle:{"margin-top":"20px",height:"200px"}},[a("el-collapse-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show3,expression:"show3"}]},[a("div",{staticClass:"transition-box"},[a("el-button",{attrs:{type:"text"},on:{click:t.removearticle}},[t._v("删除文章")])],1),t._v(" "),a("div",{staticClass:"transition-box"},[a("el-button",{attrs:{type:"text"}},[t._v("修改")])],1)])])],1)],1)],1)]),t._v(" "),a("div",{staticClass:"articlecontent"},[t._m(0),t._v(" "),a("div",{staticClass:"articlecontent",domProps:{innerHTML:t._s(t.articl.content)}})])]),t._v(" "),a("div",{staticClass:"usercommonts"},[a("p",{staticClass:"comhead"},[t._v("评论")]),t._v(" "),t.$store.state.userinfo.username?a("div",[a("div",{staticClass:"inputcom"},[a("img",{attrs:{src:t.$store.state.userinfo.avatar,alt:""}}),t._v(" "),a("el-input",{attrs:{id:"iputcom",placeholder:"输入评论..."},on:{blur:t.onblure,focus:t.infocus,keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.gitviews(e):null}},model:{value:t.comments,callback:function(e){t.comments=e},expression:"comments"}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.ishow,expression:"ishow"}],staticClass:"fabucoment"},[a("span",[t._v("enter && click button")]),t._v(" "),a("el-button",{attrs:{loading:t.isloading},on:{click:t.gitviews}},[t._v("\n                        "+t._s(t.isloading?"发布中":"发布评论")+"\n                      ")])],1)]):t._e(),t._v(" "),t.artview?a("div",{staticClass:"usercomlist"},[a("ul",t._l(t.artview,function(e){return a("li",{key:e._id,staticClass:"comlistitem"},[a("div",{staticClass:"comnlistimg"},[e.person.avatar?a("img",{attrs:{src:e.person.avatar,alt:""}}):t._e()]),t._v(" "),a("div",{staticClass:"commonmessage"},[e.person?a("p",{staticClass:"usernamr"},[a("span",[t._v(t._s(e.person.username))])]):t._e(),t._v(" "),a("p",{staticClass:"comments"},[t._v(" "+t._s(e.commonts))]),t._v(" "),a("div",{staticClass:"commtimes "},[a("div",{staticClass:"timess"},[a("span",[t._v(t._s(e.created))])]),t._v(" "),a("div",{staticClass:"tumbs"},[a("span",[t._v("点赞"+t._s(e.thumbs))]),t._v(" "),a("span",[t._v("回复")])])])])])}))]):t._e()])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"articleimg"},[e("img",{attrs:{src:a("38CD"),width:"100%",alt:""}})])}]};var $=a("VU/8")(w,x,!1,function(t){a("bm4y")},"data-v-2d18ca9e",null).exports;s.default.use(o.a);var k=new o.a({routes:[{path:"/",name:"index",component:d},{path:"/login",name:"login",component:p},{path:"/write",name:"write",component:b},{path:"/read",name:"read",component:$}]}),y=a("zL8q"),E=a.n(y),H=(a("tvR6"),a("424j"));s.default.use(r.a);var N=new r.a.Store({state:{userinfo:{avatar:"",username:"",desc:""},contentdata:{title:"",classes:[],content:"",contentext:""}},mutations:{CHANGEUSERINFO(t,e){t.userinfo=e},SAVECONTENT(t,e){t.contentdata=e}},plugins:[Object(H.a)({storage:{getItem:t=>sessionStorage.getItem(t),setItem:(t,e)=>sessionStorage.setItem(t,e),removeItem:t=>sessionStorage.removeItem(t)}})]});const I=m.a.create({baseURL:"/user",timeout:1e4}),S={get:(t,e,a="get",s)=>new Promise((i,n)=>{I[a](t,{params:e},s).then(t=>{i(t)}).catch(t=>{n(t)})}),post:(t,e,a="post",s)=>new Promise((i,n)=>{I[a](t,e,s).then(t=>{i(t)}).catch(t=>{n(t)})}),delete(t,e,a){return this.get(t,e,"delete",a)},put(t,e,a){return this.post(t,e,"put",a)}};s.default.use(E.a),s.default.config.productionTip=!1,s.default.prototype.$axios=S,new s.default({el:"#app",router:k,store:N,components:{App:n},template:"<App/>"})},bm4y:function(t,e){},ewbH:function(t,e){},ffSu:function(t,e){},tvR6:function(t,e){},zCkA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b80358f1cdf3c15f998f.js.map