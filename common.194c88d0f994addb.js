"use strict";(self.webpackChunksocial_face=self.webpackChunksocial_face||[]).push([[592],{3772:(P,c,o)=>{o.d(c,{q:()=>r});var s=o(4650);let r=(()=>{class i{constructor(){this.backendErrors="",this.clearErrors=new s.vpe}onClose(){this.clearErrors.emit()}static#s=this.\u0275fac=function(m){return new(m||i)};static#t=this.\u0275cmp=s.Xpm({type:i,selectors:[["app-error"]],inputs:{backendErrors:"backendErrors"},outputs:{clearErrors:"clearErrors"},decls:8,vars:1,consts:[[1,"error-container"],[1,"error-header-container"],[1,"error-header"],[1,"error-button",3,"click"],[1,"error-message"]],template:function(m,_){1&m&&(s.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),s._uU(3,"Error"),s.qZA(),s.TgZ(4,"button",3),s.NdJ("click",function(){return _.onClose()}),s._uU(5,"X"),s.qZA()(),s.TgZ(6,"p",4),s._uU(7),s.qZA()()),2&m&&(s.xp6(7),s.Oqu(_.backendErrors))},styles:[".error-container[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem;padding:1rem;background:#f44336;display:flex;flex-direction:column;align-items:flex-start;gap:1rem}.error-header-container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.error-button[_ngcontent-%COMP%]{background-color:#f44336;cursor:pointer;border-radius:.5px;color:#fff;outline:none;border:none}.error-button[_ngcontent-%COMP%]:hover{border:solid 1px #fff}.error-header[_ngcontent-%COMP%]{color:#fff;font-size:1.5rem}.error-message[_ngcontent-%COMP%]{list-style:none;color:#fff;font-size:1rem;padding-bottom:.5rem}"]})}return i})()},5229:(P,c,o)=>{o.d(c,{c:()=>e});var s=o(4650),r=o(6895),i=o(3401),d=o(2127),l=o(5003);const m=function(t){return["/home/posts",t]};function _(t,f){if(1&t&&(s.TgZ(0,"a",10),s._uU(1),s.qZA()),2&t){const p=f.$implicit;s.Q6J("routerLink",s.VKq(2,m,p)),s.xp6(1),s.hij("#",p,"")}}let u=(()=>{class t{static#s=this.\u0275fac=function(g){return new(g||t)};static#t=this.\u0275cmp=s.Xpm({type:t,selectors:[["app-post-item"]],inputs:{post:"post"},decls:18,vars:9,consts:[[1,"post-container"],[1,"post-row"],[3,"userProfile"],[1,"post-title"],[1,"post-text"],[1,"post-tag-container"],["class","post-tag",3,"routerLink",4,"ngFor","ngForOf"],["alt","",1,"post-img",3,"src"],[1,"activity-icons"],["src","assets/images/like-blue.png","alt",""],[1,"post-tag",3,"routerLink"]],template:function(g,n){1&g&&(s.TgZ(0,"div",0)(1,"div",1),s._UZ(2,"app-profile-picture",2),s.qZA(),s.TgZ(3,"h2",3),s._uU(4),s.qZA(),s.TgZ(5,"span"),s._uU(6),s.ALo(7,"date"),s.qZA(),s.TgZ(8,"p",4),s._uU(9),s.qZA(),s.TgZ(10,"div",5),s.YNc(11,_,2,4,"a",6),s.qZA(),s._UZ(12,"img",7),s.TgZ(13,"div",1)(14,"div",8)(15,"div"),s._UZ(16,"img",9),s._uU(17),s.qZA()()()()),2&g&&(s.xp6(2),s.Q6J("userProfile",null==n.post?null:n.post.author),s.xp6(2),s.Oqu(null==n.post?null:n.post.title),s.xp6(2),s.Oqu(s.lcZ(7,7,null==n.post?null:n.post.createdAt)),s.xp6(3),s.hij(" ",null==n.post?null:n.post.body," "),s.xp6(2),s.Q6J("ngForOf",null==n.post?null:n.post.tagList),s.xp6(1),s.Q6J("src",null==n.post?null:n.post.image,s.LSH),s.xp6(5),s.hij("",null==n.post?null:n.post.favoritesCount," "))},dependencies:[r.sg,d.rH,l.q,r.uU],styles:[".post-container[_ngcontent-%COMP%]{width:100%;background:#fff;border-radius:6px;padding:20px;color:#626262;display:flex;flex-direction:column;gap:.5rem}.post-title[_ngcontent-%COMP%]{color:#1876f2}.post-text[_ngcontent-%COMP%]{color:#000;margin:15px 0;font-size:1rem}.post-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#626262;font-weight:500}.post-tag-container[_ngcontent-%COMP%]{display:flex;gap:.5rem;align-items:center;flex-wrap:wrap}.post-tag[_ngcontent-%COMP%]{color:#1876f2;text-decoration:none}.post-img[_ngcontent-%COMP%]{width:100%;border-radius:4px;margin-bottom:5px}.post-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}"]})}return t})();function h(t,f){if(1&t&&(s.TgZ(0,"li",3),s._UZ(1,"app-post-item",4),s.qZA()),2&t){const p=f.$implicit;s.xp6(1),s.Q6J("post",p)}}function a(t,f){if(1&t){const p=s.EpF();s.ynx(0),s.TgZ(1,"ul",1),s.NdJ("scrolled",function(){s.CHM(p);const n=s.oxw();return s.KtG(n.onScrollDown())}),s.YNc(2,h,2,1,"li",2),s.qZA(),s.BQk()}if(2&t){const p=s.oxw();s.xp6(2),s.Q6J("ngForOf",p.postList)}}let e=(()=>{class t{constructor(){this.currentPageEvent=new s.vpe,this.postList=[]}onScrollDown(){this.currentPageEvent.emit()}static#s=this.\u0275fac=function(g){return new(g||t)};static#t=this.\u0275cmp=s.Xpm({type:t,selectors:[["app-post-list"]],inputs:{postList:"postList"},outputs:{currentPageEvent:"currentPageEvent"},decls:1,vars:1,consts:[[4,"ngIf"],["infinite-scroll","",1,"post-list",3,"scrolled"],["class","post-list-item",4,"ngFor","ngForOf"],[1,"post-list-item"],[3,"post"]],template:function(g,n){1&g&&s.YNc(0,a,3,1,"ng-container",0),2&g&&s.Q6J("ngIf",n.postList)},dependencies:[r.sg,r.O5,i.Ry,u],styles:[".post-list[_ngcontent-%COMP%]{list-style:none;width:100%}.post-list-item[_ngcontent-%COMP%]{margin-bottom:20px}"]})}return t})()},2954:(P,c,o)=>{o.d(c,{r:()=>r});var s=o(2997);const r=(0,s.R7)({source:"posts",events:{"Get posts":(0,s.Ky)(),"Get posts success":(0,s.Ky)(),"Get posts failure":(0,s.Ky)(),"Get posts by user id":(0,s.Ky)(),"Get posts by user id success":(0,s.Ky)(),"Get posts  by user id failure":(0,s.Ky)(),"Get posts by tag":(0,s.Ky)(),"Get posts by tag success":(0,s.Ky)(),"Get posts  by tag failure":(0,s.Ky)(),"Create posts":(0,s.Ky)(),"Create posts success":(0,s.Ky)(),"Create posts failure":(0,s.Ky)()}})},7178:(P,c,o)=>{o.d(c,{T:()=>_});var s=o(2954),r=o(9300),i=o(1400),d=o(8469),l=o(4650),m=o(2997);let _=(()=>{class u{constructor(a){this.store=a,this.currentUser=this.store.select(d.HF)}get posts$(){return this.store.select(i.el)}fetchPosts(a,e){this.currentUser.pipe((0,r.h)(t=>null!=t)).subscribe(t=>{t&&this.store.dispatch(s.r.getPosts({request:{page:a,global:e,author:`${t.firstname} ${t.lastname}`}}))})}fetchPostsByUserId(a,e){this.store.dispatch(s.r.getPostsByUserId({request:{userId:e,page:a}}))}fetchPostsByTag(a,e){this.store.dispatch(s.r.getPostsByTag({request:{tag:e,page:a}}))}createPost(a){this.store.dispatch(s.r.createPosts({request:a}))}static#s=this.\u0275fac=function(e){return new(e||u)(l.LFG(m.yh))};static#t=this.\u0275prov=l.Yz7({token:u,factory:u.\u0275fac})}return u})()},1400:(P,c,o)=>{o.d(c,{C3:()=>l,el:()=>h});var s=o(2997),r=o(2954),i=o(6943);const d={isLoading:!1,error:null,data:[]},l=(0,s.Tz)({name:"post",reducer:(0,s.Lq)(d,(0,s.on)(r.r.getPosts,e=>({...e,isLoading:!0})),(0,s.on)(r.r.getPostsSuccess,(e,t)=>({...e,isLoading:!1,data:[...e.data,...t.posts]})),(0,s.on)(r.r.getPostsFailure,(e,t)=>({...e,isLoading:!1,data:[],error:t.errors})),(0,s.on)(r.r.getPostsByUserId,e=>({...e,isLoading:!0})),(0,s.on)(r.r.getPostsByUserIdSuccess,(e,t)=>({...e,isLoading:!1,data:[...e.data,...t.posts]})),(0,s.on)(r.r.getPostsByUserIdFailure,(e,t)=>({...e,isLoading:!1,data:[],error:t.errors})),(0,s.on)(r.r.getPostsByTag,e=>({...e,isLoading:!0})),(0,s.on)(r.r.getPostsByTagSuccess,(e,t)=>({...e,isLoading:!1,data:[...e.data,...t.posts]})),(0,s.on)(r.r.getPostsByTagFailure,(e,t)=>({...e,isLoading:!1,data:[],error:t.errors})),(0,s.on)(r.r.createPosts,e=>({...e,isLoading:!0})),(0,s.on)(r.r.createPostsSuccess,(e,t)=>({...e,isLoading:!1,data:[t.post,...e.data]})),(0,s.on)(r.r.createPostsFailure,(e,t)=>({...e,isLoading:!1,data:[],error:t.errors})),(0,s.on)(i.tr,()=>d))}),{selectData:h}=l},7601:(P,c,o)=>{o.d(c,{C_:()=>i,e3:()=>d,hv:()=>r,uW:()=>s});const s=["assets/images/feed-image-1.png","assets/images/feed-image-2.png","assets/images/feed-image-3.png","assets/images/feed-image-4.png","assets/images/feed-image-5.png","assets/images/feed-image-6.png","assets/images/feed-image-7.png","/assets/images/feed-image-8.png","assets/images/feed-image-9.png","assets/images/feed-image-10.png","assets/images/feed-image-11.png"],r=["assets/images/member-1.png","assets/images/member-2.png","assets/images/member-3.png","assets/images/member-4.png","assets/images/member-5.png","assets/images/member-6.png","assets/images/member-7.png","assets/images/member-8.png","assets/images/member-9.png","assets/images/member-10.png"],i=["assets/images/photo1.png","assets/images/photo2.png","assets/images/photo3.png","assets/images/photo4.png","assets/images/photo5.png","assets/images/photo6.png"],d=["assets/images/cover-1.jpg","assets/images/cover-2.jpg","assets/images/cover-3.jpg","assets/images/cover-4.jpg","assets/images/cover-5.jpg","assets/images/cover-6.jpg","assets/images/cover-7.jpg","assets/images/cover-8.jpg"]}}]);