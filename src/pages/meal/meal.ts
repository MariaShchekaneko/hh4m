import { MealsService } from './../../services/meals.service';
import { Meal } from './../../models/meal';
import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-meal',
  templateUrl: 'meal.html',
})
export class MealPage {

  meal: Meal;
  index: number;

  constructor(public navParams: NavParams,
  private viewCtrl: ViewController,
  private mealsService: MealsService) {
    this.meal = this.navParams.get('meal');
    this.index = this.navParams.get('index');
  }
  onLeave() {
    this.viewCtrl.dismiss();
  }

  onDelete() {
    this.mealsService.deleteMeal(this.index);
    this.onLeave();
  }

}
