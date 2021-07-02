!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var u=e[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(n,u.key,u)}}(self.webpackChunkngx_ui=self.webpackChunkngx_ui||[]).push([[5858],{5858:function(t,u,o){"use strict";o.r(u),o.d(u,{PlusMenuPageModule:function(){return T}});var l,i,s=o(8583),c=o(3547),p=o(9421),m=o(4330),a=o(3018),r=o(7402),g=function(n,e){return[n,e]},U=function(n,e,t){return[n,e,t]},_=[{path:"",component:(l=function(){function t(){n(this,t),this.upload={title:"Upload a plugin",subtitle:"ctrl+alt+u",icon:"upload-outline-small"},this.uploadCustomColor={title:"Upload a plugin",subtitle:"ctrl+alt+u",icon:"upload-outline-small",color:"#CDD2DD"},this.create={title:"Create",subtitle:"ctrl+alt+n",icon:"add-circle-medium"},this.createCustomColor={title:"Create",subtitle:"ctrl+alt+n",icon:"add-circle-medium",color:"#01E1B9"},this.search={title:"Search",icon:"search"},this.searchCustomColor={title:"Search",subtitle:"ctrl+alt+f",icon:"search",color:"#E200B6"}}var u,o,l;return u=t,(o=[{key:"onClick",value:function(n){console.log(n)}}])&&e(u.prototype,o),l&&e(u,l),t}(),l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=a.Xpm({type:l,selectors:[["app-plus-menu-page"]],decls:161,vars:54,consts:[[1,"style-header"],["sectionTitle","Plus Menu - Right - Two Items",1,"shadow"],[1,"container-right"],[1,"my-class",3,"items","clickItem"],["sectionTitle","Plus Menu - Right - Three Items",1,"shadow"],["menuColor","#CDD2DD","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Bottom - Two Items",1,"shadow"],[1,"container-bottom"],["position","bottom","menuColor","#01E1B9","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Bottom - Three Items",1,"shadow"],["position","bottom","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Top - Two Items",1,"shadow"],[1,"container-top"],["position","top","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Top - Three Items",1,"shadow"],["sectionTitle","Plus Menu - Right - Two Items Custom Color",1,"shadow"],["sectionTitle","Plus Menu - Right - Three Items Custom Color",1,"shadow"],["menuColor","#01E1B9","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Bottom - Two Items Custom Color",1,"shadow"],["sectionTitle","Plus Menu - Bottom - Three Items Custom Colors",1,"shadow"],["sectionTitle","Plus Menu - Top - Two Items Custom Color",1,"shadow"],["sectionTitle","Plus Menu - Top - Three Items Custom Color",1,"shadow",2,"margin-bottom","300px"]],template:function(n,e){1&n&&(a.TgZ(0,"h3",0),a._uU(1,"Plus Menu"),a.qZA(),a._uU(2,"\n"),a.TgZ(3,"ngx-section",1),a._uU(4,"\n  "),a.TgZ(5,"div",2),a._uU(6,"\n    "),a.TgZ(7,"ngx-plus-menu",3),a.NdJ("clickItem",function(n){return e.onClick(n)}),a.qZA(),a._uU(8,"\n  "),a.qZA(),a._uU(9,"\n  "),a.TgZ(10,"app-prism"),a._uU(11,"\n    "),a._uU(12,'\n    <ngx-plus-menu\n      [items]="[upload, create]"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),a._uU(13,"\n  "),a.qZA(),a._uU(14,"\n"),a.qZA(),a._uU(15,"\n\n"),a.TgZ(16,"ngx-section",4),a._uU(17,"\n  "),a.TgZ(18,"div",2),a._uU(19,"\n    "),a.TgZ(20,"ngx-plus-menu",5),a.NdJ("clickItem",function(n){return e.onClick(n)}),a.qZA(),a._uU(21,"\n  "),a.qZA(),a._uU(22,"\n  "),a.TgZ(23,"app-prism"),a._uU(24,"\n    "),a._uU(25,'\n    <ngx-plus-menu\n      [items]="[upload, create, search]"\n      menuColor="#CDD2DD"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),a._uU(26,"\n  "),a.qZA(),a._uU(27,"\n"),a.qZA(),a._uU(28,"\n\n"),a.TgZ(29,"ngx-section",6),a._uU(30,"\n  "),a.TgZ(31,"div",7),a._uU(32,"\n    "),a.TgZ(33,"ngx-plus-menu",8),a.NdJ("clickItem",function(n){return e.onClick(n)}),a.qZA(),a._uU(34,"\n  "),a.qZA(),a._uU(35,"\n  "),a.TgZ(36,"app-prism"),a._uU(37,"\n    "),a._uU(38,'\n    <ngx-plus-menu\n      [items]="[upload, create]"\n      position="bottom"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),a._uU(39,"\n  "),a.qZA(),a._uU(40,"\n"),a.qZA(),a._uU(41,"\n\n"),a.TgZ(42,"ngx-section",9),a._uU(43,"\n  "),a.TgZ(44,"div",7),a._uU(45,"\n    "),a.TgZ(46,"ngx-plus-menu",10),a.NdJ("clickItem",function(n){return e.onClick(n)}),a.qZA(),a._uU(47,"\n  "),a.qZA(),a._uU(48,"\n  "),a.TgZ(49,"app-prism"),a._uU(50,"\n    "),a._uU(51,'\n    <ngx-plus-menu\n      [items]="[upload, create, search]"\n      position="bottom"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),a._uU(52,"\n  "),a.qZA(),a._uU(53,"\n"),a.qZA(),a._uU(54,"\n\n"),a.TgZ(55,"ngx-section",11),a._uU(56,"\n  "),a.TgZ(57,"div",12),a._uU(58,"\n    "),a.TgZ(59,"ngx-plus-menu",13),a.NdJ("clickItem",function(n){return e.onClick(n)}),a.qZA(),a._uU(60,"\n  "),a.qZA(),a._uU(61,"\n  "),a.TgZ(62,"app-prism"),a._uU(63,"\n    "),a._uU(64,'\n    <ngx-plus-menu\n      [items]="[upload, create]"\n      position="top"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),a._uU(65,"\n  "),a.qZA(),a._uU(66,"\n"),a.qZA(),a._uU(67,"\n\n"),a.TgZ(68,"ngx-section",14),a._uU(69,"\n  "),a.TgZ(70,"div",12),a._uU(71,"\n    "),a.TgZ(72,"ngx-plus-menu",13),a.NdJ("clickItem",function(n){return e.onClick(n)}),a.qZA(),a._uU(73,"\n  "),a.qZA(),a._uU(74,"\n  "),a.TgZ(75,"app-prism"),a._uU(76,"\n    "),a._uU(77,'\n    <ngx-plus-menu\n      [items]="[upload, create, search]"\n      position="top"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),a._uU(78,"\n  "),a.qZA(),a._uU(79,"\n"),a.qZA(),a._uU(80,"\n\n"),a.TgZ(81,"h3"),a._uU(82," Menu Items with Custom Colors "),a.qZA(),a._uU(83,"\n\n"),a.TgZ(84,"ngx-section",15),a._uU(85,"\n  "),a.TgZ(86,"div",2),a._uU(87,"\n    "),a.TgZ(88,"ngx-plus-menu",3),a.NdJ("clickItem",function(n){return e.onClick(n)}),a.qZA(),a._uU(89,"\n  "),a.qZA(),a._uU(90,"\n  "),a.TgZ(91,"app-prism"),a._uU(92,"\n    "),a._uU(93,'\n    <ngx-plus-menu\n      [items]="[upload, createCustomColor]"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),a._uU(94,"\n  "),a.qZA(),a._uU(95,"\n"),a.qZA(),a._uU(96,"\n\n"),a.TgZ(97,"ngx-section",16),a._uU(98,"\n  "),a.TgZ(99,"div",2),a._uU(100,"\n    "),a.TgZ(101,"ngx-plus-menu",17),a.NdJ("clickItem",function(n){return e.onClick(n)}),a.qZA(),a._uU(102,"\n  "),a.qZA(),a._uU(103,"\n  "),a.TgZ(104,"app-prism"),a._uU(105,"\n    "),a._uU(106,'\n    <ngx-plus-menu\n      [items]="[upload, create, searchCustomColor]"\n      menuColor="#01E1B9"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),a._uU(107,"\n  "),a.qZA(),a._uU(108,"\n"),a.qZA(),a._uU(109,"\n\n"),a.TgZ(110,"ngx-section",18),a._uU(111,"\n  "),a.TgZ(112,"div",7),a._uU(113,"\n    "),a.TgZ(114,"ngx-plus-menu",8),a.NdJ("clickItem",function(n){return e.onClick(n)}),a.qZA(),a._uU(115,"\n  "),a.qZA(),a._uU(116,"\n  "),a.TgZ(117,"app-prism"),a._uU(118,"\n    "),a._uU(119,'\n    <ngx-plus-menu\n      [items]="[uploadCustomColor, create]"\n      position="bottom"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),a._uU(120,"\n  "),a.qZA(),a._uU(121,"\n"),a.qZA(),a._uU(122,"\n\n"),a.TgZ(123,"ngx-section",19),a._uU(124,"\n  "),a.TgZ(125,"div",7),a._uU(126,"\n    "),a.TgZ(127,"ngx-plus-menu",10),a.NdJ("clickItem",function(n){return e.onClick(n)}),a.qZA(),a._uU(128,"\n  "),a.qZA(),a._uU(129,"\n  "),a.TgZ(130,"app-prism"),a._uU(131,"\n    "),a._uU(132,'\n    <ngx-plus-menu\n      [items]="[uploadCustomColor, create, searchCustomColor]"\n      position="bottom"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),a._uU(133,"\n  "),a.qZA(),a._uU(134,"\n"),a.qZA(),a._uU(135,"\n\n"),a.TgZ(136,"ngx-section",20),a._uU(137,"\n  "),a.TgZ(138,"div",12),a._uU(139,"\n    "),a.TgZ(140,"ngx-plus-menu",13),a.NdJ("clickItem",function(n){return e.onClick(n)}),a.qZA(),a._uU(141,"\n  "),a.qZA(),a._uU(142,"\n  "),a.TgZ(143,"app-prism"),a._uU(144,"\n    "),a._uU(145,'\n    <ngx-plus-menu\n      [items]="[upload, createCustomColor]"\n      position="top"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),a._uU(146,"\n  "),a.qZA(),a._uU(147,"\n"),a.qZA(),a._uU(148,"\n\n"),a.TgZ(149,"ngx-section",21),a._uU(150,"\n  "),a.TgZ(151,"div",12),a._uU(152,"\n    "),a.TgZ(153,"ngx-plus-menu",13),a.NdJ("clickItem",function(n){return e.onClick(n)}),a.qZA(),a._uU(154,"\n  "),a.qZA(),a._uU(155,"\n  "),a.TgZ(156,"app-prism"),a._uU(157,"\n    "),a._uU(158,'\n    <ngx-plus-menu\n      [items]="[uploadCustomColor, createCustomColor, searchCustomColor]"\n      position="top"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),a._uU(159,"\n  "),a.qZA(),a._uU(160,"\n"),a.qZA()),2&n&&(a.xp6(7),a.Q6J("items",a.WLB(12,g,e.upload,e.create)),a.xp6(13),a.Q6J("items",a.kEZ(15,U,e.upload,e.create,e.search)),a.xp6(13),a.Q6J("items",a.WLB(19,g,e.upload,e.create)),a.xp6(13),a.Q6J("items",a.kEZ(22,U,e.upload,e.create,e.search)),a.xp6(13),a.Q6J("items",a.WLB(26,g,e.upload,e.create)),a.xp6(13),a.Q6J("items",a.kEZ(29,U,e.upload,e.create,e.search)),a.xp6(16),a.Q6J("items",a.WLB(33,g,e.upload,e.createCustomColor)),a.xp6(13),a.Q6J("items",a.kEZ(36,U,e.upload,e.create,e.searchCustomColor)),a.xp6(13),a.Q6J("items",a.WLB(40,g,e.uploadCustomColor,e.create)),a.xp6(13),a.Q6J("items",a.kEZ(43,U,e.uploadCustomColor,e.create,e.searchCustomColor)),a.xp6(13),a.Q6J("items",a.WLB(47,g,e.upload,e.createCustomColor)),a.xp6(13),a.Q6J("items",a.kEZ(50,U,e.uploadCustomColor,e.createCustomColor,e.searchCustomColor)))},directives:[c.e0w,c.e2L,r.U],styles:["app-plus-menu-page .container-bottom,app-plus-menu-page .container-right,app-plus-menu-page .container-top{position:relative}app-plus-menu-page .container-bottom ngx-plus-menu,app-plus-menu-page .container-right ngx-plus-menu,app-plus-menu-page .container-top ngx-plus-menu{position:absolute}app-plus-menu-page app-prism{margin-top:30px;display:block}app-plus-menu-page .container-right ngx-plus-menu{top:-20px;right:0}app-plus-menu-page .container-bottom{display:flex;justify-content:center}app-plus-menu-page .container-bottom ngx-plus-menu{bottom:-10px}app-plus-menu-page .container-top{display:flex;justify-content:center}app-plus-menu-page .container-top ngx-plus-menu{top:-20px}"],encapsulation:2,changeDetection:0}),l)}],Z=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[m.Bz.forChild(_)],m.Bz]}),e}(),T=((i=function e(){n(this,e)}).\u0275fac=function(n){return new(n||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[[s.ez,p.F,c.HNi,c.Q5Q,Z]]}),i)}}])}();