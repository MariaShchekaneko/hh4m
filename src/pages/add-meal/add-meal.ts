import { MealsService } from './../../services/meals.service';
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
//import { ToastController } from "ionic-angular";
import { Camera } from "ionic-native";


//declare var cordova: any;

@Component({
  selector: 'page-add-meal',
  templateUrl: 'add-meal.html'
})
export class AddMealPage {
  
  
  imageUrl = '';

  constructor(
              private mealsService: MealsService) {
  }

  onSubmit(form: NgForm) {
   this.mealsService.addMeal(form.value.dishName, 
                            form.value.recipe,
                            this.imageUrl);
  form.resetForm();
  this.imageUrl = '';
  }

  onTakePhoto() {
    Camera.getPicture({
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true
    })
      .then(
        imageData => {
          this.imageUrl = imageData;
        }
      )
      .catch(
        err => {
          console.log(err);
        }
      );
  }
  onAddFromGallery(): void {
    let cameraOptions = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.FILE_URI,      
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: Camera.EncodingType.JPEG,      
      correctOrientation: true
    }
  
    Camera.getPicture(cameraOptions)
      .then(imageData => {
        this.imageUrl = imageData;
      }, 
      err => console.log(err));  
  };
}
