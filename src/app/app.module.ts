import { AuthService } from './../services/auth';
import { SigninPage } from './../pages/signin/signin';
import { TodayPage } from './../pages/today/today';
import { SignupPage } from './../pages/signup/signup';
import { MyProgressPage } from './../pages/my-progress/my-progress';
import { LearningModulesPage } from './../pages/learning-modules/learning-modules';
import { FoodPlannerPage } from './../pages/food-planner/food-planner';
import { ChatPage } from './../pages/chat/chat';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ChatPage,
    FoodPlannerPage,
    LearningModulesPage,
    MyProgressPage,
    TodayPage,
    SigninPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ChatPage,
    FoodPlannerPage,
    LearningModulesPage,
    MyProgressPage,
    TodayPage,
    SigninPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
