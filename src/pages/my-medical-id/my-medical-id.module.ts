import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyMedicalIdPage } from './my-medical-id';

@NgModule({
  declarations: [
    MyMedicalIdPage,
  ],
  imports: [
    IonicPageModule.forChild(MyMedicalIdPage),
  ],
})
export class MyMedicalIdPageModule {}
