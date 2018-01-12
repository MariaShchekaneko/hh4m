import { ResetPasswordPage } from './../reset-password/reset-password';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AuthService } from './../../services/auth';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  public loginForm;

  constructor(private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              public formBuilder: FormBuilder,
              public navCtrl: NavController){}
  
  onSignin(form: NgForm){
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });
    loading.present();
    this.authService.signin(form.value.email, form.value.password)
    .then(data => {
      loading.dismiss();
    })
    .catch(error => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Signin failed!',
        message: error.message,
        buttons: ['OK']
      });
      alert.present();
    });
  }
  resetPwd(){
    this.navCtrl.push(ResetPasswordPage);
  }
}
