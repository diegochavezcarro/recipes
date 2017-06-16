import { Ingredient } from './../models/ingredient';

export class ShoppingListService {
    private ingredients: Ingredient [] = [];
    addItem(name:string,amount:number){
        this.ingredients.push(new Ingredient(name,amount));
    }
    addItems(items: Ingredient[]){
        //es6 spread operator
        this.ingredients.push(...items);
    }

    getItems(){
        //retornar una copia, no una referencia
        return this.ingredients.slice();
    }

    removeItem(index:number){
        this.ingredients.splice(index,1);
    }

}