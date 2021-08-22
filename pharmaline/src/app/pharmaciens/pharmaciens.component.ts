import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
//import {Observable} from 'rxjs/Observable';
import {ApiService} from '../services/api.service';
import {Pharmaciens} from '../model/pharmaciens';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-pharmaciens',
  templateUrl: './pharmaciens.component.html',
  styleUrls: ['./pharmaciens.component.css'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
    providers: [MessageService,ConfirmationService]
})
export class PharmaciensComponent implements OnInit {
  pharmacienDialog: boolean = false;
public pharmacienForm : FormGroup
allpharmacien!:any;
dataformatted: Pharmaciens[]=[];
pharmaciens!:Pharmaciens;
submitted!:boolean;
constructor(private fb:FormBuilder, private apiService: ApiService,private messageService: MessageService, private confirmationService: ConfirmationService) { 
    this.pharmacienForm = this.fb.group({
      pharmacienName:['', Validators.required],
      pharmacienPrenom:['', Validators.required],
      pharmacienCode:['', Validators.required],
      
    })
  } 

  ngOnInit() {this.apiService.FctGetPharmacien();
    this.allpharmacien=this.apiService.FctGetPharmacien();
    console.log(this.allpharmacien)
    this.dataformatted = JSON.parse(this.allpharmacien);
    console.log(this.dataformatted);
  }
  editPharmacien( pharmaciens: any) {
    //this. = {...product};
    console.log(pharmaciens)
    this.pharmaciens = pharmaciens;
    console.log(this.pharmaciens);
    this.pharmacienDialog = true;
}

deletePharmacien(pharmaciens : any) {
  console.log(pharmaciens)
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' +  + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
           // this.products = this.products.filter(val => val.id !== product.id);
           // this.product = {};
           // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
        }
    });
}

hideDialog() {
  this.pharmacienDialog = false;
  this.submitted = false;
}
updatePharmacien() {
  this.submitted = true;

  if (this.pharmaciens.pharmacienName.trim()) {
      if (this.pharmaciens.pharmacienCode) {
          //this.products[this.findIndexById(this.product.id)] = this.product;  
          console.log(this.pharmaciens); 
          let dataupdate = this.pharmaciens;
          this.apiService.FctUpdatePharmacien(dataupdate);

          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      }


     // this.products = [...this.products];
     // this.productDialog = false;
     // this.product = {};
  }
}
}