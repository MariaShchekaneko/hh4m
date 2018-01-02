import { MedicalIdPage } from './../medical-id/medical-id';
import { MedicalId } from './../../models/medicalId';
import { MedicalIdService } from './../../services/medicalId.service';
import { Component, OnInit } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-my-medical-id',
  templateUrl: 'my-medical-id.html',
})
export class MyMedicalIdPage  implements OnInit{
  medicalIdPage: MedicalIdPage;
  medicalInfo: MedicalId;
  index: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public medicalInfoService: MedicalIdService) {
  }

  ngOnInit() {
    this.medicalInfo = this.navParams.get('medicalInfo');
    this.index = this.navParams.get('index');
  }
  
  onEditMedicalInfo() {
    this.navCtrl.push(MedicalId, {mode: 'Edit', medicalInfo: this.medicalInfo, index: this.index});
  }
  onDeleteMedicalInfo() {
    this.medicalInfoService.removeMedicalInfo(this.index);
    this.navCtrl.popToRoot();
  }
}
