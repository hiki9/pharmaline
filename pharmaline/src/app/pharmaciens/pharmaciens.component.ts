import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
//import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-pharmaciens',
  templateUrl: './pharmaciens.component.html',
  styleUrls: ['./pharmaciens.component.css']
})
export class PharmaciensComponent implements OnInit {
public pharmacienForm : FormGroup
  constructor(private fb:FormBuilder) { 
    this.pharmacienForm = this.fb.group({
      pharmacienName:['', Validators.required],
      pharmacienPrenom:['', Validators.required],
      pharmacienCode:['', Validators.required],
      
    })
  } 

  ngOnInit(): void {
  }
  AddPharmacien(){console.log(this.pharmacienForm.value)}

}
