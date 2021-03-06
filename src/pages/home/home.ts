import { imagen } from './../../imagenes.interface';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	base64Image: string;
	listImgs: imagen[] = [];
	constructor(public navCtrl: NavController, public cameraPlugin: Camera) {}
	takePicture() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.cameraPlugin.DestinationType.DATA_URL,
			encodingType: this.cameraPlugin.EncodingType.JPEG,
			mediaType: this.cameraPlugin.MediaType.PICTURE
		};

		this.cameraPlugin.getPicture(options).then(
			(imageData) => {
				// imageData is either a base64 encoded string or a file URI
				// If it's base64:
				this.base64Image = 'data:image/jpeg;base64,' + imageData;
				this.listImgs.push({ name: this.base64Image });
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
