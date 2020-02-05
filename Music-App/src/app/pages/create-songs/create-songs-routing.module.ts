import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSongsPage } from './create-songs.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSongsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSongsPageRoutingModule {}
