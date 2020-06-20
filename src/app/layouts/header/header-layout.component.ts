import { Component } from '@angular/core';
import { SubmitService } from 'src/app/services/submit.service';

@Component({
  selector: 'app-header-layout',
  templateUrl: 'header-layout.component.html',
  styleUrls: ['header-layout.component.scss']
})
export class HeaderLayoutComponent {
  navs = [
    { url: '/inicio', content: 'Inicio' },
    { url: '/nuevo-anuncio', content: 'Crear anuncio' },
    { url: '/buscar', content: 'Buscar anuncios' },
    { url: '/panel-usuario', content: 'Panel de Usuario' },
    { url: '/login', content: 'Cerrar sesión' }
  ];

  displayNav = false;

  constructor(private submitService: SubmitService) {}
  toggleNav() {
    this.displayNav = !this.displayNav;
    //
    console.log('toggleNav()');
    //
  }

  logout() {
    this.submitService.logout();
  }
}
