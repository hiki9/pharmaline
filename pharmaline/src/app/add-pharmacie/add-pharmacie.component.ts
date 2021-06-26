import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
//import {Observable} from 'rxjs/Observable';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-add-pharmacie',
  templateUrl: './add-pharmacie.component.html',
  styleUrls: ['./add-pharmacie.component.css']
})
export class AddPharmacieComponent implements OnInit {
  public addPharmacieForm: FormGroup
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.addPharmacieForm = this.fb.group({
      pharmacieName: ['', Validators.required],
      pharmacieCode: ['', Validators.required],
      pharmacieAdresse: ['', Validators.required]
    })
  }

  ngOnInit() {
  }
  AddPharmacie() {
    let dataJson = (this.addPharmacieForm.value)
    this.apiService.FctAddPharmacy(dataJson);
  }
}
