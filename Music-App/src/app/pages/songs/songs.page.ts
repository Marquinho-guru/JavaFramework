import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';
import { Route } from '@angular/compiler/src/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {
  private songs: any = [];
  private albumId;
  private toast: any;
  private response:any={
    "status" : "",
    "responseText" : "",
    "entity": {}
  }
  constructor(private route:ActivatedRoute, 
              private api:SongsService,
              private router: Router,
              private toastController:ToastController) { }

  ngOnInit() {
  }

ionViewWillEnter() {
  this.albumId = this.route.snapshot.paramMap.get('albumId');
  this.api.getAllByAlbumId(this.albumId).subscribe(res => {
    this.songs = res;
    console.log(this.songs);
  });
}

  openCreateSongs(){
    this.router.navigateByUrl('create-songs/'+this.albumId);
  }

  openSongDetailsPage(songId){
    this.router.navigateByUrl('song-detail/'+ songId);
  }

  delete(songId){
    this.api.deleteSong(songId).subscribe(res =>{
      this.response = res;

        if (this.response.status == "SUCCESS"){ 
          this.succesToast(this.response.responseText);
          this.ionViewWillEnter();
        }else {
          this.errorToast(this.response.responseText);
        }   
      });
    }

    updateSong(songId){
      this.router.navigateByUrl("edit-song/"+songId);
    }

    succesToast(msg){
      this.toast = this.toastController.create({
        message: msg,
        duration: 2000,
        color: "success",
      }).then(toastData => {
        toastData.present();
      });
    }
    
     errorToast(msg){
      this.toast = this.toastController.create({
        message: msg,
        duration: 2000,
        color: "danger",
      }).then(toastData => {
        toastData.present();
       });
      }

  }
  

 
  
  


