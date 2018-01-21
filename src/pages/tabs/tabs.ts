import { MyProgressPage } from './../my-progress/my-progress';
import { LearningModulesPage } from './../learning-modules/learning-modules';
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
