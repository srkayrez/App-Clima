(self.webpackChunkMonitoramento_APP=self.webpackChunkMonitoramento_APP||[]).push([[5714],{5714:(t,n,o)=>{"use strict";o.r(n),o.d(n,{Tab1PageModule:()=>Z});var i=o(3083),e=o(8583),a=o(665),r=o(581),s=o(649),c=o(4762),l=o(1091),d=o(639),g=o(8720);const u=["myslider"],b=[{path:"",component:(()=>{class t{constructor(t,n,o,i){this.alertController=t,this.router=n,this.apiService=o,this.toastController=i,this.sliderOpts={autoplay:!0,speed:100}}ngOnInit(){this.getLocation()}atualizacao(){return(0,c.mG)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:"ArSafe:",message:"\n\n      <br><br>\n      <b>TEMA: </b>DESENVOLVIMENTO DE UMA APLICA\xc7\xc3O DE SISTEMA DISTRIBU\xcdDO\n      PARA DISPOSITIVO M\xd3VEL.\n      <br><br>\n      <b>DISCIPLINA VINCULADA: </b> Sistemas Distribu\xeddos \u2013 SD.\n      <br><br>\n      <b>PROPOSTA: </b>Acompanhamento de \xedndice de qualidade do ar (IQA)\n       mapeada por geodocaliza\xe7\xe3o.\n      <br><br>\n      <b>EXTRA: </b>Relat\xf3rio climatico da localiza\xe7\xe3o do usu\xe1rio.\n      <br><br>\n      <b>ALUNO:</b> Hugo Fran\xe7a da Silva Dias Pereira.\n      <br><br>\n      <b>RA:</b> N2393D-2.\n      <br><br>\n      <b>UNIDADE:</b> Campus Anchieta.\n      <br><br>\n      <b>CURSO:</b> CIENCIA DA COMPUTA\xc7\xc3O.\n      <br><br>\n      Mais detalhes no GitHub...\n      ",buttons:["Entendi"]});yield t.present()})}getLocation(){return(0,c.mG)(this,void 0,void 0,function*(){this.carregando=!0;try{this.loading=!0;const t=yield l.b.getCurrentPosition();this.latitude=t.coords.latitude,this.longitude=t.coords.longitude,this.loading=!1,this.gpsOn("GPS Ligado"),console.log(this.latitude),console.log(this.latitude),this.carregando=!1}catch(t){this.carregando=!1,this.presentToast("Ops, verifique se seu GPS est\xe1 ligado!")}this.api(),this.api2()})}api(){this.apiService.buscarDados(this.latitude,this.longitude).subscribe(t=>{this.dados=t,console.log(this.dados)})}api2(){this.apiService.buscarDados2(this.latitude,this.longitude).subscribe(t=>{this.dados2=t,console.log(this.latitude),console.log(this.longitude),console.log(this.dados2)})}presentToast(t){return(0,c.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:3e3,position:"bottom",color:"danger",translucent:!0})).present()})}gpsOn(t){return(0,c.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:1e3,position:"bottom",color:"success",translucent:!0})).present()})}ar(){this.router.navigate(["/tabs/tab3"])}}return t.\u0275fac=function(n){return new(n||t)(d.Y36(i.Br),d.Y36(s.F0),d.Y36(g.s),d.Y36(i.yF))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-tab1"]],viewQuery:function(t,n){if(1&t&&d.Gf(u,5),2&t){let t;d.iGM(t=d.CRH())&&(n.slide=t.first)}},decls:56,vars:7,consts:[["rel","stylesheet","href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"],[1,"ion-text-center"],[3,"fullscreen"],[1,"container"],[1,"back"],[1,"back-info","ion-text-center"],["src","https://imgur.com/a/jEGk5Vb",1,"logo"],[1,"cardPrincipal"],["lines","full",1,"cards"],[1,"material-symbols-outlined"],["vertical","bottom","horizontal","end","slot","fixed","onclick","window.open('https:/github.com/hugofsd/APS-OITAVO-SEMESTE')"],["color","light"],["name","logo-github"],["slot","bottom"],["href","tabs/tab3"],["color","primary","name","partly-sunny-outline"],["href",""],["color","primary","name","home"],["href","tabs/tab2"],["color","primary","name","alert-circle-outline"]],template:function(t,n){1&t&&(d._UZ(0,"link",0),d.TgZ(1,"ion-toolbar"),d.TgZ(2,"ion-title",1),d._uU(3," Weather now "),d.qZA(),d.qZA(),d.TgZ(4,"ion-content",2),d.TgZ(5,"div",3),d.TgZ(6,"div",4),d.TgZ(7,"div",5),d._UZ(8,"img",6),d.qZA(),d.qZA(),d.TgZ(9,"ion-card",7),d.TgZ(10,"ion-list",8),d.TgZ(11,"ion-card"),d.TgZ(12,"ion-card-content"),d.TgZ(13,"p"),d.TgZ(14,"span",9),d._uU(15," pin_drop "),d.qZA(),d.TgZ(16,"b"),d._uU(17),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(18,"ion-card"),d.TgZ(19,"ion-card-content"),d.TgZ(20,"p"),d.TgZ(21,"b"),d.TgZ(22,"span",9),d._uU(23," humidity_mid "),d.qZA(),d._uU(24),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(25,"ion-card"),d.TgZ(26,"ion-card-content"),d.TgZ(27,"p"),d.TgZ(28,"span",9),d._uU(29," device_thermostat "),d.qZA(),d.TgZ(30,"b"),d._uU(31),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(32,"ion-card"),d.TgZ(33,"ion-card-content"),d.TgZ(34,"p"),d.TgZ(35,"span",9),d._uU(36," air "),d.qZA(),d.TgZ(37,"b"),d._uU(38),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(39,"ion-fab",10),d.TgZ(40,"ion-fab-button",11),d._UZ(41,"ion-icon",12),d.qZA(),d.qZA(),d.qZA(),d.TgZ(42,"ion-tabs"),d.TgZ(43,"ion-tab-bar",13),d.TgZ(44,"ion-tab-button",14),d._UZ(45,"ion-icon",15),d.TgZ(46,"ion-label"),d._uU(47,"Clima"),d.qZA(),d.qZA(),d.TgZ(48,"ion-tab-button",16),d._UZ(49,"ion-icon",17),d.TgZ(50,"ion-label"),d._uU(51,"Home"),d.qZA(),d.qZA(),d.TgZ(52,"ion-tab-button",18),d._UZ(53,"ion-icon",19),d.TgZ(54,"ion-label"),d._uU(55,"Informa\xe7\xf5es"),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t&&(d.xp6(4),d.Q6J("fullscreen",!0),d.xp6(13),d.lnq(" ",n.dados.data.city," - ",n.dados.data.state," - ",n.dados.data.country," "),d.xp6(7),d.hij(" Umidade: ",n.dados.data.current.weather.hu,"% "),d.xp6(7),d.hij(" Temperatura: ",n.dados.data.current.weather.tp," \xbaC "),d.xp6(7),d.hij(" Qualidade do Ar: ",n.dados.data.current.pollution.aqius," "))},directives:[i.sr,i.wd,i.W2,i.PM,i.q_,i.FN,i.IJ,i.W4,i.gu,i.UN,i.yq,i.ZU,i.Q$],styles:[".back[_ngcontent-%COMP%]   .back-info[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:100px;margin:10px auto;display:block}.back[_ngcontent-%COMP%]   .back-info[_ngcontent-%COMP%]   .logoInferior[_ngcontent-%COMP%]{width:400px;margin:20px auto;display:block;align-items:center}.flw[_ngcontent-%COMP%]{text-align:center;height:45px;margin-top:10px}.ion-padding-top[_ngcontent-%COMP%]{padding-top:16px}.notificacao[_ngcontent-%COMP%]{background-color:#3880ff;height:45px}.swiper-slide[_ngcontent-%COMP%]{display:block}ion-slide[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin-top:2.8rem}.cardPrincipal[_ngcontent-%COMP%]{margin-top:20px;display:block}.title-img[_ngcontent-%COMP%]{max-height:35px}.cards[_ngcontent-%COMP%]{text-align:center}p[_ngcontent-%COMP%]{font-size:20px}"]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[s.Bz.forChild(b)],s.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[i.Pc,e.ez,a.u5,r.e,p]]}),t})()}}]);