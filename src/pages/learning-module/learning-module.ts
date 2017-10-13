//import { Module } from './../../models/module';
import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media'


@Component({
  selector: 'page-learning-module',
  templateUrl: 'learning-module.html',
})
export class LearningModulePage {

  id: string;
  description: string;
  videoUrl: string;

  constructor(public navParams: NavParams,
  private viewCtrl: ViewController,
  private steamingMedia: StreamingMedia
) {
    this.id = this.navParams.get('id');
    this.description = this.navParams.get('description');
    this.videoUrl = this.navParams.get('videoUrl');
  }
  onLeave() {
    this.viewCtrl.dismiss();
  }

  onStartVideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => {console.log()},
      errorCallback: () => {console.log()},
      orientation: 'landscape'
    };
    this.steamingMedia.playVideo(this.videoUrl, options);
  }

}
