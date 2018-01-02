import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StepCounterSettingsPage } from './step-counter-settings';

@NgModule({
  declarations: [
    StepCounterSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(StepCounterSettingsPage),
  ],
})
export class StepCounterSettingsPageModule {}
