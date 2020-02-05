import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private songApiUrl:string = "http://localhost:8080/api/v1/songs/";
  constructor(private http:HttpClient) { }

  getAllByAlbumId(albumId){
    return this.http.get(this.songApiUrl + 'album/'+albumId);
  }

  createSong(song){
    let header = {
      "headers":{
        "Content-Type": "application/json"
      }
    }
   return this.http.post(this.songApiUrl, JSON.stringify(song),header);
  }

}
