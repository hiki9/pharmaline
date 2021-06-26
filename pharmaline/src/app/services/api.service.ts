import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _key: string = 'categories';

  private arrData: object[] = [];
  constructor(private http: HttpClient) {
    // this._initializeCategories()
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
    }
    catch (err) {
      console.log(err);

    }
  }
  //consult category
  FctGetCategory() {
    var result = localStorage.getItem('AllCategories');
    console.log(result);
    return result;
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
      localStorage.setItem('Allpharmaciens', pharmaciens);
    }
    catch (err) {
      console.log(err);

    }
  }

  //PHARMACIES
  //Add pharmaciens
  FctAddPharmacy(dataJson: any) {
    this.arrData.push(dataJson);
    this._savePharmacie();
  }
  private _savePharmacie(): void {
    try {
      const pharmacies = JSON.stringify(this.arrData);
      localStorage.setItem('Allpharmacies', pharmacies);
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

  //Add Médicaments
  FctAddMedicaments(dataJson: any) {
    console.log(dataJson);
    localStorage.setItem('AllMedicaments', JSON.stringify(dataJson));

  }

}
