import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  buscarDados(lat: any, lon: any): any{
    // eslint-disable-next-line
    return this.http.get(`https://api.airvisual.com/v2/nearest_city?lat=` + lat +
    `&lon=` + lon + `&key=b0769871-eefe-4837-8c64-7309c061b09e`);
  }

  buscarDados2(lat:any, lon:any): any {
    return this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=` + lat + `&longitude=` + lon +
    `&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation,rain,showers,weathercode,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,precipitation_hours&current_weather=true&timezone=America%2FSao_Paulo`);
  }
}



