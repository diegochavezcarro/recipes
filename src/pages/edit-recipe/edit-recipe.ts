import { Ingredient } from './../../models/ingredient';
import { RecipesService } from './../../services/recipes';
import { NavParams, ActionSheetController, 
    AlertController,ToastController, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage {
  mode = 'New';
  selectOptions = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;
  constructor(private navParams: NavParams,
    private actionSheetController: ActionSheetController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private recipesService:RecipesService,
    private navCtrl: NavController) { }
  ngOnInit() {
    this.navParams.get('mode');
    this.initializeForm();
  }
  private initializeForm() {
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('Medium', Validators.required),
      'ingredients': new FormArray([])
    });
  }
  onSubmit() {
    console.log(this.recipeForm);
    const value = this.recipeForm.value;
    let ingredients = [];
    //los ingredients del form son un array de strings, los q necesita
    //el servicio con arrays de strings y numbers
    if(value.ingredients.length > 0){
      ingredients = value.ingredients.map(name=>{
        return {name:name, amount: 1};
      });
    }
    this.recipesService.addRecipe(value.title, value.description, 
        value.difficulty, ingredients);
    this.recipeForm.reset(); //esta de mas
    this.navCtrl.popToRoot();
  }

  private createNewIngredientAlert() {
    return this.alertCtrl.create({
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
            if (data.name.trim() == '' || data.name == null) {
              const toast = this.toastCtrl.create({
                message: 'Please enter a valid value!',
                duration: 2000,
                position: 'bottom'
              });
              toast.present();
              return;
            }
            (<FormArray>this.recipeForm.get('ingredients'))
              .push(new FormControl(data.name, Validators.required));
                const toast = this.toastCtrl.create({
                message: 'Item Added!',
                duration: 2000,
                position: 'bottom'
              });
              toast.present();
          }

        }
      ]
    });
  }

  onManageIngredients() {
    const actionSheet = this.actionSheetController.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Add Ingredient',
          handler: () => {
            this.createNewIngredientAlert().present();
          }
        },
        {
          text: 'Remove all Ingredients',
          role: 'destructive',
          handler: () => {
            const fArray: FormArray = <FormArray>this.recipeForm.get('ingredients');
            const len = fArray.length;
            if(len>0){
              for (let i = len -1; i >=0; i--) {
                fArray.removeAt(i);
                
              }
              const toast = this.toastCtrl.create({
                message: 'All ingredients were deleted!',
                duration: 2000,
                position: 'bottom'
              });
              toast.present();
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
}
