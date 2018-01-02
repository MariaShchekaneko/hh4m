import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StepCounterPage } from './step-counter';

@NgModule({
  declarations: [
    StepCounterPage,
  ],
  imports: [
    IonicPageModule.forChild(StepCounterPage),
  ],
})
export class StepCounterPageModule {}
