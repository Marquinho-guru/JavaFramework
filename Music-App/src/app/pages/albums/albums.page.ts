import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from 'src/app/services/album-service.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})

export class AlbumsPage implements OnInit {
  
  private albums: any = [];
  private toast: any;
  private response:any = {
    "entity" : {},
    "responseText": "string",
    "status": "string"
  };
  
  constructor(private albumApi: AlbumServiceService,
              private router: Router,
              private toastController: ToastController) { }

  ngOnInit(){}

  ionViewWillEnter() {
    this.albumApi.getAll().subscribe(res=> {
    this.albums = res;
    console.log (this.albums)  
    });
    
  }

openSongsPage(albumId){
  this.router.navigateByUrl('/songs/' + albumId);
}

delete(albumId){
  console.log(albumId);
  this.albumApi.deleteAlbum(albumId).subscribe(
    res => {
      this.response = res;

      if (this.response.status == "SUCCESS"){ 
        this.succesToast(this.response.responseText);
        this.ionViewWillEnter();
      }else {
        this.errorToast(this.response.responseText);
        }   
      }
      );
    }

    update (albumId){
      this.router.navigateByUrl('edit-album/'+albumId);
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
