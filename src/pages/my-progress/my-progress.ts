import { ActionPlannerPage } from './../action-planner/action-planner';
import { MyMealsPage } from './../my-meals/my-meals';
import { StepCounterPage } from './../step-counter/step-counter';
import { MyBloodPressurePage } from './../my-blood-pressure/my-blood-pressure';
import { MyWeightPage } from './../my-weight/my-weight';
import { MyAppointmentsPage } from'./../my-appointments/my-appointments';
import { Component } from '@angular/core';

@Component({
  selector: 'page-my-progress',
  templateUrl: 'my-progress.html',
})
export class MyProgressPage{
  myAppointmentsPage = MyAppointmentsPage;
  myBloodPressurePage = MyBloodPressurePage;
  myWeightPage = MyWeightPage;
  stepCounterPage = StepCounterPage;
  myMealsPage = MyMealsPage;
  myGoalsPage = ActionPlannerPage; 



}
