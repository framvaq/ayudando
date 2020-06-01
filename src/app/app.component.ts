import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navs = [
    { url: 'inicio', content: 'Inicio' },
    { url: 'nuevo-anuncio', content: 'Crear anuncio' },
    { url: 'buscar', content: 'Buscar anuncios' },
    { url: 'panel-usuario', content: 'Panel de Usuario' },
    { url: 'anuncios', content: 'Anuncios' }
  ];

  displayNav = false;

  toggleNav() {
    this.displayNav = !this.displayNav;
    //
    console.log('toggleNav()');
    //
  }
}
