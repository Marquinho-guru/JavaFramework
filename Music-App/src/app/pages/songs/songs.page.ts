import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {
  private songs: any = [];
  private albumId;
  constructor(private route:ActivatedRoute, 
              private api:SongsService,
              private router: Router) { }

  ngOnInit() {
    this.albumId = this.route.snapshot.paramMap.get('albumId');
    this.api.getAllByAlbumId(this.albumId).subscribe(res => {
      this.songs = res;
      console.log(this.songs);
    });
  }

  openCreateSongs(){
    this.router.navigateByUrl('create-songs/'+this.albumId);
  }
}
