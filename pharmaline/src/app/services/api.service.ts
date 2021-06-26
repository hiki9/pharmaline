import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Arr = []
  constructor(private http: HttpClient) {
  }

  //add category
  FctAddCategory(dataJson: any) {
    console.log(dataJson);

    localStorage.setItem('AllCategories', JSON.stringify(dataJson));


  }
  //consult category
  FctGetCategory() {
    var result = localStorage.getItem('AllCategories');
    console.log(result);
    return result;
  }
  //Add pharmacies
  FctAddPharmacy(dataJson: any) {
    console.log(dataJson);
 
    localStorage.setItem('AllPharmacies', JSON.stringify(dataJson));

  }

  //Add pharmaciens
  FctAddPharmaciens(dataJson: any) {
    console.log(dataJson);
    localStorage.setItem('AllPharmaciens', JSON.stringify(dataJson));

  }


    //Add Médicaments
    FctAddMedicaments(dataJson: any) {
      console.log(dataJson);
      localStorage.setItem('AllMedicaments', JSON.stringify(dataJson));
  
    }

  //consult pharmacie

  //add pharmaciens

  //consult pharmaciens
  // Add medicaments.component

  // liste des Médicaments

  //

}
