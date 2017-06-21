import { RecipesService } from './../../services/recipes';
import { Recipe } from './../../models/recipe';
import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipes: Recipe[]=[];
  constructor(private navCtrl:NavController,
      private recipesService:RecipesService){}
  ionViewWillEnter(){
    this.recipes = this.recipesService.getRecipes();
  }
  newRecipe(){
    this.navCtrl.push(EditRecipePage, {mode:'New'});
  }
  onLoadRecipe(){

  }
}
