import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';
import { AlbumServiceService } from 'src/app/services/album-service.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.page.html',
  styleUrls: ['./song-detail.page.scss'],
})
export class SongDetailPage implements OnInit {
  private song ={}
  private albumTitle:string ="";
  constructor(private route:ActivatedRoute, private api:SongsService, private AlbumApi:AlbumServiceService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("songId");
    console.log(id);
    this.api.getSongById(id).subscribe(res => {
      this.song = res;

      this.AlbumApi.getalbumById(this.song.albumId).subscribe(res => {
        this.albumTitle = res.title;
      });
    });
  }

}
