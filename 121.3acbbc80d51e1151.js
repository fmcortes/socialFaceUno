"use strict";(self.webpackChunksocial_face=self.webpackChunksocial_face||[]).push([[121],{4121:(q,M,r)=>{r.r(M),r.d(M,{HomeModule:()=>b});var T={};r.r(T),r.d(T,{createPostEffect:()=>D,getPostByTagdEffect:()=>Q,getPostByUserIdEffect:()=>X,getPostEffect:()=>R});var x={};r.r(x),r.d(x,{getPopularTagsEffect:()=>k});var y=r(6895),C=r(2127),E=r(9841),t=r(4650),U=r(7178),$=r(6271),g=r(2997);const f=(0,g.R7)({source:"tags",events:{"Get  tags":(0,g.uZ)(),"Get  tags success":(0,g.Ky)(),"Get  tags failure":(0,g.Ky)()}}),O=(0,g.Tz)({name:"tags",reducer:(0,g.Lq)({isLoading:!1,error:null,data:null},(0,g.on)(f.getTags,e=>({...e,isLoading:!0})),(0,g.on)(f.getTagsSuccess,(e,o)=>({...e,isLoading:!1,data:o.tags})),(0,g.on)(f.getTagsFailure,(e,o)=>({...e,isLoading:!1,error:o.error})))}),{selectData:A}=O;let Z=(()=>{class e{constructor(s){this.store=s}get tags$(){return this.store.select(A)}fetchTags(){this.store.dispatch(f.getTags())}static#t=this.\u0275fac=function(n){return new(n||e)(t.LFG(g.yh))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var G=r(5003),H=r(5229);const S=["*"];let K=(()=>{class e{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-panel"]],ngContentSelectors:S,decls:2,vars:0,consts:[[1,"panel-container"]],template:function(n,a){1&n&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},styles:[".panel-container[_ngcontent-%COMP%]{background:#fff;align-self:flex-start;padding:20px;border-radius:4px;color:#626262}"]})}return e})();const N=function(e){return["/home/posts",e]};function j(e,o){if(1&e&&(t.TgZ(0,"a",13),t._uU(1),t.qZA()),2&e){const s=o.$implicit;t.Q6J("routerLink",t.VKq(2,N,s.tag)),t.xp6(1),t.hij("#",s.tag,"")}}function z(e,o){if(1&e){const s=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"app-panel")(3,"div",3)(4,"h4"),t._uU(5,"Shorcuts"),t.qZA()(),t.TgZ(6,"div",4),t._UZ(7,"app-profile-picture",5),t.TgZ(8,"a",6),t._UZ(9,"img",7),t._uU(10,"Friends"),t.qZA(),t.TgZ(11,"a",6),t._UZ(12,"img",8),t._uU(13,"Groups"),t.qZA()()(),t.TgZ(14,"app-panel")(15,"div",3)(16,"h4"),t._uU(17,"Tags"),t.qZA()(),t.TgZ(18,"div",9),t.YNc(19,j,2,4,"a",10),t.qZA()()(),t.TgZ(20,"div",11)(21,"app-post-list",12),t.NdJ("currentPageEvent",function(){t.CHM(s);const a=t.oxw();return t.KtG(a.getPostData())}),t.qZA()()()}if(2&e){const s=o.ngIf;t.xp6(7),t.Q6J("userProfile",s.currentUser)("showProfileLink",!0),t.xp6(12),t.Q6J("ngForOf",s.tags),t.xp6(2),t.Q6J("postList",s.posts)}}const J=[{path:"",component:(()=>{class e{constructor(s,n,a){this.postFacade=s,this.authFacade=n,this.tagsFacade=a,this.currentPage=0,this.data$=(0,E.a)({posts:this.postFacade.posts$,currentUser:this.authFacade.currentUser$,tags:this.tagsFacade.tags$})}ngOnInit(){this.tagsFacade.fetchTags(),this.getPostData()}getPostData(){this.currentPage++,this.postFacade.fetchPosts(this.currentPage,!0)}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(U.T),t.Y36($.j),t.Y36(Z))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:2,vars:3,consts:[["class","home-container",4,"ngIf"],[1,"home-container"],[1,"home-left-sidebar"],[1,"home-side-bar-title"],[1,"home-imp-links"],[3,"userProfile","showProfileLink"],["href","#",1,"blue-link"],["src","assets/images/friends.png","alt",""],["src","assets/images/group.png","alt",""],[1,"home-tag-container"],["class","blue-link",3,"routerLink",4,"ngFor","ngForOf"],[1,"home-main-content"],[3,"postList","currentPageEvent"],[1,"blue-link",3,"routerLink"]],template:function(n,a){1&n&&(t.YNc(0,z,22,4,"div",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,a.data$))},dependencies:[y.sg,y.O5,C.rH,G.q,H.c,K,y.Ov],styles:[".home-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:13px 5%}@media screen and (max-width: 768px){.home-container[_ngcontent-%COMP%]{flex-direction:column;gap:.5rem}}.home-tag-container[_ngcontent-%COMP%]{display:flex;gap:.5rem;flex-wrap:wrap}.home-tag-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1rem}.home-left-sidebar[_ngcontent-%COMP%]{flex-basis:25%;position:sticky;display:flex;flex-direction:column;gap:.5rem;top:70px}@media screen and (max-width: 768px){.home-left-sidebar[_ngcontent-%COMP%]{flex-basis:100%;position:unset}}.home-main-content[_ngcontent-%COMP%]{flex-basis:72%}@media screen and (max-width: 768px){.home-main-content[_ngcontent-%COMP%]{flex-basis:100%}}.home-imp-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.home-imp-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px;margin-right:15px}"]})}return e})()}];let W=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#s=this.\u0275inj=t.cJS({imports:[C.Bz.forChild(J),C.Bz]})}return e})();var Y=r(4466),c=r(2655),l=r(4004),F=r(7601),L=r(529);let d=(()=>{class e{constructor(s){this.httpClient=s}getRandomNumber(s,n){return Math.floor(Math.random()*(n-s))+s}getPosts(s=1,n=!0,a=""){return this.httpClient.get(`https://fakefaceapi.onrender.com/posts?_page=${s}${n?`&author.username_ne=${a}`:`&author.username=${a}`}`).pipe((0,l.U)(p=>p.map(m=>{const V=this.getRandomNumber(10,0);return m.image=F.uW[V],m})))}getPostByUserId(s,n){return this.httpClient.get(`https://fakefaceapi.onrender.com/posts?_page=${s}&author.id=${n}`).pipe((0,l.U)(i=>i.map(p=>{const m=this.getRandomNumber(10,0);return p.image=F.uW[m],p})))}getPostByTag(s,n){return this.httpClient.get(`https://fakefaceapi.onrender.com/posts?_page=${s}&tagList_like=${n}`).pipe((0,l.U)(i=>i.map(p=>{const m=this.getRandomNumber(10,0);return p.image=F.uW[m],p})))}createPost(s){return this.httpClient.post("https://fakefaceapi.onrender.com/posts",s)}static#t=this.\u0275fac=function(n){return new(n||e)(t.LFG(L.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var h=r(3900),P=r(262),v=r(9646),u=r(2954);const R=(0,c.GW)((e=(0,t.f3M)(c.eX),o=(0,t.f3M)(d))=>e.pipe((0,c.l4)(u.r.getPosts),(0,h.w)(({request:s})=>{const{author:n,global:a,page:i}=s;return o.getPosts(i,a,n).pipe((0,l.U)(p=>u.r.getPostsSuccess({posts:p})),(0,P.K)(p=>(0,v.of)(u.r.getPostsFailure({errors:p.error}))))})),{functional:!0}),X=(0,c.GW)((e=(0,t.f3M)(c.eX),o=(0,t.f3M)(d))=>e.pipe((0,c.l4)(u.r.getPostsByUserId),(0,h.w)(({request:s})=>{const{userId:n,page:a}=s;return o.getPostByUserId(a,n).pipe((0,l.U)(i=>u.r.getPostsByUserIdSuccess({posts:i})),(0,P.K)(i=>(0,v.of)(u.r.getPostsByUserIdFailure({errors:i.error}))))})),{functional:!0}),Q=(0,c.GW)((e=(0,t.f3M)(c.eX),o=(0,t.f3M)(d))=>e.pipe((0,c.l4)(u.r.getPostsByTag),(0,h.w)(({request:s})=>{const{tag:n,page:a}=s;return o.getPostByTag(a,n).pipe((0,l.U)(i=>u.r.getPostsByTagSuccess({posts:i})),(0,P.K)(i=>(0,v.of)(u.r.getPostsByTagFailure({errors:i.error}))))})),{functional:!0}),D=(0,c.GW)((e=(0,t.f3M)(c.eX),o=(0,t.f3M)(d))=>e.pipe((0,c.l4)(u.r.createPosts),(0,h.w)(({request:s})=>o.createPost(s).pipe((0,l.U)(n=>u.r.createPostsSuccess({post:n})),(0,P.K)(n=>(0,v.of)(u.r.createPostsFailure({errors:n.error})))))),{functional:!0});let B=(()=>{class e{constructor(s){this.httpClient=s}getTags(){return this.httpClient.get("https://fakefaceapi.onrender.com/tagList")}static#t=this.\u0275fac=function(n){return new(n||e)(t.LFG(L.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();const k=(0,c.GW)((e=(0,t.f3M)(c.eX),o=(0,t.f3M)(B))=>e.pipe((0,c.l4)(f.getTags),(0,h.w)(()=>o.getTags().pipe((0,l.U)(s=>f.getTagsSuccess({tags:s})),(0,P.K)(s=>(0,v.of)(f.getTagsFailure(s.error)))))),{functional:!0});var w=r(1400);let b=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#s=this.\u0275inj=t.cJS({providers:[d,B,U.T,Z],imports:[y.ez,W,Y.m,g.Aw.forFeature(w.C3),g.Aw.forFeature(O),c.sQ.forFeature([T,x])]})}return e})()}}]);