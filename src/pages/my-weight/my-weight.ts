import { WeightPage } from './../weight/weight';
import { WeightService } from './../../services/weight.service';
import { Weight } from './../../models/weight';
import { AddWeightPage } from './../add-weight/add-weight';
import { ModalController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-my-weight',
  templateUrl: 'my-weight.html',
})
export class MyWeightPage implements OnInit {
  addWeightPage = AddWeightPage;
  weights: Weight[] = [];
  constructor(public modalCtrl: ModalController,
              private weightService: WeightService){}

  ngOnInit() {
    this.weightService.fetchWeights()
      .then(
        (weights: Weight[]) => this.weights = weights
      );
  }
  ionViewWillEnter(){
    this.weights = this.weightService.loadWeights();
  }
  onOpenWeight(weight: Weight, index: number) {
    const modal = this.modalCtrl.create(WeightPage, {weight: weight, index: index});
    modal.present();
    modal.onDidDismiss(
      () => {
        this.weights = this.weightService.loadWeights();
      }
    );
  }
}

