(self.webpackChunkngx_ui=self.webpackChunkngx_ui||[]).push([[2622],{2622:function(n,i,e){"use strict";e.r(i),e.d(i,{AnimationsPageModule:function(){return b}});var t=e(8583),u=e(3547),d=e(9421),s=e(4330),o=e(7238),l=e(3018),c=e(7402);function U(n,i){1&n&&(l.TgZ(0,"div",4),l._uU(1,"Fade In"),l.qZA()),2&n&&l.Q6J("@fadeIn",void 0)}function g(n,i){1&n&&(l.TgZ(0,"div",4),l._uU(1,"Fade Out"),l.qZA()),2&n&&l.Q6J("@fadeOut",void 0)}function _(n,i){1&n&&(l.TgZ(0,"div",4),l._uU(1,"Slide Down Fade Out"),l.qZA()),2&n&&l.Q6J("@slideDownFadeOut",void 0)}function a(n,i){1&n&&(l.TgZ(0,"div",4),l._uU(1,"Slide Up Fade Out"),l.qZA()),2&n&&l.Q6J("@slideUpFadeOut",void 0)}function Z(n,i){1&n&&(l.TgZ(0,"div",4),l._uU(1,"Slide Left"),l.qZA()),2&n&&l.Q6J("@slideLeft",void 0)}function p(n,i){1&n&&(l.TgZ(0,"div",4),l._uU(1,"Slide Right"),l.qZA()),2&n&&l.Q6J("@slideRight",void 0)}function f(n,i){1&n&&(l.TgZ(0,"div",4),l._uU(1,"Slide Top"),l.qZA()),2&n&&l.Q6J("@slideTop",void 0)}function r(n,i){1&n&&(l.TgZ(0,"div",4),l._uU(1,"Slide Bottom"),l.qZA()),2&n&&l.Q6J("@slideBottom",void 0)}const v=[{path:"",component:(()=>{class n{constructor(){this.count=0,this.visible={fadeIn:!0,fadeOut:!0,slideDownFadeOut:!0,slideUpFadeOut:!0,slideLeft:!0,slideRight:!0,slideTop:!0,slideBottom:!0}}increaseCount(){this.count++}toggle(n){this.visible[n]=!this.visible[n]}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-animations-page"]],decls:142,vars:9,consts:[[1,"inputs-section"],[1,"style-header"],["sectionTitle","Bounce",1,"shadow"],[1,"btn",3,"click"],[1,"badge"],["sectionTitle","Fade In",1,"shadow"],["class","badge",4,"ngIf"],["sectionTitle","Fade Out",1,"shadow"],["sectionTitle","Slide Down Fade Out",1,"shadow"],["sectionTitle","Slide Up Fade Out",1,"shadow"],["sectionTitle","Slide Left",1,"shadow"],["sectionTitle","Slide Right",1,"shadow"],["sectionTitle","Slide Top",1,"shadow"],["sectionTitle","Slide Bottom",1,"shadow"]],template:function(n,i){1&n&&(l.TgZ(0,"div",0),l._uU(1,"\n  "),l.TgZ(2,"h3",1),l._uU(3,"Animations"),l.qZA(),l._uU(4,"\n\n  "),l.TgZ(5,"ngx-section",2),l._uU(6,"\n    "),l.TgZ(7,"ngx-button",3),l.NdJ("click",function(){return i.increaseCount()}),l._uU(8,"Click Me"),l.qZA(),l._uU(9,"\n    "),l.TgZ(10,"div",4),l._uU(11,"Bounce"),l.qZA(),l._uU(12,"\n\n    "),l._UZ(13,"br"),l._uU(14,"\n    "),l.TgZ(15,"app-prism"),l._uU(16,"\n"),l._uU(17,'<ngx-button class="btn" (click)="increaseCount()">Click Me</ngx-button>\n<div class="badge" [@bounce]="count">Bounce</div>'),l._uU(18,"\n    "),l.qZA(),l._uU(19,"\n  "),l.qZA(),l._uU(20,"\n\n  "),l.TgZ(21,"ngx-section",5),l._uU(22,"\n    "),l.TgZ(23,"ngx-button",3),l.NdJ("click",function(){return i.toggle("fadeIn")}),l._uU(24,"Click Me"),l.qZA(),l._uU(25,"\n    "),l.YNc(26,U,2,1,"div",6),l._uU(27,"\n\n    "),l._UZ(28,"br"),l._uU(29,"\n    "),l.TgZ(30,"app-prism"),l._uU(31,"\n"),l._uU(32,'<div class="badge" *ngIf="visible.fadeIn" @fadeIn>Fade In</div>'),l._uU(33,"\n    "),l.qZA(),l._uU(34,"\n  "),l.qZA(),l._uU(35,"\n\n  "),l.TgZ(36,"ngx-section",7),l._uU(37,"\n    "),l.TgZ(38,"ngx-button",3),l.NdJ("click",function(){return i.toggle("fadeOut")}),l._uU(39,"Click Me"),l.qZA(),l._uU(40,"\n    "),l.YNc(41,g,2,1,"div",6),l._uU(42,"\n\n    "),l._UZ(43,"br"),l._uU(44,"\n    "),l.TgZ(45,"app-prism"),l._uU(46,"\n"),l._uU(47,'<div class="badge" *ngIf="visible.fadeOut" @fadeOut>Fade Out</div>'),l._uU(48,"\n    "),l.qZA(),l._uU(49,"\n  "),l.qZA(),l._uU(50,"\n\n  "),l.TgZ(51,"ngx-section",8),l._uU(52,"\n    "),l.TgZ(53,"ngx-button",3),l.NdJ("click",function(){return i.toggle("slideDownFadeOut")}),l._uU(54,"Click Me"),l.qZA(),l._uU(55,"\n    "),l.YNc(56,_,2,1,"div",6),l._uU(57,"\n\n    "),l._UZ(58,"br"),l._uU(59,"\n    "),l.TgZ(60,"app-prism"),l._uU(61,"\n"),l._uU(62,'<div class="badge" *ngIf="visible.slideDownFadeOut" @slideDownFadeOut>Slide Down Fade Out</div>'),l._uU(63,"\n    "),l.qZA(),l._uU(64,"\n  "),l.qZA(),l._uU(65,"\n\n  "),l.TgZ(66,"ngx-section",9),l._uU(67,"\n    "),l.TgZ(68,"ngx-button",3),l.NdJ("click",function(){return i.toggle("slideUpFadeOut")}),l._uU(69,"Click Me"),l.qZA(),l._uU(70,"\n    "),l.YNc(71,a,2,1,"div",6),l._uU(72,"\n\n    "),l._UZ(73,"br"),l._uU(74,"\n    "),l.TgZ(75,"app-prism"),l._uU(76,"\n"),l._uU(77,'<div class="badge" *ngIf="visible.slideUpFadeOut" @slideUpFadeOut>Slide Up Fade Out</div>'),l._uU(78,"\n    "),l.qZA(),l._uU(79,"\n  "),l.qZA(),l._uU(80,"\n\n  "),l.TgZ(81,"ngx-section",10),l._uU(82,"\n    "),l.TgZ(83,"ngx-button",3),l.NdJ("click",function(){return i.toggle("slideLeft")}),l._uU(84,"Click Me"),l.qZA(),l._uU(85,"\n    "),l.YNc(86,Z,2,1,"div",6),l._uU(87,"\n\n    "),l._UZ(88,"br"),l._uU(89,"\n    "),l.TgZ(90,"app-prism"),l._uU(91,"\n"),l._uU(92,'<div class="badge" *ngIf="visible.slideLeft" @slideLeft>Slide Left</div>'),l._uU(93,"\n    "),l.qZA(),l._uU(94,"\n  "),l.qZA(),l._uU(95,"\n\n  "),l.TgZ(96,"ngx-section",11),l._uU(97,"\n    "),l.TgZ(98,"ngx-button",3),l.NdJ("click",function(){return i.toggle("slideRight")}),l._uU(99,"Click Me"),l.qZA(),l._uU(100,"\n    "),l.YNc(101,p,2,1,"div",6),l._uU(102,"\n\n    "),l._UZ(103,"br"),l._uU(104,"\n    "),l.TgZ(105,"app-prism"),l._uU(106,"\n"),l._uU(107,'<div class="badge" *ngIf="visible.slideRight" @slideRight>Slide Right</div>'),l._uU(108,"\n    "),l.qZA(),l._uU(109,"\n  "),l.qZA(),l._uU(110,"\n\n  "),l.TgZ(111,"ngx-section",12),l._uU(112,"\n    "),l.TgZ(113,"ngx-button",3),l.NdJ("click",function(){return i.toggle("slideTop")}),l._uU(114,"Click Me"),l.qZA(),l._uU(115,"\n    "),l.YNc(116,f,2,1,"div",6),l._uU(117,"\n\n    "),l._UZ(118,"br"),l._uU(119,"\n    "),l.TgZ(120,"app-prism"),l._uU(121,"\n"),l._uU(122,'<div class="badge" *ngIf="visible.slideTop" @slideTop>Slide Top</div>'),l._uU(123,"\n    "),l.qZA(),l._uU(124,"\n  "),l.qZA(),l._uU(125,"\n\n  "),l.TgZ(126,"ngx-section",13),l._uU(127,"\n    "),l.TgZ(128,"ngx-button",3),l.NdJ("click",function(){return i.toggle("slideBottom")}),l._uU(129,"Click Me"),l.qZA(),l._uU(130,"\n    "),l.YNc(131,r,2,1,"div",6),l._uU(132,"\n\n    "),l._UZ(133,"br"),l._uU(134,"\n    "),l.TgZ(135,"app-prism"),l._uU(136,"\n"),l._uU(137,'<div class="badge" *ngIf="visible.slideBottom" @slideBottom>Slide Bottom</div>'),l._uU(138,"\n    "),l.qZA(),l._uU(139,"\n  "),l.qZA(),l._uU(140,"\n"),l.qZA(),l._uU(141,"\n")),2&n&&(l.xp6(10),l.Q6J("@bounce",i.count),l.xp6(16),l.Q6J("ngIf",i.visible.fadeIn),l.xp6(15),l.Q6J("ngIf",i.visible.fadeOut),l.xp6(15),l.Q6J("ngIf",i.visible.slideDownFadeOut),l.xp6(15),l.Q6J("ngIf",i.visible.slideUpFadeOut),l.xp6(15),l.Q6J("ngIf",i.visible.slideLeft),l.xp6(15),l.Q6J("ngIf",i.visible.slideRight),l.xp6(15),l.Q6J("ngIf",i.visible.slideTop),l.xp6(15),l.Q6J("ngIf",i.visible.slideBottom))},directives:[u.e0w,u.r0F,c.U,t.O5],encapsulation:2,data:{animation:[(0,o.X$)("bounce",(0,u.Amg)()),(0,o.X$)("fadeIn",(0,u.BX9)()),(0,o.X$)("fadeOut",(0,u.SEG)()),(0,o.X$)("slideDownFadeOut",(0,u.aVN)()),(0,o.X$)("slideUpFadeOut",(0,u.C8I)()),(0,o.X$)("slideLeft",(0,u.Tzi)()),(0,o.X$)("slideRight",(0,u.mfY)()),(0,o.X$)("slideTop",(0,u.hHM)(250)),(0,o.X$)("slideBottom",(0,u.nwi)(250))]},changeDetection:0}),n})()}];let T=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[s.Bz.forChild(v)],s.Bz]}),n})(),b=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[t.ez,d.F,u.HNi,u.hJ1,T]]}),n})()}}]);