import { Component, OnInit } from '@angular/core';
import { ApiSpecialsService } from '../api-service/api-specials/api-specials.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent implements OnInit {

  isLoaded = false;
  hasError = false;
  specials;

  constructor(private ApiSpecialsService: ApiSpecialsService) { }

  ngOnInit() {

    this.getSpecials();

  }

  getSpecials() {
    let parent = this;
    parent.ApiSpecialsService.getAllRecipes().subscribe(data => {
      console.log(data);
      this.isLoaded = true;
      parent.specials = data;
    }, err => {
      this.isLoaded = true;
      this.hasError = true;
    })
  }

}
