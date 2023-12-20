import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonService } from '../services/person.service';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-per-add-edit',
  templateUrl: './per-add-edit.component.html',
  styleUrl: './per-add-edit.component.scss'
})
export class PerAddEditComponent implements OnInit {
personForm: FormGroup;
constructor(
  private _formBuilder:FormBuilder,
  private _personService:PersonService,
  private dialogRef: MatDialogRef<PerAddEditComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any){
  this.personForm=this._formBuilder.group({
    firstName:'',
    lastName:'',
    email:'',
    // id:'',
  });
}
ngOnInit(): void {
  this.personForm.patchValue(this.data);
}

onFormSubmit(){
  if(this.personForm.valid){
    if(this.data){
      this._personService.updatePerson(this.personForm.value,this.data.id)?.subscribe({
        next:(val:any)=>{
          alert('Person Updated')
          this.dialogRef.close(true);
        },
        error:(err:any)=>{
          console.error(err)
        }
      })
    }else{
      this._personService.addPerson(this.personForm.value)?.subscribe({
        next:(val:any)=>{
          alert('Person Added')
          this.dialogRef.close(true);
        },
        error:(err:any)=>{
          console.error(err)
        }
      })
    }
    
  }
}

}

