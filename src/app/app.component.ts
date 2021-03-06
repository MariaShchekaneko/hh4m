import { ActionPlannerPage } from './../pages/action-planner/action-planner';
import { AuthService } from './../services/auth';
import { SignupPage } from './../pages/signup/signup';
import { SigninPage } from './../pages/signin/signin';
import { TabsPage } from './../pages/tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  
  //actionplannerPage = ActionPlannerPage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    private menuCtrl: MenuController,
    private authService: AuthService){
      let config = {
        apiKey: "AIzaSyDpZvIWcGSUEegX-0eNETQ4D19_54EG1ew",
        authDomain: "hh4m-c7aaf.firebaseapp.com",
        databaseURL: "https://hh4m-c7aaf.firebaseio.com",
        projectId: "hh4m-c7aaf",
        storageBucket: "hh4m-c7aaf.appspot.com",
        messagingSenderId: "596056966204"
      }
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.isAuthenticated = true;
          this.rootPage = TabsPage;
        } else {
          this.isAuthenticated = false;
          this.rootPage = SigninPage;
        }
      });
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      });
    }
    onLoad(page: any){
      this.nav.setRoot(page);
      this.menuCtrl.close();
    }
    
    onLogout(){
      this.authService.logout();
      this.menuCtrl.close();
      this.nav.setRoot(SigninPage);
    }
 
}

