import { Component, ChangeDetectorRef } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { Pedometer } from '@ionic-native/pedometer';
 
import { SettingsService } from './../../services/settings.service';
import { StepCounterSettingsPage } from '../step-counter-settings/step-counter-settings';
 
@Component({
  selector: 'page-step-counter-page',
  templateUrl: 'step-counter.html'
})
export class StepCounterPage {
  steps: number = 0;
  goal: number;
  percentage: number;

  constructor(private ref: ChangeDetectorRef, public platform: Platform, public pedometer: Pedometer, public modalCtrl: ModalController, public settings: SettingsService) {
    
    this.pedometer.startPedometerUpdates()
      .subscribe((data) => {
          this.steps = data.numberOfSteps;
          this.setPercentage();
          this.ref.detectChanges();
        });
 
    this.goal = this.settings.getGoal();
    this.setPercentage();
  }
 
  setPercentage() {
    this.percentage = (this.steps / this.goal) * 100;
  }
 
  showOptions() {
    let modal = this.modalCtrl.create(StepCounterSettingsPage);
    modal.onDidDismiss((result) => {
      if (result) {
        this.goal = result;
      }
    })
    modal.present();
  }
 
}