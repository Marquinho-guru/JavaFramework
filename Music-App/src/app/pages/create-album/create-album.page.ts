import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from 'src/app/services/album-service.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.page.html',
  styleUrls: ['./create-album.page.scss'],
})
export class CreateAlbumPage implements OnInit {
  private toast:any;
  private response:any = {
      "entity": {},
      "responseText": "string",
      "status": "string"    
  };

  private album = {
      "title": "",
      "releaseDate": "2020",
      "price": "",
      "genre": ""
  }

  constructor(private albumApi:AlbumServiceService,
              private router:Router,
              private toastController:ToastController) { }

  ngOnInit() {
  }
  
  saveAlbum(){
    console.log(this.album);
    this.albumApi.createAlbum(this.album).subscribe(
      res => {
        this.response = res;
        console.log(this.response);
        if (this.response.status == "SUCCESS"){ 
          this.succesToast(this.response.responseText);
          this.router.navigateByUrl("/");
        }
        if (this.response.status == "ERROR"){ 
          this.errorToast(this.response.responseText);
        }
      }
    );
  }

  succesToast(msg){
    this.toast = this.toastController.create({
      message: msg,
      duration: 2000,
      color: "success",
    }).then(toastData => {
      toastData.present();
    })
  }

  errorToast(msg){
    this.toast = this.toastController.create({
      message: msg,
      duration: 2000,
      color: "danger",
    }).then(toastData => {
      toastData.present();
    })
  }

}