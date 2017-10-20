import { SetLocationPage } from './../set-location/set-location';
import { Location } from './../../models/location';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AppointmentsService } from './../../services/appointments.service';
import { Component } from '@angular/core';
import { Geolocation } from "ionic-native";

@Component({
  selector: 'page-add-appointment',
  templateUrl: 'add-appointment.html',
})
export class AddAppointmentPage {
  
  location: Location = {
    lat:  40.7624324,
    lng: -73.9759827
  };
  locationIsSet = false;
  constructor(private modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private appointmentsService: AppointmentsService) {
  }

  onSubmit(form: NgForm) {
  
    this.appointmentsService.addAppointment(form.value.date, 
      form.value.time, 
      form.value.doctor, 
      form.value.notes,
     this.location);
    form.resetForm();
    this.location = {
    lat: 40.7624324,
    lng: -73.9759827
    };
  this.locationIsSet = false;
  const toast = this.toastCtrl.create({
    message: 'Appointment was added!',
    duration: 2500
  });
  toast.present();
}
onOpenMap() {
  const modal = this.modalCtrl.create(SetLocationPage,
    {location: this.location, isSet: this.locationIsSet});
  modal.present();
  modal.onDidDismiss(
    data => {
      if (data) {
        this.location = data.location;
        this.locationIsSet = true;
      }
    }
  );
}

  onLocate() {
    const loader = this.loadingCtrl.create({
      content: 'Getting your Location...'
    });
    loader.present();
    Geolocation.getCurrentPosition()
      .then(
        location => {
          loader.dismiss();
          this.location.lat = location.coords.latitude;
          this.location.lng = location.coords.longitude;
          this.locationIsSet = true;
        }
      )
      .catch(
        error => {
          loader.dismiss();
          const toast = this.toastCtrl.create({
            message: 'Could not get location, please pick it manually!',
            duration: 2500,
            position: 'middle'
          });
          toast.present();
        }
      );
  }
}
