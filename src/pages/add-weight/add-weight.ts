import { NgForm } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { WeightService } from './../../services/weight.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-add-weight',
  templateUrl: 'add-weight.html',
})
export class AddWeightPage {
  selectOptions = ['kg', 'lbs'];
    constructor(
      private weightService: WeightService,
      private toastCtrl: ToastController) {
  }
    onSubmit(form: NgForm) {
      this.weightService.addWeight(form.value.date, 
                               form.value.weight,
                               form.value.unit);
     form.resetForm();
     const toast = this.toastCtrl.create({
      message: 'Weight was added!',
      duration: 2500,
      position: 'middle'
    });
    toast.present();
    }
  
  }
  