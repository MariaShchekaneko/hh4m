import { MyActivityPage } from './../pages/my-activity/my-activity';
import { SettingsService } from './../services/settings.service';
import { StepCounterPage } from './../pages/step-counter/step-counter';
import { StepCounterSettingsPage } from './../pages/step-counter-settings/step-counter-settings';
import { WorkoutsPage } from './../pages/workouts/workouts';
import { BloodPressureService } from './../services/bloodPressure.service';
import { AddBloodPressurePage } from './../pages/add-blood-pressure/add-blood-pressure';
import { MyBloodPressurePage } from './../pages/my-blood-pressure/my-blood-pressure';
import { BloodPressurePage } from './../pages/blood-pressure/blood-pressure';
import { WeightService } from './../services/weight.service';
import { AddWeightPage } from './../pages/add-weight/add-weight';
import { MyWeightPage } from './../pages/my-weight/my-weight';
import { WeightPage } from './../pages/weight/weight';
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
import { StreamingMedia } from '@ionic-native/streaming-media';
import { MyApp } from './app.component';
import { LearningModulesService } from './../services/learningModules.service';
import { SetLocationPage } from "../pages/set-location/set-location";
import { AgmCoreModule } from "angular2-google-maps/core";
import { HealthKit } from '@ionic-native/health-kit';
import { Pedometer } from '@ionic-native/pedometer';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'Highcharts';
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
    SetLocationPage,
    WeightPage,
    MyWeightPage,
    AddWeightPage,
    BloodPressurePage,
    MyBloodPressurePage,
    AddBloodPressurePage,
    WorkoutsPage,
    StepCounterSettingsPage,
    StepCounterPage,
    MyActivityPage
  ],
  imports: [
    BrowserModule,
    ChartModule.forRoot(highcharts),
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
    SetLocationPage,
    WeightPage,
    MyWeightPage,
    AddWeightPage,
    BloodPressurePage,
    MyBloodPressurePage,
    AddBloodPressurePage,
    WorkoutsPage,
    StepCounterSettingsPage,
    StepCounterPage,
    MyActivityPage
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
    ToDoService,
    WeightService,
    BloodPressureService,
    HealthKit,
    Pedometer,
    SettingsService,
   // MedicalIdService
    
    
    
  ]
})
export class AppModule {}
