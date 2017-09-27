import { ChatPage } from './../chat/chat';
import { FoodPlannerPage } from './../food-planner/food-planner';
import { MyProgressPage } from './../my-progress/my-progress';
import { LearningModulesPage } from './../learning-modules/learning-modules';
import { TodayPage } from './../today/today';
import { Component } from '@angular/core';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  todayPage = TodayPage;
  learningModulesPage = LearningModulesPage;
  myProgressPage = MyProgressPage;
  foodPlannerPage = FoodPlannerPage;
  chatPage = ChatPage

}
