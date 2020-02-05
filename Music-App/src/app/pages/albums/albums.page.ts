import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from 'src/app/services/album-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {
private albums: any = [];
  constructor(private albumApi: AlbumServiceService,
              private router: Router) { }

  ngOnInit() {
    this.albumApi.getAll().subscribe(res=> {
    this.albums = res;
    });
    console.log (this.albums)
    this.albumApi.getalbumById(7).subscribe(res=>{console.log(res)});
  }

openSongsPage(albumId){
  this.router.navigateByUrl('/songs/' + albumId);
}

}
