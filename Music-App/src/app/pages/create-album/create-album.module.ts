import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAlbumPageRoutingModule } from './create-album-routing.module';

import { CreateAlbumPage } from './create-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAlbumPageRoutingModule
  ],
  declarations: [CreateAlbumPage]
})
export class CreateAlbumPageModule {}
