import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IEducation } from './ieducation';


@Injectable({
  providedIn: 'root'
})
export class EducationS {
  API_URL = 'http://localhost:3000/api/profile/education'

  constructor(private _http: HttpClient){ }

  getEducation(){
    return this._http.get<IEducation[]>(this.API_URL)
  }
}
