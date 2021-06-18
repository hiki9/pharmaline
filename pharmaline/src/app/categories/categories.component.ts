import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
//import {Observable} from 'rxjs/Observable';
import {ApiService} from '../services/api.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
public categoryForm : FormGroup
  allcat!: any;
  toto: any;
  constructor(private fb:FormBuilder, private apiService: ApiService) { 
    this.categoryForm = this.fb.group({
      categoryName:['', Validators.required],
       categoryCode:['', Validators.required]
    })
  } 

  ngOnInit() {this.apiService.FctGetCategory();
    this.allcat=this.apiService.FctGetCategory();
    console.log(this.allcat)
  }
  


}
