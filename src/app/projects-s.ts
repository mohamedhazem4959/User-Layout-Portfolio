import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Iproject } from './iproject';

@Injectable({
  providedIn: 'root'
})
export class ProjectsS {
  API_URL = 'http://localhost:3000/api/profile/project'

  constructor(private _http:HttpClient){ }

  getProjects(){
    return this._http.get<Iproject[]>(this.API_URL)
  }
}
