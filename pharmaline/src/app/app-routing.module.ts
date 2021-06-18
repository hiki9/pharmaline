import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { PharmaciensComponent } from './pharmaciens/pharmaciens.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddMedicamentsComponent } from './add-medicaments/add-medicaments.component';
import { AddPharmacieComponent } from './add-pharmacie/add-pharmacie.component';
import { AddPharmacienComponent } from './add-pharmacien/add-pharmacien.component';

const routes: Routes = [
  {path:'medicaments', component:MedicamentsComponent },
  {path:'pharmacie', component:PharmacieComponent },
  {path:'pharmaciens', component:PharmaciensComponent },
  {path:'categories', component:CategoriesComponent  },
  {path:'add-Medicaments', component:AddMedicamentsComponent },
  {path:'add-pharmacie', component:AddPharmacieComponent },
  {path:'add-pharmacien', component:AddPharmacienComponent },
  {path:'add-category', component:AddCategoryComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
