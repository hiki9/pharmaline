
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
//import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-add-pharmacien',
  templateUrl: './add-pharmacien.component.html',
  styleUrls: ['./add-pharmacien.component.css']
})
export class AddPharmacienComponent implements OnInit {
public addPharmacienForm : FormGroup
  constructor(private fb:FormBuilder) { 
    this.addPharmacienForm = this.fb.group({
      pharmacienName:['', Validators.required],
      pharmacienPrenom:['', Validators.required],
      pharmacienCode:['', Validators.required]
    })
  } 

  ngOnInit(): void {
  }
  AddPharmacien(){console.log(this.addPharmacienForm.value)}

}