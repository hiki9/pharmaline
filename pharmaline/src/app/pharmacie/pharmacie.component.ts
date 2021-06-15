import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
//import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.css']
})
export class PharmacieComponent implements OnInit {
public pharmacieForm : FormGroup
  constructor(private fb:FormBuilder) { 
    this.pharmacieForm = this.fb.group({
      pharmacieName:['', Validators.required],
      pharmacieCode:['', Validators.required],
      pharmacieAdresse:['', Validators.required],
    })
  } 

  ngOnInit(): void {
  }
  AddPharmacie(){console.log(this.pharmacieForm.value)}

}