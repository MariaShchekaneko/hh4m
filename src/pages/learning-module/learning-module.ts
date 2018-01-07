import { Module } from './../../models/module';
import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media'


@Component({
  selector: 'page-learning-module',
  templateUrl: 'learning-module.html',
})
export class LearningModulePage {

  module: Module; 
  videoUrl: string;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController,
              private steamingMedia: StreamingMedia)
    {
    this.module = this.navParams.get('module');
    //this.videoUrl = this.navParams.get('module.videoUrl');
    }

  onLeave() {
    this.viewCtrl.dismiss();
  }

  onStartVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => {console.log('SUCCESS')},
      errorCallback: () => {console.log('ERROR')},
      orientation: 'landscape'
    };

    this.steamingMedia.playVideo(this.module.videoUrl, options);
  }

}
