import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private _http: HttpClient) { }
  addPerson(pData: any): Observable<any>{
    return this._http.post('http://localhost:3000/persons',pData)
  }
}
