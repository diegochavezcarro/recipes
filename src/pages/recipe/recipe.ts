import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { Recipe } from './../../models/recipe';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {
  recipe:Recipe;
  index:number;
  constructor (private navCtrl:NavController, private navParams:NavParams){}
  ngOnInit(){
    this.recipe=this.navParams.get('recipe');
    this.index=this.navParams.get('index');
  }

  onEditRecipe(){
    this.navCtrl.push(EditRecipePage,{mode:'Edit',
        recipe:this.recipe,index:this.index});
  }

  onDeleteRecipe(){

  }
}
