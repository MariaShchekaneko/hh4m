import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyMedicalInfoPage } from './my-medical-info';

@NgModule({
  declarations: [
    MyMedicalInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MyMedicalInfoPage),
  ],
})
export class MyMedicalInfoPageModule {}
