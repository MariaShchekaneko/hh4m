import { MyActivityPage } from './../my-activity/my-activity';
import { MyMealsPage } from './../my-meals/my-meals'
import { MyProgressPage } from './../my-progress/my-progress';
import { LearningModulesPage } from './../learning-modules/learning-modules';
import { TodayPage } from './../today/today';
import { ChatPage} from './../chat/chat';
import { Component } from '@angular/core';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  learningModulesPage = LearningModulesPage;
  myProgressPage = MyProgressPage;
  chatPage = ChatPage;
}
