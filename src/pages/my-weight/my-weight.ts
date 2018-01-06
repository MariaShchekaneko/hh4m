import { WeightPage } from './../weight/weight';
import { WeightService } from './../../services/weight.service';
import { Weight } from './../../models/weight';
import { AddWeightPage } from './../add-weight/add-weight';
import { ModalController , IonicPage, NavController, NavParams} from 'ionic-angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-my-weight',
  templateUrl: 'my-weight.html',
})

export class MyWeightPage {
  @ViewChild('barChart') barChart;
  addWeightPage = AddWeightPage;
  weights: Weight[] = [];
 // public pieChartEl                : any;
  public barChartEl                : any;
 // public lineChartEl               : any;
  public chartLabels               : any    = [];
  public chartValues               : any    = [];
  public chartColours              : any    = [];
  public chartHoverColours         : any    = [];
  public chartLoadingEl            : any;


  constructor( public modalCtrl:      ModalController,
               public navCtrl      :  NavController,
               public navParams    :  NavParams,
               private weightService: WeightService)
  { }




  ionViewDidLoad()
  {
     this.defineChartData();
     this.createBarChart();
  }

  defineChartData() : void
   {
      let k : any;

      for(k in this.weights.entries)
      {
         var weight  =  this.weights.entries[k];

         this.chartLabels.push(weight.date);
         this.chartValues.push(weight.weight);
      }
   }


   createBarChart()
{
   this.barChartEl  = new Chart(this.barChart.nativeElement,
   {
      type: 'bar',
      data: {
         labels: this.chartLabels,
         datasets: [{
            label                 : 'Weight',
            data                  : this.weights,
            duration              : 2000,
            easing                : 'easeInQuart',
            backgroundColor       : this.chartColours,
            hoverBackgroundColor  : this.chartHoverColours
         }]
      },
      options : {
         maintainAspectRatio: false,
         legend         : {
            display     : true,
            boxWidth    : 80,
            fontSize    : 15,
            padding     : 0
         },
         scales: {
            yAxes: [{
               ticks: {
                  beginAtZero:true,
                  stepSize: 5,
                  max : 100
               }
            }],
            xAxes: [{
               ticks: {
                  autoSkip: false
               }
            }]
         }
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


/*export class MyWeightPage implements OnInit {
  chartOptions: any;
  addWeightPage = AddWeightPage;
  weights: Weight[] = [];
  
  constructor(public modalCtrl: ModalController,
              private weightService: WeightService){
                this.chartOptions  = {
                  chart: {
                    type: 'bar',
                  },
                  title: {
                    text: 'My Weight'
                  },
                  xAxis: {
                    type: 'datetime'
                  }
                }
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
*/
