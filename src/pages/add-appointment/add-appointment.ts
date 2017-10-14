import { NgForm } from '@angular/forms';
import { AppointmentsService } from './../../services/appointments.service';
import { Component } from '@angular/core';

@Component({
  selector: 'page-add-appointment',
  templateUrl: 'add-appointment.html',
})
export class AddAppointmentPage {

  constructor(
              private appointmentsService: AppointmentsService) {
  }

  onSubmit(form: NgForm) {
   this.appointmentsService.addAppointment(form.value.date, 
                                           form.value.time, 
                                           form.value.doctor, 
                                           form.value.notes);
  form.resetForm();
  }
}
