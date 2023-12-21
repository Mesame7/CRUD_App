import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../services/person.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-per-add-edit',
  templateUrl: './per-add-edit.component.html',
  styleUrl: './per-add-edit.component.scss'
})
export class PerAddEditComponent implements OnInit {
  personForm: FormGroup;


  constructor(
    private _formBuilder: FormBuilder,
    private _personService: PersonService,
    private dialogRef: MatDialogRef<PerAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService) {

    this.personForm = this._formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // id:'',
    });
  }

  ngOnInit(): void {
    this.personForm.patchValue(this.data);
  }
  /**
 * Handles the event when the user clicks on Save or Update.
 *
 **/
  onFormSubmit() {
    if (this.personForm.valid) {
      if (this.data) {
        this.helperPersonUpdate();
      } else {
        this.helperPersonAdd();
      }

    }
  }
  
  private helperPersonUpdate() {
    this._personService.updatePerson(this.personForm.value, this.data.id)?.subscribe({
      next: (val: any) => {
        this._coreService.openSnackBar('Person Updated');
        this.dialogRef.close(true);
      },
      error: (err: any) => {
        console.error(err)
      }
    });
  }
  private helperPersonAdd() {
    this._personService.addPerson(this.personForm.value)?.subscribe({
      next: (val: any) => {
        this._coreService.openSnackBar('Person Added');
        this.dialogRef.close(true);
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }
  get email() {
    return this.personForm.get('email');
  }
  get firstName(){
    return this.personForm.get('firstName');
  }
  get lastName(){
    return this.personForm.get('lastName');
  }
}

