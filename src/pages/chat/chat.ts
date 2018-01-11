import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
	ref;
	name;
	newmessage;
	messagesList;
  constructor(public navCtrl: NavController, public alert: AlertController) {
    this.ref = firebase.database().ref('messages');
  }
  ionViewDidLoad(){
    var user = firebase.auth().currentUser;

    //this.name = user.displayName;
  	//reading data from firebase
  	this.ref.on('value',data => {
  		let tmp = [];
  		data.forEach( data => {
  			tmp.push({
  				key: data.key,
  				name: data.val().name,
  				message: data.val().message
  			})
  		});
  		this.messagesList = tmp;
    });
    if (user != null) {
      user.providerData.forEach(function (profile) {
        console.log("  Email: " + profile.email);
      });
    }
  }
  send(){
  	// add new data to firebase
  	this.ref.push({
  	  name: firebase.auth().currentUser.email,
  		message: this.newmessage 
  	});
  }

}