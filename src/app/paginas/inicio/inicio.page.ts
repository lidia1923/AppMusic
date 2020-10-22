import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { itemsMenu } from '../../interfaces/menu';
import { ApiService } from '../../servicios/api.service';
import { SpotifyService } from '../../servicios/spotify.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
//atributos
menuprincipal: Observable<itemsMenu[]>;
nuevasCanciones: any[] = [];

constructor(private ruta: Router, private serv: ApiService, private service: SpotifyService) { }
ngOnInit() {
  this.menuprincipal=this.serv.getMenu();
  this.service.getNewReleases().subscribe((data: any) => {
    //console.log(data.albums.items);
    this.nuevasCanciones = data.albums.items;
  });
}
//metodos
navegar(url: string){
  //console.log('Estas accediendo a',url);
  this.ruta.navigate([url]);
}

}
