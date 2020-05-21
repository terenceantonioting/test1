import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecipeInformationComponent } from './recipe-information/recipe-information.component';
import { DetailViewInformationComponent } from './detail-view-information/detail-view-information.component';
import { SpecialsComponent } from './specials/specials.component';

@Injectable({
    providedIn: 'root'
})

@NgModule({
  declarations: [
    AppComponent,
    RecipeInformationComponent,
    DetailViewInformationComponent,
    SpecialsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
