import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AlertController , ToastController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { ApiService } from 'src/service/api.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  loading: boolean;
  latitude: number;
  longitude: number;

  dados: any;
  dados2: any;

  carregando: boolean;

  constructor(
    public alertController: AlertController,
    public router: Router,
    public apiService: ApiService,
    private toastController: ToastController,
    ) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('myslider') slide: IonSlides;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  sliderOpts = {
    autoplay: true,
    speed: 100
  };

  ngOnInit() {
    this.getLocation();
  }

  async atualizacao() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ArSafe:',
      message: `

      <br><br>
      <b>TEMA: </b>DESENVOLVIMENTO DE UMA APLICAÇÃO DE SISTEMA DISTRIBUÍDO
      PARA DISPOSITIVO MÓVEL.
      <br><br>
      <b>DISCIPLINA VINCULADA: </b> Sistemas Distribuídos – SD.
      <br><br>
      <b>PROPOSTA: </b>Acompanhamento de índice de qualidade do ar (IQA)
       mapeada por geodocalização.
      <br><br>
      <b>EXTRA: </b>Relatório climatico da localização do usuário.
      <br><br>
      <b>ALUNO:</b> Hugo França da Silva Dias Pereira.
      <br><br>
      <b>RA:</b> N2393D-2.
      <br><br>
      <b>UNIDADE:</b> Campus Anchieta.
      <br><br>
      <b>CURSO:</b> CIENCIA DA COMPUTAÇÃO.
      <br><br>
      Mais detalhes no GitHub...
      ` ,
      buttons: ['Entendi']
    });
    await alert.present();
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
    }
  );
  }

  api2() {
    this.apiService.buscarDados2(this.latitude, this.longitude)
  .subscribe(
    data2 =>{
      this.dados2 = data2;
      console.log(this.latitude)
      console.log(this.longitude)
      console.log(this.dados2);
    }
  );
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

  ar(){
    this.router.navigate(['/tabs/tab3']);
  }
}
