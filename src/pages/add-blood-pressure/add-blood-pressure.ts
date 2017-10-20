import { BloodPressureService } from './../../services/bloodPressure.service';
import { BloodPressure } from './../../models/bloodPressure';
import { Weight } from './../../models/weight';
import { NgForm } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { WeightService } from './../../services/weight.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-add-blood-pressure',
  templateUrl: 'add-blood-pressure.html',
})
export class AddBloodPressurePage {
    pressure: BloodPressure;
    constructor(
      private bloodPressureService: BloodPressureService,
      private toastCtrl: ToastController) {
  }
    onSubmit(form: NgForm) {
      this.bloodPressureService.addPressure(form.value.date, 
                                   form.value.systolic,
                                   form.value.diastolic);
     form.resetForm();
     const toast = this.toastCtrl.create({
      message: 'Blood Pressure was added!',
      duration: 2500,
      position: 'middle'
    });
    toast.present();
    }
  
  }
  