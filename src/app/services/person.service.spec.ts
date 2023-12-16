import { TestBed } from '@angular/core/testing';

import { PersonService } from './person.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('PersonService', () => {
  let myPersonService: PersonService;
  //let httpClient: HttpClient;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers:[
        HttpClient
      ],imports:[
        HttpClientModule
      ]
    });
    //httpClient=TestBed.inject(HttpClient);
    //myPersonService=new PersonService(httpClient);
    
    myPersonService = TestBed.inject(PersonService,);
  });

  it('should be created', () => {
    
    expect(myPersonService).toBeTruthy();
  });
});
