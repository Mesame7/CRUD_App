import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  _url = 'http://localhost:3000/persons';
  constructor(private _http: HttpClient) { }

  /**
 * Adds a person in the DB.
 *
 * @param {any} pData - A Person instance in JSON.
 * @returns  An `Observable` of the response, with the response body as a Person parsed from JSON.
 */
  addPerson(pData: any) {
    return this._http.post(this._url, pData)
  }

  /**
 * Deletes a person from the DB.
 *
 * @param {number} id - ID of a Person instance in the DB.
 * @returns  An `Observable` of the response, with the response body of type `Object`.
 */
  deletePerson(id: number) {
    return this._http.delete(this._url + '/' + id);
  }
  /**
 * Updates a person in the DB.
 *
 * @param {number} id - ID of a Person instance in the DB.
 * @param {any} newPerson - An updated Person Instance to replace the old one.
 * @returns An `Observable` of the response as a JavaScript object
 */
  updatePerson(newPerson: any, id: number) {
    return this._http.put(this._url + '/' + id, newPerson);
  }
  /**
* Gets a Person from the DB by its ID.
*
* @param {number} id - ID of a Person instance in the DB.
* @returns  An `Observable` of the response body with Person instance as a JavaScript object.
*/
  getPersonById(id: number) {
    return this._http.get(this._url + '/' + id);
  }
  /**
* Gets all Person members from the DB.
*
* @returns  An `Observable` of the response body with all Person instances as a JavaScript object.
*/
  getAllPerson(): any {
    return this._http.get('http://localhost:3000/persons');
  }
}
