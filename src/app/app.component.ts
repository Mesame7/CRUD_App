import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PerAddEditComponent } from './per-add-edit/per-add-edit.component';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CRUD_App';
  
constructor(private _dialog: MatDialog){}
openAddEditPersonForm(){
  this._dialog.open(PerAddEditComponent);
}

}
