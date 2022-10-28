import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { Component, OnInit, Input , AfterViewInit} from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  loading: boolean;
  latitude: number;
  longitude: number;

  dados: any;
  dados2: any;

  carregando: boolean;

  statusTwo: string;

  statusAr: number;

  constructor(
    public router: Router,
    public apiService: ApiService,
    private toastController: ToastController,
    public alertController: AlertController
  ) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {

    this.getLocation();

    // this.statusAr = {
    //   //oi
    // }

  }

  async atualizacao() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ArSafe:',
      message: `
      ` ,
      buttons: ['Entendi']
    });
    await alert.present();
  }


  clima(){
    this.router.navigate(['/tabs/tab2']);
  }


  async getLocation() {
    this.carregando = true;
    try {
      this.loading = true;
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.loading = false;
      this.gpsOn('GPS Ligado');
      console.log(this.latitude);
      console.log(this.latitude);
      this.carregando = false;
    } catch (error) {
      this.carregando = false;
      this.presentToast('Ops, verifique se seu GPS está ligado!');
     }
   this.api();
   this.api2();
  }

  api() {
  this.apiService.buscarDados(this.latitude, this.longitude)
  .subscribe(
    data =>{
      this.dados = data;
      console.log(this.dados);
      this.status();
    }
  );
  }

  api2() {
    this.apiService.buscarDados2(this.latitude, this.longitude)
  .subscribe(
    data2 =>{
      this.dados2 = data2;
      console.log(this.latitude);
      console.log(this.longitude);
      console.log(this.dados2);
      this.status();
    }
  );
  }

  status(){
    const status = this.dados.data.current.pollution.aqius;
    this.statusAr =  this.dados.data.current.pollution.aqius;

    if(status < 50){
      this.statusTwo = 'Baixo risco para a saúde'; // bom
    } if(status === 51 && status < 100 ){
      this.statusTwo = 'Qualidade moderado'; //Moderado
    } if (status === 101 && status < 150){
      this.statusTwo = 'Nível insalubre para grupos sensíveis'; //	Insalubre para Grupos Sensíveis
    } if (status === 101 && status < 150){
      this.statusTwo = ' Nível Insalubre'; // Insalubre
    } if (status === 101 && status < 150){
      this.statusTwo = 'Alto risco para a saúde'; //Muito Insalubre
    } if (status === 101 && status < 150){
      this.statusTwo = 'Perigoso!'; //Perigoso
    }

    console.log(status);
  }

  async presentToast(error: string) {
    const toast = await this.toastController.create({
      message: error,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
      translucent: true
    });
    toast.present();
  }

  async gpsOn(error: string) {
    const toast = await this.toastController.create({
      message: error,
      duration: 1000,
      position: 'bottom',
      color: 'success',
      translucent: true
    });
    toast.present();
  }

}
