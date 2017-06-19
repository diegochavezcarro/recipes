import { NavParams, ActionSheetController, AlertController } from 'ionic-angular';
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
  constructor(private navParams:NavParams,
      private actionSheetController: ActionSheetController,
      private alertCtrl: AlertController){}
  ngOnInit(){
    this.navParams.get('mode');
    this.initializeForm();
  }
  private initializeForm(){
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('Medium', Validators.required)
    });
  }
  onSubmit(){
    console.log(this.recipeForm);
  }

  private createNewIngredientAlert(){
        const newIngredientAlert = this.alertCtrl.create({
          title: 'Add Ingredient',
          inputs: [
            {
              name: 'name',
              placeholder: 'Name'
            }
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel'
            },
            {
              text: 'Add',
              handler: data => {
                if(data.name.trim() == '' || data.name==null)
                console.log();
                
              }            
            }
          ]
    });
  }

  onManageIngredients(){
    const actionSheet = this.actionSheetController.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Add Ingredient',
          handler: () => {

          }
        },
        {
          text: 'Remove all Ingredients',
          role: 'destructive',
          handler: () => {

          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
  }
}
