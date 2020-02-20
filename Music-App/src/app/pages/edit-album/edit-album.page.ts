import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumServiceService } from 'src/app/services/album-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.page.html',
  styleUrls: ['./edit-album.page.scss'],
})
export class EditAlbumPage implements OnInit {
  private album:any = 
    {
      "id": 0,
      "genre": "string",
      "price": "string",
      "releaseDate": "string",
      "title": "string"
    }  
private response :any = {
  "status": "",
  "responseText": "",
  "entity":{}
}
private toast:any;

  constructor(private route:ActivatedRoute,
              private api:AlbumServiceService,
              private toastController:ToastController,
              private router:Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    let id = this.route.snapshot.paramMap.get('albumId');
    this.api.getalbumById(id).subscribe(
      res => {
        this.album = res;
        console.log(this.album);
      }
    );
  }

  updateAlbum(){
    this.api.updateAlbum(this.album).subscribe(res => {
      this.response = res;

      if (this.response.status == "SUCCESS"){ 
        this.succesToast(this.response.responseText);
        this.router.navigateByUrl("/");
      }else {
        this.errorToast(this.response.responseText);
        } 

      });
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
  

