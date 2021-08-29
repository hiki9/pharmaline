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
  editPharmacien(pharmaciens: any) {
    let id = pharmaciens.pharmacienCode;
    console.log(pharmaciens)
    this.pharmaciens ={...pharmaciens}; 
    console.log(this.pharmaciens);
    this.apiService.FctUpdatePharmacien(pharmaciens);
    this.pharmacienDialog = true;
}

deletePharmacien(pharmaciens : any) {
  console.log(pharmaciens)
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' +  + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.dataformatted = this.dataformatted.filter(val => val.pharmacienCode !== pharmaciens.pharmacienCode);
           // this.product = {};
           this.apiService.FctUpdatePharmacien(this.dataformatted);
           // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
        }
    });
}


updatePharmacien(pharmacien: any) {
  const index = this.dataformatted.findIndex(d => d.pharmacienCode==pharmacien.pharmacienCode);
  console.log(index);
  this.dataformatted[index]=pharmacien;
  this.apiService.FctUpdatePharmacien(this.dataformatted);
  this.hideDialog();
  
  }
  hideDialog() {
    this.pharmacienDialog = false;
    this.submitted = false;
  }
}