import { AlertController } from 'ionic-angular';
import { AppointmentsService } from './../../services/appointments.service';
import { NavParams, ViewController } from 'ionic-angular';
import { Appointment } from './../../models/appointment';
import { Component } from '@angular/core';

@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {
  
    appointment: Appointment;
    index: number;
  
    constructor(public navParams: NavParams,
    private viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private appointmentsService: AppointmentsService) {
      this.appointment = this.navParams.get('appointment');
      this.index = this.navParams.get('index');
    }
    onLeave() {
      this.viewCtrl.dismiss();
    }
  
    onDelete() {
      const alert = this.alertCtrl.create({
        title: 'Remove Appointment',
        message: 'Are you sure you want to remove this appointment?',
        buttons: [
          {
            text: 'Yes, go ahead',
            handler: () => {
              this.appointmentsService.deleteAppointment(this.index);
              this.onLeave();
              console.log('Ok');
            }
          },
          {
            text: 'No, I changed my mind',
            handler: () => {
              console.log('Canceled');
            }
          }
        ]
      });
      alert.present();
    }
    
  }