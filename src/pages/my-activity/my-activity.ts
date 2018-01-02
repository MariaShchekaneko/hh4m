import { ActionPlannerPage } from './../action-planner/action-planner';
import { StepCounterPage } from './../step-counter/step-counter';
import { Component } from '@angular/core';

@Component({
  selector: 'page-my-activity',
  templateUrl: 'my-activity.html',
})
export class MyActivityPage{
  stepCounterPage = StepCounterPage;
  actionPlannerPage = ActionPlannerPage;

}
