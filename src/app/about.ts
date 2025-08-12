import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAbout, IAboutResponse } from './i-about';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AboutS {
  API_URL = 'http://localhost:3000/api/profile/about';

  constructor(private _http: HttpClient){ }

  getAbout(){
    return this._http.get<IAboutResponse[]>(this.API_URL)
  }
}
