import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { PharmaciensComponent } from './pharmaciens/pharmaciens.component';

const routes: Routes = [
  {path:'medicaments', component:MedicamentsComponent },
  {path:'pharmacie', component:PharmacieComponent },
  {path:'pharmaciens', component:PharmaciensComponent },
  {path:'addcategory', component:CategoriesComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
