import { MealsService } from './../../services/meals.service';
import { Meal } from './../../models/meal';
import { NavController } from 'ionic-angular';
import { AddMealPage } from './../add-meal/add-meal';
import { Component } from '@angular/core';

@Component({
  selector: 'page-my-meals',
  templateUrl: 'my-meals.html',
})
export class MyMealsPage {
  addMealPage = AddMealPage;
  meals: Meal[] = [];
  constructor(public navCtrl: NavController,
              private mealsService: MealsService){}

  ionViewWillEnter(){
    this.meals = this.mealsService.loadMeals();
  }
}
