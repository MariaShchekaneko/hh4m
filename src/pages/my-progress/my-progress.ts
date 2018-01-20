import { ActionPlannerPage } from './../action-planner/action-planner';
import { MyMealsPage } from './../my-meals/my-meals';
import { MyActivityPage } from './../my-activity/my-activity';
import { StepCounterPage } from './../step-counter/step-counter';
//import { WorkoutsPage } from './../workouts/workouts';
import { MyBloodPressurePage } from './../my-blood-pressure/my-blood-pressure';
import { MyWeightPage } from './../my-weight/my-weight';
import { MyToDosPage } from './../my-to-dos/my-to-dos';
import { MyAppointmentsPage } from'./../my-appointments/my-appointments';
import { Component } from '@angular/core';

@Component({
  selector: 'page-my-progress',
  templateUrl: 'my-progress.html',
})
export class MyProgressPage{
  myAppointmentsPage = MyAppointmentsPage;
  //myToDosPage = MyToDosPage;
  myBloodPressurePage = MyBloodPressurePage;
  myWeightPage = MyWeightPage;
  myActivityPage = StepCounterPage;
  myMealsPage = MyMealsPage;
  myGoalsPage = ActionPlannerPage; 



}
