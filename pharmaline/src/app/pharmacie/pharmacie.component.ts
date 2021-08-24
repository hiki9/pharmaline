import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { ApiService } from '../services/api.service';
//import {Observable} from 'rxjs/Observable';
import { Pharmacie } from '../model/pharmacy';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.css'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],providers: [MessageService,ConfirmationService]
})
export class PharmacieComponent implements OnInit {
  pharmacyDialog: boolean=false;
  public pharmacieForm: FormGroup
  allpharmacie!: any;
  submitted!: boolean;
  dataformatted: Pharmacie[]=[];
  pharmacie!:Pharmacie;
  constructor(private fb: FormBuilder, private apiService: ApiService,private messageService: MessageService,private confirmationService: ConfirmationService) {
    this.pharmacieForm = this.fb.group({
      pharmacieName: ['', Validators.required],
      pharmacieCode: ['', Validators.required],
      pharmacieAdresse: ['', Validators.required],
    })
  }

  ngOnInit() {this.apiService.FctGetPharmacie();
    this.allpharmacie=this.apiService.FctGetPharmacie();
    console.log(this.allpharmacie);
    this.dataformatted = JSON.parse(this.allpharmacie);
    console.log(this.dataformatted);
  }
  editPharmacy(pharmacie: any) {
    
    let id = pharmacie.pharmacieCode;
    console.log(pharmacie)
    this.pharmacie = {...pharmacie};
    console.log(this.pharmacie);
    this.pharmacyDialog = true;
}

deletePharmacy(pharmacie : any) {
  console.log(pharmacie)
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


updatePharmacy(pharmaci:any) {
  const index = this.dataformatted.findIndex(d => d.pharmacieCode==pharmaci.pharmacieCode);
  console.log(index);
  this.dataformatted[index]=pharmaci;
  this.apiService.FctUpdatePharmacy(this.dataformatted);
  this.hideDialog();}
  
  hideDialog() {
    this.pharmacyDialog = false;
    this.submitted = false;
  }
}