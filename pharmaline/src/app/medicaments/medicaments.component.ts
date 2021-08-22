import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Medicaments } from '../model/medicament';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
//import {Observable} from 'rxjs/Observable';
import { ApiService } from '../services/api.service';
import * as moment from 'moment';
import 'moment/locale/fr';
@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
  providers: [MessageService, ConfirmationService]

})
export class MedicamentsComponent implements OnInit {
  medicamentDialog: boolean = false;
  public medicamentForm: FormGroup
  allmed!: any;
  submitted!: boolean;
  dataformatted: Medicaments[] = [];
  medicaments!: Medicaments;
  //medicament: any;
  constructor(private fb: FormBuilder, private apiService: ApiService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.medicamentForm = this.fb.group({
      medicamentName: ['', Validators.required],
      medicamentCode: ['', Validators.required],
      posologie: ['', Validators.required],
      datePeremption: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.apiService.FctGetMedicament();
    this.allmed = this.apiService.FctGetMedicament();
    console.log(this.allmed)
    this.dataformatted = JSON.parse(this.allmed);
    console.log(this.dataformatted);
  }
  editMedicament(medicaments: any) {
    //this. = {...product};
    console.log(medicaments)// medicaments??
    this.medicaments = medicaments;
    console.log(this.medicaments)
    this.medicamentDialog = true;
  }

  deleteMedicament(medicaments: any) {
    console.log(medicaments);
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // this.products = this.products.filter(val => val.id !== product.id);
        // this.product = {};
        // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
    });
  }


  updateMedicament(medicaments: any){
    console.log(medicaments);
    this.medicaments = medicaments;
  }

  hideDialog() {
    this.medicamentDialog = false;
    this.submitted = false;
  }
}