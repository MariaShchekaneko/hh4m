import { EditMedicalInfoPage } from './../pages/edit-medical-info/edit-medical-info';
import { MyMedicalInfoPage } from './../pages/my-medical-info/my-medical-info';
import { MyPhotosPage } from './../pages/my-photos/my-photos';
import { AddPhotoPage } from './../pages/add-photo/add-photo';
import { ToDoService } from './../services/toDo.service';
import { ToDoPage } from './../pages/to-do/to-do';
import { AddToDosPage } from './../pages/add-to-dos/add-to-dos';
import { MyToDosPage } from './../pages/my-to-dos/my-to-dos';
import { AppointmentsService } from './../services/appointments.service';
import { AppointmentPage } from './../pages/appointment/appointment';
import { MyAppointmentsPage } from './../pages/my-appointments/my-appointments';
import { AddAppointmentPage } from './../pages/add-appointment/add-appointment';
import { ModulesByCategoryPage } from './../pages/modules-by-category/modules-by-category';
import { LearningModulePage } from './../pages/learning-module/learning-module';
import { AddGoalPage } from './../pages/add-goal/add-goal';
import { GoalPage } from './../pages/goal/goal';
import { IonicStorageModule } from '@ionic/storage';
import { MealsService } from './../services/meals.service';
import { AddMealPage } from './../pages/add-meal/add-meal';
import { MealPage } from './../pages/meal/meal';
import { MyMealsPage } from './../pages/my-meals/my-meals';
import { ActionPlannerService } from './../services/actionPlanner.service';
import { ActionPlannerPage } from './../pages/action-planner/action-planner';
import { AuthService } from './../services/auth';
import { SigninPage } from './../pages/signin/signin';
import { TodayPage } from './../pages/today/today';
import { SignupPage } from './../pages/signup/signup';
import { MyProgressPage } from './../pages/my-progress/my-progress';
import { LearningModulesPage } from './../pages/learning-modules/learning-modules';
import { ChatPage } from './../pages/chat/chat';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { MyApp } from './app.component';
import { LearningModulesService } from './../services/learningModules.service';
import { SetLocationPage } from "../pages/set-location/set-location";
import { AgmCoreModule } from "angular2-google-maps/core";
import { Storage } from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ChatPage,
    LearningModulesPage,
    MyProgressPage,
    TodayPage,
    SigninPage,
    SignupPage,
    ActionPlannerPage,
    MyMealsPage,
    AddMealPage,
    MealPage,
    GoalPage,
    AddGoalPage,
    LearningModulePage,
    ModulesByCategoryPage,
    AddAppointmentPage,
    MyAppointmentsPage,
    AppointmentPage,
    MyToDosPage,
    AddToDosPage,
    ToDoPage,
    AddPhotoPage,
    MyPhotosPage,
    SetLocationPage,
    MyMedicalInfoPage,
    EditMedicalInfoPage,
    MyPhotosPage,
    AddPhotoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCd4djK962g8qh2XnFKPDpUceTEetdKLrQ'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ChatPage,
    LearningModulesPage,
    MyProgressPage,
    TodayPage,
    SigninPage,
    SignupPage,
    ActionPlannerPage,
    MyMealsPage,
    AddMealPage,
    MealPage,
    GoalPage,
    AddGoalPage,
    LearningModulePage,
    ModulesByCategoryPage,
    AddAppointmentPage,
    MyAppointmentsPage,
    AppointmentPage,
    MyToDosPage,
    AddToDosPage,
    ToDoPage,
    AddPhotoPage,
    MyPhotosPage,
    SetLocationPage,
    MyMedicalInfoPage,
    EditMedicalInfoPage,
    MyPhotosPage,
    AddPhotoPage
  ],
  providers: [
    IonicStorageModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ActionPlannerService,
    MealsService,
    StreamingMedia,
    LearningModulesService,
    AppointmentsService,
    ToDoService
    
  ]
})
export class AppModule {}
