import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { PharmaciensComponent } from './pharmaciens/pharmaciens.component';

const routes: Routes = [
  {path:'medicaments', component:MedicamentsComponent },
  {path:'pharmacie', component:PharmacieComponent },
  {path:'pharmaciens', component:PharmaciensComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
