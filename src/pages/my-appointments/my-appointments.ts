import { AppointmentPage } from './../appointment/appointment';
import { AppointmentsService } from './../../services/appointments.service';
import { ModalController } from 'ionic-angular';
import { Appointment } from './../../models/appointment';
import { AddAppointmentPage } from './../add-appointment/add-appointment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-my-appointments',
  templateUrl: 'my-appointments.html',
})
export class MyAppointmentsPage implements OnInit {
  addAppointmentPage = AddAppointmentPage;
  appointments: Appointment[] = [];
  constructor(public modalCtrl: ModalController,
              private appointmentsService: AppointmentsService){}

  ngOnInit() {
    this.appointmentsService.fetchAppointments()
      .then(
        (appointments: Appointment[]) => this.appointments = appointments
      );
  }
  ionViewWillEnter(){
    this.appointments = this.appointmentsService.loadAppointments();
  }
  onOpenAppointment(appointment: Appointment, index: number) {
    const modal = this.modalCtrl.create(AppointmentPage, {appointment: appointment, index: index});
    modal.present();
    modal.onDidDismiss(
      () => {
        this.appointments = this.appointmentsService.loadAppointments();
      }
    );
  }
}

