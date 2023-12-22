import { TestBed } from '@angular/core/testing';

import { PersonService } from './person.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PersonService', () => {
  let myPersonService: PersonService;
  let httpTestingController: HttpTestingController;
  let url = 'http://localhost:3000/persons';

  const mockData = {
    "persons": [
      {
        "firstName": "asdqweqweW",
        "lastName": "asd",
        "email": "asdd",
        "id": 1
      },
      {
        "firstName": "asd",
        "lastName": "sss",
        "email": "asddddasd",
        "id": 2
      }
    ]
  };



  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        PersonService,
        {
          provide: 'url',
          useValue: 'http://localhost:3000/persons'
        }
      ], imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });

    myPersonService = TestBed.inject(PersonService);
    httpTestingController = TestBed.inject(HttpTestingController);



  });
  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {

    expect(myPersonService).toBeTruthy();
  });

  it('getAll should make a GET HTTP request and return all data items', () => {
    myPersonService.getAllPerson().subscribe((res: any) => {
      expect(res).toEqual(mockData);

    });
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(mockData);
    httpTestingController.verify();
  });

  it('getById should make a GET HTTP request with id appended to end of url', () => {
    const mockObj ={
      "firstName": "asdqweqweW",
      "lastName": "asd",
      "email": "asdd",
      "id": 1
    };
    myPersonService.getPersonById(1).subscribe(res => {
      expect(res).toEqual(mockObj);
    });
    const req = httpTestingController.expectOne(url + '/1');
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(mockObj);
    httpTestingController.verify();
  });
  it('delete should make a DELETE HTTP request with id appended to end of url', () => {
    myPersonService.deletePerson(1).subscribe(res => {
      expect(res).toBe(1);
    });
    const req = httpTestingController.expectOne(url + '/1', 'delete to api');
    expect(req.request.method).toBe('DELETE');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(1);
    httpTestingController.verify();
  });
  it('update should make a PUT HTTP request with id appended to end of url and resource as body', () => {
    const updateObj = {
      "firstName": "Neuer Vorname",
      "lastName": "Neuer Nachname",
      "email": "Addresse@X.com",
      "id": -1
    };
    myPersonService.updatePerson(updateObj, 1).subscribe((res: any) => {
      expect(res.firstName).toBe('Neuer Vorname');
    });
    const req = httpTestingController.expectOne(url + '/1', 'put to api');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toBe(updateObj);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(updateObj);
    httpTestingController.verify();
  });
  it('create should make a POST HTTP request with resource as body', () => {
    const createObj = {  "firstName": "Neuer Vorname",
    "lastName": "Neuer Nachname",
    "email": "Addresse@X.com",
    "id":"0" };
    myPersonService.addPerson(createObj)?.subscribe((res:any) => {
      expect(res.firstName).toBe('Neuer Vorname');
    });
    const req = httpTestingController.expectOne(url, 'post to api');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(createObj);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(createObj);
    httpTestingController.verify();
  });
});
