// import { Injectable } from '@angular/core';
// import {
//   Resolve,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
// } from '@angular/router';

// import { Recipe } from './recipe.model';
// import { DataStorageService } from '../shared/data-storage.service';

// @Injectable({ providedIn: 'root' })
// export class RecipesResolverService implements Resolve<Recipe[]> {
//   constructor(private dataStorageService: DataStorageService) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     return this.dataStorageService.fetchRecipes();
//   }
// }

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
