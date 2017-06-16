import { ShoppingListService } from './../../services/shopping-list';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  constructor(private slService:ShoppingListService){}
  onAddItem(form: NgForm) { 
    console.log(form);
    this.slService.addItem(
      form.value.ingredientName, form.value.amount
    );
    form.reset();
  }

}
