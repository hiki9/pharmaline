import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
//import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';
import 'moment/locale/fr';
@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {
  
  test() {
    const date = moment();
    let dateInFormat = date.format('YYYY.M.D');
    console.log(dateInFormat);
}
localeTest() {
  console.log(moment.locale()); // en
  moment.locale('fr');
  console.log(moment.locale()); // en
  moment.locale('pt-BR');
  console.log(moment.locale()); // pt-BR
}
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