import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// parties modules
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
// partie composantes 
import {MegaMenuModule} from 'primeng/megamenu';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { PharmaciensComponent } from './pharmaciens/pharmaciens.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { CategoriesComponent } from './categories/categories.component';
// partie primeng
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
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
    MegaMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
