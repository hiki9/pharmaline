import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
import {ApiService} from '../services/api.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  submitted : boolean=false;
public addCategoryForm : FormGroup
  constructor(private fb:FormBuilder, private apiService: ApiService) { 
    this.addCategoryForm = this.fb.group({
      categoryName:['', Validators.required],
      categoryCode:['', Validators.required]
    })
  } 
  ngOnInit(){

  }
  AddCategory(){
    this.submitted = true;
    const valid = this.addCategoryForm.valid;
    if(valid) {

      let dataJson = this.addCategoryForm.value;
      this.apiService.FctAddCategory(dataJson);
    }
  

  }
  get f(){
    return this.addCategoryForm.controls}
}

 

