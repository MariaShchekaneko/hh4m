import { Photo } from './../../models/photo';
import { AddPhotoPage } from './../add-photo/add-photo';
import { ModalController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-my-photos',
  templateUrl: 'my-photos.html',
})
export class MyPhotosPage 
//implements OnInit 
{
  addPhotoPage = AddPhotoPage;
  photos: Photo[] = [];
  constructor(public modalCtrl: ModalController,
            //  private photosService: PhotosService
            ){}
 /* 
  ngOnInit() {
    this.photosService.fetchPhotos()
      .then(
        (photos: Photo[]) => this.photos = photos
      );
  }
 ionViewWillEnter(){
    this.photos = this.photosService.loadPhotos();
  }
 onOpenPhoto(photo: Photo, index: number) {
    const modal = this.modalCtrl.create(PhotoPage, {photo: photo, index: index});
    modal.present();
    modal.onDidDismiss(
      () => {
        this.photos = this.photosService.loadPhotos();
      }
    );
  }*/
}
