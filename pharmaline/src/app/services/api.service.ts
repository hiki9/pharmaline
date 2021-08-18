import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _key: string = 'categories';

  private arrData: object[] = [];
  constructor(private http: HttpClient, private messageService: MessageService) {
   
  }


  //CATEGORIES
  //add category
  FctAddCategory(dataJson: any) {
    this.arrData.push(dataJson);
    this._saveCategory();

  }
  private _saveCategory(): void {
    try {
      const categories = JSON.stringify(this.arrData);
      localStorage.setItem('AllCategories', categories);
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'ajout effectué' });
    }
    catch (err) {
      console.log(err);
      this.messageService.add({ severity: 'warning', summary: 'Service Message', detail: 'NOK' });

    }
  }
  //consult category
  FctGetCategory() {
    var result = localStorage.getItem('AllCategories');
    console.log(result);
    return result;

  }
// update category
 FctUpdateCategory(dataupdate:any){
//var result =  localStorage.setItem("AllCategories",dataupdate);
  //console.log(localStorage.getItem("AllCategories"));

  //return result;
 }
  //PHARMACIENS
  //Add pharmaciens
  FctAddPharmaciens(dataJson: any) {
    this.arrData.push(dataJson);
    this._savePharmaciens();
  }
  private _savePharmaciens(): void {
    try {
      const pharmaciens = JSON.stringify(this.arrData);
      localStorage.setItem('Allpharmacien', pharmaciens);
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'ajout effectué' });
    }
    catch (err) {
      console.log(err);

    }
  }
  //consult pharmacie
  FctGetPharmacien() {
    var result = localStorage.getItem('Allpharmacien');
    console.log(result);
    return result;
  }

  //PHARMACIES
  //Add pharmacies
  FctAddPharmacy(dataJson: any) {
    this.arrData.push(dataJson);
    this._savePharmacie();
  }
  private _savePharmacie(): void {
    try {
      const pharmacies = JSON.stringify(this.arrData);
      localStorage.setItem('Allpharmacies', pharmacies);
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'ajout effectué' });
    }
    catch (err) {
      console.log(err);

    }
  }
  //consult pharmacie
  FctGetPharmacie() {
    var result = localStorage.getItem('Allpharmacies');
    console.log(result);
    return result;
  }

  //MEDICAMENTS

  //add médicaments
  FctAddMedicaments(dataJson: any) {
    this.arrData.push(dataJson);
    this._saveMedicaments();

  }
  private _saveMedicaments(): void {
    try {
      const medicaments = JSON.stringify(this.arrData);
      localStorage.setItem('AllMedicaments', medicaments);
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Le médicament a été correctement ajouté' });
    }
    catch (err) {
      console.log(err);
      this.messageService.add({ severity: 'warning', summary: 'Service Message', detail: 'Echec, contacter le helpdesk' });

    }
  }
  //consult Médicament
  FctGetMedicament() {
    var result = localStorage.getItem('AllMedicaments');
    console.log(result);
    return result;
  }
//update Médicament
FctUpdateMedicament(dataupdate:any){
  //var result =  localStorage.setItem("AllMedicaments",dataupdate);
    //console.log(localStorage.getItem("AllMedicaments"));
  
    //return result;
   }
}
