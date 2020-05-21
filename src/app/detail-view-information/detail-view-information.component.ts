import { Component, OnInit } from '@angular/core';

import { ApiRecipesService } from '../api-service/api-recipes/api-recipes.service';

import { Observable } from 'rxjs';

declare let $:any;

@Component({
  selector: 'app-detail-view-information',
  templateUrl: './detail-view-information.component.html',
  styleUrls: ['./detail-view-information.component.scss']
})
export class DetailViewInformationComponent implements OnInit {

  isLoaded = false;
  hasError = false;
  recipeTitles;
  recipes;

  constructor(private ApiRecipesService: ApiRecipesService) { }

  ngOnInit() {
    this.getRecipes();
    this.getDetailedRecipes();

    $(document).on("click", "#recipeTitle .nav-link", function() {
      let id = $(this).attr("id");
      let content = $("#recipeContent #" + id);

      if (!content.hasClass("show active")) {

        $("#recipeContent .active").removeClass("show active");

        content.addClass("show active");
      } 
    })

  }

  getRecipes() {
    let parent = this;
    parent.ApiRecipesService.getAllRecipes().subscribe(data => {
      console.log(data);
      parent.isLoaded = true;
      parent.recipeTitles = data.map(_data => {

        let recipeId = _data.uuid;
        let recipeTitle = _data.title;

        return {
          recipeId,
          recipeTitle
        }
      })

      console.log(parent.recipeTitles);

    },err => {
      parent.isLoaded = true;
      parent.hasError = true;
    })
  }

  getDetailedRecipes() {
    let parent = this;
    parent.ApiRecipesService.getAllRecipes().subscribe(data => {
      console.log(data);
      parent.isLoaded = true;
      parent.recipes = data;
    },err => {
      parent.isLoaded = true;
      parent.hasError = true;
    })
  }

}
