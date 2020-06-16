import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';

import { AnnouncementsService } from '../services/announcements.service';

interface Province {
  value: string;
  viewValue: string;
}

interface Communities {
  name: string;
  provinces: Province[];
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  announcements;
  numberOfAnnouncements;
  announcementsLimitedByNumber;

  filters = this.formBuilder.group({
    type: [null], // TODOchange according to userType (if both, value = null)
    place: [null],
    date: this.formBuilder.group({
      less1week: [false],
      less2weeks: [false],
      less1month: [false],
      more1month: [false],
      notdefined: [false]
    })
  });

  communities: Communities[] = [
    {
      name: 'Andalucía',
      provinces: [
        { value: 'almeria', viewValue: 'Almería' },
        { value: 'cadiz', viewValue: 'Cádiz' },
        { value: 'cordoba', viewValue: 'Córdoba' },
        { value: 'granada', viewValue: 'Granada' },
        { value: 'huelva', viewValue: 'Huelva' },
        { value: 'jaen', viewValue: 'Jaén' },
        { value: 'malaga', viewValue: 'Málaga' },
        { value: 'sevilla', viewValue: 'Sevilla' }
      ]
    },
    {
      name: 'Aragón',
      provinces: [
        { value: 'huesca', viewValue: 'Huesca' },
        { value: 'teruel', viewValue: 'Teruel' },
        { value: 'zaragoza', viewValue: 'Zaragoza' }
      ]
    },
    {
      name: 'Asturias',
      provinces: [{ value: 'asturias', viewValue: 'Asturias' }]
    },
    {
      name: 'Baleares',
      provinces: [
        { value: 'cabrera', viewValue: 'Cabrera' },
        { value: 'formentera', viewValue: 'Formentera' },
        { value: 'ibiza', viewValue: 'Ibiza' },
        { value: 'mallorca', viewValue: 'Mallorca' },
        { value: 'menorca', viewValue: 'Menorca' }
      ]
    },
    {
      name: 'Canarias',
      provinces: [
        { value: 'elHierro', viewValue: 'El Hierro' },
        { value: 'fuerteventura', viewValue: 'Fuerteventura' },
        { value: 'granCanaria', viewValue: 'Gran Canaria' },
        { value: 'islaLobos', viewValue: 'Isla de Lobos' },
        { value: 'laGomera', viewValue: 'La Gomera' },
        { value: 'laGraciosa', viewValue: 'La Graciosa' },
        { value: 'laPalma', viewValue: 'La Palma' },
        { value: 'lanzarote', viewValue: 'Lanzarote' },
        { value: 'tenerife', viewValue: 'Tenerife' }
      ]
    },
    {
      name: 'Cantabria',
      provinces: [{ value: 'cantabria', viewValue: 'cantabria' }]
    },
    {
      name: 'Castilla la Mancha',
      provinces: [
        { value: 'albacete', viewValue: 'Albacete' },
        { value: 'ciudadReal', viewValue: 'Ciudad Real' },
        { value: 'cuenca', viewValue: 'Cuenca' },
        { value: 'guadalajara', viewValue: 'Guadalajara' },
        { value: 'toledo', viewValue: 'Toledo' }
      ]
    },
    {
      name: 'Castilla y León',
      provinces: [
        { value: 'avila', viewValue: 'Ávila' },
        { value: 'burgos', viewValue: 'Burgos' },
        { value: 'leon', viewValue: 'León' },
        { value: 'palencia', viewValue: 'Palencia' },
        { value: 'salamanca', viewValue: 'Salamanca' },
        { value: 'segovia', viewValue: 'Segovia' },
        { value: 'soria', viewValue: 'Soria' },
        { value: 'valladolid', viewValue: 'Valladolid' },
        { value: 'zamora', viewValue: 'Zamora' }
      ]
    },
    {
      name: 'Cataluña',
      provinces: [
        { value: 'barcelona', viewValue: 'Barcelona' },
        { value: 'girona', viewValue: 'Girona' },
        { value: 'lleida', viewValue: 'Lleida' },
        { value: 'tarragona', viewValue: 'Tarragona' }
      ]
    },
    {
      name: 'Ceuta',
      provinces: [{ value: 'ceuta', viewValue: 'Ceuta' }]
    },
    {
      name: 'Comunidad Valenciana',
      provinces: [
        { value: 'alicante', viewValue: 'Alicante' },
        { value: 'castellon', viewValue: 'Castellón' },
        { value: 'valencia', viewValue: 'Valencia' }
      ]
    },
    {
      name: 'Extremadura',
      provinces: [
        { value: 'badajoz', viewValue: 'Badajoz' },
        { value: 'caceres', viewValue: 'Cáceres' }
      ]
    },
    {
      name: 'Galicia',
      provinces: [
        { value: 'coruña', viewValue: 'A Coruña' },
        { value: 'lugo', viewValue: 'Lugo' },
        { value: 'ourense', viewValue: 'Ourense' },
        { value: 'pontevedra', viewValue: 'Pontevedra' }
      ]
    },
    {
      name: 'La Rioja',
      provinces: [{ value: 'rioja', viewValue: 'La Rioja' }]
    },
    {
      name: 'Madrid',
      provinces: [{ value: 'madrid', viewValue: 'Madrid' }]
    },
    {
      name: 'Murcia',
      provinces: [{ value: 'murcia', viewValue: 'Murcia' }]
    },
    {
      name: 'Melilla',
      provinces: [{ value: 'melilla', viewValue: 'Melilla' }]
    },
    {
      name: 'Navarra',
      provinces: [{ value: 'navarra', viewValue: 'Navarra' }]
    },
    {
      name: 'País Vasco',
      provinces: [
        { value: 'alava', viewValue: 'Álava' },
        { value: 'bizkaia', viewValue: 'Bizkaia' },
        { value: 'gipuzkoa', viewValue: 'Gipuzkoa' }
      ]
    }
  ];

  constructor(private formBuilder: FormBuilder, private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    console.log('getannouncements');
    this.getAnnouncements();
    console.log('getNUMBERannouncements');
    // console.log(this.announcementsService.getNumberOfAnnouncements(2));
  }

  getAnnouncements() {
    return this.announcementsService.getAnnouncements().subscribe(result => (this.announcements = result));
  }

  submit() {
    console.log('Valor de filters:', this.filters.value);
    console.log('=============================');
    console.log('Valor de place:', this.filters.value.place);
    console.log('=============================');
    console.log('Valor de type:', this.filters.value.type);
    console.log('=============================');
    console.log('Valor de date:', this.filters.value.date);
    console.log('Valores de less1week:', this.filters.value.date.less1week);
    console.log('Valores de less2weeks:', this.filters.value.date.less2weeks);
    console.log('Valores de less1month:', this.filters.value.date.less1month);
    console.log('Valores de more1month:', this.filters.value.date.more1month);
    console.log('Valores de notdefined:', this.filters.value.date.notdefined);
  }

  getAnnouncementsLimitedByNumber() {
    return this.announcementsService
      .getNumberOfAnnouncements(this.numberOfAnnouncements)
      .subscribe(result => (this.announcementsLimitedByNumber = result));
  }
  /*




  */
}
