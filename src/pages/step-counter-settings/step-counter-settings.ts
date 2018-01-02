import { SettingsService } from './../../services/settings.service';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
 
 
@Component({
  selector: 'page-step-counter-settings',
  templateUrl: 'step-counter-settings.html',
})
export class StepCounterSettingsPage {
  goal: number;
 
  constructor(public viewCtrl: ViewController, public settings: SettingsService) {
    this.goal = this.settings.getGoal();
  }
 
  update() {
    let value = Math.trunc(this.goal);
    this.settings.setGoal(value);
    this.viewCtrl.dismiss(true);
  }
 
  dismiss() {
    this.viewCtrl.dismiss();
  }
}