import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalIdPage } from './medical-id';

@NgModule({
  declarations: [
    MedicalIdPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalIdPage),
  ],
})
export class MedicalIdPageModule {}
