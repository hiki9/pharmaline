import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
//import {Observable} from 'rxjs/Observable';
import {ApiService} from '../services/api.service';
@Component({
  selector: 'app-pharmaciens',
  templateUrl: './pharmaciens.component.html',
  styleUrls: ['./pharmaciens.component.css']
})
export class PharmaciensComponent implements OnInit {
public pharmacienForm : FormGroup
allpharmacien!:any;
dataformatted: any;
  constructor(private fb:FormBuilder, private apiService: ApiService) { 
    this.pharmacienForm = this.fb.group({
      pharmacienName:['', Validators.required],
      pharmacienPrenom:['', Validators.required],
      pharmacienCode:['', Validators.required],
      
    })
  } 

  ngOnInit() {this.apiService.FctGetPharmacien();
    this.allpharmacien=this.apiService.FctGetPharmacien();
    
    this.dataformatted = JSON.parse(this.allpharmacien);

}
};