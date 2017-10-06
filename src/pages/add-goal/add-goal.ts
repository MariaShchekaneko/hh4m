import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ActionPlannerService } from './../../services/actionPlanner.service';
import { NgForm } from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-add-goal',
  templateUrl: 'add-goal.html',
})
export class AddGoalPage {

  constructor(
    private actionPlannerService: ActionPlannerService) {
}
  onSubmit(form: NgForm) {
    this.actionPlannerService.addGoal(form.value.goalName, 
                             form.value.barries,
                             form.value.strategies);
   form.resetForm();
  
   }
 
}
