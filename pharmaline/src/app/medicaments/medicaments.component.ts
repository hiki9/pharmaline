import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
//import {Observable} from 'rxjs/Observable';
import {ApiService} from '../services/api.service';
import * as moment from 'moment';
import 'moment/locale/fr';
@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {
  allmedicament: any;
  dataformatted: any;
  
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
  constructor(private fb:FormBuilder, private apiService: ApiService) { 
    this.medicamentForm = this.fb.group({
      medicamentName:['', Validators.required],
      medicamentCode:['', Validators.required],
      posologie:['', Validators.required],
    })
  } 

  ngOnInit() {

    this.allmedicament=this.apiService.FctGetMedicament();
    this.dataformatted = JSON.parse(this.allmedicament);
    console.log(this.dataformatted);
  }
}