import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-create-songs',
  templateUrl: './create-songs.page.html',
  styleUrls: ['./create-songs.page.scss'],
})
export class CreateSongsPage implements OnInit {
  private song:any = {
    "id": 0,
    "time": "",
    "title": ""
  }

  constructor(private route:ActivatedRoute,
             private api: SongsService,
             private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('albumId');
    this.song.albumId = id;
  }

  createSong(){
    console.log(this.song);
    this.api.createSong(this.song).subscribe(res => {
      console.log (res);
      this.router.navigateByUrl("/");
    })
  }

}
