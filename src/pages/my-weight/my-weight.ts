import { WeightPage } from './../weight/weight';
import { WeightService } from './../../services/weight.service';
import { Weight } from './../../models/weight';
import { AddWeightPage } from './../add-weight/add-weight';
import { ModalController, NavController, NavParams} from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-my-weight',
  templateUrl: 'my-weight.html',
})

export class MyWeightPage {
  //@ViewChild('barChart') barChart;
  addWeightPage = AddWeightPage;
  weights: Weight[] = [];
  weights_bk: Weight;

  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;

  constructor( public modalCtrl:      ModalController,
               public navCtrl      :  NavController,
               public navParams    :  NavParams,
               private weightService: WeightService)
  {
   this.weights = this.navParams.get('weight');
  this.weights_bk = this.navParams.get('weight');
   }



  ionViewDidLoad() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
      type: 'line',
      data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
              {
                  label: "My First dataset",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [],
                  spanGaps: false,
              }
          ]
      }

  });
}

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