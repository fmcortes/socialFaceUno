"use strict";(self.webpackChunksocial_face=self.webpackChunksocial_face||[]).push([[691],{5691:(v,r,e)=>{e.r(r),e.d(r,{PostsModule:()=>m});var a=e(6895),i=e(2127),u=e(9841),t=e(4650),p=e(7178),l=e(5229);function g(s,P){if(1&s){const o=t.EpF();t.ynx(0),t.TgZ(1,"app-post-list",2),t.NdJ("currentPageEvent",function(){t.CHM(o);const c=t.oxw();return t.KtG(c.onCurrentPage())}),t.qZA(),t.BQk()}if(2&s){const o=P.ngIf,n=t.oxw();t.xp6(1),t.Q6J("postList",o.posts)("postTitle",n.slug)}}const h=[{path:"",component:(()=>{class s{constructor(o,n){this.postFacade=o,this.route=n,this.currentPage=0,this.slug="",this.data$=(0,u.a)({posts:this.postFacade.posts$})}ngOnInit(){this.route.params.subscribe(o=>{this.slug=o.slug,this.currentPage=0,this.slug&&this.getPostData(this.slug,this.currentPage)})}onCurrentPage(){this.slug&&(this.currentPage++,this.getPostData(this.slug,this.currentPage))}getPostData(o,n){this.postFacade.fetchPostsByTag(n,o)}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(p.T),t.Y36(i.gz))};static#s=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-posts"]],decls:4,vars:3,consts:[[1,"post-container"],[4,"ngIf"],[3,"postList","postTitle","currentPageEvent"]],template:function(n,c){1&n&&(t.TgZ(0,"main")(1,"div",0),t.YNc(2,g,2,2,"ng-container",1),t.ALo(3,"async"),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,c.data$)))},dependencies:[a.O5,l.c,a.Ov],styles:[".post-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:13px 5%}"]})}return s})()}];let d=(()=>{class s{static#t=this.\u0275fac=function(n){return new(n||s)};static#s=this.\u0275mod=t.oAB({type:s});static#n=this.\u0275inj=t.cJS({imports:[i.Bz.forChild(h),i.Bz]})}return s})();var f=e(4466);let m=(()=>{class s{static#t=this.\u0275fac=function(n){return new(n||s)};static#s=this.\u0275mod=t.oAB({type:s});static#n=this.\u0275inj=t.cJS({providers:[p.T],imports:[a.ez,d,f.m]})}return s})()}}]);