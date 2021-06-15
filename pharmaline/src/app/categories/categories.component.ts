import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
//import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
public categoryForm : FormGroup
  constructor(private fb:FormBuilder) { 
    this.categoryForm = this.fb.group({
      categoryName:['', Validators.required],
       categoryCode:['', Validators.required]
    })
  } 

  ngOnInit(): void {
  }
  AddCategory(){console.log(this.categoryForm.value)}

}
