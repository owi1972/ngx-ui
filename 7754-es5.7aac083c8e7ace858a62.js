!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkngx_ui=self.webpackChunkngx_ui||[]).push([[7754],{7754:function(e,i,l){"use strict";l.r(i),l.d(i,{SliderPageModule:function(){return U}});var t,r,u=l(8583),s=l(665),d=l(3547),a=l(9421),g=l(4330),o=l(3018),c=l(7402),p=[{path:"",component:(t=function e(){n(this,e),this.sliderValue=85,this.sliderValues="45,85"},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-slider-page"]],decls:133,vars:84,consts:[[1,"style-header"],[1,"shadow",3,"sectionTitle"],[3,"ngModel","step","filled","min","max","ngModelChange","change"],[3,"ngModel","step","showTicks","tickStep","filled","min","max","ngModelChange","change"],[3,"ngModel","step","showTicks","filled","min","max","ngModelChange","change"],[3,"ngModel","step","orientation","filled","min","max","ngModelChange","change"],[3,"ngModel","step","showTicks","tickStep","orientation","filled","min","max","ngModelChange","change"],[3,"ngModel","step","filled","min","orientation","max","ngModelChange","change"],[3,"ngModel","step","showTicks","filled","orientation","min","max","ngModelChange","change"],[3,"ngModel","multiple","step","filled","min","max","ngModelChange","change"],[3,"ngModel","multiple","orientation","step","filled","min","max","ngModelChange","change"],[3,"ngModel","multiple","disabled","step","filled","min","max","ngModelChange","change"],[3,"ngModel","multiple","disabled","orientation","step","filled","min","max","ngModelChange","change"]],template:function(n,e){1&n&&(o.TgZ(0,"h3",0),o._uU(1,"Slider"),o.qZA(),o._uU(2,"\n\n"),o.TgZ(3,"ngx-section",1),o._uU(4,"\n  "),o.TgZ(5,"ngx-slider",2),o.NdJ("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent1=n}),o._uU(6,"\n  "),o.qZA(),o._uU(7,"\n\n  "),o.TgZ(8,"app-prism"),o._uU(9,"\n"),o._uU(10,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent1 = $event">\n</ngx-slider>'),o._uU(11,"\n  "),o.qZA(),o._uU(12,"\n\n  "),o._UZ(13,"br"),o._uU(14,"\n\n  "),o.TgZ(15,"ngx-slider",3),o.NdJ("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent2=n}),o._uU(16,"\n  "),o.qZA(),o._uU(17,"\n\n  "),o.TgZ(18,"app-prism"),o._uU(19,"\n"),o._uU(20,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [showTicks]="true"\n  [tickStep]="25"\n  [filled]="true"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent2 = $event">\n</ngx-slider>'),o._uU(21,"\n  "),o.qZA(),o._uU(22,"\n\n  "),o._UZ(23,"br"),o._uU(24,"\n\n  "),o.TgZ(25,"ngx-slider",2),o.NdJ("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent3=n}),o._uU(26,"\n  "),o.qZA(),o._uU(27,"\n\n  "),o.TgZ(28,"app-prism"),o._uU(29,"\n"),o._uU(30,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="false"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent3 = $event">\n</ngx-slider>'),o._uU(31,"\n  "),o.qZA(),o._uU(32,"\n\n  "),o._UZ(33,"br"),o._uU(34,"\n\n  "),o.TgZ(35,"ngx-slider",4),o.NdJ("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent4=n}),o._uU(36,"\n  "),o.qZA(),o._uU(37,"\n\n  "),o.TgZ(38,"app-prism"),o._uU(39,"\n"),o._uU(40,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [showTicks]="true"\n  [filled]="false"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent4 = $event">\n</ngx-slider>'),o._uU(41,"\n  "),o.qZA(),o._uU(42,"\n"),o.qZA(),o._uU(43,"\n\n"),o.TgZ(44,"ngx-section",1),o._uU(45,"\n  "),o.TgZ(46,"ngx-slider",5),o.NdJ("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent5=n}),o._uU(47,"\n  "),o.qZA(),o._uU(48,"\n\n  "),o.TgZ(49,"app-prism"),o._uU(50,"\n"),o._uU(51,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="true"\n  [orientation]="\'vertical\'"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent5 = $event">\n</ngx-slider>'),o._uU(52,"\n  "),o.qZA(),o._uU(53,"\n\n  "),o._UZ(54,"br"),o._uU(55,"\n\n  "),o.TgZ(56,"ngx-slider",6),o.NdJ("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent6=n}),o._uU(57,"\n  "),o.qZA(),o._uU(58,"\n\n  "),o.TgZ(59,"app-prism"),o._uU(60,"\n"),o._uU(61,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [orientation]="\'vertical\'"\n  [showTicks]="true"\n  [tickStep]="25"\n  [filled]="true"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent6 = $event">\n</ngx-slider>'),o._uU(62,"\n  "),o.qZA(),o._uU(63,"\n\n  "),o._UZ(64,"br"),o._uU(65,"\n\n  "),o.TgZ(66,"ngx-slider",7),o.NdJ("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent7=n}),o._uU(67,"\n  "),o.qZA(),o._uU(68,"\n\n  "),o.TgZ(69,"app-prism"),o._uU(70,"\n"),o._uU(71,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="false"\n  [orientation]="\'vertical\'"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent7 = $event">\n</ngx-slider>'),o._uU(72,"\n  "),o.qZA(),o._uU(73,"\n\n  "),o._UZ(74,"br"),o._uU(75,"\n\n  "),o.TgZ(76,"ngx-slider",8),o.NdJ("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent8=n}),o._uU(77,"\n  "),o.qZA(),o._uU(78,"\n\n  "),o.TgZ(79,"app-prism"),o._uU(80,"\n"),o._uU(81,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [orientation]="\'vertical\'"\n  [step]="5"\n  [showTicks]="true"\n  [filled]="false"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent8 = $event">\n</ngx-slider>'),o._uU(82,"\n  "),o.qZA(),o._uU(83,"\n\n"),o.qZA(),o._uU(84,"\n\n"),o.TgZ(85,"ngx-section",1),o._uU(86,"\n  "),o.TgZ(87,"ngx-slider",9),o.NdJ("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent1=n}),o._uU(88,"\n  "),o.qZA(),o._uU(89,"\n\n  "),o.TgZ(90,"app-prism"),o._uU(91,"\n"),o._uU(92,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [multiple]="true"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent1 = $event">\n</ngx-slider>'),o._uU(93,"\n  "),o.qZA(),o._uU(94,"\n\n  "),o._UZ(95,"br"),o._uU(96,"\n\n  "),o.TgZ(97,"ngx-slider",10),o.NdJ("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent5=n}),o._uU(98,"\n  "),o.qZA(),o._uU(99,"\n\n  "),o.TgZ(100,"p"),o._uU(101),o.qZA(),o._uU(102,"\n\n  "),o.TgZ(103,"app-prism"),o._uU(104,"\n"),o._uU(105,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [multiple]="true"\n  [orientation]="\'vertical\'"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent5 = $event">\n</ngx-slider>'),o._uU(106,"\n  "),o.qZA(),o._uU(107,"\n\n"),o.qZA(),o._uU(108,"\n\n"),o.TgZ(109,"ngx-section",1),o._uU(110,"\n  "),o.TgZ(111,"ngx-slider",11),o.NdJ("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent1=n}),o._uU(112,"\n  "),o.qZA(),o._uU(113,"\n\n  "),o.TgZ(114,"app-prism"),o._uU(115,"\n"),o._uU(116,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [disabled]="true"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent1 = $event">\n</ngx-slider>'),o._uU(117,"\n  "),o.qZA(),o._uU(118,"\n\n  "),o._UZ(119,"br"),o._uU(120,"\n\n  "),o.TgZ(121,"ngx-slider",12),o.NdJ("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent5=n}),o._uU(122,"\n  "),o.qZA(),o._uU(123,"\n\n  "),o.TgZ(124,"p"),o._uU(125),o.qZA(),o._uU(126,"\n\n  "),o.TgZ(127,"app-prism"),o._uU(128,"\n"),o._uU(129,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [disabled]="true"\n  [orientation]="\'vertical\'"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent5 = $event">\n</ngx-slider>'),o._uU(130,"\n  "),o.qZA(),o._uU(131,"\n\n"),o.qZA(),o._uU(132,"\n")),2&n&&(o.xp6(3),o.Q6J("sectionTitle","Horizontal"),o.xp6(2),o.Q6J("ngModel",e.sliderValue)("step",5)("filled",!0)("min",10)("max",200),o.xp6(10),o.Q6J("ngModel",e.sliderValue)("step",5)("showTicks",!0)("tickStep",25)("filled",!0)("min",0)("max",100),o.xp6(10),o.Q6J("ngModel",e.sliderValue)("step",5)("filled",!1)("min",0)("max",100),o.xp6(10),o.Q6J("ngModel",e.sliderValue)("step",5)("showTicks",!0)("filled",!1)("min",0)("max",100),o.xp6(9),o.Q6J("sectionTitle","Vertical"),o.xp6(2),o.Q6J("ngModel",e.sliderValue)("step",5)("orientation","vertical")("filled",!0)("min",10)("max",200),o.xp6(10),o.Q6J("ngModel",e.sliderValue)("step",5)("showTicks",!0)("tickStep",25)("orientation","vertical")("filled",!0)("min",0)("max",100),o.xp6(10),o.Q6J("ngModel",e.sliderValue)("step",5)("filled",!1)("min",0)("orientation","vertical")("max",100),o.xp6(10),o.Q6J("ngModel",e.sliderValue)("step",5)("showTicks",!0)("filled",!1)("orientation","vertical")("min",0)("max",100),o.xp6(9),o.Q6J("sectionTitle","Range"),o.xp6(2),o.Q6J("ngModel",e.sliderValues)("multiple",!0)("step",5)("filled",!0)("min",10)("max",200),o.xp6(10),o.Q6J("ngModel",e.sliderValues)("multiple",!0)("orientation","vertical")("step",5)("filled",!0)("min",10)("max",200),o.xp6(4),o.hij("Slider Values: ",e.sliderValues,""),o.xp6(8),o.Q6J("sectionTitle","Disabled"),o.xp6(2),o.Q6J("ngModel",e.sliderValues)("multiple",!0)("disabled",!0)("step",5)("filled",!0)("min",10)("max",200),o.xp6(10),o.Q6J("ngModel",e.sliderValues)("multiple",!0)("disabled",!0)("orientation","vertical")("step",5)("filled",!0)("min",10)("max",200),o.xp6(4),o.hij("Slider Values: ",e.sliderValues,""))},directives:[d.e0w,d.Pi8,s.JJ,s.On,c.U],encapsulation:2,changeDetection:0}),t)}],_=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[g.Bz.forChild(p)],g.Bz]}),e}(),U=((r=function e(){n(this,e)}).\u0275fac=function(n){return new(n||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[u.ez,s.u5,a.F,d.HNi,d.JHo,_]]}),r)}}])}();