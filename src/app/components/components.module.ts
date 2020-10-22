import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenubarComponent } from './menubar/menubar.component';



@NgModule({
  declarations: [MenubarComponent],
  exports: [MenubarComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }