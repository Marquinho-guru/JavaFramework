import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'albums', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'albums',
    loadChildren: () => import('./pages/albums/albums.module').then( m => m.AlbumsPageModule)
  },
  {
    path: 'songs',
    loadChildren: () => import('./pages/songs/songs.module').then( m => m.SongsPageModule)
  },
  {
    path: 'songs/:albumId',
    loadChildren: () => import('./pages/songs/songs.module').then( m => m.SongsPageModule)
  },
  {
    path: 'create-album',
    loadChildren: () => import('./pages/create-album/create-album.module').then( m => m.CreateAlbumPageModule)
  },
  {
    path: 'create-songs',
    loadChildren: () => import('./pages/create-songs/create-songs.module').then( m => m.CreateSongsPageModule)
  },
  {
    path: 'create-songs/:albumId',
    loadChildren: () => import('./pages/create-songs/create-songs.module').then( m => m.CreateSongsPageModule)
  },
  {
    path: 'song-detail',
    loadChildren: () => import('./pages/song-detail/song-detail.module').then( m => m.SongDetailPageModule)
  },
  {
    path: 'song-detail/:songId',
    loadChildren: () => import('./pages/song-detail/song-detail.module').then( m => m.SongDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
