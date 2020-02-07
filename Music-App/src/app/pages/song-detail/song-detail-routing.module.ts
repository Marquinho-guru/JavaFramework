import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongDetailPage } from './song-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SongDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongDetailPageRoutingModule {}
