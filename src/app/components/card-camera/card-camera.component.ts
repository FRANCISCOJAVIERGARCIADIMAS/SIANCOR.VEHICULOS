/**
 * Angular Component
 * @name CardCamera
 * @description Handles component card camera
 * @version 1.0 - Jan 30th, 2020
 * @requires cordova-plugin-camera
 * 
 * API reference: {@link https://ionicframework.com/docs/native/camera cordova-plugin-camera}
 */

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-card-camera',
  templateUrl: './card-camera.component.html',
  styleUrls: ['./card-camera.component.scss'],
})

export class CardCameraComponent implements OnInit {

  @Input() label: string;
  @Input() icon: string;
  @Input() photo: string;
  @Output() photoEmitted: EventEmitter<string> = new EventEmitter<string>();
  
  constructor( private camera: Camera) { }

  ngOnInit() {}

  onClickCamera() {
    const options: CameraOptions = {
      quality: 20,
      targetWidth: 1280,
      targetHeight: 720,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
      // allowEdit: true
    };

    this.camera.getPicture(options).then(
      imageData => this.photoEmitted.emit(imageData),
      error => console.error('ERROR: GetPicture:', error)
    );
  }


}