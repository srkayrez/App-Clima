(self.webpackChunkMonitoramento_APP=self.webpackChunkMonitoramento_APP||[]).push([[3831],{3831:(t,o,e)=>{"use strict";e.r(o),e.d(o,{Tab3PageModule:()=>A});var n=e(3083),a=e(649),i=e(8583),s=e(665),r=e(4762),d=e(1091),c=e(639),l=e(8720);function Z(t,o){if(1&t&&(c.TgZ(0,"div"),c.TgZ(1,"ion-card",17),c.TgZ(2,"ion-card-content"),c.TgZ(3,"p"),c.TgZ(4,"span",18),c._uU(5," pin_drop "),c.qZA(),c._UZ(6,"br"),c.TgZ(7,"b"),c._uU(8),c.qZA(),c.qZA(),c.TgZ(9,"p"),c._uU(10),c.qZA(),c.TgZ(11,"p"),c._uU(12),c.qZA(),c.qZA(),c.qZA(),c.TgZ(13,"ion-card",17),c.TgZ(14,"ion-card-content"),c.TgZ(15,"p"),c.TgZ(16,"span",18),c._uU(17," schedule "),c.qZA(),c.TgZ(18,"b",19),c.TgZ(19,"p"),c._uU(20),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(21,"ion-card",17),c.TgZ(22,"ion-card-content"),c.TgZ(23,"p"),c.TgZ(24,"span",18),c._uU(25," Public "),c.qZA(),c.TgZ(26,"b",19),c.TgZ(27,"p"),c._uU(28),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(29,"ion-card",17),c.TgZ(30,"ion-card-content"),c.TgZ(31,"p"),c.TgZ(32,"span",18),c._uU(33," air "),c.qZA(),c.TgZ(34,"b",19),c.TgZ(35,"p"),c._uU(36),c.qZA(),c.TgZ(37,"p"),c._uU(38),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(39,"ion-card"),c.TgZ(40,"ion-card-header"),c.TgZ(41,"ion-card-title"),c.TgZ(42,"b"),c.TgZ(43,"ion-badge",2),c._uU(44," LOCALIZA\xc7\xc3O"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(45,"ion-card-content"),c.TgZ(46,"p"),c.TgZ(47,"b"),c._uU(48),c.qZA(),c.qZA(),c.TgZ(49,"p"),c.TgZ(50,"b"),c._uU(51),c.qZA(),c.qZA(),c.TgZ(52,"p"),c.TgZ(53,"b"),c._uU(54),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(55,"ion-card"),c.TgZ(56,"ion-card-header"),c.TgZ(57,"ion-card-title"),c.TgZ(58,"b"),c.TgZ(59,"ion-badge",2),c._uU(60,"COORDENADAS"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(61,"ion-card-content"),c.TgZ(62,"p"),c.TgZ(63,"b"),c._uU(64),c.qZA(),c.qZA(),c.TgZ(65,"p"),c.TgZ(66,"b"),c._uU(67),c.qZA(),c.qZA(),c.TgZ(68,"p"),c.TgZ(69,"b"),c._uU(70),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(8),c.lnq(" ",t.dados.data.city," - ",t.dados.data.state," - ",t.dados.data.country," "),c.xp6(2),c.hij(" Lat: ",t.dados.data.location.coordinates[0]," "),c.xp6(2),c.hij(" Long: ",t.dados.data.location.coordinates[1]," "),c.xp6(8),c.hij(" ",t.dados.data.current.weather.ts," "),c.xp6(8),c.hij(" Press\xe3o atmosferica: ",t.dados.data.current.weather.pr," hPa "),c.xp6(8),c.hij(" Dire\xe7\xe3o do vento: ",t.dados.data.current.weather.wd," "),c.xp6(2),c.hij(" Velocidade do vento: ",t.dados.data.current.weather.ws," "),c.xp6(10),c.hij("Cidade: ",t.dados.data.city,""),c.xp6(3),c.hij("Estado: ",t.dados.data.state," "),c.xp6(3),c.hij("Pais: ",t.dados.data.country,""),c.xp6(10),c.hij("TimeZone: ",t.dados2.hourly.apparent_temperature," "),c.xp6(3),c.hij("Latitude: ",t.latitude,""),c.xp6(3),c.hij("Longitude: ",t.longitude," ")}}let g=(()=>{class t{constructor(t,o,e,n){this.router=t,this.apiService=o,this.toastController=e,this.alertController=n}ngOnInit(){this.getLocation()}atualizacao(){return(0,r.mG)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:"ArSafe:",message:"\n      ",buttons:["Entendi"]});yield t.present()})}clima(){this.router.navigate(["/tabs/tab2"])}getLocation(){return(0,r.mG)(this,void 0,void 0,function*(){this.carregando=!0;try{this.loading=!0;const t=yield d.b.getCurrentPosition();this.latitude=t.coords.latitude,this.longitude=t.coords.longitude,this.loading=!1,this.gpsOn("GPS Ligado"),console.log(this.latitude),console.log(this.latitude),this.carregando=!1}catch(t){this.carregando=!1,this.presentToast("Ops, verifique se seu GPS est\xe1 ligado!")}this.api(),this.api2()})}api(){this.apiService.buscarDados(this.latitude,this.longitude).subscribe(t=>{this.dados=t,console.log(this.dados),this.status()})}api2(){this.apiService.buscarDados2(this.latitude,this.longitude).subscribe(t=>{this.dados2=t,console.log(this.latitude),console.log(this.longitude),console.log(this.dados2),this.status()})}status(){const t=this.dados.data.current.pollution.aqius;this.statusAr=this.dados.data.current.pollution.aqius,t<50&&(this.statusTwo="Baixo risco para a sa\xfade"),51===t&&t<100&&(this.statusTwo="Qualidade moderado"),101===t&&t<150&&(this.statusTwo="N\xedvel insalubre para grupos sens\xedveis"),101===t&&t<150&&(this.statusTwo=" N\xedvel Insalubre"),101===t&&t<150&&(this.statusTwo="Alto risco para a sa\xfade"),101===t&&t<150&&(this.statusTwo="Perigoso!"),console.log(t)}presentToast(t){return(0,r.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:3e3,position:"bottom",color:"danger",translucent:!0})).present()})}gpsOn(t){return(0,r.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:1e3,position:"bottom",color:"success",translucent:!0})).present()})}}return t.\u0275fac=function(o){return new(o||t)(c.Y36(a.F0),c.Y36(l.s),c.Y36(n.yF),c.Y36(n.Br))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-tab3"]],decls:26,vars:4,consts:[["rel","stylesheet","href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"],[3,"translucent"],["color","primary"],[1,"ion-text-center"],[1,"conteudo",3,"fullscreen"],[1,"back-info","ion-text-center"],["src","../../assets//icon/clima.png",1,"logo"],[1,"center"],["name","crescent",3,"hidden"],[4,"ngIf"],["slot","bottom"],["href","tabs/tab3"],["color","primary","name","partly-sunny"],["href",""],["color","primary","name","home-outline"],["href","tabs/tab2"],["color","primary","name","alert-circle-outline"],["id","centralizar"],[1,"material-symbols-outlined"],[1,"longitude"]],template:function(t,o){1&t&&(c._UZ(0,"link",0),c.TgZ(1,"ion-header",1),c.TgZ(2,"ion-toolbar",2),c.TgZ(3,"ion-title",3),c._uU(4," Clima "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(5,"ion-content",4),c.TgZ(6,"div",5),c._UZ(7,"img",6),c.qZA(),c._UZ(8,"br"),c.TgZ(9,"div",7),c._UZ(10,"ion-spinner",8),c.qZA(),c.YNc(11,Z,71,15,"div",9),c.qZA(),c.TgZ(12,"ion-tabs"),c.TgZ(13,"ion-tab-bar",10),c.TgZ(14,"ion-tab-button",11),c._UZ(15,"ion-icon",12),c.TgZ(16,"ion-label"),c._uU(17,"Clima"),c.qZA(),c.qZA(),c.TgZ(18,"ion-tab-button",13),c._UZ(19,"ion-icon",14),c.TgZ(20,"ion-label"),c._uU(21,"Home"),c.qZA(),c.qZA(),c.TgZ(22,"ion-tab-button",15),c._UZ(23,"ion-icon",16),c.TgZ(24,"ion-label"),c._uU(25,"Informa\xe7\xf5es"),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(1),c.Q6J("translucent",!0),c.xp6(4),c.Q6J("fullscreen",!0),c.xp6(5),c.Q6J("hidden",!o.carregando),c.xp6(1),c.Q6J("ngIf",!o.carregando))},directives:[n.Gu,n.sr,n.wd,n.W2,n.PQ,i.O5,n.UN,n.yq,n.ZU,n.gu,n.Q$,n.PM,n.FN,n.Zi,n.gZ,n.yp],styles:[".logo[_ngcontent-%COMP%]{width:100px;margin:10px auto;display:block}.center[_ngcontent-%COMP%]{--ion-background-color:#28903a;text-align:center;top:1%}.longitude[_ngcontent-%COMP%]{padding-left:.1em}#centralizar[_ngcontent-%COMP%]{text-align:center}p[_ngcontent-%COMP%]{font-size:20px}.conteudo[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{display:none}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{overflow:hidden}"]}),t})();var u=e(581);const p=[{path:"",component:g}];let h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[a.Bz.forChild(p)],a.Bz]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[n.Pc,i.ez,s.u5,u.e,a.Bz.forChild([{path:"",component:g}]),h]]}),t})()}}]);