import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
//import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-add-medicaments',
  templateUrl: './add-medicaments.component.html',
  styleUrls: ['./add-medicaments.component.css']
})
export class AddMedicamentsComponent implements OnInit {
public addMedicamentForm : FormGroup
  constructor(private fb:FormBuilder) { 
    this.addMedicamentForm = this.fb.group({
      medicamentName:['', Validators.required],
      medicamentCode:['', Validators.required],
      posologie:['', Validators.required], 
      datePeremption:['', Validators.required]
    })
  } 

  ngOnInit(): void {
  }
  AddMedicament(){console.log(this.addMedicamentForm.value)}

}

