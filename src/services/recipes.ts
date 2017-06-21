import { Ingredient } from './../models/ingredient';
import { Recipe } from './../models/recipe';

export class RecipesService {
    private recipes: Recipe[];

    addRecipe(title: string, description: string,
        difficulty: string, ingredients: Ingredient[]) {
        this.recipes.push(new Recipe(title, description,
            difficulty, ingredients));
    }
    getRecipes() {
        return this.recipes.slice();
    }

    updateRecipes(index: number, title: string, description: string,
        difficulty: string, ingredients: Ingredient[]) {
        //directamente lo reemplazo
        this.recipes[index] = new Recipe(title, description, 
            difficulty, ingredients);
    }
    removeRecipe(index:number){
        this.recipes.splice(index,1);
    }
}