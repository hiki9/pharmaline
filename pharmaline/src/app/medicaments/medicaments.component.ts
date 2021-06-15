import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
//import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {
public medicamentForm : FormGroup
  constructor(private fb:FormBuilder) { 
    this.medicamentForm = this.fb.group({
      medicamentName:['', Validators.required],
      medicamentCode:['', Validators.required],
      posologie:['', Validators.required],
    })
  } 

  ngOnInit(): void {
  }
  AddMedicament(){console.log(this.medicamentForm.value)}

}