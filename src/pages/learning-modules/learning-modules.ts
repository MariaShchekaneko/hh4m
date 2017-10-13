import { ModulesByCategoryPage } from './../modules-by-category/modules-by-category';
import { Component, OnInit } from '@angular/core';
import { Module } from '../../data/module.interface';
import modules from '../../data/modules';
import {LearningModulePage} from '../../pages/learning-module/learning-module'
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-learning-modules',
  templateUrl: 'learning-modules.html',
})
export class LearningModulesPage implements OnInit{
  moduleCollection: {category: string, modules: Module[], icon: string}[];
  modulesByCategoryPage = ModulesByCategoryPage;

  constructor(public modalCtrl: ModalController){}

  ngOnInit() {
    this.moduleCollection = modules;
    
  }

  /*onOpenModule(module: Module, index: number) {
    const modal = this.modalCtrl.create(ModulesByCategoryPage, {module: module, index: index});
    modal.present();
    
  }*/
  
}
