import { Meal } from './../models/meal';

export class MealsService {
    private meals: Meal[] = [];

    addMeal(dishName: string,
            recipe: string, 
            imageUrl: string) {
        const meal = new Meal(dishName, recipe, imageUrl);
        this.meals.push(meal);
    }
    loadMeals(){
        return this.meals.slice();
    }

}