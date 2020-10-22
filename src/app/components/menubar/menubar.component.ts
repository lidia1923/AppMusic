import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../servicios/api.service';
import { itemsMenu } from '../../interfaces/menu';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  
  menuprincipal: Observable<itemsMenu[]>;

  constructor(private ruta: Router, private serv: ApiService, private menu: MenuController) { }

  ngOnInit() {
    this.menuprincipal=this.serv.getMenu();
  }

  navegar(url: string){
    //console.log('Estas accediendo a',url);
    this.ruta.navigate([url]);
    this.menu.toggle();
  }
}
