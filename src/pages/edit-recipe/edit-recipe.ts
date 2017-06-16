import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage {
  mode='New';
  selectOptions = ['Easy','Medium','Hard'];
  constructor(private navParams:NavParams){}
  ngOnInit(){
    this.navParams.get('mode');
  }
}
