import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  _url='http://localhost:3000/persons';
  constructor(private _http: HttpClient) { }



  addPerson(pData: any){
    return this._http.post(this._url,pData)
  }
  deletePerson(id:number) {
    return this._http.delete(this._url+'/'+id);
   }
   updatePerson(newPerson:any, id:number) {
    return this._http.put(this._url+'/'+id, newPerson);
   }
  getPersonById(id:number) {
    return this._http.get(this._url+'/'+id);
   }

  getAllPerson():any{//:Observable<any[]>{//Array<{firstName:string,lastName:string,email:string}>{   
    return this._http.get('http://localhost:3000/persons');
  }
}
