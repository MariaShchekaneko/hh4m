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
import { LearningModulesService } from './../services/learningModules.service'
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
    AppointmentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    AppointmentPage
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
    AppointmentsService
    
  ]
})
export class AppModule {}
