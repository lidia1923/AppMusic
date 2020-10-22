import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SpotifyService } from '../../servicios/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  artistas: any;
  constructor(private service: SpotifyService, private router: Router) { }

  ngOnInit() {
  }

  buscar(termino: string){
    if(termino!==''){
      this.service.getArtistas(termino).subscribe((data: any) =>{
        this.artistas=data.artists.items;
        //console.log(data.artists.items);
      });
    }
  }
 
  verArtista(item: any){
    this.router.navigate(['/artista',item.id]);
  }
}
