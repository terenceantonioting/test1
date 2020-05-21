import { Component, OnInit } from '@angular/core';

import { ApiRecipesService } from '../api-service/api-recipes/api-recipes.service';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-recipe-information',
  templateUrl: './recipe-information.component.html',
  styleUrls: ['./recipe-information.component.scss']
})
export class RecipeInformationComponent implements OnInit {

  isLoaded = false;
  hasError = false;
  recipes;
  
  constructor(private ApiRecipesService: ApiRecipesService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    let parent = this;
    parent.ApiRecipesService.getAllRecipes().subscribe(data => {
      console.log(data);
      this.isLoaded = true;
      parent.recipes = data;
    },err => {
      this.isLoaded = true;
      this.hasError = true;
    })
  }

}
