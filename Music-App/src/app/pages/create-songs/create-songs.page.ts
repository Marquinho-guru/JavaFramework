import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-songs',
  templateUrl: './create-songs.page.html',
  styleUrls: ['./create-songs.page.scss'],
})
export class CreateSongsPage implements OnInit {
  private song:any = {
    "albumId": 0,
    "time": "",
    "title": ""
  }
  
  private response:any = {
    "entity": {},
    "responseText": "string",
    "status": "string"    
};
  
  private toast: any;
  constructor(private route:ActivatedRoute,
             private api: SongsService,
             private router: Router,
             private toastController:ToastController) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('albumId');
    this.song.albumId = id;
  }

  createSong(){
    console.log(this.song);
    this.api.createSong(this.song).subscribe
    (res => {
      this.response = res;
       console.log(this.response);

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
