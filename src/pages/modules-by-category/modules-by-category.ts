import { NavParams } from 'ionic-angular';
//import { LearningModulesService } from './../../services/learningModules.service';
//import { LearningModulePage } from './../learning-module/learning-module';
import { Module } from './../../data/module.interface';
import { Component, OnInit } from '@angular/core';
//import modules from '../../data/modules';

@Component({
  selector: 'page-modules-by-category',
  templateUrl: 'modules-by-category.html',
})
export class ModulesByCategoryPage implements OnInit{
  
  learningModulesGroup: {category: string, modules: Module[], icon: string}[];
 
  constructor(
    private NavParams: NavParams,
    //private learningModulesService: LearningModulesService
  ){}

  ngOnInit() {
    this.learningModulesGroup = this.NavParams.data;
  }

  /*ionViewWillEnter(){
    this.module = this.learningModulesService.getLearningModules();
  }*/
  onOpenModule(module: Module){
   console.log('ok');
  }
}
