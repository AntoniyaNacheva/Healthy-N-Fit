import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put(
        'https://healthy-n-fit-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => console.log(response));
  }
}