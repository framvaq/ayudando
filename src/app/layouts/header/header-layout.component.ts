import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private submitService: AuthService) {}
  toggleNav() {
    this.displayNav = !this.displayNav;
    // console.log('toggleNav()');
  }

  logout() {
    this.submitService.logout();
  }
}
