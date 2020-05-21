import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeInformationComponent } from './recipe-information/recipe-information.component';
import { DetailViewInformationComponent } from './detail-view-information/detail-view-information.component';
import { SpecialsComponent } from './specials/specials.component';

const routes: Routes = [

  { 
    path: '',
    redirectTo: 'specials',
    pathMatch: 'full'
  },
  {
    path: 'specials',
    component: SpecialsComponent
  },
  { 
    path: 'recipe-information',
    component: RecipeInformationComponent
  },
  {
    path: 'detail-view-information',
    component: DetailViewInformationComponent

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
