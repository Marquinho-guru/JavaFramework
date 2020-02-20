import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.page.html',
  styleUrls: ['./edit-song.page.scss'],
})
export class EditSongPage implements OnInit {
  private song:any = {
    "albumId": 0,
    "time": "",
    "title": ""
  }

  private toast:any;
  private response:any ={
    "status":"",
    "responseText":"",
    "entity":{}
  };
  constructor(private router:ActivatedRoute,
              private api:SongsService,
              private toastController:ToastController,
              private route:Router) { }

  ngOnInit() {
  }

ionViewWillEnter(){
  let songId = this.router.snapshot.paramMap.get("songId");
  this.api.getSongById(songId).subscribe(res =>{
    this.song = res;

    console.log(this.song);
  });
  
}

updateSong(){
  this.api.updateSong(this.song).subscribe(res =>{
    this.response =res;

    if (this.response.status == "SUCCESS"){ 
      this.succesToast(this.response.responseText);
      this.route.navigateByUrl("/songs/"+this.song.albumId);
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
