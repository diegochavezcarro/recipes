import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage {
  mode='New';
  selectOptions = ['Easy','Medium','Hard'];
  recipeForm : FormGroup;
  constructor(private navParams:NavParams){}
  ngOnInit(){
    this.navParams.get('mode');
  }
  private initializeForm(){
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('Medium', Validators.required)
    });
  }
}
