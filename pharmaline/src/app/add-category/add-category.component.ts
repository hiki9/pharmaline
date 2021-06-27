import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
//import {Observable} from 'rxjs/Observable';
import {ApiService} from '../services/api.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
public addCategoryForm : FormGroup
  constructor(private fb:FormBuilder, private apiService: ApiService) { 
    this.addCategoryForm = this.fb.group({
      categorieName:['', Validators.required],
      categoryCode:['', Validators.required]
    })
  } 
  ngOnInit(){

  }
  AddCategory(){
    let dataJson = this.addCategoryForm.value;
    this.apiService.FctAddCategory(dataJson);
  
   // console.log(this.addCategoryForm.value)}
  }
}

 

