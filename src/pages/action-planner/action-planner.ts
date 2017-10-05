import { ActionPlannerService } from './../../services/actionPlanner.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
@Component({
  selector: 'page-action-planner',
  templateUrl: 'action-planner.html',
})
export class ActionPlannerPage {

  constructor (private apService: ActionPlannerService) {}

  onAddActionPlan(form: NgForm){
    this.apService.addItem(form.value.goalName, form.value.barrierName, form.value.strategyName);
    form.reset();
  }
  

}
