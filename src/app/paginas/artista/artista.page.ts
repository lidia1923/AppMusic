import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../servicios/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.page.html',
  styleUrls: ['./artista.page.scss'],
})
export class ArtistaPage implements OnInit {

  artista: any = {};
  topTracks: any[] = [];
  url: string;
  name: string;

  constructor(
    private service: SpotifyService, 
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => {
      this.getArtista(p['id']); 
      this.getTracks(p['id']);
     });
  }

  getArtista(id: string){
    this.service.getArtista(id).subscribe(a => {
      this.artista = a;
      //console.log(this.artista);
    });
  }

  getTracks(id: string){
    this.service.getTopTrack(id).subscribe((t: any) => {
      this.topTracks = t.tracks;
      //console.log(t);
    });
  }

  reproducir(url:string, name: string, estado: string){
    var documento = document.querySelector('#icono');
   
    var etiqueta= document.getElementById('audio');
    var classEtiqueta= etiqueta.className;
    
    if(classEtiqueta=='hideAudio'&& estado=='hide'){
        etiqueta.classList.remove('hideAudio');
        etiqueta.classList.add('showAudio');
        this.url=url;
        this.name=name;
    }else if(classEtiqueta=='showAudio'&& estado=='hide'){
        etiqueta.classList.remove('showAudio');
        etiqueta.classList.add('hideAudio');    
    }
  }
}
