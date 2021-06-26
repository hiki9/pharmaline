import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Arr =[]
  constructor(private http: HttpClient) {
  }

  //add category
  FctAddCategory(dataJson: any) {
    let Arr =[]
    let v = JSON.stringify(dataJson);
    Arr.push(v)
   localStorage.setItem('AllCategories', JSON.stringify(dataJson));

   ///localStorage.myMap  = JSON.stringify(Array.from(map.entries))

   
  }
  //consult category
  FctGetCategory() {
    var result = localStorage.getItem('AllCategories');
    console.log(result);
    return result;
  }
  //add pharmacie

  //consult pharmacie

  //add pharmaciens

  //consult pharmaciens
  // Add medicaments.component

  // liste des Médicaments

  //

}
