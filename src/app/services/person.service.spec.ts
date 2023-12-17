import { TestBed } from '@angular/core/testing';

import { PersonService } from './person.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PersonService', () => {
  let myPersonService: PersonService;
  let httpTestingController:HttpTestingController ;
  //let httpClient: HttpClient;

  const mockData = {
    "persons": [
      {
        "firstName": "asd",
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
      providers:[
        HttpClient,
        PersonService,
        {
          provide: 'url',
          useValue: 'http://localhost:3000/persons'
        }
      ],imports:[
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
    //httpClient=TestBed.inject(HttpClient);
    //myPersonService=new PersonService(httpClient);
    
    myPersonService = TestBed.inject(PersonService,);
    httpTestingController = TestBed.inject(HttpTestingController);



  });
  afterEach(()=>{
    httpTestingController.verify(); 
  })

  it('should be created', () => {
    
    expect(myPersonService).toBeTruthy();
  });

  it('getAll should make a GET HTTP request and return all data items', () => {
    myPersonService.getAllPerson().subscribe(res => {
      expect(res).toEqual(mockData); 
      
     }); 
    const req = httpTestingController.expectOne('http://localhost:3000/persons');
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy(); 
    expect(req.request.responseType).toEqual('json');
    req.flush(mockData);
    httpTestingController.verify();
   });

});
