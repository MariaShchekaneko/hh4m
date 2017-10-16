import { MyPhotosPage } from './../my-photos/my-photos';
import { MyToDosPage } from './../my-to-dos/my-to-dos';
import { MyAppointmentsPage } from './../my-appointments/my-appointments';
import { Component } from '@angular/core';

@Component({
  selector: 'page-my-progress',
  templateUrl: 'my-progress.html',
})
export class MyProgressPage{
  myAppointmentsPage = MyAppointmentsPage;
  myToDosPage = MyToDosPage;
  myPhotosPage = MyPhotosPage
}
