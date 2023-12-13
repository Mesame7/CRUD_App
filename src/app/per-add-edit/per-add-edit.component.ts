import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonService } from '../services/person.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-per-add-edit',
  templateUrl: './per-add-edit.component.html',
  styleUrl: './per-add-edit.component.scss'
})
export class PerAddEditComponent {
personForm: FormGroup;
constructor(private _formBuilder:FormBuilder,
  private _personService:PersonService,
  private dialogRef: DialogRef<PerAddEditComponent>){
  this.personForm=this._formBuilder.group({
    firstName:'',
    lastName:'',
    email:'',
    // id:'',
  });
}

onFormSubmit(){
  if(this.personForm.valid){
    this._personService.addPerson(this.personForm.value).subscribe({
      next:(val:any)=>{
        alert('Person Added')
        this.dialogRef.close();
      },
      error:(err:any)=>{
        console.error(err)
      }
    })
  }
}

}
