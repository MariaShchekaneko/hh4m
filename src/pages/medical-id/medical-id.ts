import { MyMedicalIdPage } from './../my-medical-id/my-medical-id';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  NavParams,
  ToastController, NavController
} from "ionic-angular";
import { MedicalIdService } from "../../services/medicalId.service";
import { MedicalId } from "../../models/medicalId";

@Component({
  selector: 'page-medical-id',
  templateUrl: 'medical-id.html'
})
export class MedicalIdPage implements OnInit {
  mode = 'Edit';
  selectOptions = ['A+', 'A-', 'B+', 'B-','AB+', 'AB-', 'O+', 'O-'];
  medicalInfoForm: FormGroup;
  medicalInfo: MedicalId;
  index: number;
  myMedicalIdPage: MyMedicalIdPage

  constructor(private navParams: NavParams,
              private toastCtrl: ToastController,
              private medicalInfoService: MedicalIdService,
              private navCtrl: NavController) {
  }

  ngOnInit() {
    this.mode = this.navParams.get('mode');
    if (this.mode == 'Edit') {
      this.medicalInfo = this.navParams.get('medicalInfo');
      this.index = this.navParams.get('index');
    }
    this.initializeForm();
  }

  onSubmit() {
    const value = this.medicalInfoForm.value;
    
    if (this.mode == 'Edit') {
    this.medicalInfoService.updateMedicalInfo(this.index, value.medicalConditions, value.bloodType, value.allergies, value.medications);
    } else {
      this.medicalInfoService.addMedicalInfo(value.medicalConditions, value.bloodType, value.allergies, value.medications);
    }
    this.medicalInfoForm.reset();
    this.navCtrl.popToRoot();
  }


  private initializeForm() {
    let medicalConditions = null;
    let bloodType = 'A+';
    let allergies = null;
    let medications = null;

    if (this.mode == 'Edit') {
      medicalConditions = this.medicalInfo.medicalConditions;
      bloodType = this.medicalInfo.bloodType;
      allergies = this.medicalInfo.allergies;
      medications = this.medicalInfo.medications;
    }

    this.medicalInfoForm = new FormGroup({
      'medicalConditions': new FormControl(medicalConditions, Validators.required),
      'bloodType': new FormControl(bloodType, Validators.required),
      'allergies': new FormControl(allergies, Validators.required),
      'medications': new FormControl(medications, Validators.required)
    })
  }
}
