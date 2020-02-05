import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAlbumPage } from './create-album.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAlbumPageRoutingModule {}
