import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navs = [
    { url: 'inicio', content: 'Inicio' },
    { url: 'anuncios', content: 'Anuncios' },
    { url: 'nuevo-anuncio', content: 'Crear anuncio' },
    { url: 'buscar', content: 'Buscar anuncios' },
    { url: 'configuracion', content: 'Panel de Usuario' }
  ];
}
