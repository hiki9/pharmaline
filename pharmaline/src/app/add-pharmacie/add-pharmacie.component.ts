import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
//import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-add-pharmacie',
  templateUrl: './add-pharmacie.component.html',
  styleUrls: ['./add-pharmacie.component.css']
})
export class AddPharmacieComponent implements OnInit {
public addPharmacieForm : FormGroup
  constructor(private fb:FormBuilder) { 
    this.addPharmacieForm = this.fb.group({
      pharmacieName:['', Validators.required],
      pharmacieCode:['', Validators.required],
      pharmacieAdresse:['', Validators.required]
    })
  } 

  ngOnInit(): void {
  }
  AddPharmacie(){console.log(this.addPharmacieForm.value)}

}
