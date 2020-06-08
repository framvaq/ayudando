import { Component } from '@angular/core';

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
    { url: '/anuncios', content: 'Anuncios' },
    { url: '/login', content: 'Cerrar sesión' }
  ];

  displayNav = false;

  toggleNav() {
    this.displayNav = !this.displayNav;
    //
    console.log('toggleNav()');
    //
  }
}
