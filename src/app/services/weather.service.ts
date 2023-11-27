import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { WeatherData } from '../models/weather.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
      headers: new HttpHeaders()
        .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIHostValue)
        .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyValue),
        params: new HttpParams()
        .set('city',cityName)
        .set('mode','json')
    })
  }
}
