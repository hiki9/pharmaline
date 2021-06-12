import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {MegaMenuModule} from 'primeng/megamenu';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { PharmaciensComponent } from './pharmaciens/pharmaciens.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    PharmacieComponent,
    PharmaciensComponent,
    MedicamentsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
