import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAppointmentsPage } from './my-appointments';

@NgModule({
  declarations: [
    MyAppointmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAppointmentsPage),
  ],
})
export class MyAppointmentsPageModule {}
