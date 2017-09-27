import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodPlannerPage } from './food-planner';

@NgModule({
  declarations: [
    FoodPlannerPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodPlannerPage),
  ],
})
export class FoodPlannerPageModule {}
