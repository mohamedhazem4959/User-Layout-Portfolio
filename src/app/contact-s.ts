import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Icontact } from './icontact';

@Injectable({
  providedIn: 'root'
})
export class ContactS {
  API_URL='http://localhost:3000/api/profile/contact'

  constructor(private _http:HttpClient){ }

  getContact(){
    return this._http.get<Icontact[]>(this.API_URL)
  }
  
}
