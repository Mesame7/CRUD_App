import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerAddEditComponent } from './per-add-edit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


describe('PerAddEditComponent', () => {
  let component: PerAddEditComponent;
  let fixture: ComponentFixture<PerAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports: [
        HttpClientModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule
      ],
      declarations: [PerAddEditComponent],
      providers: [
        provideAnimations(),//whenever we have any dependency on animation(I guess here we have the dialog, submit button)
        HttpClient, {
          provide: MatDialogRef,
          useValue: []
        },
        {
          provide: MAT_DIALOG_DATA, useValue: {}
        },

      ]

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
