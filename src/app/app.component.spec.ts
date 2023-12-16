import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatDialog } from '@angular/material/dialog';
import {  MatToolbarModule } from '@angular/material/toolbar';
describe('AppComponent', () => {
  // AppComponent has a parameter
  let fakeDialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;
    expect(app).toBeInstanceOf(AppComponent);
  });

  it(`should have as title 'CRUD_App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CRUD_App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, CRUD_App');
  });
});
