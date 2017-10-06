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

import { MyApp } from './app.component';

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
    AddGoalPage
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
    AddGoalPage
  ],
  providers: [
    IonicStorageModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ActionPlannerService,
    MealsService,
    
  ]
})
export class AppModule {}
