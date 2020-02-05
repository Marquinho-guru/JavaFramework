import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSongsPageRoutingModule } from './create-songs-routing.module';

import { CreateSongsPage } from './create-songs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateSongsPageRoutingModule
  ],
  declarations: [CreateSongsPage]
})
export class CreateSongsPageModule {}
