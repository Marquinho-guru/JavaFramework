import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  private albumApiUrl: string = "http://ec2-3-91-226-94.compute-1.amazonaws.com:8080/api/v1/album/";
  constructor(private http: HttpClient,
              private toastController:ToastController) { }


  private response: any;
  getAll(){
    return this.http.get(this.albumApiUrl);
  }

 getalbumById(albumId){
  return this.http.get(this.albumApiUrl + "/" + albumId);
 }

 createAlbum(album){
   let header = {
     "headers":{
       "Content-Type": "application/json"
     }
   }
  return this.http.post(this.albumApiUrl, JSON.stringify(album),header);
 }

 updateAlbum(album){
  let header = {
    "headers":{
      "Content-Type": "application/json"
    }
  }
 return this.http.put(this.albumApiUrl, JSON.stringify(album),header);
 }

 deleteAlbum(albumId){
   return this.http.delete(this.albumApiUrl + "/" + albumId);
  };
 
  
}
