import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditMedicalInfoPage } from './edit-medical-info';

@NgModule({
  declarations: [
    EditMedicalInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditMedicalInfoPage),
  ],
})
export class EditMedicalInfoPageModule {}
