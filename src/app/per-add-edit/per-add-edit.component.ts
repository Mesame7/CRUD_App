import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-per-add-edit',
  templateUrl: './per-add-edit.component.html',
  styleUrl: './per-add-edit.component.scss'
})
export class PerAddEditComponent {
personForm: FormGroup;
constructor(private _formBuilder:FormBuilder){
  this.personForm=this._formBuilder.group({
    firstName:'',
    lastName:'',
    email:'',
    id:'',
  });
}

onFormSubmit(){
  if(this.personForm.valid){
    console.log(this.personForm.value);
  }
}

}
