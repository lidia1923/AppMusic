import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

  transform(imagenes: any[]): string {
    
    if(!imagenes){
      return 'assets/img/no-photo.jpg';
    }else if(imagenes.length==0){
      return 'assets/img/no-photo.jpg';
    }else{
      return imagenes[1].url;
    }
  }

}
