import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerAddEditComponent } from './per-add-edit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DialogRef } from '@angular/cdk/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('PerAddEditComponent', () => {
  let component: PerAddEditComponent;
  let fixture: ComponentFixture<PerAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
  
      imports:[
        HttpClientModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
      ],
      declarations: [PerAddEditComponent],
      providers:[
        provideAnimations(),//whenever we have any dependency on animation(I guess here we have the dialog, submit button)
        HttpClient,{
        provide: DialogRef,
        useValue: []
      }]
      
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
