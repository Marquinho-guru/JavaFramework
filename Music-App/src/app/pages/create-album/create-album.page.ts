import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from 'src/app/services/album-service.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.page.html',
  styleUrls: ['./create-album.page.scss'],
})
export class CreateAlbumPage implements OnInit {

  private album = {
      "title": "",
      "releaseDate": "2020",
      "price": "",
      "genre": ""
  }

  constructor(private albumApi:AlbumServiceService) { }

  ngOnInit() {
  }
  
  saveAlbum(){
    console.log(this.album);
    this.albumApi.createAlbum(this.album).subscribe(
      res => {console.log(res)});
  }
}
