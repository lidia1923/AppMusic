import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistaPageRoutingModule } from './artista-routing.module';

import { ArtistaPage } from './artista.page';
import { ImagenesPipe } from '../../pipesPersonalizados/imagenes.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistaPageRoutingModule
  ],
  declarations: [ArtistaPage, ImagenesPipe]
})
export class ArtistaPageModule {}
