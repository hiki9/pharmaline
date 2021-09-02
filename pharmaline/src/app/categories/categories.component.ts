import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {Categories} from '../model/category';
import {ApiService} from '../services/api.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
    providers: [MessageService,ConfirmationService]
})
export class CategoriesComponent implements OnInit {
  categoryDialog: boolean = false;
  public categoryForm : FormGroup
  allcat!: any;
  submitted!: boolean;
  dataformatted: Categories[] = [];
  categories!: Categories;
  constructor(private fb:FormBuilder, private apiService: ApiService,private messageService: MessageService, private confirmationService: ConfirmationService) { 
    this.categoryForm = this.fb.group({
      categoryName:['', Validators.required],
       categoryCode:['', Validators.required]
    })
  } 

  ngOnInit() {this.apiService.FctGetCategory();
    this.allcat=this.apiService.FctGetCategory();
    console.log(this.allcat)
    this.dataformatted = JSON.parse(this.allcat);
    console.log(this.dataformatted);
  }
  editCategory(categories: any) {
    let id = categories.categoryCode;
    console.log(categories)
    this.categories ={...categories};
    console.log(this.categories)
    this.apiService.FctUpdateCategory(categories)
    this.categoryDialog = true;
}

deleteCategory(categories : any) {
  console.log(categories)
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' +  + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.dataformatted = this.dataformatted.filter(val => val.categoryCode !== categories.categoryCode);
            this.apiService.FctUpdateCategory(this.dataformatted);
          
        }
    });
}


updateCategory(categorie:any) {
  const index = this.dataformatted.findIndex(d => d.categoryCode==categorie.categoryCode);
  console.log(index);
  this.dataformatted[index]=categorie;
  this.apiService.FctUpdateCategory(this.dataformatted);
  this.hideDialog();
}
  
hideDialog() {
this.categoryDialog= false;
this.submitted = false;
}


}