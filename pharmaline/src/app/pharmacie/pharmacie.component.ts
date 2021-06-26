import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { ApiService } from '../services/api.service';
//import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.css']
})
export class PharmacieComponent implements OnInit {
  public pharmacieForm: FormGroup
  allpharmacie: any;
  dataformatted: any;
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.pharmacieForm = this.fb.group({
      pharmacieName: ['', Validators.required],
      pharmacieCode: ['', Validators.required],
      pharmacieAdresse: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.allpharmacie = this.apiService.FctGetPharmacie();
    console.log(this.allpharmacie)
    this.dataformatted = JSON.parse(this.allpharmacie);
  }
}